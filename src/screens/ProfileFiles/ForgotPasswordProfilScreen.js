import React from 'react';
import {
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	TextInput,
	StyleSheet,
	Image,
	Dimensions,
	Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import * as Font from 'expo-font';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import BackButton from '../Components/BackButton';
import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import { Progress } from 'nachos-ui';
import { ProgressBar, Colors } from 'react-native-paper';
import { DatePicker } from 'native-base';
import { Input, Button, Divider } from 'react-native-elements';
import {
	BottomNavigation,
	BottomNavigationTab,
	IconKitten,
	IconRegistry,
	Layout,
	ApplicationProvider,
	OverflowMenu,
	Select,
	NativeDateService,
	TopNavigation,
	TopNavigationAction
} from '@ui-kitten/components';

import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import toPx from '../../utils/percentageToPx';

import OeilOuvertGris from '../../../assets/svg-js/oeil-ouvert-gris';
import OeilBarreGris from '../../../assets/svg-js/oeil-barre-gris';
import PhotoProfil from '../../../assets/svg-js/photo_profil';

import BottomButton from '../Components/BottomButton';
import Validation from '../Components/ValidationComponentScreen';

import firebase from 'react-native-firebase';
import { StackActions, NavigationActions } from 'react-navigation';

const Device = require('react-native-device-detection');

const styles = StyleSheet.create({
	droidSafeArea: {
		flex: 1,
		backgroundColor: 'white'
	},
	mainContainer: {
		width: wp('100%'),
		marginTop: 'auto',
		marginBottom: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: wp('10%'),
		paddingRight: wp('10%')
	},
	//
	// Picture Picker
	//
	CoverPicturePicker: {
		height: hp('18%'),
		width: '100%',
		backgroundColor: '#EFEFEF',
		overflow: 'hidden'
	},
	ProfilePicturePicker: {
		top: -6,
		width: hp('15%') * 1.609 * 0.50758,
		height: hp('15%') * 1.609 * 0.50758 + 6,

		overflow: 'hidden',
		borderRadius: 100,
		marginLeft: 'auto',
		marginRight: 'auto',
		top: hp('-7.5%')
	},
	//
	// Text
	//
	title: {
		textAlign: 'center',
		color: '#D94B4B',
		fontSize: hp('2.5%'),
		fontWeight: 'bold'
	},
	info: {
		fontSize: hp('1.5%'),
		color: 'black'
	},
	subText: {
		fontSize: hp('2%'),
		color: '#D94B4B',
		fontWeight: '400'
	},
	//
	// Input
	//
	inputText: {
		width: '100%',
		height: hp('10%'),
		color: 'black',

		fontSize: hp('2.2%')
	},
	inputContainer: {
		flexDirection: 'row',
		// borderBottomColor: '#E5E5E5',
		//borderBottomWidth: 1,
		marginBottom: 5,
		color: 'black',
		fontSize: hp('2.2%'),
		paddingBottom: 5
	},
	inputContainerStyle: {
		left: -10,
		paddingTop: hp('1.5%')
	},
	inputTextContainer: {
		left: 5,
		top: Device.isTablet ? hp('-1%') : hp('-1.5%'),
		width: '100%',
		height: hp('5.5%'),
		textAlign: 'right'
	}
});

export default class App extends React.Component {
	constructor() {
		super();
	}

	static navigationOptions = {
		header: null
	};

	state = {
		newPassword1: '',
		newPassword2: '',
		passwordsIsSame: true,
		lengthRequiredFulled: false,
		hide1: true,
		hide2: true,
		hide3: true,
		animation: false,
		profil: null,
		cover: null
	};

	async componentDidMount() {
		try {
			const userUid = firebase.auth().currentUser.uid;
			const profil = await firebase
				.storage()
				.ref(`users/${userUid}/profilPhoto`)
				.getDownloadURL()
				.catch(err => console.log(err) === 1);
			const profilDefault = await firebase
				.storage()
				.ref(`icone-profil-benevole.png`)
				.getDownloadURL()
				.catch(err => console.log(err) === 1);
			const cover = await firebase
				.storage()
				.ref(`users/${userUid}/coverPhoto`)
				.getDownloadURL()
				.catch(err => console.log(err) === 1);
			if (cover) this.setState({ cover });
			if (profil) this.setState({ profil });
			else this.setState({ profil: profilDefault });
		} catch (err) {
			console.log(err);
		}
	}

	inputPasswordHandler = (text, field) => {
		if (field === 'newPassword1' && text.length >= 8) {
			this.setState({ lengthRequiredFulled: true });
		} else if (field === 'newPassword1') {
			this.setState({ lengthRequiredFulled: false });
		}
		if (field === 'newPassword2' && this.state.newPassword1 === text) {
			this.setState({ passwordsIsSame: true });
		} else if (field === 'newPassword2') {
			this.setState({ passwordsIsSame: false });
		}
		if (this.state.newPassword2 === text) {
			this.setState({ passwordsIsSame: true });
		} else if (field !== 'newPassword2') {
			this.setState({ passwordsIsSame: false });
		}
		this.setState({ [field]: text });
	};

	validatePassword = async () => {
		const {
			newPassword1,
			lengthRequiredFulled,
			passwordsIsSame
		} = this.state;
		if (!lengthRequiredFulled || !passwordsIsSame) return;
		const { oobCode: code } = this.props.navigation.getParam('params', {
			oobCode: ''
		});
		try {
			const userUid = firebase.auth().currentUser.uid;
			const userRef = firebase
				.firestore()
				.collection('benevoleUsers')
				.doc(userUid);
			const salt = firebase.auth().currentUser.uid;
			const iterations = 4096;
			const keyInBytes = 32;
			const hash = 'SHA1';
			const passwordKey = await Pbkdf2.hash(
				newPassword1,
				salt,
				iterations,
				keyInBytes,
				hash
			);
			await firebase.auth().confirmPasswordReset(code, newPassword1);
			await userRef.set({ password: passwordKey }, { merge: true });
			this.setState({ animation: true });
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		const { goBack } = this.props.navigation;
		const {
			hide1,
			hide2,
			hide3,
			newPassword1,
			newPassword2,
			profil,
			cover
		} = this.state;

		return (
			<ApplicationProvider mapping={mapping} theme={lightTheme}>
				<Validation
					display={this.state.animation}
					text='Ton mot de passe est mis à jour !'
					next={() => {
						this.setState({ animation: false });
						this.props.navigation.reset(
							[
								NavigationActions.navigate({
									routeName: 'Profile',
									params: { redirected: true }
								})
							],
							0
						);
					}}
					side='profil'
					typo='#D94B4B'
				/>
				<View style={styles.droidSafeArea}>
					<IconRegistry icons={EvaIconsPack} />
					<View
						style={{
							width: '100%',
							position: 'absolute',
							marginHorizontal: 'auto'
						}}
					>
						<View style={styles.CoverPicturePicker} />

						<View style={styles.ProfilePicturePicker} />
						<View
							style={{
								alignItems: 'center',
								top: -(hp('15%') + hp('15%') / 2)
							}}
						>
							<PhotoProfil
								photoStyle={{
									width: hp('15%') * 1.609 * 0.50758,
									height: hp('15%') * 1.609 * 0.50758 + 6
								}}
								style={{
									width: hp('15%') * 1.60975,
									height: hp('15%'),
									position: 'absolute'
								}}
							/>
						</View>
					</View>
					<View
						style={{
							top: hp('15%')
						}}
					>
						<BackButton
							text='Retour'
							color='black'
							goBack={goBack}
						/>
					</View>
					<View style={{ paddingBottom: hp('15%') }} />
					<View style={styles.mainContainer}>
						<Text style={styles.title}>
							Je mets à jour mon mot de passe
						</Text>
						<View style={{ paddingBottom: hp('5%') }} />
						<Text style={styles.info}>NOUVEAU MOT DE PASSE</Text>
						<View style={styles.inputContainer}>
							<Input
								containerStyle={styles.inputContainerStyle}
								inputStyle={{
									marginLeft: 3,
									fontSize: hp('2%')
								}}
								inputContainerStyle={{
									borderBottomColor: '#E5E5E5'
								}}
								placeholder="J'écris le nouveau mot de passe"
								rightIcon={
									<TouchableOpacity
										onPress={() =>
											this.setState({
												hide2: !hide2
											})
										}
									>
										{hide2 ? (
											<OeilBarreGris />
										) : (
											<OeilOuvertGris />
										)}
									</TouchableOpacity>
								}
								secureTextEntry={hide2}
								value={newPassword1}
								onChangeText={text => {
									this.inputPasswordHandler(
										text,
										'newPassword1'
									);
								}}
							/>
						</View>
						<View style={{ paddingBottom: 5 }} />
						<Text style={styles.info}>
							CONFIRMATION DU MOT DE PASSE
						</Text>
						<View style={styles.inputContainer}>
							<Input
								containerStyle={styles.inputContainerStyle}
								inputStyle={{
									marginLeft: 3,
									fontSize: hp('2%')
								}}
								inputContainerStyle={{
									borderBottomColor: '#E5E5E5'
								}}
								placeholder='Je confirme le mot de passe'
								rightIcon={
									<TouchableOpacity
										onPress={() =>
											this.setState({
												hide3: !hide3
											})
										}
									>
										{hide3 ? (
											<OeilBarreGris />
										) : (
											<OeilOuvertGris />
										)}
									</TouchableOpacity>
								}
								secureTextEntry={hide3}
								value={newPassword2}
								onChangeText={text => {
									this.inputPasswordHandler(
										text,
										'newPassword2'
									);
								}}
							/>
						</View>
					</View>
				</View>
				<TouchableOpacity
					style={{
						height: hp('7%'),
						width: wp('100%'),
						backgroundColor: '#D94B4B'
					}}
					onPress={this.validatePassword}
				>
					<Text
						style={{
							marginLeft: 'auto',
							marginRight: 'auto',
							marginTop: 'auto',
							marginBottom: 'auto',
							color: 'white',
							fontSize: hp('2.8%'),
							fontWeight: 'bold'
						}}
					>
						Je valide
					</Text>
				</TouchableOpacity>
				<View
					style={{
						width: wp('100%'),
						backgroundColor: '#D94B4B',

						height: hp('9%')
					}}
				/>
			</ApplicationProvider>
		);
	}
}

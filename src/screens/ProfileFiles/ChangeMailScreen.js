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
import dateToday from '../../utils/dateToday';

import Curseur from '../../../assets/svg-js/curseur';
import PhotoProfil from '../../../assets/svg-js/photo_profil';
import Suivant from '../../../assets/svg-js/suivant';
import ModifierRouge from '../../../assets/svg-js/modifier-rouge';

import Validation from '../Components/ValidationComponentScreen';
import BackButton from '../Components/BackButton';

import firebase from 'react-native-firebase';

const Device = require('react-native-device-detection');

const styles = StyleSheet.create({
	droidSafeArea: {
		flex: 1,
		backgroundColor: 'white'
	},
	mainContainer: {
		top: hp('37%'),
		width: wp('100%'),

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
		width: hp('15%') * 1.609 * 0.50758,
		height: hp('15%') * 1.609 * 0.50758 + 6,
		overflow: 'hidden',
		borderRadius: 100,
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	//
	// Text
	//
	title: {
		textAlign: 'left',
		color: '#D94B4B',
		fontSize: hp('3%'),
		fontWeight: 'bold',
		textAlign: 'center'
	},
	info: {
		fontSize: hp('1.5%'),
		color: 'black'
	},
	subText: {
		fontSize: hp('2%'),
		color: 'black',
		textAlign: 'center',
		fontWeight: '300'
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
	},
	//
	// SUIVANT
	//
	nextContainer: {
		top: hp('-3%'),

		paddingLeft: wp('10%'),
		paddingRight: wp('10%'),
		width: '100%',
		height: '10%',
		flexDirection: 'row-reverse'
	},
	nextText: {
		color: 'black',
		fontSize: Device.isTablet ? 20 : 15
	},
	nextTextContainer: {
		paddingRight: 7
	},
	nextImageContainer: {
		top: Device.isTablet ? 7 : 3
	},
	nextImage: {
		height: 12,
		width: 8
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
		fontLoaded: false,
		animation: false,
		regexEmail: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		mail: '',
		profil: null,
		cover: null
	};

	async componentDidMount() {
		const mail = this.props.navigation.getParam('email', '');
		this.setState({ mail });
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
			if (profil) this.setState({ profil });
			else this.setState({ profil: profilDefault });
			const cover = await firebase
				.storage()
				.ref(`users/${userUid}/coverPhoto`)
				.getDownloadURL()
				.catch(err => console.log(err) === 1);
			if (cover) this.setState({ cover });
			const mail = this.props.navigation.getParam('mail', '');
			this.setState({ mail });
		} catch (err) {
			console.log(err);
		}
	}

	processChange = async () => {
		const { mail } = this.state;
		try {
			await firebase.auth().currentUser.updateEmail(mail);
			const { uid: userUid } = firebase.auth().currentUser;
			await firebase
				.firestore()
				.collection('benevoleUsers')
				.doc(userUid)
				.set({ email: mail }, { merge: true });
			await firebase.auth().currentUser.sendEmailVerification();
			this.setState({ animation: true });
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		const { goBack } = this.props.navigation;
		const { mail, cover, profil, regexEmail } = this.state;

		return (
			<ApplicationProvider mapping={mapping} theme={lightTheme}>
				<Validation
					display={this.state.animation}
					text='Ton adresse est mis à jour !'
					next={() => {
						this.setState({ animation: false });
						this.props.navigation.push('ChangeMailConfirm', {
							mail: mail
						});
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
					<View style={styles.mainContainer}>
						{/* <View
							style={{
								top: -hp('25%'),
								left: -hp('5%')
							}}
						>
							<BackButton
								text="Retour"
								color="black"
								goBack={goBack}
							/>
						</View> */}
						<Text style={styles.title}>
							Je mets à jour mon adresse e-mail
						</Text>
						<View style={{ paddingBottom: hp('5%') }} />
						<Text style={styles.info}>ADRESSE E-MAIL</Text>
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
								placeholder="J'entre une nouvelle adresse e-mail"
								onChangeText={text =>
									this.setState({ mail: text })
								}
								value={mail}
							/>
						</View>
					</View>
				</View>
				{mail != '' && mail.match(regexEmail) ? (
					<TouchableOpacity
						style={styles.nextContainer}
						onPress={this.processChange}
					>
						<View style={styles.nextImageContainer}>
							<Suivant style={styles.nextImage} color='black' />
						</View>
						<View style={styles.nextTextContainer}>
							<Text style={styles.nextText}>Suivant{'  '}</Text>
						</View>
					</TouchableOpacity>
				) : (
					<Text style={styles.nextContainer} />
				)}
			</ApplicationProvider>
		);
	}
}

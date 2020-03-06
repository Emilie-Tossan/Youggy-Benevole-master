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
	Platform,
	Linking
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
	// Icon,
	IconRegistry,
	Layout,
	ApplicationProvider,
	OverflowMenu,
	Select,
	NativeDateService
} from '@ui-kitten/components';

import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import toPx from '../../utils/percentageToPx';
import dateToday from '../../utils/dateToday';

import Curseur from '../../../assets/svg-js/curseur';
import PhotoProfil from '../../../assets/svg-js/photo_profil';
import Suivant from '../../../assets/svg-js/suivant';
import ModifierRouge from '../../../assets/svg-js/modifier-rouge';

import BottomButton from '../Components/BottomButton';

import firebase from 'react-native-firebase';
import { NavigationActions } from 'react-navigation';

const Device = require('react-native-device-detection');

const styles = StyleSheet.create({
	droidSafeArea: {
		flex: 1,
		backgroundColor: 'white'
	},
	mainContainer: {
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
		profil: null,
		cover: null
	};

	appWokeUp = url => {
		const signedIn = firebase.auth().currentUser ? true : false;
		if (!signedIn) return;
		if (url) {
			const regex = /[?&]([^=#]+)=([^&#]*)/g;
			let params = {};
			let match;
			while ((match = regex.exec(url.url))) {
				params[match[1]] = match[2];
			}
			let actionNav = null;
			if (params.mode === 'resetPassword') {
				actionNav = NavigationActions.navigate({
					routeName: 'ForgotPasswordProfil',
					params: { params }
				});
			}
			if (actionNav) this.props.navigation.dispatch(actionNav);
		}
	};

	componentWillUnmount() {
		Linking.removeEventListener('url', this.appWokeUp);
	}

	async componentDidMount() {
		if (!this.props.navigation.getParam('redirected', false))
			Linking.addEventListener('url', this.appWokeUp);
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
			//console.log(cover, profil);
			const email = firebase.auth().currentUser.email;
			if (this.props.navigation.getParam('backWithLink', false))
				this.props.navigation.push('ForgotPasswordProfil', {
					params: this.props.navigation.getParam('params', {})
				});
			else await firebase.auth().sendPasswordResetEmail(email);
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		const { goBack } = this.props.navigation;
		const { cover, profil } = this.state;

		return (
			<ApplicationProvider mapping={mapping} theme={lightTheme}>
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
							top: hp('15%'),
							paddingBottom: hp('37%')
						}}
					>
						<BackButton
							text='Retour'
							color='black'
							goBack={goBack}
						/>
					</View>

					<View style={styles.mainContainer}>
						<Text style={styles.title}>
							Je confirme mon adresse e-mail
						</Text>
						<View style={{ paddingBottom: hp('5%') }} />
						<Text style={styles.subText}>
							Un e-mail a été envoyé a{' '}
							<Text
								style={{ color: '#D94B4B', fontWeight: 'bold' }}
							>
								{this.props.navigation.getParam(
									'email',
									'votre adresse e-mail'
								)}
							</Text>
							. Pour mettre à jour ton mot de passe, ouvre le et
							clique sur le lien qui apparaît.
						</Text>
					</View>
					<View />
				</View>
				<TouchableOpacity
					style={{
						height: hp('7%'),
						width: wp('100%'),
						backgroundColor: '#D94B4B'
					}}
					onPress={() => {
						const url =
							Platform.OS === 'ios'
								? 'mail://'
								: 'https://mail.google.com/mail/u/0/#inbox';
						Linking.canOpenURL(url)
							.then(supported => {
								if (!supported) {
									console.log("Can't handle url: " + url);
								} else {
									return Linking.openURL(url);
								}
							})
							.catch(err =>
								console.log('An error occurred', err)
							);
					}}
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
						Je vais voir mes emails
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

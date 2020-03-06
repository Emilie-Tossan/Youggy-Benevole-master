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
	ScrollView,
	Linking
} from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import * as Font from 'expo-font';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import { Input, Button, Divider } from 'react-native-elements';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import toPx from '../../utils/percentageToPx';

import PhotoProfil from '../../../assets/svg-js/photo_profil';
import Cadenas from '../../../assets/svg-js/cadenas';
import Deconnection from '../../../assets/svg-js/deconnection';
import MotsCles from '../../../assets/svg-js/mots-cles';
import ModifierInformations from '../../../assets/svg-js/modifier-informations';
import Presentation from '../../../assets/svg-js/presentation';
import Badges from '../../../assets/badges';

import ProfilHeader from '../Components/ProfilHeader';

import firebase from 'react-native-firebase';
import {
	NavigationActions,
	SwitchActions,
	StackActions
} from 'react-navigation';

const Device = require('react-native-device-detection');

const styles = StyleSheet.create({
	droidSafeArea: {
		backgroundColor: 'white',
		width: '100%',
		height: '100%'
	},
	mainContainer: {
		width: wp('100%'),
		marginLeft: 'auto',
		marginRight: 'auto',

		paddingLeft: wp('10%'),
		paddingRight: wp('10%')
	},
	//
	// Picture
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
	name: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: hp('3%')
	},
	info: {
		textAlign: 'center',

		fontSize: hp('2.2%')
	},
	//
	// Profile
	//
	badges: {
		marginLeft: 'auto',
		marginRight: 'auto',
		height: hp('9%'),
		width: hp('9%'),
		borderColor: 'black',
		borderWidth: 1
	},
	param: {
		position: 'absolute',
		left: wp('90%'),
		top: hp('20%'),
		height: hp('5%'),
		width: hp('5%')
		// zIndex: 10
	},
	//
	// Menu
	//
	menuTile: {
		height: hp('6%'),
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 'auto',
		marginBottom: 'auto',
		width: '100%',
		flexDirection: 'row',
		backgroundColor: 'white'
	},
	menuIconContainer: {
		paddingLeft: hp('2.8%'),
		paddingRight: hp('2.3%'),
		marginTop: 'auto',
		marginBottom: 'auto'
	},
	textMenuTile: {
		textAlign: 'center',
		marginTop: 'auto',
		marginBottom: 'auto',
		fontSize: hp('2%')
	},
	//
	// Bottom container
	//
	bottomContainer: {
		height: hp('10%'),
		top: hp('-43%')
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
		cover: null,
		profil: null,
		menu: false,
		biographie: '',
		age: null,
		lastName: '',
		firstName: '',
		degreeName: '',
		hoursDone: 0,
		competenceAndInterest: []
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
			switch (params.mode) {
				case 'resetPassword':
					actionNav = NavigationActions.navigate({
						routeName: 'ForgotPasswordConfirmProfil',
						params: { backWithLink: true, params }
					});
					break;
				case 'verifyEmail':
					actionNav = NavigationActions.navigate({
						routeName: 'ChangeMailConfirm',
						params: { backWithLink: true, params }
					});
					break;
				default:
					break;
			}
			if (actionNav) this.props.navigation.dispatch(actionNav);
		}
	};

	componentWillUnmount() {
		Linking.removeEventListener('url', this.appWokeUp);
	}

	async componentDidMount() {
		if (!this.props.navigation.getParam('redirected', false)) {
			Linking.getInitialURL()
				.then(url => {
					if (url) {
						this.appWokeUp({ url });
					}
				})
				.catch(e => {
					console.log(e);
				});
			Linking.addEventListener('url', this.appWokeUp);
		}
		await Font.loadAsync({
			'SF-pro': require('../../../assets/fonts/SF-Pro-Text-Regular.otf'),
			'Montserrat-light': require('../../../assets/fonts/Montserrat-Light.ttf')
		});
		this.setState({ fontLoaded: true });
		try {
			const userUid = firebase.auth().currentUser.uid;
			const emailVerified = firebase.auth().currentUser.emailVerified;
			const cover = await firebase
				.storage()
				.ref(`users/${userUid}/coverPhoto`)
				.getDownloadURL()
				.catch(err => console.log(err) === 1);
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
			const refresh = this.props.navigation.getParam('refresh', false);
			const coverRef = this.props.navigation.getParam('cover', null);
			const profilRef = this.props.navigation.getParam('profil', null);
			if (cover)
				this.setState({
					cover: refresh && coverRef ? coverRef : cover
				});
			if (profil)
				this.setState({
					profil: refresh && profilRef ? profilRef : profil
				});
			else
				this.setState({
					profil: refresh && profilRef ? profilRef : profilDefault
				});
			const snapshotDb = await firebase
				.firestore()
				.collection('benevoleUsers')
				.doc(userUid)
				.get();
			const snapshotAll = await firebase
				.firestore()
				.collection('hoursRegistry')
				.get();
			if (emailVerified && !snapshotDb.data().verifiedEmail)
				await userRef.set(
					{ verifiedEmail: emailVerified },
					{ merge: true }
				);
			if (!emailVerified && snapshotDb.data().verifiedEmail)
				await userRef.set(
					{ verifiedEmail: emailVerified },
					{ merge: true }
				);
			let hoursDone = 0;
			snapshotAll.forEach(assoDeclared => {
				const snapshotUser = assoDeclared.data();
				//console.log(snapshotUser);
				const { [`${userUid}`]: userHours } = snapshotUser;
				//console.log(userHours);
				if (userHours) hoursDone += userHours;
			});
			//console.log(hoursDone);
			const dateBirth = new Date(snapshotDb.data().birthDate);
			const today = new Date();
			this.setState({
				hoursDone,
				biographie: snapshotDb.data().biographie,
				age: today.getFullYear() - dateBirth.getFullYear(),
				lastName: snapshotDb.data().lastName,
				firstName: snapshotDb.data().firstName,
				degreeName: snapshotDb.data().degreeName,
				competenceAndInterest: snapshotDb.data().competenceAndInterest
					? snapshotDb.data().competenceAndInterest
					: []
			});
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		// const { goBack } = this.props.navigation;
		const {
			cover,
			profil,
			menu,
			biographie,
			age,
			lastName,
			firstName,
			degreeName,
			hoursDone
		} = this.state;

		const Menu = () => {
			return (
				<View style={{ position: 'absolute', width: '100%' }}>
					<Divider />
					<TouchableOpacity
						style={styles.menuTile}
						onPress={() => {
							this.setState({ menu: !menu });
							this.props.navigation.navigate('ProfileFill2');
						}}
					>
						<View style={styles.menuIconContainer}>
							<Presentation color='#EDA3A3' />
						</View>
						<Text style={styles.textMenuTile}>
							Mes Informations Personnelles
						</Text>
					</TouchableOpacity>
					<Divider />
					<TouchableOpacity
						style={styles.menuTile}
						onPress={() => {
							this.setState({ menu: !menu });
							this.props.navigation.push('Skills2');
						}}
					>
						<View style={styles.menuIconContainer}>
							<MotsCles color='#D94B4B' />
						</View>
						<Text style={styles.textMenuTile}>
							Mes compétences/Centres d'Intêret
						</Text>
					</TouchableOpacity>
					<Divider />
					<TouchableOpacity
						style={styles.menuTile}
						onPress={() => {
							this.setState({ menu: !menu });
							this.props.navigation.push('ChangePasswordProfil');
						}}
					>
						<View style={styles.menuIconContainer}>
							<Cadenas color='#EDA3A3' />
						</View>
						<Text style={styles.textMenuTile}>
							Changer Le Mot De Passe
						</Text>
					</TouchableOpacity>
					<Divider />
					<TouchableOpacity
						style={styles.menuTile}
						onPress={async () => {
							try {
								await firebase.auth().signOut();
								this.setState({ menu: !menu });
								this.props.navigation.dispatch(
									SwitchActions.jumpTo({
										routeName: 'loggedOut'
									})
								);
							} catch (err) {
								console.log(err);
							}
						}}
					>
						<View style={styles.menuIconContainer}>
							<Deconnection />
						</View>
						<Text style={styles.textMenuTile}>Déconnexion</Text>
					</TouchableOpacity>
				</View>
			);
		};

		return (
			<View>
				<View style={styles.droidSafeArea}>
					<ProfilHeader profil={profil} cover={cover} />

					<View style={{ paddingBottom: hp('27%') }} />
					<View style={styles.mainContainer}>
						<Text style={styles.name}>
							{firstName} {lastName}
						</Text>
						<Text style={styles.info}>
							{age} ans - {degreeName}
						</Text>
						<Badges
							hours={hoursDone}
							height={150}
							width={150}
							style={{
								marginLeft: 'auto',
								marginRight: 'auto',
								left: -hp('0.5%'),
								marginTop: -20,
								marginBottom: -20
							}}
						/>
						<Divider />
						<View style={{ paddingBottom: hp('2%') }} />
						<Text>{biographie}</Text>
						<View style={{ paddingBottom: hp('2%') }} />
						<Divider />
						<View style={{ paddingBottom: hp('3%') }} />
					</View>

					<View style={{ paddingBottom: hp('45%') }} />
				</View>
				<TouchableOpacity
					style={styles.param}
					onPress={() => this.setState({ menu: !menu })}
				>
					<ModifierInformations />
				</TouchableOpacity>
				<View style={styles.bottomContainer}>
					{menu ? <Menu /> : <View />}
				</View>
			</View>
		);
	}
}

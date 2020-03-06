import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Linking } from 'react-native';

// Test

import CalendarTestScreen from './src/screens/CalendarTestScreen';
import GeolocalisationTestScreen from './src/screens/GeolocalisationTestScreen';
import ImagePickerTestScreen from './src/screens/ImagePickerTestScreen';
import BottomNavigatorTestScreen from './src/screens/BottomNavigatorTestScreen';

// MainStack

import HomeScreen from './src/screens/HomeScreen';
//import FlyingAnimation from './src/screens/FlyingAnimation';
import LandingScreen from './src/screens/LandingScreen';
import SwipeScreen from './src/screens/SwipeScreen';
import BottomNavScreen from './src/screens/MainStack/BottomNavScreen';
import InscriptionScreen from './src/screens/InscriptionScreen';

// Écrans de profile bénévole

import ProfileScreen from './src/screens/ProfileFiles/ProfileScreen';
import ProfileFillScreen from './src/screens/ProfileFiles/ProfileFillScreen';
import SkillsScreen from './src/screens/ProfileFiles/SkillsScreen';
import IdChoiceV2Screen from './src/screens/ProfileFiles/IdChoiceV2Screen';
import ChangeMailScreen from './src/screens/ProfileFiles/ChangeMailScreen';
import ChangeMailConfirmScreen from './src/screens/ProfileFiles/ChangeMailConfirmScreen';
import ChangePasswordProfilScreen from './src/screens/ProfileFiles/ChangePasswordProfilScreen';
import ForgotPasswordConfirmProfilScreen from './src/screens/ProfileFiles/ForgotPasswordConfirmProfilScreen';
import ForgotPasswordProfilScreen from './src/screens/ProfileFiles/ForgotPasswordProfilScreen';
import TakeDiplomeScreen from './src/screens/ProfileFiles/TakeDiplomeScreen';
import CheckDiplomeScreen from './src/screens/ProfileFiles/CheckDiplomeScreen';

// Écrans de missions bénévole

import AdressOrGeolocScreen from './src/screens/MissionsFiles/AdressOrGeolocScreen';
import GeolocAnimationScreen from './src/screens/MissionsFiles/GeolocAnimationScreen';
import MissionDescScreen from './src/screens/MissionsFiles/MissionDescScreen';
import MissionParticipationScreen from './src/screens/MissionsFiles/MissionParticipationScreen';
import MissionsListScreen from './src/screens/MissionsFiles/MissionsListScreen';
import MyMissionsScreen from './src/screens/MissionsFiles/MyMissionsScreen';

// Écrans de Inscription pour bénévole

import IdChoiceScreen from './src/screens/InscriptionFiles/IdChoiceScreen';
import TakePhotoScreen from './src/screens/InscriptionFiles/TakePhotoScreen';
import CheckPhotoScreen from './src/screens/InscriptionFiles/CheckPhotoScreen';
import HowContactScreen from './src/screens/InscriptionFiles/HowContactScreen';
import ContactConfirmScreen from './src/screens/InscriptionFiles/ContactConfirmScreen';
import PasswordCreationScreen from './src/screens/InscriptionFiles/PasswordCreationScreen';

// Écrans de connexion pour bénévole

import ConnexionScreen from './src/screens/ConnexionScreen';
import ForgotPasswordScreen from './src/screens/ConnexionFiles/ForgotPasswordScreen';
import NeedHelpScreen from './src/screens/ConnexionFiles/NeedHelpScreen';
import ChangePasswordScreen from './src/screens/ConnexionFiles/ChangePasswordScreen';
import ChangeVerificationScreen from './src/screens/ConnexionFiles/ChangeVerificationScreen';
import DoubleAuthScreen from './src/screens/ConnexionFiles/DoubleAuthScreen';

// Écrans messages bénévoles

import MessagesScreen from './src/screens/MessageFiles/MessagesScreen';
import InBoxScreen from './src/screens/MessageFiles/InBoxScreen';

import firebase from 'react-native-firebase';

// const navigator = () => {
//     return createStackNavigator(
//         {
//             CalendarTest: CalendarTestScreen,
//             GeolocalisationTest: GeolocalisationTestScreen,
//             ImagePickerTest: ImagePickerTestScreen,
//             BottomNavigatorTest: BottomNavigatorTestScreen,

//             Home: HomeScreen,
//             Fly: FlyingAnimation,
//             Swipe: SwipeScreen,
//             BottomNav: BottomNavScreen,

//             Profile: ProfileScreen,
//             ProfileFill: ProfileFillScreen,
//             Skills: SkillsScreen,
//             IdChoiceV2: IdChoiceV2Screen,
//             ChangeMail: ChangeMailScreen,
//             ChangeMailConfirm: ChangeMailConfirmScreen,
//             ChangePasswordProfil: ChangePasswordProfilScreen,
//             ForgotPasswordConfirmProfil: ForgotPasswordConfirmProfilScreen,
//             ForgotPasswordProfil: ForgotPasswordProfilScreen,
//             TakeDiplome: TakeDiplomeScreen,
//             CheckDiplome: CheckDiplomeScreen,

//             AdressOrGeoloc: AdressOrGeolocScreen,
//             GeolocAnimation: GeolocAnimationScreen,
//             MissionDesc: MissionDescScreen,
//             MissionParticipation: MissionParticipationScreen,
//             MissionsList: MissionsListScreen,
//             MyMissions: MyMissionsScreen,

//             Messages: MessagesScreen,
//             InBox: InBoxScreen,

//             Inscription: InscriptionScreen,
//             IdChoice: IdChoiceScreen,
//             TakePhoto: TakePhotoScreen,
//             CheckPhoto: CheckPhotoScreen,
//             HowContact: HowContactScreen,
//             PasswordCreation: PasswordCreationScreen,
//             ContactConfirm: ContactConfirmScreen,

//             Connexion: ConnexionScreen,
//             ForgotPassword: ForgotPasswordScreen,
//             NeedHelp: NeedHelpScreen,
//             ChangePassword: ChangePasswordScreen,
//             ChangeVerification: ChangeVerificationScreen,
//             DoubleAuth: DoubleAuthScreen
//         },
//         {
//             initialRouteName: "Home",
//             defaultNavigationOptions: {
//                 title: "Youggy"
//             }
//         }
//     );
// };

// export default createAppContainer(navigator());

import Geocoder from 'react-native-geocoding';

// Initialize the module (needs to be done only once)
// Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx"); // use a valid API key
// With more options
Geocoder.init('AIzaSyBkmNZiy-YR08DNMzBcpew5y4-bq4cJqZ8', { language: 'fr' }); // set the language

const SwitchStack = (signedIn = false, profilCompleted = false) => {
	return createSwitchNavigator(
		{
			loggedIn: createStackNavigator(
				{
					//
					// Main
					//

					BottomNav: BottomNavScreen,

					//
					// Profile
					//

					ProfileFill: ProfileFillScreen,
					Skills: SkillsScreen
				},
				{
					initialRouteName: profilCompleted
						? 'BottomNav'
						: 'ProfileFill',
					headerMode: 'none',
					header: null
				}
			),
			loggedOut: createStackNavigator(
				{
					//
					// Main
					//

					Swipe: SwipeScreen,

					//
					// Inscription
					//

					Inscription: InscriptionScreen,
					HowContact: HowContactScreen,
					ContactConfirm: ContactConfirmScreen,
					PasswordCreation: PasswordCreationScreen,

					//
					// Connexion
					//
					Connexion: ConnexionScreen,
					ForgotPassword: ForgotPasswordScreen,
					NeedHelp: NeedHelpScreen,
					ChangePassword: ChangePasswordScreen,
					ChangeVerification: ChangeVerificationScreen,
					DoubleAuth: DoubleAuthScreen
				},
				{
					initialRouteName: 'Swipe',
					headerMode: 'none',
					header: null
				}
			)
		},
		{
			initialRouteName: signedIn ? 'loggedIn' : 'loggedOut'
		}
	);
};

//const App = createAppContainer(SwitchStack());

const App = props => {
	const [signedIn, setSignedIn] = useState(false);
	const [profilCompleted, setProfilCompleted] = useState(false);
	const [unsubscribe, setUnsubscribe] = useState(null);

	const channel = new firebase.notifications.Android.Channel(
		'youggy-channel',
		'youggy Channel',
		firebase.notifications.Android.Importance.Max
	).setDescription('Youggy app channel');
	firebase
		.notifications()
		.android.createChannel(channel)
		.catch(e => console.log(e));

	useEffect(() => {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				const userUid = user.uid;
				if (userUid) {
					const userRef = firebase
						.firestore()
						.collection('benevoleUsers')
						.doc(userUid);
					userRef
						.get()
						.then(snap => {
							setSignedIn(
								snap.data().signUpEnded && snap.data().lastName
							);
							setProfilCompleted(snap.data().profilIsCompleted);
						})
						.catch(err => {
							//console.log(err);
							setSignedIn(err === false);
							setProfilCompleted(err === false);
						});
					setUnsubscribe(
						userRef.onSnapshot(snapshot => {
							if (
								snapshot.data() &&
								snapshot.data().signUpEnded &&
								!signedIn
							)
								setSignedIn(true);
							if (
								snapshot.data() &&
								snapshot.data().profilIsCompleted &&
								!profilCompleted
							)
								setProfilCompleted(true);
						})
					);
				}
				return;
			}
			setUnsubscribe(null);
			if (signedIn) setSignedIn(false);
			if (profilCompleted) setProfilCompleted(false);
		});
		return () => {
			if (unsubscribe) unsubscribe();
		};
	}, [signedIn, profilCompleted]);

	const AppLayout = createAppContainer(
		SwitchStack(signedIn, profilCompleted)
	);

	return <AppLayout />;
};

export default App;

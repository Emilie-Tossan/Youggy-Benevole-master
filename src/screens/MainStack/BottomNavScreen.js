import {
	BottomNavigation,
	BottomNavigationTab,
	Icon,
	IconRegistry,
	Layout,
	ApplicationProvider,
	Tab,
	TabView
} from '@ui-kitten/components';
import { Input, Divider } from 'react-native-elements';

import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import React, { Component, Fragment } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	TextInput,
	StyleSheet
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationActions } from 'react-navigation';
import CodeInput from 'react-native-confirmation-code-input';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import ProfileActive from '../../../assets/svg-js/ProfileActive';
import ProfileDesactive from '../../../assets/svg-js/ProfileDesactive';
import MissionActive from '../../../assets/svg-js/MissionActive';
import MissionDesactive from '../../../assets/svg-js/MissionDesactive';
import MessageActive from '../../../assets/svg-js/MessageActive';
import MessageDesactive from '../../../assets/svg-js/MessageDesactive';
import Notification from '../../../assets/svg-js/Notification';

// Écrans de profile bénévole

import ProfileScreen from '../ProfileFiles/ProfileScreen';
import ProfileFillScreen from '../ProfileFiles/ProfileFillScreen';
import SkillsScreen from '../ProfileFiles/SkillsScreen';
import ProfileFill2Screen from '../ProfileFiles/ProfileFill2Screen';
import Skills2Screen from '../ProfileFiles/Skills2Screen';
import IdChoiceV2Screen from '../ProfileFiles/IdChoiceV2Screen';
import ChangeMailScreen from '../ProfileFiles/ChangeMailScreen';
import ChangeMailConfirmScreen from '../ProfileFiles/ChangeMailConfirmScreen';
import ChangePasswordProfilScreen from '../ProfileFiles/ChangePasswordProfilScreen';
import ForgotPasswordConfirmProfilScreen from '../ProfileFiles/ForgotPasswordConfirmProfilScreen';
import ForgotPasswordProfilScreen from '../ProfileFiles/ForgotPasswordProfilScreen';
import TakeDiplomeScreen from '../ProfileFiles/TakeDiplomeScreen';
import CheckDiplomeScreen from '../ProfileFiles/CheckDiplomeScreen';

// Écrans de missions bénévole

import AdressOrGeolocScreen from '../MissionsFiles/AdressOrGeolocScreen';
import GeolocAnimationScreen from '../MissionsFiles/GeolocAnimationScreen';
import MissionDescScreen from '../MissionsFiles/MissionDescScreen';
import MissionParticipationScreen from '../MissionsFiles/MissionParticipationScreen';
import MissionsListScreen from '../MissionsFiles/MissionsListScreen';
import MyMissionsScreen from '../MissionsFiles/MyMissionsScreen';

// Écrans messages bénévoles

import MessagesScreen from '../MessageFiles/MessagesScreen';
import InBoxScreen from '../MessageFiles/InBoxScreen';

import firebase from 'react-native-firebase';
import uuid from 'uuid/v1';

const Device = require('react-native-device-detection');

const styles = StyleSheet.create({
	screenContainer: {
		width: '100%',
		height: '100%'
	},
	mainContainer: {
		marginLeft: 'auto',
		marginRight: 'auto',
		height: '100%',
		width: '100%',
		top: '-2%'
	},
	//
	// Bottom navigator
	//
	bottomContainer: {
		top: hp('-10%'),
		height: hp('10%')
	},
	bottomNavigation: {
		height: hp('10%')
	}
});

const MissionStack = createStackNavigator(
	{
		AdressOrGeoloc: AdressOrGeolocScreen,
		GeolocAnimation: GeolocAnimationScreen,
		MissionDesc: MissionDescScreen,
		MissionParticipation: MissionParticipationScreen,
		MissionsList: MissionsListScreen,
		MyMissions: MyMissionsScreen
	},
	{
		initialRouteName: 'AdressOrGeoloc',
		headerMode: 'none',
		header: null
	}
);

const ProfileStack = createStackNavigator(
	{
		Profile: ProfileScreen,
		ProfileFill: ProfileFillScreen,
		ProfileFill2: ProfileFill2Screen,
		Skills: SkillsScreen,
		Skills2: Skills2Screen,
		IdChoiceV2: IdChoiceV2Screen,
		ChangeMail: ChangeMailScreen,
		ChangeMailConfirm: ChangeMailConfirmScreen,
		ChangePasswordProfil: ChangePasswordProfilScreen,
		ForgotPasswordConfirmProfil: ForgotPasswordConfirmProfilScreen,
		ForgotPasswordProfil: ForgotPasswordProfilScreen,
		TakeDiplome: TakeDiplomeScreen,
		CheckDiplome: CheckDiplomeScreen
	},
	{
		initialRouteName: 'Profile',
		headerMode: 'none',
		header: null
	}
);
const ProfileRoute = createAppContainer(ProfileStack);

const MissionRoute = createAppContainer(MissionStack);

const MessageStack = createStackNavigator(
	{
		Messages: MessagesScreen,
		InBox: InBoxScreen
	},
	{
		initialRouteName: 'InBox',
		headerMode: 'none',
		header: null
	}
);
const MessageRoute = createAppContainer(MessageStack);

export default class App extends React.Component {
	state = {
		topSelectedIndex: 0,
		bottomSelectedIndex: 0,
		selectedIndex: 0,
		MissionsNotif: 0,
		MessagesNotif: 0,
		missionsRegister: [],
		messagesRegister: [],
		logo: ''
	};

	static navigationOptions = {
		header: null
	};

	async componentDidMount() {
		try {
			const logo = await firebase
				.storage()
				.ref('ic_launcher-web.png')
				.getDownloadURL();
			//if (Platform.OS === 'ios') PushNotificationIOS.requestPermissions();
			this.setState({ logo });
		} catch (error) {
			console.log(error);
		}
	}

	// a modifier:
	missionsNotifFunc = async (missionList = []) => {
		let { missionsRegister, logo } = this.state;
		let notif = 0;
		const ids = [];
		for (let i = 0; i < missionList.length; i++) {
			const { demande: one, id } = missionList[i];
			if (one) {
				notif += 1;
				ids.push(id);
			} else {
				missionsRegister = missionsRegister.filter(old => old !== id);
			}
		}
		let thereIsNew = false;
		for (let i = 0; i < ids.length; i++) {
			const old = ids[i];
			let breaked = false;
			for (let ii = 0; ii < missionsRegister.length; ii++) {
				const newId = missionsRegister[ii];
				if (newId === old) {
					breaked = true;
					break;
				}
			}
			if (!breaked) {
				thereIsNew = true;
				missionsRegister.push(old);
			}
		}
		this.setState({
			MissionsNotif: notif,
			missionsRegister
		});
		if (notif > 0 && thereIsNew) {
			const notification = new firebase.notifications.Notification()
				.setNotificationId(uuid())
				.setTitle('YOUGGY')
				.setBody('Nouvelle(s) candidature(s) reçue(s)!');

			notification.android
				.setChannelId('youggy-channel')
				.android.setBigPicture(logo);
			await firebase
				.notifications()
				.displayNotification(notification)
				.catch(e => console.log(e));
		}
	};

	messagesNotifFunc = async (messageList = []) => {
		let { messagesRegister, logo } = this.state;
		let notif = 0;
		const ids = [];
		for (let i = 0; i < messageList.length; i++) {
			const { notif: one, id } = messageList[i];
			if (one) {
				notif += 1;
				ids.push(id);
			} else {
				messagesRegister = messagesRegister.filter(old => old !== id);
			}
		}
		let thereIsNew = false;

		for (let i = 0; i < ids.length; i++) {
			const old = ids[i];
			let breaked = false;
			for (let ii = 0; ii < messagesRegister.length; ii++) {
				const newId = messagesRegister[ii];
				if (newId === old) {
					breaked = true;
					break;
				}
			}
			if (!breaked) {
				thereIsNew = true;
				messagesRegister.push(old);
			}
		}
		this.setState({
			MessagesNotif: notif,
			messagesRegister
		});
		if (notif > 0 && thereIsNew) {
			const notification = new firebase.notifications.Notification()
				.setNotificationId(uuid())
				.setTitle('YOUGGY')
				.setBody('Nouveau(x) message(x) reçu(s)!');

			notification.android
				.setChannelId('youggy-channel')
				.android.setBigPicture(logo);
			await firebase
				.notifications()
				.displayNotification(notification)
				.catch(e => console.log(e));
		}
	};

	ProfilIcon = () => {
		if (this.state.bottomSelectedIndex == 0)
			return <ProfileActive color='#D94B4B' />;
		else return <ProfileDesactive />;
	};

	MissionIcon = () => {
		if (this.state.bottomSelectedIndex == 1)
			return (
				<View>
					<MissionActive color='#D94B4B' />
					{this.state.MissionsNotif ? (
						<Notification
							width={wp('5%')}
							height={wp('5%')}
							displayText={true}
							style={{ left: wp('5.5%'), top: wp('-8%') }}
							demande={
								this.state.MissionsNotif <= 5
									? this.state.MissionsNotif
									: '5+'
							}
						/>
					) : (
						<View />
					)}
				</View>
			);
		else
			return (
				<View>
					<MissionDesactive />
					{this.state.MissionsNotif ? (
						<Notification
							width={wp('5%')}
							height={wp('5%')}
							displayText={true}
							style={{ left: wp('5.5%'), top: wp('-8%') }}
							demande={
								this.state.MissionsNotif <= 5
									? this.state.MissionsNotif
									: '5+'
							}
						/>
					) : (
						<View />
					)}
				</View>
			);
	};

	MessageIcon = () => {
		if (this.state.bottomSelectedIndex == 2)
			return (
				<View>
					<MessageActive color='#D94B4B' />
					{this.state.MessagesNotif ? (
						<Notification
							width={wp('5%')}
							height={wp('5%')}
							displayText={true}
							style={{ left: wp('5%'), top: wp('-8%') }}
							demande={
								this.state.MessagesNotif <= 5
									? this.state.MessagesNotif
									: '5+'
							}
						/>
					) : (
						<View />
					)}
				</View>
			);
		else
			return (
				<View>
					<MessageDesactive />
					{this.state.MessagesNotif ? (
						<Notification
							width={wp('5%')}
							height={wp('5%')}
							displayText={true}
							style={{ left: wp('5%'), top: wp('-8%') }}
							demande={
								this.state.MessagesNotif <= 5
									? this.state.MessagesNotif
									: '5+'
							}
						/>
					) : (
						<View />
					)}
				</View>
			);
	};

	render() {
		const { bottomSelectedIndex } = this.state;
		const { goBack } = this.props.navigation;

		return (
			<View style={styles.screenContainer}>
				<IconRegistry icons={EvaIconsPack} />
				<ApplicationProvider mapping={mapping} theme={lightTheme}>
					<TabView
						indicatorStyle={{
							backgroundColor: 'transparent'
						}}
						selectedIndex={bottomSelectedIndex}
						style={styles.mainContainer}
						onOffsetChange={index =>
							this.setState({ bottomSelectedIndex: index })
						}
						onSelect={index =>
							this.setState({ bottomSelectedIndex: index })
						}
					>
						<Tab>
							<View
								style={{
									height: '100%'
								}}
							>
								<ProfileRoute />
							</View>
						</Tab>
						<Tab>
							<View
								style={{
									height: '100%'
								}}
							>
								<MissionRoute
									screenProps={{
										notifCapture: this.missionsNotifFunc
									}}
								/>
							</View>
						</Tab>
						<Tab>
							<View
								style={{
									height: '100%'
								}}
							>
								<MessageRoute
									screenProps={{
										notifCapture: this.messagesNotifFunc
									}}
								/>
							</View>
						</Tab>
					</TabView>
					<View style={styles.bottomContainer}>
						<Divider
							style={{
								height: 1,
								backgroundColor: '#DFDFDF',
								left: hp('-10%'),
								width: hp('120%')
							}}
						/>
						<BottomNavigation
							style={styles.bottomNavigation}
							selectedIndex={bottomSelectedIndex}
							onSelect={index => {
								this.setState({
									bottomSelectedIndex: index
								});
							}}
							indicatorStyle={{
								backgroundColor: '#D94B4B'
							}}
						>
							<BottomNavigationTab
								titleStyle={{
									color:
										bottomSelectedIndex == 0
											? '#D94B4B'
											: '#AAAAAA'
								}}
								title='PROFIL'
								icon={this.ProfilIcon}
							/>
							<BottomNavigationTab
								titleStyle={{
									color:
										bottomSelectedIndex == 1
											? '#D94B4B'
											: '#AAAAAA'
								}}
								title='MISSIONS'
								icon={this.MissionIcon}
							/>
							<BottomNavigationTab
								titleStyle={{
									color:
										bottomSelectedIndex == 2
											? '#D94B4B'
											: '#AAAAAA'
								}}
								title='MESSAGES'
								icon={this.MessageIcon}
							/>
						</BottomNavigation>
					</View>
				</ApplicationProvider>
			</View>
		);
	}
}

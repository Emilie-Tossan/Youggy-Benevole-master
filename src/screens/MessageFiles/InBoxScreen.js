import React from 'react';
import {
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	TextInput,
	StyleSheet
} from 'react-native';
import { Input, Divider } from 'react-native-elements';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import * as Font from 'expo-font';

import BackButton from '../Components/BackButton';
import MessagesInBox from '../Components/MessagesInBoxComponent';

import MapMarker from '../../../assets/svg-js/mapMarker';
import Cible from '../../../assets/svg-js/Cible';
import { BottomNavigation } from 'react-native-paper';

import uuid from 'uuid/v1';
import firebase from 'react-native-firebase';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

const Device = require('react-native-device-detection');

const styles = StyleSheet.create({
	screenContainer: {
		width: '100%',
		height: '100%'
	},
	mainContainer: {
		width: wp('100%'),
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: wp('4%'),
		paddingRight: wp('4%')
	},
	//
	// Text
	//
	title: {
		fontSize: hp('2.7%'),
		textAlign: 'center',
		color: '#D94B4B',
		fontWeight: 'bold'
	},
	subText: {
		textAlign: 'center',
		color: 'grey',
		fontSize: hp('2%')
	},
	//
	// Bottom Container
	//
	bottomContainer: {
		top: hp('-10%'),
		marginTop: 'auto',
		overflow: 'hidden',
		backgroundColor: 'white'
	},
	bottomText: {
		textAlign: 'center',
		fontSize: hp('2.5%'),
		height: hp('3%'),
		marginTop: 'auto',
		marginBottom: 'auto',
		top: hp('-1%')
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
		conversations: [],
		unmountThoseListeners: []
	};

	componentWillUnmount() {
		const { unmountThoseListeners: listeners } = this.state;
		for (let i = 0; i < listeners.length; i++) {
			const unsubscribe = listeners[i];
			unsubscribe();
		}
	}

	async componentDidMount() {
		const listeners = [];
		let listener = null;
		try {
			const conversations = [];
			const { uid: userUid } = firebase.auth().currentUser;
			const assoMessagesRef = await firebase
				.firestore()
				.collection('messages')
				.doc(userUid)
				.get();
			listener = firebase
				.firestore()
				.collection('messages')
				.doc(userUid)
				.onSnapshot(() => this.dataListener());
			listeners.push(listener);
			const assoMessages = assoMessagesRef.data();
			for (const benevoleUid in assoMessages) {
				if (assoMessages.hasOwnProperty(benevoleUid)) {
					const messagesSendToBenevole = assoMessages[benevoleUid];
					const benevoleMessagesRef = await firebase
						.firestore()
						.collection('messages')
						.doc(benevoleUid)
						.get();
					listener = firebase
						.firestore()
						.collection('messages')
						.doc(benevoleUid)
						.onSnapshot(() => this.dataListener());
					listeners.push(listener);
					const benevoleMessages = benevoleMessagesRef.data();
					let messagesSendToAsso = [];
					for (const assoUid in benevoleMessages) {
						if (
							benevoleMessages.hasOwnProperty(assoUid) &&
							userUid === assoUid
						) {
							messagesSendToAsso = benevoleMessages[assoUid];
							break;
						}
					}
					const benevoleProfilRef = await firebase
						.firestore()
						.collection('associationUsers')
						.doc(benevoleUid)
						.get();
					const logo = await firebase
						.storage()
						.ref(`users/${benevoleUid}/profilPhoto`)
						.getDownloadURL()
						.catch(e => console.log(e) === 1);
					const profilDefault = await firebase
						.storage()
						.ref(`icone-profil-association.png`)
						.getDownloadURL()
						.catch(e => console.log(e) === 1);
					const { associationName } = benevoleProfilRef.data();
					for (let i = 0; i < messagesSendToAsso.length; i++) {
						const {
							uid: aUid,
							desc: aDesc,
							messages: aMessages
						} = messagesSendToAsso[i];
						let conversation = {};
						conversation['desc'] = aDesc;
						conversation['logo'] = logo ? logo : profilDefault;
						conversation['societe'] = `${associationName}`;
						conversation['id'] = aUid;
						conversation['destinataire'] = benevoleUid;
						let dateA = new Date(aMessages[0].createdAt);
						let dateB = null;
						let date = null;
						for (let j = 0; j < aMessages.length; j++) {
							const { createdAt } = aMessages[j];
							const tmp = new Date(createdAt);
							if (tmp >= dateA) dateA = tmp;
						}
						let notif = 0;
						let finded = false;
						for (
							let ii = 0;
							ii < messagesSendToBenevole.length;
							ii++
						) {
							const {
								uid: bUid,
								messages: bMessages,
								messagesViewed
							} = messagesSendToBenevole[ii];
							if (aUid === bUid) {
								finded = true;
								dateB = bMessages.length
									? new Date(bMessages[0].createdAt)
									: null;
								for (
									let iii = 0;
									iii < bMessages.length;
									iii++
								) {
									const { createdAt } = bMessages[iii];

									const tmp = new Date(createdAt);
									if (tmp >= dateB) dateB = tmp;
								}
								notif = messagesViewed
									? aMessages.length - messagesViewed.length
									: -1;
								break;
							}
						}
						conversation['notif'] =
							notif === -1 || (notif === 0 && !finded)
								? aMessages.length
								: notif;
						date = dateB && dateB >= dateA ? dateB : dateA;
						conversation['date'] = moment(
							date,
							'YYYYMMDDHHmm'
						).fromNow();
						conversation['sortIndice'] = date;
						conversations.push(conversation);
					}
				}
			}
			conversations.sort((a, b) => b.sortIndice - a.sortIndice);
			this.setState({
				conversations: [...conversations],
				unmountThoseListeners: [...listeners]
			});
			this.props.screenProps.notifCapture(conversations);
		} catch (error) {
			console.log(error);
		}
	}

	async dataListener() {
		try {
			const conversations = [];
			const { uid: userUid } = firebase.auth().currentUser;
			const assoMessagesRef = await firebase
				.firestore()
				.collection('messages')
				.doc(userUid)
				.get();
			const assoMessages = assoMessagesRef.data();
			for (const benevoleUid in assoMessages) {
				if (assoMessages.hasOwnProperty(benevoleUid)) {
					const messagesSendToBenevole = assoMessages[benevoleUid];
					const benevoleMessagesRef = await firebase
						.firestore()
						.collection('messages')
						.doc(benevoleUid)
						.get();
					const benevoleMessages = benevoleMessagesRef.data();
					let messagesSendToAsso = [];
					for (const assoUid in benevoleMessages) {
						if (
							benevoleMessages.hasOwnProperty(assoUid) &&
							userUid === assoUid
						) {
							messagesSendToAsso = benevoleMessages[assoUid];
							break;
						}
					}
					const benevoleProfilRef = await firebase
						.firestore()
						.collection('associationUsers')
						.doc(benevoleUid)
						.get();
					const logo = await firebase
						.storage()
						.ref(`users/${benevoleUid}/profilPhoto`)
						.getDownloadURL()
						.catch(e => console.log(e) === 1);
					const profilDefault = await firebase
						.storage()
						.ref(`icone-profil-association.png`)
						.getDownloadURL()
						.catch(e => console.log(e) === 1);
					const { associationName } = benevoleProfilRef.data();
					for (let i = 0; i < messagesSendToAsso.length; i++) {
						const {
							uid: aUid,
							desc: aDesc,
							messages: aMessages
						} = messagesSendToAsso[i];
						let conversation = {};
						conversation['desc'] = aDesc;
						conversation['logo'] = logo ? logo : profilDefault;
						conversation['societe'] = `${associationName}`;
						conversation['id'] = aUid;
						conversation['destinataire'] = benevoleUid;
						let dateA = new Date(aMessages[0].createdAt);
						let dateB = null;
						let date = null;
						for (let j = 0; j < aMessages.length; j++) {
							const { createdAt } = aMessages[j];
							const tmp = new Date(createdAt);
							if (tmp >= dateA) dateA = tmp;
						}
						let notif = 0;
						let finded = false;
						for (
							let ii = 0;
							ii < messagesSendToBenevole.length;
							ii++
						) {
							const {
								uid: bUid,
								messages: bMessages,
								messagesViewed
							} = messagesSendToBenevole[ii];
							if (aUid === bUid) {
								finded = true;
								dateB = bMessages.length
									? new Date(bMessages[0].createdAt)
									: null;
								for (
									let iii = 0;
									iii < bMessages.length;
									iii++
								) {
									const { createdAt } = bMessages[iii];

									const tmp = new Date(createdAt);
									if (tmp >= dateB) dateB = tmp;
								}
								notif = messagesViewed
									? aMessages.length - messagesViewed.length
									: -1;
								break;
							}
						}
						conversation['notif'] =
							notif === -1 || (notif === 0 && !finded)
								? aMessages.length
								: notif;
						date = dateB && dateB >= dateA ? dateB : dateA;
						conversation['date'] = moment(
							date,
							'YYYYMMDDHHmm'
						).fromNow();
						conversation['sortIndice'] = date;
						conversations.push(conversation);
					}
				}
			}
			conversations.sort((a, b) => b.sortIndice - a.sortIndice);
			this.setState({ conversations: [...conversations] });
			this.props.screenProps.notifCapture(conversations);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const { conversations } = this.state;

		const MessagesList = () => {
			const Components = conversations.map(keys => {
				const { destinataire, logo } = keys;
				return (
					<TouchableOpacity
						key={keys.id}
						onPress={() =>
							this.props.navigation.navigate('Messages', {
								destinataire,
								profil: logo,
								mission: keys.desc,
								name: keys.societe,
								idConv: keys.id
							})
						}
					>
						<MessagesInBox
							id={keys.id}
							date={keys.date}
							desc={keys.desc}
							societe={keys.societe}
							notif={keys.notif}
							logo={keys.logo}
						/>
					</TouchableOpacity>
				);
			});
			return (
				<ScrollView
					style={{
						height: '65%',
						overflow: 'hidden',
						top: hp('-3%')
					}}
				>
					{Components}
				</ScrollView>
			);
		};

		return (
			<View style={styles.screenContainer}>
				<View style={styles.mainContainer}>
					<View style={{ paddingBottom: hp('8%') }} />
					<Text style={styles.title}>Messages</Text>
					<View style={{ paddingBottom: hp('2%') }} />
					<Divider
						style={{ height: 1, backgroundColor: '#D94B4B' }}
					/>
					<View style={{ paddingBottom: hp('4%') }} />

					<MessagesList />
				</View>
			</View>
		);
	}
}

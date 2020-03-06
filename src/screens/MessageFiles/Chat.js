import React from 'react';
import {
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	TextInput,
	StyleSheet
} from 'react-native';
import {
	GiftedChat,
	Send,
	InputToolbar,
	Bubble,
	Message,
	Time
} from 'react-native-gifted-chat';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

import uuid from 'uuid/v1';
import firebase from 'react-native-firebase';

import Sender from '../../../assets/svg-js/Send';
import { black } from 'ansi-colors';
export default class Example extends React.Component {
	state = {
		messages: [],
		messagesSendToBenevole: [],
		messagesSendToAsso: [],
		expediteur: '',
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
			const expediteur = firebase.auth().currentUser.uid;
			const assoMessagesRef = await firebase
				.firestore()
				.collection('messages')
				.doc(expediteur)
				.get();
			listener = firebase
				.firestore()
				.collection('messages')
				.doc(expediteur)
				.onSnapshot(() => this.dataListener());
			listeners.push(listener);
			const dataAsso = assoMessagesRef.data();
			const beneMessagesRef = await firebase
				.firestore()
				.collection('messages')
				.doc(this.props.destinataire)
				.get();
			listener = firebase
				.firestore()
				.collection('messages')
				.doc(this.props.destinataire)
				.onSnapshot(() => this.dataListener());
			listeners.push(listener);
			const dataBene = beneMessagesRef.data();
			let messagesSendToBenevole = [];
			let messagesSendToAsso = [];
			for (const assoUid in dataBene) {
				if (
					dataBene.hasOwnProperty(assoUid) &&
					assoUid === expediteur
				) {
					const conversations = dataBene[assoUid];
					for (let i = 0; i < conversations.length; i++) {
						const { uid, messages } = conversations[i];
						if (uid === this.props.idConv) {
							messagesSendToAsso = [...messages];
							break;
						}
					}
					break;
				}
			}
			let finded = false;
			for (const beneUid in dataAsso) {
				if (
					dataAsso.hasOwnProperty(beneUid) &&
					beneUid === this.props.destinataire
				) {
					const conversations = dataAsso[beneUid];
					for (let i = 0; i < conversations.length; i++) {
						const { uid, messages } = conversations[i];
						if (uid === this.props.idConv) {
							finded = true;
							messagesSendToBenevole = [...messages];
							break;
						}
					}
					const messagesViewed = messagesSendToAsso.map(
						elem => elem._id
					);
					const newState = dataAsso[beneUid].map(elem => {
						if (elem.uid === this.props.idConv) {
							return { ...elem, messagesViewed };
						}
						return elem;
					});
					await firebase
						.firestore()
						.collection('messages')
						.doc(expediteur)
						.set({ [beneUid]: newState }, { merge: true });
					break;
				}
			}
			if (!finded) {
				const snapData = beneMessagesRef.data()[expediteur];
				for (let i = 0; i < snapData.length; i++) {
					const conversation = snapData[i];
					if (conversation.uid === this.props.idConv) {
						let otherConversation = [];
						if (
							dataAsso &&
							dataAsso[this.props.destinataire].length
						)
							otherConversation = [
								...dataAsso[this.props.destinataire]
							];
						const messagesViewed = messagesSendToAsso.map(
							elem => elem._id
						);
						await firebase
							.firestore()
							.collection('messages')
							.doc(expediteur)
							.set(
								{
									[this.props.destinataire]: [
										...otherConversation,
										{
											...conversation,
											messages: [],
											messagesViewed
										}
									]
								},
								{ merge: true }
							);
						break;
					}
				}
			}

			const messages = [...messagesSendToAsso, ...messagesSendToBenevole];
			messages.sort(
				(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
			);
			this.setState({
				messages: [...messages],
				messagesSendToAsso: [...messagesSendToAsso],
				messagesSendToBenevole: [...messagesSendToBenevole],
				expediteur,
				unmountThoseListeners: [...listeners]
			});
		} catch (error) {
			console.log(error);
		}
	}

	async dataListener() {
		try {
			const expediteur = firebase.auth().currentUser.uid;
			const assoMessagesRef = await firebase
				.firestore()
				.collection('messages')
				.doc(expediteur)
				.get();
			const dataAsso = assoMessagesRef.data();
			const beneMessagesRef = await firebase
				.firestore()
				.collection('messages')
				.doc(this.props.destinataire)
				.get();
			const dataBene = beneMessagesRef.data();
			let messagesSendToBenevole = [];
			let messagesSendToAsso = [];
			for (const assoUid in dataBene) {
				if (
					dataBene.hasOwnProperty(assoUid) &&
					assoUid === expediteur
				) {
					const conversations = dataBene[assoUid];
					for (let i = 0; i < conversations.length; i++) {
						const { uid, messages } = conversations[i];
						if (uid === this.props.idConv) {
							messagesSendToAsso = [...messages];
							break;
						}
					}
					break;
				}
			}
			let finded = false;
			for (const beneUid in dataAsso) {
				if (
					dataAsso.hasOwnProperty(beneUid) &&
					beneUid === this.props.destinataire
				) {
					const conversations = dataAsso[beneUid];
					for (let i = 0; i < conversations.length; i++) {
						const { uid, messages } = conversations[i];
						if (uid === this.props.idConv) {
							finded = true;
							messagesSendToBenevole = [...messages];
							break;
						}
					}
					const messagesViewed = messagesSendToAsso.map(
						elem => elem._id
					);
					const newState = dataAsso[beneUid].map(elem => {
						if (elem.uid === this.props.idConv) {
							return { ...elem, messagesViewed };
						}
						return elem;
					});
					await firebase
						.firestore()
						.collection('messages')
						.doc(expediteur)
						.set({ [beneUid]: newState }, { merge: true });
					break;
				}
			}
			if (!finded) {
				const snapData = beneMessagesRef.data()[expediteur];
				for (let i = 0; i < snapData.length; i++) {
					const conversation = snapData[i];
					if (conversation.uid === this.props.idConv) {
						let otherConversation = [];
						if (
							dataAsso &&
							dataAsso[this.props.destinataire].length
						)
							otherConversation = [
								...dataAsso[this.props.destinataire]
							];
						const messagesViewed = messagesSendToAsso.map(
							elem => elem._id
						);
						await firebase
							.firestore()
							.collection('messages')
							.doc(expediteur)
							.set(
								{
									[this.props.destinataire]: [
										...otherConversation,
										{
											...conversation,
											messages: [],
											messagesViewed
										}
									]
								},
								{ merge: true }
							);
						break;
					}
				}
			}

			const messages = [...messagesSendToAsso, ...messagesSendToBenevole];
			messages.sort(
				(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
			);
			this.setState({
				messages: [...messages],
				messagesSendToAsso: [...messagesSendToAsso],
				messagesSendToBenevole: [...messagesSendToBenevole],
				expediteur
			});
		} catch (error) {
			console.log(error);
		}
	}

	uploadMessage = async (messages = []) => {
		const { expediteur } = this.state;
		try {
			const assoMessagesRef = firebase
				.firestore()
				.collection('messages')
				.doc(expediteur);
			const snap = await assoMessagesRef.get();
			const dataAsso = snap.data();
			let finded = false;
			for (const beneUid in dataAsso) {
				if (
					dataAsso.hasOwnProperty(beneUid) &&
					beneUid === this.props.destinataire
				) {
					finded = true;
					const conversations = dataAsso[beneUid];
					const newStateConversations = conversations.map(elem => {
						const { uid } = elem;
						if (uid === this.props.idConv) {
							return { ...elem, messages };
						}
						return elem;
					});
					await assoMessagesRef.set(
						{ [beneUid]: newStateConversations },
						{ merge: true }
					);
					break;
				}
			}
			if (!finded) {
				const refSnap = await firebase
					.firestore()
					.collection('messages')
					.doc(this.props.destinataire)
					.get();
				const snapData = refSnap.data()[expediteur];
				for (let i = 0; i < snapData.length; i++) {
					const conversation = snapData[i];
					if (conversation.uid === this.props.idConv) {
						await assoMessagesRef.set(
							{
								[this.props.destinataire]: [
									{ ...conversation, messages }
								]
							},
							{ merge: true }
						);
						break;
					}
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	onSend(messages = []) {
		const { messagesSendToBenevole } = this.state;
		const messagesEdited = messages.map(elem => {
			return { ...elem, createdAt: `${new Date().toISOString()}` };
		});
		const newMessagesSendToBenevole = [
			...messagesSendToBenevole,
			...messagesEdited
		];
		this.uploadMessage(newMessagesSendToBenevole);
		this.setState(previousState => ({
			messages: GiftedChat.append(previousState.messages, messagesEdited),
			messagesSendToBenevole: [...newMessagesSendToBenevole]
		}));
	}

	// renderMessage(messages = []) {
	// 	return (
	// 		// <View
	// 		// 	style={{
	// 		// 		width: '90%',
	// 		// 		borderRadius: 10,
	// 		// 		marginRight: 'auto',
	// 		// 		marginLeft: '3%',
	// 		// 		marginBottom: '2%',
	// 		// 		paddingTop: '2.5%',
	// 		// 		paddingLeft: '2%',
	// 		// 		paddingBottom: '5%',
	// 		// 		height: 'auto',
	// 		// 		borderColor: 'grey',
	// 		// 		borderWidth: 0.2
	// 		// 	}}
	// 		// >
	// 		// 	<Text>{messages.currentMessage.text}</Text>
	// 		// </View>
	// 		<Message
	// 			containerStyle={{
	// 				backgroundColor: 'red',
	// 				height: 40
	// 			}}
	// 			{...messages}
	// 		/>
	// 	);
	// }

	renderInputToolbar(props) {
		return (
			<InputToolbar
				{...props}
				containerStyle={{
					borderTopColor: '#F0F3F5',
					marginLeft: '5%',
					marginRight: '5%',
					borderRadius: 100,
					height: 40,
					overflow: 'hidden'
				}}
			/>
		);
	}

	renderSend(props) {
		return (
			<Send
				{...props}
				containerStyle={{
					backgroundColor: '#F0F3F5',
					borderRadius: 100,
					margin: 3,
					height: 30,
					width: 30,
					top: -6.5
				}}
			>
				<View
					style={{
						marginLeft: 'auto',
						marginRight: 'auto',
						top: '-75%'
					}}
				>
					<Sender />
				</View>
			</Send>
		);
	}

	renderBubble(props) {
		return (
			<Bubble
				wrapperStyle={{
					left: {
						backgroundColor: '#FFFAF2'
					},
					right: {
						backgroundColor: 'white'
					}
				}}
				textStyle={{ right: { color: 'black' } }}
				{...props}
			>
				<Text>test{props.currentMessage.text}</Text>
			</Bubble>
		);
	}

	renderTime(props) {
		return (
			<Time
				timeTextStyle={{
					left: { color: 'black' },
					right: { color: 'black' }
				}}
				timeFormat={'HH:MM'}
				{...props}
			/>
		);
	}

	render() {
		const { messages, expediteur } = this.state;
		return (
			<GiftedChat
				messages={messages}
				onSend={messages => this.onSend(messages)}
				user={{ _id: expediteur }}
				renderAvatar={() => null}
				// renderMessage={messages => this.renderMessage(messages)}
				renderBubble={props => this.renderBubble(props)}
				renderInputToolbar={props => this.renderInputToolbar(props)}
				renderSend={props => this.renderSend(props)}
				renderTime={props => this.renderTime(props)}
				placeholder="J'écris mon message"
				//timeFormat='HH:MM'
				// bottomOffset={-100}
				locale='fr'
				multiline={false}
			/>
		);
	}
}

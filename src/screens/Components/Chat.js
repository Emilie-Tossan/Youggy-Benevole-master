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

import Sender from '../../../assets/svg-js/Send';
import { black } from 'ansi-colors';
export default class Example extends React.Component {
	state = {
		messages: []
	};

	componentDidMount() {
		this.setState({
			messages: [
				{
					_id: 1,
					text: 'Hello developer',
					createdAt: new Date(),
					user: {
						_id: 2,
						name: 'React Native',
						avatar: 'https://placeimg.com/140/140/any'
					},
					renderAvatar: 'null'
				}
			]
		});
	}

	onSend(messages = []) {
		this.setState(previousState => ({
			messages: GiftedChat.append(previousState.messages, messages)
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
		//console.log('props' + JSON.stringify(props));
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
				{...props}
			/>
		);
	}

	render() {
		return (
			<GiftedChat
				messages={this.state.messages}
				onSend={messages => this.onSend(messages)}
				user={{
					_id: 1
				}}
				renderAvatar={() => null}
				// renderMessage={messages => this.renderMessage(messages)}
				renderBubble={props => this.renderBubble(props)}
				renderInputToolbar={props => this.renderInputToolbar(props)}
				renderSend={props => this.renderSend(props)}
				renderTime={props => this.renderTime(props)}
				placeholder="J'écris mon message"
				timeFormat='H:MM'
				// bottomOffset={-100}
				multiline={false}
			/>
		);
	}
}

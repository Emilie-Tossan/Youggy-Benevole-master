import React, { Component, Fragment } from 'react';
import {
	TextInput,
	Text,
	View,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import BackButton from '../Components/BackButton';
import Validation from '../Components/ValidationComponentScreen';

import OeilOuvert from '../../../assets/svg-js/oeil-ouvert';
import OeilBarre from '../../../assets/svg-js/oeil-barre';

import firebase from 'react-native-firebase';
import { Pbkdf2 } from '@trackforce/react-native-crypto';

const Device = require('react-native-device-detection');

const styles = StyleSheet.create({
	screenContainer: {
		width: '100%',
		height: '100%'
	},
	mainContainer: {
		marginTop: 'auto',
		marginBottom: 'auto',
		paddingLeft: Device.isTablet ? wp('25%') : wp('13%'),
		paddingRight: Device.isTablet ? wp('25%') : wp('13%')
	},
	//
	// Text
	//
	title: {
		fontSize: hp('2.7%'),
		fontWeight: 'bold',
		color: 'white',
		margin: 'auto',
		textAlign: 'center'
	},
	info: {
		fontSize: hp('1.5%'),
		fontWeight: 'bold',
		color: 'white'
	},
	subText: {
		fontSize: hp('2%'),
		color: 'white',
		textAlign: 'center'
	},
	status: {
		height: hp('6%'),
		lineHeight: hp('1.8%'),
		letterSpacing: 0.2,
		fontWeight: 'bold',
		fontSize: hp('1.8%'),
		color: 'white',
		textAlign: 'left'
	},
	//
	// Input
	//
	inputText: {
		width: '100%',
		height: hp('10%'),
		color: 'white',
		fontWeight: 'bold',
		fontSize: hp('2.2%')
	},
	inputContainer: {
		paddingRight: Device.isTablet ? wp('5%') : hp('3.5%'),
		flexDirection: 'row',
		borderBottomColor: 'white',
		borderBottomWidth: 1,
		marginBottom: 5,
		color: 'white',
		fontSize: hp('2.2%'),
		fontWeight: 'bold',
		paddingBottom: 5
	},
	inputTextContainer: {
		left: 5,
		top: Device.isTablet ? hp('-1%') : hp('-1.5%'),
		width: '100%',
		height: hp('5.5%'),
		textAlign: 'right'
	},
	inputImageContainer: {
		top: Device.isTablet ? hp('-2%') : hp('-1%'),
		height: hp('6.4%')
	},
	oeil: {
		top: hp('-0.5%'),
		height: hp('2.2%'),
		width: hp('2.2%') * 1.5625
	},
	//
	// Utils
	//
	bold: {
		fontWeight: 'bold'
	},
	space: {
		paddingBottom: hp('6%')
	},
	button: {
		textAlign: 'center',
		fontSize: hp('2.5%'),
		fontWeight: 'bold',
		color: 'white'
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
		source: <OeilBarre style={styles.oeil} />,
		sourceState: 1,
		hide: true,
		top: hp('2%'),
		animation: false,
		password1: '',
		password2: '',
		lengthRequiredFulled: false,
		passwordsIsSame: false,
		status: true
	};

	inputPasswordHandler = (text, field) => {
		if (field === 'password1' && text.length >= 8) {
			this.setState({ lengthRequiredFulled: true });
		} else if (field === 'password1') {
			this.setState({ lengthRequiredFulled: false });
		}
		if (field === 'password2' && this.state.password1 === text) {
			this.setState({ passwordsIsSame: true });
		} else if (field === 'password2') {
			this.setState({ passwordsIsSame: false });
		}
		if (this.state.password2 === text) {
			this.setState({ passwordsIsSame: true });
		} else if (field !== 'password2') {
			this.setState({ passwordsIsSame: false });
		}
		this.setState({ [field]: text });
	};

	validationPasswordHandler = async () => {
		const { password1, lengthRequiredFulled, passwordsIsSame } = this.state;
		if (!lengthRequiredFulled) this.setState({ status: 'size' });
		else if (!passwordsIsSame) this.setState({ status: 'same' });
		if (!lengthRequiredFulled || !passwordsIsSame) return;
		const { oobCode: code } = this.props.navigation.getParam('params', {
			oobCode: ''
		});
		try {
			const {
				data: { email }
			} = await firebase.auth().checkActionCode(code);
			await firebase.auth().confirmPasswordReset(code, password1);
			await firebase.auth().signInWithEmailAndPassword(email, password1);
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
				password1,
				salt,
				iterations,
				keyInBytes,
				hash
			);
			await userRef.set({ password: passwordKey }, { merge: true });
			this.setState({ animation: true });
		} catch (err) {
			console.log(err);
		}
	};

	updateSource = () => {
		if (this.state.sourceState == 0) {
			this.setState({ hide: true });
			this.setState({ sourceState: 1 });
			this.setState({ source: <OeilBarre style={styles.oeil} /> });
		} else if (this.state.sourceState == 1) {
			this.setState({ hide: false });
			this.setState({ top: hp('2%') });
			this.setState({ sourceState: 0 });
			this.setState({ source: <OeilOuvert style={styles.oeil} /> });
		}
	};

	render() {
		const { goBack } = this.props.navigation;
		const { password1, password2 } = this.state;

		Status = () => {
			if (this.state.status === 'size')
				return (
					<View>
						<Text style={styles.status}>
							Vous avez entré un mot de passe de moins de huit
							caractères.
						</Text>
					</View>
				);
			else if (this.state.status === 'same')
				return (
					<View>
						<Text style={styles.status}>
							Le mot de passe doit être identique dans les 2
							champs.
						</Text>
					</View>
				);
			else return <View style={{ height: hp('6%') }} />;
		};

		return (
			<View style={styles.screenContainer}>
				<Validation
					display={this.state.animation}
					text='Votre mot de passe a été modifié'
					next={() =>
						this.props.navigation.navigate('Landing', {
							test: 'test'
						})
					}
					side='benevole'
					typo='white'
				/>
				<LinearGradient
					colors={['#D94B4B', '#E06666', '#D94B4B']}
					style={{ flex: 1 }}
					start={{ x: 0, y: 0 }}
					end={{ x: 0, y: 1 }}
				>
					<BackButton text='Retour' goBack={goBack} />
					<View style={styles.mainContainer}>
						<Text style={styles.title}>
							Je mets à jour mon mot de passe
						</Text>
						<View style={{ paddingBottom: hp('5%') }} />
						<Text style={styles.subText}>
							Ton{' '}
							<Text style={styles.bold}>
								{this.props.navigation.getParam(
									'PhoneOrEmail',
									'default value'
								)}
							</Text>{' '}
							est confirmé. {'\n'} Choisis un{' '}
							<Text style={styles.bold}>mot de passe </Text> avec
							un minimum de{' '}
							<Text style={styles.bold}>huit caractères</Text>.
						</Text>
						<View style={{ paddingBottom: hp('5%') }} />
						<Text style={styles.info}>MOT DE PASSE</Text>
						<View style={styles.inputContainer}>
							<View style={styles.inputTextContainer}>
								<TextInput
									autoCorrect={false}
									autoCapitalize='none'
									secureTextEntry={this.state.hide}
									style={styles.inputText}
									onChangeText={text => {
										this.inputPasswordHandler(
											text,
											'password1'
										);
									}}
									value={password1}
								/>
							</View>
							<TouchableOpacity
								onPress={type => this.updateSource()}
								style={{ top: this.state.top }}
							>
								{this.state.source}
							</TouchableOpacity>
						</View>
						<View style={{ paddingBottom: 5 }} />
						<Text style={styles.info}>
							CONFIRMATION DU MOT DE PASSE
						</Text>
						<View style={styles.inputContainer}>
							<View style={styles.inputTextContainer}>
								<TextInput
									autoCorrect={false}
									autoCapitalize='none'
									secureTextEntry={this.state.hide}
									style={styles.inputText}
									onChangeText={text => {
										this.inputPasswordHandler(
											text,
											'password2'
										);
									}}
									value={password2}
								/>
							</View>
							<TouchableOpacity
								onPress={type => this.updateSource()}
								style={{ top: this.state.top }}
							>
								{this.state.source}
							</TouchableOpacity>
						</View>
						<View style={{ paddingBottom: hp('1%') }} />
						<Status />

						<View style={{ paddingBottom: hp('2%') }} />
						<TouchableOpacity
							onPress={this.validationPasswordHandler}
						>
							<Text style={styles.button}>Je continue</Text>
						</TouchableOpacity>
					</View>
				</LinearGradient>
			</View>
		);
	}
}

import React from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	TextInput,
	StyleSheet,
	Linking
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import * as Font from 'expo-font';
import CodeInput from 'react-native-confirmation-code-input';

import BackButton from '../Components/BackButton';

import { NavigationActions } from 'react-navigation';
import firebase from 'react-native-firebase';

const Device = require('react-native-device-detection');

const styles = StyleSheet.create({
	screenContainer: {
		width: '100%',
		height: '100%'
	},
	mainContainer: {
		width: wp('100%'),
		marginTop: 'auto',
		marginBottom: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: Device.isTablet ? wp('25%') : wp('13%'),
		paddingRight: Device.isTablet ? wp('25%') : wp('13%')
	},
	//
	// Text
	//
	title: {
		fontWeight: 'bold',
		fontSize: hp('3%'),
		color: 'white',
		textAlign: 'center'
	},
	subText: {
		fontSize: hp('2%'),
		color: 'white',
		textAlign: 'center'
	},
	info: {
		fontSize: hp('2.3%'),
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold'
	},
	valide: {
		fontSize: hp('2.8%'),
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold'
	},
	help: {
		fontSize: hp('2%'),
		color: 'white',
		textAlign: 'center'
	},
	//
	// Code
	//
	codeInputContainer: {
		color: 'white',
		fontSize: hp('2%'),
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 'auto',
		marginBottom: 'auto',
		paddingBottom: hp('4%')
	},
	codeInputText: {
		height: hp('1.7%'),
		top: hp('4.7%'),
		color: 'white',
		fontSize: hp('1.5%'),
		fontWeight: 'bold',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 'auto',
		marginBottom: 'auto'
	},
	//
	// Bottom button
	//
	bottomContainer: {
		height: hp('8%')
	},
	button: {
		height: '100%',
		borderTopColor: 'white',
		borderTopWidth: 1
	},
	textButton: {
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 'auto',
		marginBottom: 'auto',
		textAlign: 'center',
		color: 'white',
		fontSize: hp('2.5%'),
		fontWeight: 'bold'
	},
	//
	// Utils
	//
	bold: {
		fontWeight: 'bold'
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
		myText: '',
		count: 0,
		code: '',
		state: false,
		fontLoaded: false,
		fetchedCode: ''
	};

	appWokeUp = url => {
		const signedOut = firebase.auth().currentUser ? false : true;
		if (!signedOut) return;
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
					routeName: 'ChangePassword',
					params: {
						params,
						PhoneOrEmail: this.props.navigation.getParam(
							'PhoneOrEmail',
							'default value'
						)
					}
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
		if (this.props.navigation.getParam('backWithLink', false))
			this.props.navigation.push('ChangePassword', {
				params: this.props.navigation.getParam('params', {})
			});
		await Font.loadAsync({
			'SF-pro': require('../../../assets/fonts/SF-Pro-Text-Regular.otf'),
			'Montserrat-light': require('../../../assets/fonts/Montserrat-Light.ttf')
		});
		this.setState({ fontLoaded: true });
		//fetch le code de confirmation pour le mail ou le phone
		this.setState({ fetchedCode: '888888' });
	}

	_onFulfill = code => {
		this.setState({ code: code, state: true });
	};

	checkCode = () => {
		const { code, fetchedCode, count } = this.state;
		if (code !== fetchedCode) {
			this.setState({ count: count + 1 });
			this.setState({
				myText: "Ceci n'est pas le bon code, réessaie",
				state: false
			});
			this.refs.code.clear();
			//bloquer au bout de 5 essaies
			if (count >= 1) this.setState({ myText: 'Réessaie encore !' });
		} else {
			//code correspond
			//suprimmer le code de la base de données
			this.setState({ count: 0 });
			this.setState({ myText: ' ' });
			this.props.navigation.push('ChangePassword', {
				PhoneOrEmail: this.props.navigation.getParam(
					'PhoneOrEmail',
					'default value'
				)
			});
		}
	};

	render() {
		const { goBack } = this.props.navigation;

		return (
			<View style={styles.screenContainer}>
				<LinearGradient
					colors={['#D94B4B', '#E06666', '#D94B4B']}
					style={{ flex: 1 }}
					start={{ x: 0, y: 0 }}
					end={{ x: 0, y: 1 }}
				>
					<BackButton text='Retour' goBack={goBack} />
					<View style={styles.mainContainer}>
						<Text style={styles.title}>
							J'ai oublié mon mot de passe
						</Text>
						<View style={{ paddingBottom: hp('3%') }} />
						<Text style={styles.subText}>
							Tu as reçu un <Text style={styles.bold}>mail </Text>
							. Clique sur le lien pour pouvoir changer ton mot de
							passe !
						</Text>
						<View style={{ paddingBottom: hp('4%') }} />
						<View style={styles.codeInputContainer}>
							<Text style={styles.codeInputText}>
								{this.state.myText}
							</Text>
						</View>
						<View style={{ paddingBottom: hp('3%') }} />
					</View>
					<TouchableOpacity
						onPress={() =>
							this.props.navigation.push('NeedHelp', {
								mailOrPhone: this.props.navigation.getParam(
									'PhoneOrEmail',
									'contact'
								)
							})
						}
					>
						<Text style={styles.help}>Besoin d'aide ?</Text>
					</TouchableOpacity>
					<View style={{ paddingBottom: hp('4%') }} />
					<View style={styles.bottomContainer}>
						<TouchableOpacity
							style={styles.button}
							onPress={() => {
								const url =
									Platform.OS === 'ios'
										? 'mail://'
										: 'https://mail.google.com/mail/u/0/#inbox';
								Linking.canOpenURL(url)
									.then(supported => {
										if (!supported) {
											console.log(
												"Can't handle url: " + url
											);
										} else {
											return Linking.openURL(url);
										}
									})
									.catch(err =>
										console.log('An error occurred', err)
									);
								// let actionNav = (actionNav = NavigationActions.navigate(
								// 	{
								// 		routeName: 'ChangePasswordAsso',
								// 		params: {
								// 			params: {},
								// 			PhoneOrEmail: this.props.navigation.getParam(
								// 				'PhoneOrEmail',
								// 				'default value'
								// 			)
								// 		}
								// 	}
								// ));
								// this.props.navigation.dispatch(actionNav);
							}}
						>
							<Text style={styles.textButton}>
								{'  '}Voir mes mails{' '}
							</Text>
						</TouchableOpacity>
					</View>
				</LinearGradient>
			</View>
		);
	}
}

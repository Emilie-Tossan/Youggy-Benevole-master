import React, { Component, Fragment } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	TextInput,
	StyleSheet
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import * as Font from 'expo-font';
import {
	Icon,
	TopNavigation,
	TopNavigationAction,
	IconRegistry,
	ApplicationProvider
} from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import BackButton from './Components/BackButton';
import firebase from 'react-native-firebase';

const Device = require('react-native-device-detection');
const XRegExp = require('xregexp');

const styles = StyleSheet.create({
	screenContainer: {
		width: '100%',
		height: '100%'
	},
	mainContainer: {
		// width: wp('100%'),
		marginTop: 'auto',
		marginBottom: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: Device.isTablet ? wp('25%') : wp('8%'),
		paddingRight: Device.isTablet ? wp('25%') : wp('8%')
	},
	title: {
		fontSize: hp('3%'),
		fontWeight: 'bold',
		color: 'white',
		paddingBottom: hp('6%')
	},
	info: {
		fontSize: hp('1.7%'),
		fontWeight: 'bold',
		color: 'white',
		paddingBottom: hp('3%')
	},
	line: {
		borderBottomColor: 'white',
		borderBottomWidth: 1,
		marginBottom: 5,
		color: 'white',
		fontSize: hp('2.2%'),
		fontWeight: 'bold',
		paddingBottom: 5
	},
	space: {
		paddingBottom: hp('6%')
	},
	space2: {
		paddingBottom: hp('0.1%')
	},
	button: {
		textAlign: 'center',
		fontSize: hp('2.5%'),
		fontWeight: 'bold',
		color: 'white'
	}
});

export default class App extends React.Component {
	static navigationOptions = {
		header: null
	};

	state = {
		fontLoaded: false,
		firstName: '',
		lastName: '',
		firstNameIsOk: false,
		lastNameIsOk: false,
		userRef: null
	};

	handleInput = (text, field) => {
		const regexNumber = /[0-9]/;
		const regexSymbol = XRegExp('\\pS', 'A');
		const regexSigne1 = XRegExp('[^A-Za-z- ’]');
		const regexSigne2 = XRegExp('[^\\pL- ’]');
		const regex1 = XRegExp('[- ’]');
		let noBullshit = true;
		for (let i = 0; noBullshit && i < text.length; i++) {
			const c = text[i];
			if (
				!(
					!c.match(regexNumber) &&
					(!regexSymbol.test(c) || regex1.test(c)) &&
					(!regexSigne2.test(c) || !regexSigne1.test(c))
				)
			)
				noBullshit = false;
		}
		if (noBullshit) {
			this.setState({
				[field]: text
			});
			if (text.length >= 2) this.setState({ [field + 'IsOk']: true });
			else this.setState({ [field + 'IsOk']: false });
		}
	};

	validationHandler = async () => {
		const {
			lastNameIsOk,
			lastName,
			firstNameIsOk,
			userRef,
			firstName
		} = this.state;
		const firestore = firebase.firestore();
		if (lastNameIsOk && firstNameIsOk) {
			//push the name to database on the hash
			try {
				const newEntryRef = await firestore
					.collection('benevoleUsers')
					.doc(userRef.uid);
				await firebase.auth().currentUser.updateProfile({
					displayName: `${firstName} ${lastName}`
				});
				await newEntryRef.set({
					lastName,
					firstName,
					verifiedPhone: false,
					verifiedEmail: false,
					signUpEnded: false
				});
				this.props.navigation.navigate('HowContact', { newEntryRef });
				//this.props.navigation.navigate('PasswordCreation');
			} catch (err) {
				console.log(err);
			}
		}
	};

	async componentDidMount() {
		const { goBack } = this.props.navigation;
		const auth = firebase.auth();
		await Font.loadAsync({
			'SF-pro': require('../../assets/fonts/SF-Pro-Text-Regular.otf'),
			'Montserrat-light': require('../../assets/fonts/Montserrat-Light.ttf')
		});
		this.setState({ fontLoaded: true });
		try {
			await auth.signInAnonymously();
			auth.onAuthStateChanged(user => {
				if (user) {
					this.setState({ userRef: user });
				} else {
					throw { error: true, message: 'no user !' };
				}
			});
		} catch (err) {
			console.log(err);
			goBack();
		}
	}

	render() {
		const { goBack } = this.props.navigation;
		const { firstName, lastName } = this.state;
		return (
			<ApplicationProvider mapping={mapping} theme={lightTheme}>
				<View style={styles.screenContainer}>
					<LinearGradient
						colors={['#D94B4B', '#E06666', '#D94B4B']}
						style={{ flex: 1 }}
						start={{ x: 0, y: 0 }}
						end={{ x: 0, y: 1 }}
					>
						<BackButton text='Connexion' goBack={goBack} />
						<View style={styles.mainContainer}>
							<Text style={styles.title}>
								Bienvenue sur
								{this.state.fontLoaded && (
									<Text
										style={{
											fontFamily: 'Montserrat-light'
										}}
									>
										{' '}
										YOUGGY{' '}
									</Text>
								)}{' '}
							</Text>
							<Text style={styles.info}>PRÉNOM</Text>
							<TextInput
								autoCorrect={false}
								style={styles.line}
								value={firstName}
								onChangeText={text =>
									this.handleInput(text, 'firstName')
								}
							/>
							<View style={styles.space2} />
							<Text style={styles.info}>NOM DE FAMILLE</Text>
							<TextInput
								autoCorrect={false}
								style={styles.line}
								value={lastName}
								onChangeText={text =>
									this.handleInput(text, 'lastName')
								}
							/>
							<View style={styles.space} />
							<TouchableOpacity onPress={this.validationHandler}>
								<Text style={styles.button}>Je continue</Text>
							</TouchableOpacity>
						</View>
					</LinearGradient>
				</View>
			</ApplicationProvider>
		);
	}
}

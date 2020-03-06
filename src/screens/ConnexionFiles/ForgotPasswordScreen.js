import React from 'react';
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

import BackButton from '../Components/BackButton';

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
		fontSize: hp('1.7%'),
		color: 'white',
		fontWeight: 'bold'
	},
	status: {
		height: hp('4%'),
		lineHeight: hp('1.8%'),
		letterSpacing: 0.2,
		fontWeight: 'bold',
		fontSize: hp('1.8%'),
		color: 'white',
		textAlign: 'center'
	},
	//
	// Input
	//
	inputZone: {
		fontSize: hp('2.5%'),
		color: 'white',
		fontWeight: 'bold',
		height: hp('6%'),
		borderBottomWidth: 1,
		borderBottomColor: 'white',
		paddingLeft: wp('2%'),
		paddingRight: wp('2%')
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
		fontLoaded: false,
		entry: '',
		regexNumber: /^[0-9]{10}$/g,
		regexEmail: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		status: true
	};
	async componentDidMount() {
		await Font.loadAsync({
			'SF-pro': require('../../../assets/fonts/SF-Pro-Text-Regular.otf'),
			'Montserrat-light': require('../../../assets/fonts/Montserrat-Light.ttf')
		});
		this.setState({ fontLoaded: true });
	}

	whatType = async () => {
		const { entry, regexEmail, regexNumber } = this.state;
		if (regexNumber.test(entry)) {
			this.props.navigation.navigate('ChangeVerification', {
				SmsOrMail: 'SMS',
				entry: entry,
				PhoneOrEmail: 'numéro de téléphone'
			});
		} else if (regexEmail.test(entry)) {
			try {
				await firebase.auth().sendPasswordResetEmail(entry);
				this.props.navigation.navigate('ChangeVerification', {
					SmsOrMail: 'e-mail',
					entry: entry,
					PhoneOrEmail: 'adresse e-mail'
				});
			} catch (error) {
				console.log(error);
			}
		} else {
			this.setState({ status: false });
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
					<BackButton text='retour' goBack={goBack} />
					<View style={styles.mainContainer}>
						<Text style={styles.title}>
							J'ai oublié mon mot de passe
						</Text>
						<View style={{ paddingBottom: hp('3%') }} />
						<Text style={styles.subText}>
							On va te laisser la possibilité de mettre à jour{' '}
							<Text style={styles.bold}>ton mot de passe </Text>:
							entre ton{' '}
							<Text style={styles.bold}>adresse e-mail</Text>.
						</Text>
						<View style={{ paddingBottom: hp('4%') }} />
						<Text style={styles.info}>ADRESSE E-MAIL</Text>
						<TextInput
							style={styles.inputZone}
							autoCorrect={false}
							autoCapitalize='none'
							secureTextEntry={this.state.hide1}
							onChangeText={text =>
								this.setState({ entry: text })
							}
							value={this.state.entry}
						/>
						<View style={{ paddingBottom: hp('1%') }} />
						{this.state.status ? (
							<View style={{ height: hp('4%') }} />
						) : (
							<Text style={styles.status}>
								Entre un e-mail valide.
							</Text>
						)}
						<View style={{ paddingBottom: hp('1%') }} />

						<TouchableOpacity onPress={() => this.whatType()}>
							<Text style={styles.title}>Je continue</Text>
						</TouchableOpacity>
					</View>
				</LinearGradient>
			</View>
		);
	}
}

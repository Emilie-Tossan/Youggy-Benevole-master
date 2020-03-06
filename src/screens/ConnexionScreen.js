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

import BackButton from './Components/BackButton';

import OeilOuvert from '../../assets/svg-js/oeil-ouvert';
import OeilBarre from '../../assets/svg-js/oeil-barre';
import Next from '../../assets/svg-js/next';
import Back from '../../assets/svg-js/back';

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
		fontSize: hp('3%'),
		fontWeight: 'bold',
		color: 'white',
		paddingBottom: hp('4%')
	},
	info: {
		fontSize: hp('1.7%'),
		fontWeight: 'bold',
		color: 'white',
		paddingBottom: hp('1%')
	},
	forgotPassword: {
		top: hp('0.1%'),
		fontSize: hp('1.8%'),
		fontWeight: '400',
		color: 'white',
		paddingBottom: hp('1%')
	},
	idStatus: {
		height: hp('3.2%'),
		fontSize: hp('1.5%'),
		fontWeight: 'bold',
		color: 'white',
		paddingBottom: hp('3%')
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
	// Swipe Container
	//
	swipeContainer: {
		left: hp('1.2%'),
		top: Device.isTablet ? hp('-1%') : hp('-4%'),
		flexDirection: 'row',
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	swipeTextContainer: {
		paddingRight: 12,
		textAlign: 'center'
	},
	swipeText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: hp('1.7%'),
		textAlign: 'center'
	},
	swipeImageContainer: {
		// top: Device.isTablet ? hp('-2%') : hp('-1%'),
		height: hp('6.4%')
	},
	swipeImageContainer2: {
		top: hp('-0.1%'),
		paddingRight: 13,
		height: hp('6.4%')
	},
	suivant: {
		top: hp('0.5%'),
		height: hp('1.2%'),
		width: hp('1.2%') * 2
	},
	//
	// Utils
	//
	space: {
		paddingBottom: hp('6%')
	},
	space2: {
		paddingBottom: hp('1%')
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
		this.state = {
			//
			// Affichage mdp
			//
			source1: <OeilBarre style={styles.oeil} />,
			source2: <OeilBarre style={styles.oeil} />,
			sourceState1: 1,
			sourceState2: 1,
			type: '',
			hide1: true,
			hide2: true,
			top1: hp('2%'),
			top2: hp('2%'),
			//
			// Check Id
			//
			useNameY: '',
			passwordY: '',
			hideY: true,
			useNameA: '',
			passwordA: '',
			hideA: true,
			fontLoaded: false
		};
	}

	static navigationOptions = {
		header: null
	};

	async componentDidMount() {
		await Font.loadAsync({
			'SF-pro': require('../../assets/fonts/SF-Pro-Text-Regular.otf'),
			'Montserrat-light': require('../../assets/fonts/Montserrat-Light.ttf')
		});
		this.setState({ fontLoaded: true });
	}

	updateSource = type => {
		this.state.type = type;
		if (type === '1') {
			if (this.state.sourceState1 == 0) {
				this.setState({ hide1: true });
				this.setState({ sourceState1: 1 });
				this.setState({ source1: <OeilBarre style={styles.oeil} /> });
			} else if (this.state.sourceState1 == 1) {
				this.setState({ hide1: false });
				this.setState({ top1: hp('2%') });
				this.setState({ sourceState1: 0 });
				this.setState({ source1: <OeilOuvert style={styles.oeil} /> });
			}
		}
		if (type === '2') {
			if (this.state.sourceState2 == 0) {
				this.setState({ hide2: true });
				this.setState({ sourceState2: 1 });
				this.setState({ source2: <OeilBarre style={styles.oeil} /> });
			} else if (this.state.sourceState2 == 1) {
				this.setState({ hide2: false });
				this.setState({ top2: hp('2%') });
				this.setState({ sourceState2: 0 });
				this.setState({ source2: <OeilOuvert style={styles.oeil} /> });
			}
		}
	};

	CheckPassword = async singInFor => {
		if (!singInFor) return;
		const { useNameA, passwordA, useNameY, passwordY } = this.state;
		let mail = '';
		let password = '';
		if (singInFor === 'association') {
			mail = useNameY;
			password = passwordY;
		} else if (singInFor === 'benevole') {
			mail = useNameA;
			password = passwordA;
		} else return;
		if (mail === '' || password === '') return;
		try {
			//console.log(mail, password);
			const cred = await firebase
				.auth()
				.signInWithEmailAndPassword(mail, password);
			//console.log(cred);
			const { uid } = firebase.auth().currentUser;

			const snap = await firebase
				.firestore()
				.collection('benevoleUsers')
				.doc(uid)
				.get();
			if (!snap.data().lastName) await firebase.auth().signOut();

			// console.log(firebase.auth().currentUser);

			// if (singInFor === "benevole") {
			//     this.props.navigation.popToTop();
			//     this.props.navigation.navigate("BottomNav");
			// } else if (singInFor === "benevole")
			//     this.props.navigation.navigate("Profile");
		} catch (err) {
			console.log(err);
			if (singInFor === 'benevole') this.setState({ hideY: false });
			// else if (singInFor === "association") this.setState({ hideA: false });
		}
	};

	render() {
		const { goBack } = this.props.navigation;
		const { useNameA, passwordA } = this.state;

		return (
			<Fragment>
				{/* // */}
				{/* // */}
				{/* // */}
				{/* // */}
				{/* // */}
				<View style={styles.screenContainer}>
					<LinearGradient
						colors={['#D94B4B', '#E06666']}
						style={{ flex: 1 }}
						start={{ x: 0, y: 0 }}
						end={{ x: 0, y: 1 }}
					>
						{/* // */}
						<View style={{ paddingBottom: hp('2%') }} />
						<BackButton text='Inscription' goBack={goBack} />
						{/* // */}
						<View style={styles.mainContainer}>
							<Text style={styles.title}>
								<Text style={styles.bold}>
									Je propose mon aide
								</Text>
								{'\n'}
								{this.state.fontLoaded && (
									<Text
										style={{
											fontFamily: 'Montserrat-light'
										}}
									>
										en tant que bénévole
									</Text>
								)}
							</Text>
							{/* // */}
							{/* // */}
							{/* // */}
							<Text style={styles.info}>ADRESSE E-MAIL</Text>
							<View style={styles.inputContainer}>
								<View style={styles.inputTextContainer}>
									<TextInput
										autoCorrect={false}
										autoCapitalize='none'
										style={styles.inputText}
										onChangeText={text =>
											this.setState({
												useNameA: text
											})
										}
										value={useNameA}
									/>
								</View>
							</View>
							<View style={{ paddingBottom: 5 }} />
							{/* // */}
							{/* // */}
							{/* // */}
							<Text style={styles.info}>MOT DE PASSE</Text>
							<View style={styles.inputContainer}>
								<View style={styles.inputTextContainer}>
									<TextInput
										autoCorrect={false}
										autoCapitalize='none'
										secureTextEntry={this.state.hide1}
										style={styles.inputText}
										onChangeText={text =>
											this.setState({
												passwordA: text
											})
										}
										value={passwordA}
									/>
								</View>
								<TouchableOpacity
									onPress={type => this.updateSource('1')}
									style={{ top: this.state.top1 }}
								>
									{this.state.source1}
								</TouchableOpacity>
							</View>
							{/* // */}
							{/* // */}
							{/* // */}
							<TouchableOpacity
								onPress={() =>
									this.props.navigation.navigate(
										'ForgotPassword'
									)
								}
							>
								<Text style={styles.forgotPassword}>
									Mot de passe oublié ?
								</Text>
							</TouchableOpacity>
							{/* // */}
							{/* // */}
							{/* // */}
							{this.state.hideY ? (
								<View style={{ height: hp('4%') }} />
							) : (
								<Text style={styles.status}>
									Votre identifiant ou votre mot de passe est
									incorrect.
								</Text>
							)}
							<View style={{ height: hp('4%') }} />
							<TouchableOpacity
								onPress={() => this.CheckPassword('benevole')}
							>
								<Text style={styles.button}>
									Je me connecte
								</Text>
							</TouchableOpacity>
						</View>
					</LinearGradient>
				</View>
			</Fragment>
		);
	}
}

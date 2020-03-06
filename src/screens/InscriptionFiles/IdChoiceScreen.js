import React, { Component, Fragment } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Button,
	TouchableOpacity
} from 'react-native';

import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import CountryPicker from 'react-native-country-picker-modal';

import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import BackButton from '../Components/BackButton';

import Selection from '../../../assets/svg-js/selection';
import Selectionne from '../../../assets/svg-js/selectionne';
import Suivant from '../../../assets/svg-js/suivant';

const Device = require('react-native-device-detection');

const styles = StyleSheet.create({
	screenContainer: {
		width: '100%',
		height: '100%'
	},
	mainContainer: {
		top: hp('5%'),
		marginTop: 'auto',
		marginBottom: 'auto',
		marginRight: 'auto',
		marginLeft: 'auto',
		width: '100%',
		paddingLeft: Device.isTablet ? wp('25%') : wp('8%'),
		paddingRight: Device.isTablet ? wp('25%') : wp('8%'),
		textAlign: 'center'
	},
	country: {
		paddingTop: hp('5%'),
		color: 'white',
		fontWeight: 'bold',
		fontSize: hp('2.5%')
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: hp('2.5%'),
		paddingBottom: hp('4%')
	},
	subText: {
		color: 'white',
		fontSize: hp('1.9%'),
		textAlign: 'center',
		paddingBottom: hp('2%')
	},
	title: {
		fontSize: hp('3%'),
		fontWeight: 'bold',
		color: 'white',
		paddingBottom: hp('4%'),
		textAlign: 'center'
	},
	info: {
		fontSize: hp('1.5%'),
		color: 'white',
		paddingBottom: hp('3%')
	},
	//
	// SELECTION
	//
	selectContainer: {
		height: 32,
		paddingRight: wp('9%'),
		flexDirection: 'row',
		paddingBottom: hp('6%')
	},
	selectTextContainer: {
		width: '100%',
		height: 32,
		textAlign: 'right'
	},
	selectImageContainer: {
		height: hp('3.5%'),
		width: hp('3.5%')
	},
	selectImage: {
		height: hp('3.5%'),
		width: hp('3.5%')
	},
	//
	// SUIVANT
	//
	nextContainer: {
		top: hp('4%'),

		paddingLeft: wp('10%'),
		paddingRight: wp('10%'),
		width: '100%',
		height: '10%',
		flexDirection: 'row-reverse'
	},
	nextText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: Device.isTablet ? 20 : 15
	},
	nextTextContainer: {
		paddingRight: 7
	},
	nextImageContainer: {
		top: Device.isTablet ? 7 : 3
	},
	nextImage: {
		height: 12,
		width: 8
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
		this.state = {
			source1: <Selection style={styles.selectImage} />,
			source2: <Selection style={styles.selectImage} />,
			source3: <Selection style={styles.selectImage} />,
			sourceState1: 0,
			sourceState2: 0,
			sourceState3: 0,
			type: '',
			cca2: 'FR',
			callingCode: '33',
			color: '#FFFFFF'
			// callingCode
		};
	}

	state = {
		fontLoaded: false
	};

	async componentDidMount() {
		await Font.loadAsync({
			'SF-pro': require('../../../assets/fonts/SF-Pro-Text-Regular.otf'),
			'Montserrat-light': require('../../../assets/fonts/Montserrat-Light.ttf')
		});
		this.setState({ fontLoaded: true });
	}

	static navigationOptions = {
		header: null
	};

	onSelect = country => {
		console.log(country);
		// setCountryCode(country.cca2);
		// setCountry(country);
		this.setState({
			cca2: country.cca2,
			callingCode: country.callingCode[0]
		});
	};

	updateSource = type => {
		this.setState({ type: type });
		if (type === "carte d'identité") {
			if (this.state.sourceState1 == 0) {
				this.setState({
					source1: <Selectionne style={styles.selectImage} />,
					source2: <Selection style={styles.selectImage} />,
					source3: <Selection style={styles.selectImage} />,
					sourceState1: 1
				});
			} else if (this.state.sourceState1 == 1) {
				this.setState({
					source1: <Selection style={styles.selectImage} />,
					sourceState1: 0,
					type: ''
				});
			}
		} else {
			this.setState({
				source1: <Selection style={styles.selectImage} />,
				sourceState1: 0
			});
		}
		if (type === 'passeport') {
			if (this.state.sourceState2 == 0) {
				this.setState({
					source2: <Selectionne style={styles.selectImage} />,
					source1: <Selection style={styles.selectImage} />,
					source3: <Selection style={styles.selectImage} />,
					sourceState2: 1
				});
			} else if (this.state.sourceState2 == 1) {
				this.setState({
					source2: <Selection style={styles.selectImage} />,
					sourceState2: 0,
					type: ''
				});
			}
		} else {
			this.setState({
				source2: <Selection style={styles.selectImage} />,
				sourceState2: 0
			});
		}
		if (type === 'permis de conduire') {
			if (this.state.sourceState3 == 0) {
				this.setState({
					source3: <Selectionne style={styles.selectImage} />,
					source2: <Selection style={styles.selectImage} />,
					source1: <Selection style={styles.selectImage} />,
					sourceState3: 1
				});
			} else if (this.state.sourceState3 == 1) {
				this.setState({
					source3: <Selection style={styles.selectImage} />,
					sourceState3: 0,
					type: ''
				});
			}
		} else {
			this.setState({
				source3: <Selection style={styles.selectImage} />,
				sourceState3: 0
			});
		}
	};

	render() {
		const { goBack } = this.props.navigation;

		return (
			<View style={styles.screenContainer}>
				<LinearGradient
					colors={[ '#D94B4B', '#E06666', '#D94B4B' ]}
					style={{ flex: 1 }}
					start={{ x: 0, y: 0 }}
					end={{ x: 0, y: 1 }}
				>
					<BackButton text="Retour" goBack={goBack} />
					<View style={styles.mainContainer}>
						<Text style={styles.title}>
							Je sélectionne un type d'identité à ajouter
						</Text>
						<Text style={styles.subText}>
							La vérification d'identité est là pour garantir la{' '}
							<Text style={styles.bold}>sécurité</Text> de la
							plateforme{' '}
							{this.state.fontLoaded && (
								<Text
									style={{
										fontFamily: 'Montserrat-light'
									}}
								>
									YOUGGY
								</Text>
							)}.
						</Text>
						<Text style={styles.subText}>
							Votre pièce d'identité ne sera vue ni par les
							bénévoles ni par les associations.
						</Text>
						<CountryPicker
							// withFilter={true}
							withFlag={true}
							withCountryNameButton={true}
							// withCallingCodeButton={true}
							withAlphaFilter={true}
							// withCallingCode={true}
							withEmoji={true}
							onSelect={this.onSelect}
							// visible
							countryCode={this.state.cca2}
							translation={'fra'}
							theme={{
								onBackgroundTextColor: this.state.color
							}}
							onOpen={() => this.setState({ color: '#000000' })}
							onClose={() =>
								this.setState({
									color: '#FFFFFF'
								})}
						/>
						<Text style={styles.info}>PAYS DE PROVENANCE</Text>
						<View style={styles.selectContainer}>
							<View style={styles.selectTextContainer}>
								<Text style={styles.text}>
									Carte d'identité
								</Text>
							</View>
							<TouchableOpacity
								onPress={() =>
									this.updateSource("carte d'identité")}
								style={styles.selectImageContainer}
							>
								{this.state.source1}
							</TouchableOpacity>
						</View>
						<View style={styles.selectContainer}>
							<View style={styles.selectTextContainer}>
								<Text style={styles.text}>Passeport</Text>
							</View>
							<TouchableOpacity
								onPress={() => this.updateSource('passeport')}
								style={styles.selectImageContainer}
							>
								{this.state.source2}
							</TouchableOpacity>
						</View>
						<View style={styles.selectContainer}>
							<View style={styles.selectTextContainer}>
								<Text style={styles.text}>
									Permis de conduire
								</Text>
							</View>
							<TouchableOpacity
								onPress={() =>
									this.updateSource('permis de conduire')}
								style={styles.selectImageContainer}
							>
								{this.state.source3}
							</TouchableOpacity>
						</View>
					</View>
					{this.state.type != '' ? (
						<TouchableOpacity
							style={styles.nextContainer}
							onPress={() =>
								this.props.navigation.navigate('TakePhoto', {
									type: this.state.type,
									side: 'recto',
									pronom:
										this.state.type === "carte d'identité"
											? 'ta'
											: 'ton',
									pronom2:
										this.state.type === "carte d'identité"
											? 'ma'
											: 'mon',
									pronom3:
										this.state.type === "carte d'identité"
											? 'elle'
											: 'il'
								})}
						>
							<View style={styles.nextImageContainer}>
								<Suivant style={styles.nextImage} />
							</View>
							<View style={styles.nextTextContainer}>
								<Text style={styles.nextText}>
									Suivant{'  '}
								</Text>
							</View>
						</TouchableOpacity>
					) : (
						<Text style={styles.nextContainer} />
					)}
				</LinearGradient>
			</View>
		);
	}
}

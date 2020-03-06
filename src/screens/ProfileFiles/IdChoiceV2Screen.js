import React, { Component, Fragment } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity
} from 'react-native';

import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import CountryPicker from 'react-native-country-picker-modal';

import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { Button, Divider } from 'react-native-elements';

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
		marginRight: 'auto',
		marginLeft: 'auto',
		marginTop: 'auto',
		marginBottom: 'auto',
		width: '100%',
		paddingLeft: Device.isTablet ? wp('25%') : wp('8%'),
		paddingRight: Device.isTablet ? wp('25%') : wp('8%'),
		textAlign: 'center'
	},
	country: {
		paddingTop: hp('5%'),
		color: 'black',
		fontWeight: 'bold',
		fontSize: hp('2.5%')
	},
	text: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: hp('2.5%'),
		paddingBottom: hp('4%')
	},
	subText: {
		color: 'black',
		fontSize: hp('1.9%'),
		fontWeight: '300',
		textAlign: 'left'
	},
	title: {
		fontSize: hp('3%'),
		fontWeight: 'bold',
		color: '#E06666',
		paddingBottom: hp('4%'),
		textAlign: 'center'
	},
	info: {
		fontSize: hp('1.5%'),
		color: 'black'
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
		top: hp('10%'),
		left: hp('5%'),
		paddingLeft: wp('10%'),
		paddingRight: wp('10%'),
		width: '100%',
		height: hp('20%'),
		flexDirection: 'row-reverse'
	},
	nextText: {
		color: 'black',
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
			CarteBackground: 'white',
			PasseportBackground: 'white',
			PermisBackground: 'white',
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
		// console.log(country);
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
					CarteBackground: '#FAE0E2',
					PermisBackground: 'white',
					PasseportBackground: 'white',
					sourceState1: 1
				});
			} else if (this.state.sourceState1 == 1) {
				this.setState({
					CarteBackground: 'white',
					sourceState1: 0,
					type: ''
				});
			}
		} else {
			this.setState({
				CarteBackground: 'white',
				sourceState1: 0
			});
		}
		if (type === 'passeport') {
			if (this.state.sourceState2 == 0) {
				this.setState({
					PasseportBackground: '#FAE0E2',
					PermisBackground: 'white',
					CarteBackground: 'white',
					sourceState2: 1
				});
			} else if (this.state.sourceState2 == 1) {
				this.setState({
					PasseportBackground: 'white',
					sourceState2: 0,
					type: ''
				});
			}
		} else {
			this.setState({
				PasseportBackground: 'white',

				sourceState2: 0
			});
		}
		if (type === 'permis de conduire') {
			if (this.state.sourceState3 == 0) {
				this.setState({
					PermisBackground: '#FAE0E2',
					CarteBackground: 'white',
					PasseportBackground: 'white',
					sourceState3: 1
				});
			} else if (this.state.sourceState3 == 1) {
				this.setState({
					PermisBackground: 'white',
					sourceState3: 0,
					type: ''
				});
			}
		} else {
			this.setState({
				PermisBackground: 'white',
				sourceState3: 0
			});
		}
	};

	render() {
		const { goBack } = this.props.navigation;

		const {
			CarteBackground,
			PasseportBackground,
			PermisBackground
		} = this.state;

		return (
			<View style={styles.screenContainer}>
				<View style={{ top: hp('3%'), paddingBottom: hp('10%') }}>
					<BackButton text='Retour' color='black' goBack={goBack} />
				</View>

				<View style={styles.mainContainer}>
					<Text style={styles.title}>
						Je sélectionne un type d'identité à envoyer
					</Text>
					<View
						style={{
							width: '90%',
							marginLeft: 'auto',
							marginRight: 'auto'
						}}
					>
						<Text style={styles.subText}>
							Je confirme mon identité en envoyant une photo de
							celle-ci. Il s'agit d'une procédure de sécurité:{' '}
							{this.state.fontLoaded && (
								<Text
									style={{
										fontFamily: 'Montserrat-light'
									}}
								>
									YOUGGY
								</Text>
							)}{' '}
							et les associations, n'auront pas libre accès a ces
							informations.
						</Text>
						<View style={{ paddingBottom: hp('4%') }} />
						<Text style={styles.info}>PAYS DE PROVENANCE</Text>
						<View style={{ paddingBottom: hp('1%') }} />
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
								onBackgroundTextColor: '#000'
							}}
							// onOpen={() => this.setState({ color: '#000000' })}
							// onClose={() =>
							// 	this.setState({
							// 		color: '#FFFFFF'
							// 	})}
						/>
						<View style={{ paddingBottom: hp('2%') }} />

						<Divider style={{ backgroundColor: '#E5E5E5' }} />
						<View style={{ paddingBottom: hp('2%') }} />

						<Button
							title="Carte d'identité"
							type='outline'
							onPress={() => {
								this.updateSource("carte d'identité");
								this.setState(
									CarteBackground === 'white'
										? { CarteBackground: '#FAE0E2' }
										: { CarteBackground: 'white' }
								);
							}}
							containerStyle={{
								paddingTop: hp('1%')
								// width: '60%'
							}}
							buttonStyle={{
								backgroundColor: this.state.CarteBackground,
								borderColor: '#E06666',
								borderRadius: 100
							}}
							titleStyle={{
								color: '#E06666'
							}}
						/>
						<View style={{ paddingBottom: hp('1%') }} />
						<Button
							title='Passeport'
							type='outline'
							onPress={() => {
								this.updateSource('passeport');
								this.setState(
									PasseportBackground === 'white'
										? { PasseportBackground: '#FAE0E2' }
										: { PasseportBackground: 'white' }
								);
							}}
							containerStyle={{
								paddingTop: hp('1%')
								// width: '60%'
							}}
							buttonStyle={{
								backgroundColor: this.state.PasseportBackground,
								borderColor: '#E06666',
								borderRadius: 100
							}}
							titleStyle={{
								color: '#E06666'
							}}
						/>
						<View style={{ paddingBottom: hp('1%') }} />
						<Button
							title='Permis de conduire'
							type='outline'
							onPress={() => {
								this.updateSource('permis de conduire');
								this.setState(
									PermisBackground === 'white'
										? { PermisBackground: '#FAE0E2' }
										: { PermisBackground: 'white' }
								);
							}}
							containerStyle={{
								paddingTop: hp('1%')
								// width: '60%'
							}}
							buttonStyle={{
								backgroundColor: this.state.PermisBackground,
								borderColor: '#E06666',
								borderRadius: 100
							}}
							titleStyle={{
								color: '#E06666'
							}}
						/>
						<View style={{ paddingBottom: hp('3%') }} />
						<Divider style={{ backgroundColor: '#E5E5E5' }} />
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
								})
							}
						>
							<View style={styles.nextImageContainer}>
								<Suivant
									style={styles.nextImage}
									color='#000'
								/>
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
				</View>
			</View>
		);
	}
}

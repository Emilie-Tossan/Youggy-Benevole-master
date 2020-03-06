import React, { Component, Fragment } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Button,
	TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import BackButton from '../Components/BackButton';

import Photo from '../../../assets/svg-js/photo';

const Device = require('react-native-device-detection');

import CameraContainer from '../Components/CameraContainer';

const styles = StyleSheet.create({
	screenContainer: {
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0)'
	},
	mainContainer: {
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: wp('3%'),
		paddingRight: wp('3%'),
		textAlign: 'center'
	},
	pictureZone: {
		paddingTop: hp('2%'),
		paddingBottom: hp('2%'),
		marginLeft: 'auto',
		marginRight: 'auto',
		height: hp('55%'),
		width: wp('90%'),
		borderColor: 'white',
		backgroundColor: 'rgba(255,255,255,0)',
		borderWidth: 1,
		borderRadius: 20
	},
	//
	// Text
	//
	text: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: hp('2%'),
		opacity: 1
	},
	subText: {
		color: 'white',
		fontSize: hp('2%'),
		textAlign: 'center',
		paddingBottom: hp('2%'),
		opacity: 1
	},
	title: {
		fontSize: hp('2.5%'),
		color: 'white',
		paddingBottom: hp('3%'),
		textAlign: 'center',
		opacity: 1
	},
	//
	// Image
	//
	imageContainer: {
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingTop: hp('2%')
	},
	image: {
		height: wp('5%'),
		width: wp('5%') * 1.15
	},
	//
	// Utils
	//
	bold: {
		fontWeight: 'bold'
	},
	//
	//
	// TABLET
	//
	//
	screenContainerTablet: {
		width: '100%',
		height: '100%',

		backgroundColor: 'rgba(0,0,0,0)'
	},
	mainContainerTablet: {
		top: hp('5%'),
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: wp('8%'),
		paddingRight: wp('8%'),
		textAlign: 'center'
	},
	//
	// Text
	//
	subTextTablet: {
		color: 'white',
		fontSize: hp('2%'),
		textAlign: 'center',
		paddingBottom: hp('2%'),
		letterSpacing: 1
	},
	//
	// Image
	//
	imageContainerTablet: {
		top: hp('82%'),
		marginLeft: 'auto',
		marginRight: 'auto',
		height: wp('5%'),
		width: wp('5%') * 1.15
	}
});

export default class App extends React.Component {
	static navigationOptions = {
		header: null
	};

	state = {
		photoVerso: null,
		photoRecto: null
	};

	takeCameraRef = ref => {
		this.camera = ref;
	};

	takePhoto = async () => {
		const { push, getParam } = this.props.navigation;
		if (this.camera) {
			let photo = await this.camera.takePictureAsync();
			push('CheckDiplome', {
				photo: photo
			});
		}
	};

	render() {
		const { goBack, getParam } = this.props.navigation;
		if (Device.isTablet) {
			return (
				<View>
					<CameraContainer takeCameraRef={this.takeCameraRef}>
						<View style={styles.screenContainerTablet}>
							<BackButton text='Retour' goBack={goBack} />
							<View style={styles.mainContainerTablet}>
								<Text style={styles.subTextTablet}>
									Prends en photo le{' '}
									<Text style={styles.bold}>
										{this.props.navigation.getParam(
											'side',
											'default value'
										)}
									</Text>{' '}
									de{' '}
									{this.props.navigation.getParam(
										'pronom',
										'default value'
									)}{' '}
									<Text style={styles.bold}>
										{this.props.navigation.getParam(
											'type',
											'default value'
										)}
									</Text>
								</Text>
								<TouchableOpacity
									style={styles.imageContainerTablet}
									onPress={async () => {
										await this.takePhoto();
									}}
								>
									<Photo />
								</TouchableOpacity>
							</View>
						</View>
					</CameraContainer>
				</View>
			);
		} else {
			return (
				<View>
					<CameraContainer takeCameraRef={this.takeCameraRef}>
						<View style={styles.screenContainer}>
							<View style={{ paddingBottom: hp('10%') }}>
								<BackButton text='Retour' goBack={goBack} />
							</View>
							<View style={styles.mainContainer}>
								<Text style={styles.title}>
									Je fais apparaître mon
									<Text style={{ fontWeight: 'bold' }}>
										{' '}
										diplôme
									</Text>{' '}
									dans le cadre.
								</Text>
								<View style={styles.pictureZone} />
								<TouchableOpacity
									style={styles.imageContainer}
									onPress={async () => {
										await this.takePhoto();
									}}
								>
									<Photo />
								</TouchableOpacity>
							</View>
						</View>
					</CameraContainer>
				</View>
			);
		}
	}
}

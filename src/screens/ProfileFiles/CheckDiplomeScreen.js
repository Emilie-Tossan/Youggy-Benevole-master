import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import BackButton from '../Components/BackButton';
import Validation from '../Components/ValidationComponentScreen';

import Photo from '../../../assets/svg-js/photo';
import ValiderLaPhoto from '../../../assets/svg-js/valider_la_photo';

import firebase from 'react-native-firebase';

const Device = require('react-native-device-detection');

const styles = StyleSheet.create({
	screenContainer: {
		width: '100%',
		height: '100%'
	},
	mainContainer: {
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: wp('3%'),
		paddingRight: wp('3%'),
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,0)'
	},
	pictureZone: {
		paddingTop: hp('1%'),
		paddingBottom: hp('2%'),
		marginLeft: 'auto',
		marginRight: 'auto',
		height: hp('55%'),
		width: wp('90%'),
		borderColor: 'white',
		backgroundColor: 'rgba(255,255,255,0)',
		// opacity: 0,
		borderWidth: 1,
		borderRadius: 20
	},
	//
	// Text
	//
	text: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: hp('2.5%')
	},
	subText: {
		color: 'white',
		fontSize: hp('2.5%'),
		textAlign: 'center',
		paddingBottom: hp('2%'),
		opacity: 0
	},
	title: {
		fontSize: hp('3%'),
		fontWeight: 'bold',
		color: 'white',
		paddingBottom: hp('6%'),

		textAlign: 'center'
	},
	rowContainer: {
		paddingTop: hp('2%'),

		flexDirection: 'row',
		justifyContent: 'center'
	},
	firstContainer: {
		width: wp('40%'),
		top: '-3%',
		paddingRight: 10,
		paddingLeft: 10
	},
	imagePhotoContainer: {
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingBottom: 5,
		height: 20,
		width: 23
	},
	imagePhoto: {
		// marginLeft: 'auto',
		// marginRight: 'auto',
		// top: hp('-0.1%'),
		height: wp('5%'),
		width: wp('5%') * 1.15
	},
	imageValidate: {
		// top: hp('-0.5%'),
		// marginLeft: 'auto',
		// marginRight: 'auto',
		height: wp('5%') * 1.15,
		width: wp('5%')
	},
	textContainer: {
		marginLeft: 'auto'
	},
	descContainer: {
		width: 200,
		paddingLeft: 20,
		paddingRight: 20
	},
	desc: {
		textAlign: 'center',
		color: 'white',
		fontWeight: 'bold',
		fontSize: 12,
		top: hp('1%')
	},
	//
	//
	// TABLET
	//
	//
	mainContainerTablet: {
		top: hp('3.4%'),
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: wp('8%'),
		paddingRight: wp('8%'),
		textAlign: 'center'
	},
	subTextTablet: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
		paddingBottom: hp('2%'),
		letterSpacing: 1
	},
	imageContainerTablet: {
		paddingTop: hp('2%'),
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingBottom: hp('1%')
	},
	imagePhotoTablet: {
		marginLeft: 'auto',
		marginRight: 'auto',
		top: hp('-0.1%'),
		height: wp('5%'),
		width: wp('5%') * 1.15
	},
	imageValidateTablet: {
		top: hp('-0.5%'),
		marginLeft: 'auto',
		marginRight: 'auto',
		height: wp('5%') * 1.15,
		width: wp('5%')
	},
	//
	//
	// UTILS
	//
	//
	bold: {
		fontWeight: 'bold'
	}
});

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			animation: false,
			photo: null
		};
	}
	static navigationOptions = {
		header: null
	};

	Capitalize(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	componentDidMount() {
		const photo = this.props.navigation.getParam('photo', null);
		this.setState({ photo });
	}

	savePhoto = async () => {
		const { photo } = this.state;
		//upload the image to the store
		if (!photo) return;

		try {
			const userUid = firebase.auth().currentUser.uid;
			const storeRef = firebase.storage().ref(`users/${userUid}`);
			storeRef.child('diplomePhoto').putFile(photo.uri);
			this.setState({ animation: true });
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		const { goBack } = this.props.navigation;
		//console.log(this.props.navigation.getParam('photo', 'default value'));
		if (Device.isTablet) {
			return (
				<View>
					<View>
						<Validation
							display={this.state.animation}
							text='Merci !'
							next={() => {
								this.setState({ animation: false });
								this.props.navigation.pop(2);
							}}
							side='profile'
							typo='#D94B4B'
						/>
						<Image
							source={this.props.navigation.getParam(
								'photo',
								'default value'
							)}
							style={{
								width: '100%',
								height: '100%',
								opacity: 1,
								position: 'absolute'
							}}
						/>
						<BackButton text='Retour' goBack={goBack} />
						<View style={styles.mainContainerTablet}>
							<Text style={styles.subTextTablet}>
								Le{' '}
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
								</Text>{' '}
								est-il bien{' '}
								<Text style={styles.bold}>visible</Text> ?
							</Text>
							<View style={styles.rowContainer}>
								<View>
									<TouchableOpacity
										style={styles.firstContainer}
										onPress={() =>
											this.props.navigation.goBack()
										}
									>
										<View
											style={styles.imagePhotoContainer}
										>
											<Photo style={styles.imagePhoto} />
										</View>
										<Text style={styles.desc}>
											Prendre une nouvelle photo
										</Text>
									</TouchableOpacity>
								</View>
								<View>
									<TouchableOpacity
										style={styles.firstContainer}
										onPress={this.savePhoto}
									>
										<View
											style={styles.imagePhotoContainer}
										>
											<ValiderLaPhoto
												style={styles.imageValidate}
											/>
										</View>
										<Text style={styles.desc}>
											La photo est parfaite
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
				</View>
			);
		} else {
			return (
				<View
					style={
						!this.state.animation
							? {
									...styles.screenContainer
							  }
							: styles.screenContainer
					}
				>
					<Image
						source={this.props.navigation.getParam(
							'photo',
							'default value'
						)}
						style={{
							width: '100%',
							height: '100%',
							opacity: 1,
							position: 'absolute'
						}}
					/>
					<Validation
						display={this.state.animation}
						text='Merci !'
						next={() => {
							this.setState({ animation: false });
							this.props.navigation.pop(2);
						}}
						side='profile'
						typo='#D94B4B'
					/>
					<View style={{ paddingBottom: hp('8%') }}>
						<BackButton text='Retour' goBack={goBack} />
					</View>
					{/* <View style={{ paddingBottom: hp('10%') }} /> */}

					<View style={styles.mainContainer}>
						<Text style={styles.title}>
							La photo est elle bien visible ?
						</Text>
						<View style={styles.pictureZone} />
						<View style={styles.rowContainer}>
							<View>
								<TouchableOpacity
									style={styles.firstContainer}
									onPress={() =>
										this.props.navigation.goBack()
									}
								>
									<View style={styles.imagePhotoContainer}>
										<Photo style={styles.imagePhoto} />
									</View>
									<Text style={styles.desc}>
										Prendre une nouvelle photo
									</Text>
								</TouchableOpacity>
							</View>
							<View>
								<TouchableOpacity
									style={styles.firstContainer}
									onPress={this.savePhoto}
								>
									<View style={styles.imagePhotoContainer}>
										<ValiderLaPhoto
											style={styles.imageValidate}
										/>
									</View>
									<Text style={styles.desc}>
										La photo est parfaite
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			);
		}
	}
}

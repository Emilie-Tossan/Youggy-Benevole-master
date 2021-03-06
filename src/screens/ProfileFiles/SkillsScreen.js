import React from 'react';
import {
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	StyleSheet,
	Platform,
	Image
} from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import * as Font from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Input, Divider } from 'react-native-elements';
import { IconRegistry, ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import FlexRow from '../Other/FlexRow';

import Cross from '../../../assets/svg-js/Cross';
import PhotoProfil from '../../../assets/svg-js/photo_profil';

import BottomButton from '../Components/BottomButton';

import firebase from 'react-native-firebase';
import { SwitchActions, NavigationActions } from 'react-navigation';

const Device = require('react-native-device-detection');

import uuid from 'uuid/v1';

const styles = StyleSheet.create({
	droidSafeArea: {
		flex: 1,
		backgroundColor: 'white'
	},
	mainContainer: {
		width: wp('100%'),
		marginTop: 'auto',
		marginBottom: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: wp('10%'),
		paddingRight: wp('10%')
	},
	//
	// Text
	//
	title: {
		textAlign: 'left',
		color: '#D94B4B',
		fontSize: hp('2.5%'),
		fontWeight: 'bold'
	},
	info: {
		fontSize: hp('1.5%'),
		color: 'black'
	},
	subText: {
		fontSize: hp('1.8%'),
		color: 'grey',
		textAlign: 'center'
	},
	//
	// Picture Picker
	//
	CoverPicturePicker: {
		height: hp('18%'),
		width: '100%',
		backgroundColor: '#EFEFEF',
		overflow: 'hidden'
	},
	ProfilePicturePicker: {
		top: -6,
		width: hp('15%') * 1.609 * 0.50758,
		height: hp('15%') * 1.609 * 0.50758 + 6,

		overflow: 'hidden',
		borderRadius: 100,
		marginLeft: 'auto',
		marginRight: 'auto',
		top: hp('-7.5%')
	},
	//
	// Input
	//
	inputContainer: {
		flexDirection: 'row',
		color: 'black',
		fontSize: hp('2.2%')
	},
	inputContainerStyle: {
		left: -10,
		paddingTop: hp('1.5%')
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
		competenceAndInterest: [],
		interestInput: '',
		interestList: [],
		interestSuggestion: '',
		competenceInput: '',
		competenceList: [],
		competenceSuggestion: '',
		biographie: '',
		cover: null,
		profil: null
	};

	async componentDidMount() {
		await Font.loadAsync({
			'SF-pro': require('../../../assets/fonts/SF-Pro-Text-Regular.otf'),
			'Montserrat-light': require('../../../assets/fonts/Montserrat-Light.ttf')
		});
		this.setState({ fontLoaded: true });
		try {
			const userUid = firebase.auth().currentUser.uid;
			const userRef = firebase
				.firestore()
				.collection('benevoleUsers')
				.doc(userUid);
			const competencesRef = firebase
				.firestore()
				.collection('competencesInterets')
				.doc('competences');
			const interetsRef = firebase
				.firestore()
				.collection('competencesInterets')
				.doc('interets');
			const snapshotC = await competencesRef.get();
			const snapshotI = await interetsRef.get();
			const snapshotCAI = await userRef.get();
			//console.log(snapshotC.data());
			//console.log(snapshotI.data());
			this.setState({
				competenceList: snapshotC.data().list,
				interestList: snapshotI.data().list,
				competenceAndInterest: snapshotCAI.data().competenceAndInterest
					? snapshotCAI.data().competenceAndInterest
					: [],
				biographie: snapshotCAI.data().biographie
					? snapshotCAI.data().biographie
					: ''
			});
			const cover = await firebase
				.storage()
				.ref(`users/${userUid}/coverPhoto`)
				.getDownloadURL()
				.catch(err => console.log(err) === 1);
			const profil = await firebase
				.storage()
				.ref(`users/${userUid}/profilPhoto`)
				.getDownloadURL()
				.catch(err => console.log(err) === 1);
			if (cover) this.setState({ cover });
			if (profil) this.setState({ profil });
		} catch (err) {
			console.log(err);
		}
	}

	addCompetenceAndInterest = async (title, isCompetence) => {
		const {
			competenceAndInterest,
			competenceList,
			interestList
		} = this.state;

		if (title.length) {
			//save in db
			// try {
			// 	const list = isCompetence
			// 		? [ ...competenceList, title ].filter(
			// 				(val, i, ar) => ar.indexOf(val) === i
			// 			)
			// 		: [ ...interestList, title ].filter(
			// 				(val, i, ar) => ar.indexOf(val) === i
			// 			);
			// 	const competencesRef = firebase
			// 		.firestore()
			// 		.collection('competencesInterets')
			// 		.doc('competences');
			// 	const interetsRef = firebase
			// 		.firestore()
			// 		.collection('competencesInterets')
			// 		.doc('interets');
			// 	if (isCompetence)
			// 		await competencesRef.set({ list }, { merge: true });
			// 	else await interetsRef.set({ list }, { merge: true });
			// } catch (err) {
			// 	console.log(err);
			// }
			//refresh:
			const newState = [
				...competenceAndInterest,
				{ title, id: uuid(), isCompetence }
			];
			this.setState({
				competenceAndInterest: newState
			});
			//save in db
			try {
				const userUid = firebase.auth().currentUser.uid;
				const userRef = firebase
					.firestore()
					.collection('benevoleUsers')
					.doc(userUid);
				await userRef.set(
					{ competenceAndInterest: newState },
					{ merge: true }
				);
			} catch (err) {
				console.log(err);
			}
		}
	};

	handleSuggestion = (text, field) => {
		const { competenceList, interestList } = this.state;

		competenceList.sort();
		interestList.sort();
		let matched = '';
		if (field === 'competence') {
			for (let i = 0; i < competenceList.length; i++) {
				let matchedFound = false;
				const word = competenceList[i];
				for (let j = 0; j < text.length && j < word.length; j++) {
					const a = text[j];
					const b = word[j];
					if (a !== b) {
						matchedFound = false;
						break;
					} else {
						matchedFound = true;
					}
				}
				if (matchedFound) {
					matched = word;
					break;
				}
			}
		} else if (field === 'interest') {
			for (let i = 0; i < interestList.length; i++) {
				let matchedFound = false;
				const word = interestList[i];
				for (let j = 0; j < text.length && j < word.length; j++) {
					const a = text[j];
					const b = word[j];
					if (a !== b) {
						matchedFound = false;
						break;
					} else {
						matchedFound = true;
					}
				}
				if (matchedFound) {
					matched = word;
					break;
				}
			}
		} else {
			return;
		}
		this.setState({
			[field + 'Input']: text,
			[field + 'Suggestion']: matched
		});
	};

	_pickCover = async () => {
		let width = toPx(100, true);
		let height = toPx(18);
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [width, height],
			quality: 1
		});

		if (!result.cancelled) {
			this.setState({ cover: result.uri });
		}
	};

	_pickProfil = async () => {
		//let width = toPx(15);
		//let height = toPx(15);
		let width = toPx(15) * 1.609 * 0.50758;
		let height = toPx(15) * 1.609 * 0.50758 + 6;
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [width, height],
			quality: 1
		});
		if (!result.cancelled) {
			this.setState({ profil: result.uri });
		}
	};

	removeCompetenceAndInterest = async id => {
		const { competenceAndInterest } = this.state;
		const newState = competenceAndInterest.filter(item => item.id !== id);
		//save in db
		try {
			const userUid = firebase.auth().currentUser.uid;
			const userRef = firebase
				.firestore()
				.collection('benevoleUsers')
				.doc(userUid);
			await userRef.set(
				{ competenceAndInterest: newState },
				{ merge: true }
			);
		} catch (err) {
			console.log(err);
		}
		//refresh:
		this.setState({
			competenceAndInterest: newState
		});
	};

	render() {
		const {
			competenceInput,
			interestInput,
			competenceSuggestion,
			interestSuggestion,
			competenceAndInterest,
			biographie,
			cover,
			profil
		} = this.state;

		return (
			<ApplicationProvider mapping={mapping} theme={lightTheme}>
				<View style={styles.droidSafeArea}>
					<IconRegistry icons={EvaIconsPack} />
					<View
						style={{
							width: '100%',
							position: 'absolute',
							top: hp('18%'),
							zIndex: 1,
							marginHorizontal: 'auto'
						}}
					>
						<TouchableOpacity
							style={styles.ProfilePicturePicker}
							onPress={this._pickProfil}
						>
							{/* {console.log(hp('15%') * 1.609 * 0.2462)} */}
							{/*{profil && (
								<Image
									source={{ uri: profil }}
									style={{
										width: hp('15%') * 1.609 * 0.50758,
										height: hp('15%') * 1.609 * 0.50758 + 6
									}}
								/>
							)} */}
						</TouchableOpacity>
						<View
							style={{
								alignItems: 'center',
								top: -(hp('15%') + hp('15%') / 2),
								zIndex: -1
							}}
						>
							<PhotoProfil
								photoStyle={{
									width: hp('15%') * 1.609 * 0.50758,
									height: hp('15%') * 1.609 * 0.50758 + 6
								}}
								profil={profil}
								style={{
									width: hp('15%') * 1.60975,
									height: hp('15%'),
									position: 'absolute'
								}}
							/>
						</View>
					</View>
					<TouchableOpacity
						style={styles.CoverPicturePicker}
						onPress={this._pickCover}
					>
						{cover && (
							<Image
								source={{ uri: cover }}
								style={{ width: '100%', height: hp('18%') }}
							/>
						)}
					</TouchableOpacity>
					<View style={styles.mainContainer}>
						<View style={{ paddingBottom: hp('25%') }} />
						<Text style={styles.subText}>
							Ici je me présente et je renseigne mes compétences
							et mes centres d'intérêt pour trouver les missions
							qui me correspondent.
						</Text>
						<View style={{ paddingBottom: hp('4%') }} />
						<Divider style={{ backgroundColor: '#E5E5E5' }} />
						<ScrollView>
							<View style={{ paddingBottom: hp('4%') }} />
							<View>
								<Text style={styles.title}>
									Trouver mes missions
								</Text>
								<View style={{ paddingBottom: hp('5%') }} />
								<Text style={styles.info}>BIOGRAPHIE</Text>
								<Input
									containerStyle={styles.inputContainerStyle}
									inputStyle={{
										marginLeft: 3,
										fontSize: hp('2%')
									}}
									inputContainerStyle={{
										borderBottomColor: '#E5E5E5'
									}}
									value={biographie}
									onChangeText={text => {
										this.setState({ biographie: text });
									}}
									autoCorrect={true}
									placeholder='Mes expériences, je recherche...'
								/>
								<View style={{ paddingBottom: hp('2%') }} />

								<Text style={styles.info}>COMPÉTENCES</Text>
								<View style={styles.inputContainer}>
									<Input
										containerStyle={
											styles.inputContainerStyle
										}
										inputStyle={{
											marginLeft: 3,
											fontSize: hp('2%')
										}}
										inputContainerStyle={{
											borderBottomColor: '#E5E5E5'
										}}
										rightIcon={
											<TouchableOpacity
												onPress={() => {
													this.addCompetenceAndInterest(
														competenceInput,
														true
													);
													this.setState({
														competenceSuggestion:
															'',
														competenceInput: ''
													});
												}}
											>
												<Cross />
											</TouchableOpacity>
										}
										value={competenceInput}
										onChangeText={text => {
											this.handleSuggestion(
												text,
												'competence'
											);
										}}
										autoCapitalize='none'
										autoCorrect={false}
									/>
									<Input
										containerStyle={{
											...styles.inputContainerStyle,
											position: 'absolute',
											zIndex: -1
										}}
										pointerEvents='none'
										inputStyle={{
											marginLeft: 3,
											fontSize: hp('2%')
										}}
										inputContainerStyle={{
											borderBottomColor: '#E5E5E5'
										}}
										placeholder={competenceSuggestion}
									/>
								</View>
								<View style={{ paddingBottom: hp('2%') }} />
								<Text style={styles.info}>
									CENTRES D'INTÉRÊT
								</Text>
								<View style={styles.inputContainer}>
									<Input
										containerStyle={
											styles.inputContainerStyle
										}
										inputStyle={{
											marginLeft: 3,
											fontSize: hp('2%')
										}}
										inputContainerStyle={{
											borderBottomColor: '#E5E5E5'
										}}
										rightIcon={
											<TouchableOpacity
												onPress={() => {
													this.addCompetenceAndInterest(
														interestInput,
														false
													);
													this.setState({
														interestSuggestion: '',
														interestInput: ''
													});
												}}
											>
												<Cross />
											</TouchableOpacity>
										}
										value={interestInput}
										onChangeText={text => {
											this.handleSuggestion(
												text,
												'interest'
											);
										}}
										autoCapitalize='none'
										autoCorrect={false}
									/>
									<Input
										containerStyle={{
											...styles.inputContainerStyle,
											position: 'absolute',
											zIndex: -1
										}}
										pointerEvents='none'
										inputStyle={{
											marginLeft: 3,
											fontSize: hp('2%')
										}}
										inputContainerStyle={{
											borderBottomColor: '#E5E5E5'
										}}
										placeholder={interestSuggestion}
									/>
								</View>
							</View>
							<ScrollView
								style={{
									height: hp('40%')
								}}
							>
								<View style={{ paddingBottom: hp('2%') }} />

								<FlexRow
									itemsList={competenceAndInterest}
									removeIt={this.removeCompetenceAndInterest}
								/>
							</ScrollView>
						</ScrollView>
					</View>
				</View>
				<BottomButton
					text='Je publie'
					navigate={async () => {
						try {
							const userUid = firebase.auth().currentUser.uid;
							const userRef = firebase
								.firestore()
								.collection('benevoleUsers')
								.doc(userUid);
							await userRef.set(
								{
									biographie,
									profilIsCompleted: true
								},
								{ merge: true }
							);
							// this.props.navigation.push('BottomNav');
							this.props.navigation.reset(
								[
									NavigationActions.navigate({
										routeName: 'BottomNav'
									})
								],
								0
							);
							// this.props.navigation.dispatch(
							// 	SwitchActions.jumpTo({
							// 		routeName: 'loggedIn'
							// 	})
							// );
						} catch (err) {
							console.log(err);
						}
					}}
				/>
			</ApplicationProvider>
		);
	}
}

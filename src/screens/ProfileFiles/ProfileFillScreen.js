import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import * as Font from 'expo-font';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import { ScrollView } from 'react-native-gesture-handler';

import Icon5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import { Progress } from 'nachos-ui';
import { ProgressBar } from 'react-native-paper';
import { DatePicker } from 'native-base';
import { Input, Divider } from 'react-native-elements';
import {
	IconRegistry,
	ApplicationProvider,
	Select
} from '@ui-kitten/components';

import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import toPx from '../../utils/percentageToPx';
import dateToday from '../../utils/dateToday';

import Curseur from '../../../assets/svg-js/curseur';
import PhotoProfil from '../../../assets/svg-js/photo_profil';
import AjouterPhoto from '../../../assets/svg-js/ajout-photo';

import BottomButton from '../Components/BottomButton';

import firebase from 'react-native-firebase';

const Device = require('react-native-device-detection');

const styles = StyleSheet.create({
	droidSafeArea: {
		flex: 1,
		backgroundColor: 'white'
	},
	mainContainer: {
		top: hp('-3%'),
		width: wp('100%'),
		marginTop: 'auto',
		marginBottom: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: wp('10%'),
		paddingRight: wp('10%')
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
	// Input
	//
	inputText: {
		width: '100%',
		height: hp('10%'),
		color: 'black',

		fontSize: hp('2.2%')
	},
	inputContainer: {
		flexDirection: 'row',
		// borderBottomColor: '#E5E5E5',
		//borderBottomWidth: 1,
		marginBottom: 5,
		color: 'black',
		fontSize: hp('2.2%'),
		paddingBottom: 5
	},
	inputContainerStyle: {
		left: -10,
		paddingTop: hp('1.5%')
	},
	inputTextContainer: {
		left: 5,
		top: Device.isTablet ? hp('-1%') : hp('-1.5%'),
		width: '100%',
		height: hp('5.5%'),
		textAlign: 'right'
	},
	inputDoubleContainer: {
		paddingRight: Device.isTablet ? wp('5%') : hp('3.5%'),
		width: '45%',
		flexDirection: 'row',
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		marginBottom: 5,
		color: 'black',
		fontSize: hp('2.2%'),
		paddingBottom: 5
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
	DatePicker: {
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 'auto',
		marginBottom: 'auto'
	},
	DatePickerContainer: {
		height: hp('4.5%'),
		width: hp('4.5%'),
		left: hp('-1%'),
		top: hp('1%')
	},
	//
	// Utils
	//
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 6
		},
		shadowOpacity: 0.37,
		shadowRadius: 7.49

		// elevation: 12
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
		coverUrl: false,
		profilUrl: false,
		cover: null,
		profil: null,
		fontLoaded: false,
		date: dateToday(),
		isDatePickerVisible: false,
		isStartTimePickerVisible: false,
		isEndTimePickerVisible: false,
		dropdownVisible: false,
		selectedDropdownIndex: 0,
		dropdownValue: '',
		dropdownColor: '#BCBCBC',
		date: new Date(Date.now() - 567993600000),
		maxDate: new Date(Date.now() - 567993600000), // 567993600000 = 18 year
		minDate: new Date(Date.now() - 3155760000000), // 3155760000000 = 100 year
		callingCode: '',
		// Progress
		progress: 0,
		//
		// Input
		//
		surname: {
			text: '',
			progress: 0
		},
		name: {
			text: '',
			progress: 0
		},
		mail: {
			text: '',
			progress: 0
		},
		phone: {
			text: '',
			progress: 0
		},
		sex: {
			text: '',
			progress: 0
		},
		birth: {
			text: '',
			progress: 0
		},
		job: {
			text: '',
			progress: 0
		},
		degree: {
			text: '',
			progress: 0
		},
		id: {
			type: '',
			progress: 0
		}
	};

	setProgress = (idCompleted = false, degreeCompleted = false) => {
		const { id, degree } = this.state;
		if (!idCompleted)
			this.setState({
				id: {
					...id,
					progress: this.props.navigation.getParam('progressId', 0)
				}
			});
		if (!degreeCompleted)
			this.setState({
				degree: {
					...degree,
					progress: this.props.navigation.getParam(
						'progressDiplome',
						0
					)
				}
			});
	};

	publieHandler = async () => {
		const {
			surname: { text: firstName, progress: surnameCompleted },
			name: { text: lastName, progress: nameCompleted },
			mail: { text: email, progress: mailCompleted },
			phone: { text: internationalPhone, progress: phoneCompleted },
			sex: { text: sex, progress: sexCompleted },
			birth: { text: birthDate, progress: birthCompleted },
			degree: { text: degreeName, progress: degreeCompleted },
			id: { progress: idCompleted },
			job: { text: jobName, progress: jobCompleted },
			profil: profilPhoto,
			cover: coverPhoto,
			coverUrl,
			profilUrl
		} = this.state;

		try {
			const userUid = firebase.auth().currentUser.uid;
			const entryRef = firebase
				.firestore()
				.collection('benevoleUsers')
				.doc(userUid);
			await entryRef.set(
				{
					firstName,
					surnameCompleted: surnameCompleted === 0.11,
					lastName,
					nameCompleted: nameCompleted === 0.12,
					email,
					mailCompleted: mailCompleted === 0.11,
					internationalPhone,
					phoneCompleted: phoneCompleted === 0.11,
					sex: sex,
					sexCompleted: sexCompleted === 0.11,
					birthDate,
					birthCompleted: birthCompleted === 0.11,
					degreeName,
					degreeCompleted: degreeCompleted === 0.11,
					idCompleted: idCompleted === 0.11,
					jobName,
					jobCompleted: jobCompleted === 0.11
				},
				{ merge: true }
			);
			const userBucket = firebase.storage().ref('users');
			if (profilPhoto && !profilUrl)
				userBucket.child(`${userUid}/profilPhoto`).putFile(profilPhoto);
			if (coverPhoto && !coverUrl)
				userBucket.child(`${userUid}/coverPhoto`).putFile(coverPhoto);
			this.props.navigation.push('Skills');
		} catch (err) {
			console.log(err);
		}
	};

	processData = data => {
		//console.log(data);
		const {
			firstName,
			lastName,
			email,
			internationalPhone,
			callingCode,
			sex,
			birthDate,
			degreeName,
			idType,
			jobName,
			nameCompleted,
			surnameCompleted,
			mailCompleted,
			phoneCompleted,
			sexCompleted,
			birthCompleted,
			jobCompleted,
			degreeCompleted,
			idCompleted
		} = data;
		this.setState({
			date:
				birthDate !== undefined
					? new Date(birthDate)
					: new Date(Date.now() - 567993600000),
			callingCode,
			selectedDropdownIndex: sex !== undefined ? sex : 0,
			surname: {
				text: firstName !== undefined ? firstName : '',
				progress:
					surnameCompleted !== undefined && surnameCompleted
						? 0.11
						: 0
			},
			name: {
				text: lastName !== undefined ? lastName : '',
				progress:
					nameCompleted !== undefined && nameCompleted ? 0.12 : 0
			},
			mail: {
				text: email !== undefined ? email : '',
				progress:
					mailCompleted !== undefined && mailCompleted ? 0.11 : 0
			},
			phone: {
				text:
					internationalPhone !== undefined ? internationalPhone : '',
				progress:
					phoneCompleted !== undefined && phoneCompleted ? 0.11 : 0
			},
			sex: {
				text: sex !== undefined ? sex : '',
				progress: sexCompleted !== undefined && sexCompleted ? 0.11 : 0
			},
			birth: {
				text: birthDate !== undefined ? birthDate : '',
				progress:
					birthCompleted !== undefined && birthCompleted ? 0.11 : 0
			},
			job: {
				text: jobName !== undefined ? jobName : '',
				progress: jobCompleted !== undefined && jobCompleted ? 0.11 : 0
			},
			degree: {
				text: degreeName !== undefined ? degreeName : '',
				progress:
					degreeCompleted !== undefined && degreeCompleted ? 0.11 : 0
			},
			id: {
				type: idType !== undefined ? idType : '',
				progress: idCompleted !== undefined && idCompleted ? 0.11 : 0
			}
		});
	};

	async componentDidMount() {
		await Font.loadAsync({
			'SF-pro': require('../../../assets/fonts/SF-Pro-Text-Regular.otf'),
			'Montserrat-light': require('../../../assets/fonts/Montserrat-Light.ttf')
		});
		await this.getPermissionAsync();
		this.setState({ fontLoaded: true });
		try {
			const userUid = firebase.auth().currentUser.uid;
			const dataRef = firebase
				.firestore()
				.collection('benevoleUsers')
				.doc(userUid);
			const snapshot = await dataRef.get();
			this.processData(snapshot.data());
			const profil = await firebase
				.storage()
				.ref(`users/${userUid}/profilPhoto`)
				.getDownloadURL()
				.catch(err => console.log(err) === 1);
			let profilUrl = false;
			//console.log(profil);
			if (profil) profilUrl = true;
			this.setState({ profil, profilUrl });
			const cover = await firebase
				.storage()
				.ref(`users/${userUid}/coverPhoto`)
				.getDownloadURL()
				.catch(err => console.log(err) === 1);
			let coverUrl = false;
			//console.log(cover);
			if (cover) coverUrl = true;
			this.setState({ cover, coverUrl });
		} catch (err) {
			console.log(err);
		}
	}

	getPermissionAsync = async () => {
		if (Constants.platform.ios) {
			const { status } = await Permissions.askAsync(
				Permissions.CAMERA_ROLL
			);
			if (status !== 'granted') {
				alert(
					'Sorry, we need camera roll permissions to make this work!'
				);
			}
		}
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
			this.setState({ cover: result.uri, coverUrl: false });
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
			this.setState({ profil: result.uri, profilUrl: false });
		}
	};

	showDatePicker = () => {
		this.setState({ isDatePickerVisible: true });
	};

	hideDatePicker = () => {
		this.setState({ isDatePickerVisible: false });
	};

	handleDatePicked = date => {
		// console.log('A date has been picked: ', date);
		this.hideDatePicker();
	};

	showStartTimePicker = () => {
		this.setState({ isStartTimePickerVisible: true });
	};

	hideStartTimePicker = () => {
		this.setState({ isStartTimePickerVisible: false });
	};

	handleStartPicked = Start => {
		// console.log('A Start has been picked: ', Start);
		this.hideStartTimePicker();
	};

	showEndTimePicker = () => {
		this.setState({ isEndTimePickerVisible: true });
	};

	hideEndTimePicker = () => {
		this.setState({ isEndTimePickerVisible: false });
	};

	handleEndPicked = End => {
		// console.log('A End has been picked: ', End);
		this.hideEndTimePicker();
	};

	render() {
		const { goBack } = this.props.navigation;
		const {
			cover,
			profil,
			dropdownVisible,
			selectedDropdownIndex,
			dropdownValue,
			date,
			dropdownColor,
			maxDate,
			minDate,
			progress,
			sex,
			birth,
			job,
			degree,
			id,
			surname,
			name,
			mail,
			phone
		} = this.state;

		const data = [
			{
				text: 'Homme'
			},
			{
				text: 'Femme'
			},
			{
				text: 'Autres'
			}
		];
		//console.log(sex, selectedDropdownIndex, date, birth.text);
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
						/>
						<View
							style={{
								alignItems: 'center',
								top: -(hp('15%') + hp('16%') / 2),
								zIndex: -1
							}}
						>
							<PhotoProfil
								photoStyle={{
									width: hp('15%') * 1.609 * 0.50758,
									height: hp('16%') * 1.609 * 0.50758 + 6
								}}
								profil={profil}
								style={{
									width: hp('15%') * 1.60975,
									height: hp('15%'),
									position: 'absolute'
								}}
								displayText={
									Constants.platform.ios ? true : false
								}
							/>
						</View>
					</View>
					<TouchableOpacity
						style={styles.CoverPicturePicker}
						onPress={this._pickCover}
					>
						{cover ? (
							<Image
								source={{ uri: cover }}
								style={{ width: '100%', height: hp('18%') }}
							/>
						) : (
							<View style={{ top: '82%', left: '93%' }}>
								<MaterialIcon
									name='add-a-photo'
									size={hp('2.3%')}
									color='grey'
								/>
							</View>
						)}
					</TouchableOpacity>
					{/* {console.log(
						name.progress +
							surname.progress +
							phone.progress +
							mail.progress +
							sex.progress +
							birth.progress +
							job.progress +
							degree.progress +
							id.progress
					)} */}
					<View style={styles.mainContainer}>
						<View style={{ paddingBottom: hp('17%') }} />

						<View>
							{() => {
								this.props.setProgress();
								//console.log(`id = ${id}`);
							}}
							<ProgressBar
								progress={
									name.progress +
									surname.progress +
									phone.progress +
									mail.progress +
									sex.progress +
									birth.progress +
									job.progress +
									degree.progress +
									id.progress
								}
								color='#D94B4B'
								// height={10}
								// width={toPx(80, true)}
								style={{
									height: 10,
									backgroundColor: '#E5E5E5'
								}}
							/>

							<Curseur
								style={{
									position: 'absolute',
									top: -42.665 / 2 - 10,
									left:
										toPx(
											(name.progress +
												surname.progress +
												phone.progress +
												mail.progress +
												sex.progress +
												birth.progress +
												job.progress +
												degree.progress +
												id.progress) *
												80,
											true
										) -
										50 / 2
								}}
							/>
						</View>
						<View style={{ paddingBottom: hp('1.5%') }} />
						<Text style={styles.subText}>
							Je complète mes informations pour optimiser mes
							chances de participer aux missions !
						</Text>
						<View style={{ paddingBottom: hp('3%') }} />
						<Divider style={{ backgroundColor: '#E5E5E5' }} />
					</View>
					<View style={{ paddingBottom: hp('3%') }} />
					<View style={styles.mainContainer}>
						<Text style={styles.title}>
							Mes informations personnelles
						</Text>
					</View>
					<ScrollView style={styles.mainContainer}>
						<View style={{ paddingBottom: hp('5%') }} />
						<Text style={styles.info}>PRÉNOM</Text>
						<View style={styles.inputContainer}>
							<Input
								containerStyle={styles.inputContainerStyle}
								inputStyle={{
									marginLeft: 3,
									fontSize: hp('2%')
								}}
								inputContainerStyle={{
									borderBottomColor: '#E5E5E5'
								}}
								onChangeText={text => {
									text.length == 0
										? this.setState({
												surname: {
													...surname,
													text: text,
													progress: 0
												}
										  })
										: this.setState({
												surname: {
													...surname,
													text: text,
													progress: 0.11
												}
										  });
								}}
								value={this.state.surname.text}
							/>
						</View>
						<View style={{ paddingBottom: 5 }} />
						<Text style={styles.info}>NOM DE FAMILLE</Text>
						<View style={styles.inputContainer}>
							<Input
								containerStyle={styles.inputContainerStyle}
								inputStyle={{
									marginLeft: 3,
									fontSize: hp('2%')
								}}
								inputContainerStyle={{
									borderBottomColor: '#E5E5E5'
								}}
								onChangeText={text => {
									text.length == 0
										? this.setState({
												name: {
													...name,
													text: text,
													progress: 0
												}
										  })
										: this.setState({
												name: {
													...name,
													text: text,
													progress: 0.12
												}
										  });
								}}
								value={this.state.name.text}
							/>
						</View>
						<View style={{ paddingBottom: 5 }} />
						<Text style={styles.info}>SEXE</Text>
						<View style={{ paddingBottom: 15 }} />
						<Select
							controlStyle={{
								backgroundColor: 'white',
								borderTopWidth: 0,
								borderLeftWidth: 0,
								borderRightWidth: 0,
								borderBottomColor: '#E5E5E5'
							}}
							textStyle={{
								color: dropdownColor,
								left: -12,
								fontSize: hp('2%'),
								fontWeight: 'normal'
							}}
							style={{ width: '95%' }}
							data={data}
							selectedOption={selectedDropdownIndex}
							onSelect={selected =>
								this.setState({
									selectedDropdownIndex: selected,
									dropdownColor: '#000000',
									sex: {
										...sex,
										text: selected.text,
										progress: 0.11
									}
								})
							}
							placeholder={
								sex.text.length
									? sex.text
									: 'Je sélectionne mon sexe'
							}
						/>
						<View style={{ paddingBottom: 5 }} />
						<Text style={styles.info}>DATE DE NAISSANCE</Text>
						{/* <View style={styles.inputContainer}> */}
						<View style={{ paddingBottom: 15 }} />
						<View>
							<DatePicker
								placeHolderText={
									birth.text.length
										? birth.text
										: 'Sélectionne ta date de naissance'
								}
								defaultDate={undefined}
								minimumDate={minDate}
								maximumDate={maxDate}
								locale={'fr'}
								timeZoneOffsetInMinutes={undefined}
								modalTransparent={false}
								animationType={'slide'}
								androidMode={'default'}
								// placeHolderText="Sélectionnez votre date de naissance"
								textStyle={{
									color: 'black',
									fontSize: hp('2%'),
									left: -4
								}}
								placeHolderTextStyle={{
									color: '#BCBCBC',
									fontSize: hp('2%'),
									left: -4
								}}
								onDateChange={date => {
									// console.log(
									// 	`${date.getFullYear()}-${date.getMonth() +
									// 		1 <
									// 	10
									// 		? 0
									// 		: ''}${date.getMonth() +
									// 		1}-${date.getDate()}`
									// );

									this.setState({
										birth: {
											...birth,
											text: `${date.getFullYear()}-${
												date.getMonth() + 1 < 10
													? 0
													: ''
											}${date.getMonth() +
												1}-${date.getDate()}`,
											progress: 0.11
										}
									});
								}}
								disabled={false}
								containerStyle={{
									backgroundColor: 'white',
									borderTopWidth: 0,
									borderLeftWidth: 0,
									borderRightWidth: 0,
									borderBottomColor: '#E5E5E5'
								}}
							/>
							<Input
								containerStyle={{
									...styles.inputContainerStyle,
									position: 'absolute',
									zIndex: -1,
									top: hp('-1%')
								}}
								pointerEvents='none'
								inputStyle={{
									marginLeft: 3,
									fontSize: hp('2%')
								}}
								inputContainerStyle={{
									borderBottomColor: '#E5E5E5'
								}}
							/>
						</View>
						{/* {console.log(date)} */}
						{/* </View> */}
						<View style={{ paddingBottom: 10 }} />
						<Text style={styles.info}>PROFESSION/ACTIVITÉ</Text>
						<Input
							containerStyle={styles.inputContainerStyle}
							inputStyle={{ marginLeft: 3, fontSize: hp('2%') }}
							inputContainerStyle={{
								borderBottomColor: '#E5E5E5'
							}}
							onChangeText={text => {
								text.length == 0
									? this.setState({
											job: {
												...job,
												text: text,
												progress: 0
											}
									  })
									: this.setState({
											job: {
												...job,
												text: text,
												progress: 0.11
											}
									  });
							}}
							value={this.state.job.text}
						/>
						<View style={{ paddingBottom: 5 }} />
						<Text style={styles.info}>DIPLÔME</Text>
						<View style={styles.inputContainer}>
							<Input
								placeholder="J'écris le titre de mon diplôme"
								containerStyle={styles.inputContainerStyle}
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
											this.setState({
												degree: {
													...degree,
													progress: 0.11
												}
											});
											this.props.navigation.push(
												'TakeDiplome'
											);
										}}
									>
										<AjouterPhoto
											style={{
												height: hp('3%'),
												width: hp('3%') * 1.41,
												left: hp('-1%')
											}}
										/>
									</TouchableOpacity>
								}
								onChange={ev => {
									const { text } = ev.nativeEvent;
									text.length == 0
										? this.setState({
												degree: {
													...degree,
													text: text,
													progress: 0
												}
										  })
										: this.setState({
												degree: {
													...degree,
													text: text,
													progress: 0.11
												}
										  });
								}}
								value={this.state.degree.text}
							/>
						</View>
						<View style={{ paddingBottom: 5 }} />
						<Text style={styles.info}>NUMÉRO DE TÉLÉPHONE</Text>
						<View style={styles.inputContainer}>
							<Input
								containerStyle={styles.inputContainerStyle}
								inputStyle={{
									marginLeft: 3,
									fontSize: hp('2%')
								}}
								inputContainerStyle={{
									borderBottomColor: '#E5E5E5'
								}}
								onChangeText={text => {
									text.length == 0
										? this.setState({
												phone: {
													...phone,
													text: text,
													progress: 0
												}
										  })
										: this.setState({
												phone: {
													...phone,
													text: text,
													progress: 0.11
												}
										  });
								}}
								// rightIcon={
								// 	<TouchableOpacity>
								// 		<Icon5
								// 			name="pen"
								// 			size={20}
								// 			color="#E5E5E5"
								// 		/>
								// 	</TouchableOpacity>
								// }
								value={this.state.phone.text}
							/>
						</View>
						<View style={{ paddingBottom: 5 }} />
						<Text style={styles.info}>ADRESSE E-MAIL</Text>
						<View style={styles.inputContainer}>
							<Input
								containerStyle={styles.inputContainerStyle}
								inputStyle={{
									marginLeft: 3,
									fontSize: hp('2%')
								}}
								inputContainerStyle={{
									borderBottomColor: '#E5E5E5'
								}}
								onChangeText={text => {
									text.length == 0
										? this.setState({
												mail: {
													...mail,
													text: text,
													progress: 0
												}
										  })
										: this.setState({
												mail: {
													...mail,
													text: text,
													progress: 0.11
												}
										  });
								}}
								value={this.state.mail.text}
							/>
						</View>
						<View style={{ paddingBottom: 5 }} />
						<Text style={styles.info}>PIÈCE D'IDENTITÉ</Text>
						<TouchableOpacity
							onPress={() => {
								this.setState({
									id: {
										...id,
										progress: 0.11
									}
								});
								this.props.navigation.push('IdChoiceV2');
							}}
						>
							<View style={styles.inputContainer}>
								<Input
									placeholder='je prends mon identité en photo'
									style={{
										fontSize: hp('2%')
									}}
									containerStyle={styles.inputContainerStyle}
									inputStyle={{
										marginLeft: 3,
										fontSize: hp('2%')
									}}
									inputContainerStyle={{
										borderBottomColor: '#E5E5E5'
									}}
									pointerEvents='none'
									rightIcon={
										<AjouterPhoto
											style={{
												height: hp('3%'),
												width: hp('3%') * 1.41,
												left: hp('-1%')
											}}
										/>
									}
								/>
							</View>
						</TouchableOpacity>
						<View style={{ paddingBottom: hp('30%') }} />
					</ScrollView>
				</View>
				{/* {console.log(this.props.navigation.getParam('progress', 0))} */}
				<BottomButton text='Je publie' navigate={this.publieHandler} />
			</ApplicationProvider>
		);
	}
}

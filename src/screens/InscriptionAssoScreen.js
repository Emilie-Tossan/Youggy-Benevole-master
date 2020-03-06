import React, { Component, Fragment } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	TextInput,
	StyleSheet
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CountryPicker from "react-native-country-picker-modal";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from "react-native-responsive-screen";
import * as Font from "expo-font";

import BackButton from "./Components/BackButton";

import firebase from "react-native-firebase";

const Device = require("react-native-device-detection");
const XRegExp = require("xregexp");

const styles = StyleSheet.create({
	screenContainer: {
		width: "100%",
		height: "100%"
	},
	mainContainer: {
		// width: wp('100%'),
		marginTop: "auto",
		marginBottom: "auto",
		marginLeft: "auto",
		marginRight: "auto",
		paddingLeft: Device.isTablet ? wp("25%") : wp("13%"),
		paddingRight: Device.isTablet ? wp("25%") : wp("13%")
	},
	title: {
		fontSize: hp("3%"),
		fontWeight: "bold",
		color: "white"
	},
	info: {
		fontSize: hp("1.7%"),
		fontWeight: "bold",
		color: "white",
		paddingBottom: hp("3%")
	},
	subText: {
		fontSize: hp("2%"),
		color: "white"
	},
	line: {
		borderBottomColor: "white",
		borderBottomWidth: 1,
		marginBottom: 5,
		color: "white",
		fontSize: hp("2.2%"),
		fontWeight: "bold",
		paddingBottom: 5
	},
	space: {
		paddingBottom: hp("6%")
	},
	space2: {
		paddingBottom: hp("0.1%")
	},
	button: {
		textAlign: "center",
		fontSize: hp("2.5%"),
		fontWeight: "bold",
		color: "white"
	},
	extraBold: {
		fontWeight: "900"
	}
});

export default class App extends React.Component {
	static navigationOptions = {
		header: null
	};

	state = {
		fontLoaded: false,
		associationName: "",
		activitySector: "",
		associationNameIsOk: false,
		activitySectorIsOk: false,
		cca2: "FR",
		callingCode: "33",
		color: "#FFFFFF",
		userRef: null,
		countryName: ""
	};
	onSelect = country => {
		// console.log(country);
		// setCountryCode(country.cca2);
		// setCountry(country);
		this.setState({
			cca2: country.cca2,
			callingCode: country.callingCode[0],
			countryName: country.name
		});
	};

	handleInput = (text, field) => {
		const regexSymbol = XRegExp("\\pS", "A");
		const regexSigne1 = XRegExp("[^A-Za-z- ’]");
		const regexSigne2 = XRegExp("[^\\pL- ’]");
		const regex1 = XRegExp("[- ’]");
		const regex2 = XRegExp("[0-9]");
		let noBullshit = true;
		for (let i = 0; noBullshit && i < text.length; i++) {
			const c = text[i];
			if (
				!(
					((!regexSymbol.test(c) || regex1.test(c)) &&
						(!regexSigne2.test(c) || !regexSigne1.test(c))) ||
					regex2.test(c)
				)
			)
				noBullshit = false;
		}
		if (noBullshit) {
			this.setState({
				[field]: text
			});
			if (text.length) this.setState({ [field + "IsOk"]: true });
			else this.setState({ [field + "IsOk"]: false });
		}
	};

	validationHandler = async () => {
		const {
			activitySectorIsOk,
			activitySector,
			associationNameIsOk,
			associationName,
			userRef,
			cca2,
			countryName,
			callingCode
		} = this.state;
		const firestore = firebase.firestore();
		if (activitySectorIsOk && associationNameIsOk) {
			//push the name to database on the hash
			try {
				const newEntryRef = await firestore
					.collection("associationUsers")
					.doc(userRef.uid);
				await firebase.auth().currentUser.updateProfile({
					displayName: associationName
				});
				await newEntryRef.set({
					associationName,
					activitySector,
					countryCCA2: cca2,
					countryName,
					verifiedPhone: false,
					verifiedEmail: false,
					signUpEnded: false
				});
				this.props.navigation.navigate("HowContactAsso", {
					newEntryRef,
					cca2,
					callingCode
				});
			} catch (err) {
				console.log(err);
			}
		}
	};

	async componentDidMount() {
		const { goBack } = this.props.navigation;
		const auth = firebase.auth();
		await Font.loadAsync({
			"SF-pro": require("../../assets/fonts/SF-Pro-Text-Regular.otf"),
			"Montserrat-light": require("../../assets/fonts/Montserrat-Light.ttf")
		});
		this.setState({ fontLoaded: true });
		try {
			await auth.signInAnonymously();
			auth.onAuthStateChanged(user => {
				if (user) {
					this.setState({ userRef: user });
				} else {
					throw { error: true, message: "no user !" };
				}
			});
		} catch (err) {
			console.log(err);
			goBack();
		}
	}

	render() {
		const { goBack } = this.props.navigation;
		const { associationName, activitySector } = this.state;
		return (
			<View style={styles.screenContainer}>
				<LinearGradient
					colors={["#FFA901", "#FFCC48", "#FFA901"]}
					style={{ flex: 1 }}
					start={{ x: 0, y: 0 }}
					end={{ x: 0, y: 1 }}
				>
					<BackButton text="Connexion" goBack={goBack} />
					<View style={styles.mainContainer}>
						<Text style={styles.title}>
							Bienvenue sur
							{this.state.fontLoaded && (
								<Text
									style={{ fontFamily: "Montserrat-light" }}
								>
									{" "}
									YOUGGY{" "}
								</Text>
							)}{" "}
						</Text>
						<View style={{ paddingBottom: hp("3%") }} />
						<Text style={styles.subText}>
							Nous avons hâte que vous partagez vos{" "}
							<Text style={styles.extraBold}>
								premières missions
							</Text>{" "}
							!
						</Text>
						<View style={{ paddingBottom: hp("3%") }} />
						<Text style={styles.info}>NOM DE L'ASSOCIATION</Text>
						<TextInput
							autoCapitalize="none"
							autoCorrect={false}
							style={styles.line}
							value={associationName}
							onChangeText={text =>
								this.handleInput(text, "associationName")
							}
						/>
						<View style={styles.space2} />
						<Text style={styles.info}>SECTEUR D'ACTIVITÉ</Text>
						<TextInput
							autoCapitalize="none"
							autoCorrect={false}
							style={styles.line}
							value={activitySector}
							onChangeText={text =>
								this.handleInput(text, "activitySector")
							}
						/>
						<View style={styles.space2} />

						<Text style={styles.info}>PAYS DE PROVENANCE</Text>
						<View
							style={styles.line}
							// value={firstName}
							// onChangeText={text =>
							// 	this.handleInput(text, 'firstName')}
						>
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
								translation={"fra"}
								theme={{
									onBackgroundTextColor: this.state.color
								}}
								onOpen={() =>
									this.setState({ color: "#000000" })
								}
								onClose={() =>
									this.setState({ color: "#FFFFFF" })
								}
							/>
						</View>
						<View style={styles.space2} />

						<View style={styles.space} />
						<TouchableOpacity onPress={this.validationHandler}>
							<Text style={styles.button}>Je continue</Text>
						</TouchableOpacity>
					</View>
				</LinearGradient>
			</View>
		);
	}
}

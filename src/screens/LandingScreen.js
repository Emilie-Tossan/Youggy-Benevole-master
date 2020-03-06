import React, { Component, Fragment } from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	SafeAreaView,
	Button,
	TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from "react-native-responsive-screen";
import * as Font from "expo-font";
import * as Animatable from "react-native-animatable";

import PersonnageAssociationAnimeV3 from "./Components/Animation/PersonnageAssociationAnimeV3";
import PersonnageBenevoleAnimeV3 from "./Components/Animation/PersonnageBenevoleAnimeV3";
import LandingAnimation from "../screens/Components/Animation/LandingAnimation";

const styles = StyleSheet.create({
	//
	// Animation
	//
	animationView: {
		height: "100%",
		width: "100%"
	},
	animationText: {
		color: "white",
		fontSize: hp("5%"),
		textAlign: "center"
	},
	//
	// Rect
	//
	rect1: {
		width: wp("120%"),
		height: hp("55%"),
		position: "absolute",
		transform: [{ rotate: "5deg" }],
		top: hp("-5%"),
		left: wp("-10%")
	},
	rect2: {
		top: hp("50%"),
		width: wp("120%"),
		height: hp("55%"),
		transform: [{ rotate: "5deg" }],
		left: wp("-10%"),
		position: "absolute"
	},
	//
	// Screen
	//
	screenContainer: {
		width: "100%",
		height: "100%"
	},
	screenTop: {
		width: wp("100%"),
		height: hp("55%")
		// borderColor: 'white',
		// borderWidth: 1
	},
	screenBottom: {
		width: wp("100%"),
		height: hp("55%")
		// borderColor: 'white',
		// borderWidth: 1
	},
	landingContainer: {
		marginLeft: "auto",
		marginRight: "auto",
		left: hp("8%")
		// height: hp('70%')
	},
	//
	//
	//
	text: {
		fontSize: hp("2.8%"),
		color: "white",
		textAlign: "center"
	},
	perso: {
		height: hp("35%"),
		width: hp("35%"),
		marginLeft: "auto",
		marginRight: "auto"
	},
	//
	// Utils
	//
	bold: {
		fontWeight: "bold"
	}
});

Animatable.View = Animatable.createAnimatableComponent(View);
Animatable.Text = Animatable.createAnimatableComponent(Text);

export default class App extends React.Component {
	static navigationOptions = {
		header: null
	};

	state = {
		fontLoaded: false
	};

	async componentDidMount() {
		await Font.loadAsync({
			"SF-pro": require("../../assets/fonts/SF-Pro-Text-Regular.otf"),
			"Montserrat-light": require("../../assets/fonts/Montserrat-Light.ttf")
		});
		this.setState({ fontLoaded: true });
	}

	render() {
		const Down = {
			from: {
				translateY: 0
			},
			to: {
				translateY: -hp("100%")
			}
		};
		return (
			<View style={{ height: "200%" }}>
				<Animatable.View
					animation={Down}
					iterationCount={1}
					direction="alternate"
					delay={3000}
					duration={2000}
				>
					<View style={{ height: hp("100%") }}>
						<LinearGradient
							colors={["#FFA901", "#FFCC48"]}
							style={{
								flex: 1
							}}
							start={{ x: 0, y: 0 }}
							end={{ x: 0, y: 1 }}
						>
							<View
								style={{
									marginLeft: "auto",
									marginRight: "auto"
								}}
							>
								<View style={styles.landingContainer}>
									<LandingAnimation
										style={{
											height: hp("45%") * 1.404,
											width: hp("45%")
										}}
									/>
								</View>
								<Animatable.Text
									delay={2000}
									animation="fadeIn"
									style={styles.animationText}
								>
									{this.state.fontLoaded && (
										<Text
											style={{
												fontFamily: "Montserrat-light"
											}}
										>
											YOUGGY
										</Text>
									)}
								</Animatable.Text>
							</View>
						</LinearGradient>
					</View>

					<View style={styles.screenContainer}>
						{/*  */}
						{/* Rect */}
						{/*  */}
						<View
							style={styles.rect1}
							onPress={() =>
								this.props.navigation.navigate("SwipeAsso")
							}
						>
							<LinearGradient
								colors={["#FFCC48", "#FFA901"]}
								style={{ flex: 1 }}
								start={{ x: 0, y: 0 }}
								end={{ x: 0, y: 1 }}
							/>
						</View>
						<View style={styles.rect2}>
							<LinearGradient
								colors={["#D94B4B", "#E06666"]}
								style={{ flex: 1 }}
								start={{ x: 0, y: 0 }}
								end={{ x: 0, y: 1 }}
							/>
						</View>
						{/*  */}
						{/* Page */}
						{/*  */}
						<TouchableOpacity
							style={styles.screenTop}
							activeOpacity={0.8}
							onPress={() =>
								this.props.navigation.navigate("SwipeAsso")
							}
						>
							<View style={styles.persoContainer}>
								<PersonnageAssociationAnimeV3
									style={styles.perso}
								/>
							</View>
							<View style={{ paddingBottom: hp("5%") }} />
							<Text style={styles.text}>
								Je suis une{" "}
								{this.state.fontLoaded && (
									<Text
										style={{
											fontFamily: "Montserrat-light"
										}}
									>
										ASSOCIATION
									</Text>
								)}
								,{"\n"}
								<Text style={styles.bold}>
									j'ai besoin d'aide !
								</Text>
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.screenBottom}
							activeOpacity={0.8}
							onPress={() =>
								this.props.navigation.navigate("Swipe")
							}
						>
							<Text style={styles.text}>
								Je suis un{" "}
								{this.state.fontLoaded && (
									<Text
										style={{
											fontFamily: "Montserrat-light"
										}}
									>
										YOUGGER
									</Text>
								)}
								,{"\n"}
								<Text style={styles.bold}>je veux aider !</Text>
							</Text>
							<View style={styles.persoContainer}>
								<PersonnageBenevoleAnimeV3
									style={styles.perso}
								/>
							</View>
						</TouchableOpacity>
					</View>
				</Animatable.View>
			</View>
		);
	}
}

import React from "react";
import {
	Text,
	View,
	TouchableOpacity,
	TextInput,
	StyleSheet
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from "react-native-responsive-screen";
import * as Font from "expo-font";

const Device = require("react-native-device-detection");

const styles = StyleSheet.create({
	mainContainer: {
		width: wp("100%"),
		height: hp("100%"),
		marginTop: "auto",
		marginBottom: "auto",
		marginLeft: "auto",
		marginRight: "auto",
		paddingLeft: wp("8%"),
		paddingRight: wp("8%"),
		position: "absolute"
	}
});

const BottomButton = props => {
	return (
		<TouchableOpacity
			style={{
				top: "93%",
				height: hp("7%"),
				width: wp("100%"),
				backgroundColor: props.color ? props.color : "#D94B4B",
				position: "absolute"
			}}
			onPress={props.navigate}
		>
			<Text
				style={{
					marginLeft: "auto",
					marginRight: "auto",
					marginTop: "auto",
					marginBottom: "auto",
					color: "white",
					fontSize: hp("2.8%"),
					fontWeight: "bold"
				}}
			>
				{props.text}
			</Text>
		</TouchableOpacity>
	);
};

export default BottomButton;

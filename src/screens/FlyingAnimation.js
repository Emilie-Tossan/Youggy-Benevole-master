import React, { Component } from 'react';
import {
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	TextInput,
	StyleSheet
} from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	screenContainer: {
		width: '100%',
		height: '100%'
	},
	mainContainer: {
		top: hp('-15%'),
		width: wp('100%'),
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: wp('4%'),
		paddingRight: wp('4%')
	}
});

export default class App extends React.Component {
	constructor() {
		super();
	}

	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<View style={styles.screenContainer}>
				<View style={{ paddingBottom: hp('12%') }} />
			</View>
		);
	}
}

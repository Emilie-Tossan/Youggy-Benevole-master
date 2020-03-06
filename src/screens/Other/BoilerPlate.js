import React from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	TextInput,
	StyleSheet
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import * as Font from 'expo-font';

import BackButton from '../Components/BackButton';

const Device = require('react-native-device-detection');

const styles = StyleSheet.create({
	screenContainer: {
		width: '100%',
		height: '100%'
	},
	mainContainer: {
		width: wp('100%'),
		marginTop: 'auto',
		marginBottom: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: wp('8%'),
		paddingRight: wp('8%')
	}
});

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	static navigationOptions = {
		header: null
	};

	state = {
		fontLoaded: false
	};

	async componentDidMount() {
		await Font.loadAsync({
			'SF-pro': require('../../assets/fonts/SF-Pro-Text-Regular.otf'),
			'Montserrat-light': require('../../assets/fonts/Montserrat-Light.ttf')
		});
		this.setState({ fontLoaded: true });
	}

	render() {
		const { goBack } = this.props.navigation;

		return (
			<View style={styles.screenContainer}>
				<View style={styles.mainContainer} />
			</View>
		);
	}
}

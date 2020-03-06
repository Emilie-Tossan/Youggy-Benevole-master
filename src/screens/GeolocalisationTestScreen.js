// import React from 'react';
// import {
// 	Text,
// 	View,
// 	TouchableOpacity,
// 	TextInput,
// 	StyleSheet
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import {
// 	widthPercentageToDP as wp,
// 	heightPercentageToDP as hp
// } from 'react-native-responsive-screen';
// import * as Font from 'expo-font';

// import BackButton from './Components/BackButton';

// const Device = require('react-native-device-detection');

// const styles = StyleSheet.create({
// 	screenContainer: {
// 		width: '100%',
// 		height: '100%'
// 	},
// 	mainContainer: {
// 		width: wp('100%'),
// 		marginTop: 'auto',
// 		marginBottom: 'auto',
// 		marginLeft: 'auto',
// 		marginRight: 'auto',
// 		paddingLeft: wp('8%'),
// 		paddingRight: wp('8%')
// 	}
// });

// export default class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {};
// 	}

// 	static navigationOptions = {
// 		header: null
// 	};

// 	state = {
// 		fontLoaded: false
// 	};

// 	async componentDidMount() {
// 		await Font.loadAsync({
// 			'SF-pro': require('../../assets/fonts/SF-Pro-Text-Regular.otf'),
// 			'Montserrat-light': require('../../assets/fonts/Montserrat-Light.ttf')
// 		});
// 		this.setState({ fontLoaded: true });
// 	}

// 	render() {
// 		const { goBack } = this.props.navigation;

// 		return (
// 			<View style={styles.screenContainer}>
// 				<View style={styles.mainContainer} />
// 			</View>
// 		);
// 	}
// }

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			ready: false,
			where: { lat: null, lng: null },
			error: null
		};
	}
	componentDidMount() {
		let geoOptions = {
			enableHighAccuracy: true,
			timeOut: 20000,
			maximumAge: 60 * 60 * 24
		};
		this.setState({ ready: false, error: null });
		navigator.geolocation.getCurrentPosition(
			this.geoSuccess,
			this.geoFailure,
			geoOptions
		);
	}
	geoSuccess = position => {
		console.log(position.coords.latitude);
		console.log(position.coords);

		this.setState({
			ready: true,
			where: {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			}
		});
	};
	geoFailure = err => {
		this.setState({ error: err.message });
	};
	render() {
		return (
			<View style={styles.container}>
				{!this.state.ready && (
					<Text style={styles.big}>
						Using Geolocation in React Native.
					</Text>
				)}
				{this.state.error && (
					<Text style={styles.big}>{this.state.error}</Text>
				)}
				{this.state.ready && (
					<Text style={styles.big}>{`Latitude: ${this.state.where.lat}
                    Longitude: ${this.state.where.lng}`}</Text>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	big: {
		fontSize: 48
	}
});

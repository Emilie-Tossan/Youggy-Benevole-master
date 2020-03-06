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
import * as Animatable from 'react-native-animatable';

import MapMarker from '../../../assets/svg-js/mapMarker';
import Cible from '../../../assets/svg-js/Cible';

import BackButton from '../Components/BackButton';

const Device = require('react-native-device-detection');

Animatable.View = Animatable.createAnimatableComponent(Animatable.View);

const styles = StyleSheet.create({
	screenContainer: {
		width: '100%',
		height: '100%'
	},
	mainContainer: {
		width: wp('100%'),

		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: wp('8%'),
		paddingRight: wp('8%')
	},
	//
	// Animation
	//
	animation: {
		top: hp('-8%')
	},
	mapMarker: {
		marginTop: 'auto',
		marginBottom: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	cible: {
		top: 100,
		marginTop: 'auto',
		marginBottom: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	//
	// Text
	//
	adresse: {
		textAlign: 'center',
		fontSize: hp('2.2%'),
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
			'SF-pro': require('../../../assets/fonts/SF-Pro-Text-Regular.otf'),
			'Montserrat-light': require('../../../assets/fonts/Montserrat-Light.ttf')
		});
		this.setState({ fontLoaded: true });
	}

	render() {
		const { goBack } = this.props.navigation;

		return (
			<View style={styles.screenContainer}>
				<View style={{ paddingBottom: hp('35%') }} />
				<View style={styles.mainContainer}>
					<View style={styles.animation}>
						<View style={styles.cible}>
							<Cible />
						</View>
						<Animatable.View
							animation="slideInDown"
							direction="alternate-reverse"
							iterationCount="infinite"
							style={styles.mapMarker}
						>
							<MapMarker />
						</Animatable.View>
					</View>
					<Text style={styles.adresse}>
						[Adresse une fois detecté]
					</Text>
				</View>
			</View>
		);
	}
}

import React from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	TextInput,
	StyleSheet
} from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import * as Font from 'expo-font';
import { Input, Divider } from 'react-native-elements';

const Device = require('react-native-device-detection');

const styles = StyleSheet.create({
	screenContainer: {
		width: '100%',
		height: '100%'
	},
	mainContainer: {
		top: hp('-10%'),
		width: wp('100%'),
		marginTop: 'auto',
		marginBottom: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: wp('8%'),
		paddingRight: wp('8%')
	},
	//
	// Text
	//
	subText: {
		textAlign: 'center'
	},
	//
	// FlexRow
	//,
	flexRow: {
		flexDirection: 'row'
	},
	flex1: {
		width: '15%'
	},
	flex2: {
		width: '42.5%',
		top: hp('2%')
	},
	flexText: {
		fontSize: hp('3%'),
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#D94B4B'
	},
	//
	// Bouton
	//
	bouton1: {
		marginLeft: 'auto',
		marginRight: 'auto',
		height: hp('6%'),
		width: '100%'
	},
	boutonText1: {
		marginTop: 'auto',
		marginBottom: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
		fontSize: hp('3.2%'),
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#D94B4B'
	},
	bouton2: {
		marginLeft: 'auto',
		marginRight: 'auto',
		height: hp('6%'),
		width: '100%',
		backgroundColor: '#D94B4B',
		borderRadius: 100
	},
	boutonText2: {
		marginTop: 'auto',
		marginBottom: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
		fontSize: hp('3.2%'),
		fontWeight: 'bold',
		textAlign: 'center',
		color: 'white'
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
				<View style={styles.mainContainer}>
					<Text style={styles.subText}>Entre une adresse</Text>
					<View style={{ paddingTop: hp('2%') }} />
					<View style={styles.flexRow}>
						<View style={styles.flex2}>
							<Divider />
						</View>
						<View style={styles.flex1}>
							<Text style={styles.flexText}>ou</Text>
						</View>
						<View style={styles.flex2}>
							<Divider />
						</View>
					</View>
					<View style={{ paddingTop: hp('2%') }} />
					<Text
						style={{
							...styles.subText,
							marginLeft: hp('2%'),
							marginRight: hp('2%')
						}}
					>
						géolocalise-toi pour trouver les missions autour de toi.
					</Text>
					<View style={{ paddingTop: hp('17%') }} />
					<TouchableOpacity
						style={styles.bouton1}
						onPress={() =>
							this.props.navigation.navigate('MissionsList')}
					>
						<Text style={styles.boutonText1}>
							{'   '}
							J'entre une adresse{'   '}
						</Text>
					</TouchableOpacity>
					<View style={{ paddingTop: hp('1%') }} />
					<TouchableOpacity
						style={styles.bouton2}
						onPress={() =>
							this.props.navigation.navigate('GeolocAnimation')}
					>
						<Text style={styles.boutonText2}>
							Je me géolocalise{'  '}!
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

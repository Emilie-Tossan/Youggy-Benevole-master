import React from 'react';
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
import * as Font from 'expo-font';
import { Input, Divider } from 'react-native-elements';

import BackButton from '../Components/BackButton';
import MapMarker from '../../../assets/svg-js/mapMarker';

import PhotoProfil from '../../../assets/svg-js/photo_profil';
import uuid from 'uuid/v1';

const Device = require('react-native-device-detection');

const styles = StyleSheet.create({
	screenContainer: {
		width: '100%',
		height: '100%'
	},
	mainContainer: {
		width: wp('100%'),
		height: '100%',
		top: hp('10%'),
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
	desc: {
		fontSize: hp('2.5%'),
		fontWeight: 'bold'
	},
	societe: {
		fontSize: hp('2.7%'),
		fontWeight: '300'
	},
	description: {
		fontSize: hp('2%'),
		textAlign: 'center',
		fontWeight: '300'
	},
	place: {
		top: hp('1.5%'),
		fontSize: hp('1.7%'),
		textAlign: 'center',
		fontWeight: '300'
	},
	//
	// FlexRow
	//,
	flexRow: {
		flexDirection: 'row'
	},
	flex1: {
		marginLeft: 'auto',
		marginRight: 'auto'
		// width: '5%'
	},
	flex2: {
		top: hp('2%'),
		width: '40%'
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
	bouton: {
		marginLeft: 'auto',
		marginRight: 'auto',
		top: hp('-15%'),
		height: hp('6%'),
		width: '80%',
		backgroundColor: '#D94B4B',
		borderRadius: 100
	},
	boutonText: {
		marginTop: 'auto',
		marginBottom: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
		fontSize: hp('3.2%'),
		fontWeight: 'bold',
		textAlign: 'center',
		color: 'white'
	},
	//
	// Flex
	//
	flexRow: {
		flexDirection: 'row'
	},
	//
	// Utils
	//
	divider: {
		height: 1,
		backgroundColor: '#DFDFDF',
		width: wp('80%'),
		marginBottom: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	divider2: {
		height: 1,
		backgroundColor: '#DFDFDF',
		width: '100%',
		marginBottom: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto'
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
		fontLoaded: false,
		beneSkills: [
			{ title: 'cuisine', id: uuid(), isCompetence: true },
			{ title: 'repas', id: uuid(), isCompetence: false }
		],
		requestedSkills: [
			{ title: 'test', id: uuid(), isCompetence: true },
			{ title: 'cuisine', id: uuid(), isCompetence: true },
			{ title: 'repas', id: uuid(), isCompetence: false },
			{ title: 'solidarité', id: uuid(), isCompetence: false }
		]
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

		const Logo = () => {
			return (
				<View style={{ width: '32%' }}>
					<PhotoProfil
						y={10}
						x={31}
						photoStyle={{
							width: 85,
							height: 85
						}}
						style={{
							width: hp('11%') * 1.60975,
							height: hp('11%'),

							top: hp('-1.3%'),
							left: hp('-0.7%')
						}}
						displayText={true}
						profil={
							'https://graphism.fr/wp-content/uploads/2015/02/logobis.jpg'
						}
						// defaultImg={".."}
					/>
				</View>
			);
		};

		const Desc = () => {
			return (
				<View
					style={{
						width: '68%',
						top: hp('2%')
					}}
				>
					<Text style={styles.societe}>Les Restos du coeur</Text>
					<Text style={styles.desc}>Distribution de repas</Text>
				</View>
			);
		};

		const MapMarkerDesign = () => {
			return (
				<View style={{ width: '100%' }}>
					<View style={styles.flexRow}>
						<View style={styles.flex2}>
							<Divider style={styles.divider2} />
						</View>
						<View style={styles.flex1}>
							<MapMarker width={15} height={30} />
						</View>
						<View style={styles.flex2}>
							<Divider style={styles.divider2} />
						</View>
					</View>
				</View>
			);
		};

		const Header = () => {
			return (
				<View style={styles.flexRow}>
					<Logo />
					<View style={{ width: '6%' }} />
					<Desc />
				</View>
			);
		};

		const Description = () => {
			return (
				<View>
					<Text style={styles.description}>
						Nous avons besoin de renfort pour nous aider à
						distribuer les repas aux personnes qui vivent dans la
						rue.
					</Text>
				</View>
			);
		};

		const SkillList = () => {
			return (
				<View>
					<Text>[Fonctions affichés tout les skills demandé]</Text>
				</View>
			);
		};
		const BackHeader = () => {
			return (
				<View style={{ top: hp('1%') }}>
					<BackButton
						text="Ma recherche de missions"
						color="black"
						goBack={goBack}
					/>
					{/* <View style={{ paddingBottom: hp('2%') }} /> */}
				</View>
			);
		};

		return (
			<View style={styles.screenContainer}>
				<BackHeader />
				<ScrollView style={styles.mainContainer}>
					<Header />
					<View style={{ paddingTop: hp('2%') }} />
					<Divider style={styles.divider} />
					<View style={{ paddingTop: hp('2%') }} />
					<Description />
					<View style={{ paddingTop: hp('2%') }} />
					<Divider style={styles.divider} />
					<View style={{ paddingTop: hp('4%') }} />
					<SkillList />
					<View style={{ paddingTop: hp('2%') }} />
					<MapMarkerDesign />
					<Text style={styles.place}>Paris 11e</Text>
				</ScrollView>
				<TouchableOpacity
					style={styles.bouton}
					onPress={() =>
						this.props.navigation.navigate('MissionParticipation')}
				>
					<Text style={styles.boutonText}>Je participe{'  '}!</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

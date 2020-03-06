import React, { Component, Fragment } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import * as Font from 'expo-font';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import Next from '../../assets/svg-js/next';
import Back from '../../assets/svg-js/back';
import Logo from '../../assets/svg-js/logo';

import PersonnageAssociationAnime from './Components/Animation/PersonnageAssociationAnime';
import PersonnageBenevoleAnime from './Components/Animation/PersonnageBenevoleAnime';
import PersonnageAssociationAnimeV2 from './Components/Animation/PersonnageAssociationAnimeV2';
import PersonnageBenevoleAnimeV2 from './Components/Animation/PersonnageBenevoleAnimeV2';
import PersonnageAssociationAnimeV3 from './Components/Animation/PersonnageAssociationAnimeV3';
import PersonnageBenevoleAnimeV3 from './Components/Animation/PersonnageBenevoleAnimeV3';
import LogoAnimation from '../screens/Components/Animation/LogoAnimation';

import * as Animatable from 'react-native-animatable';
import {
	SwitchActions,
	NavigationActions,
	StackActions
} from 'react-navigation';

import LandingAnimation from '../screens/Components/Animation/LandingAnimation';
Animatable.View = Animatable.createAnimatableComponent(View);
Animatable.Text = Animatable.createAnimatableComponent(Text);

const styles = StyleSheet.create({
	//
	// Animation
	//
	animationView: {
		height: '100%',
		width: '100%'
	},
	animationText: {
		color: 'white',
		fontSize: hp('5%'),
		textAlign: 'center'
	},
	landingContainer: {
		marginLeft: 'auto',
		marginRight: 'auto',
		left: hp('8%')
		// height: hp('70%')
	},
	//
	//
	//
	screenContainer: {
		width: '100%',
		height: '100%'
	},
	mainContainer: {
		width: '100%',
		// marginTop: 'auto',
		// marginBottom: 'auto',
		height: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: wp('7%'),
		paddingRight: wp('7%')
	},
	//
	// Text
	//
	title: {
		textAlign: 'center',
		color: 'white',
		fontSize: hp('2.8%'),
		letterSpacing: 1
	},
	text: {
		textAlign: 'center',
		color: 'white',
		fontSize: hp('2.5%'),
		letterSpacing: 1
	},
	citationSmall: {
		textAlign: 'center',
		color: 'white',
		fontSize: hp('2.5%'),
		letterSpacing: 1,
		fontWeight: 'bold'
	},
	citationLarge: {
		textAlign: 'center',
		color: 'white',
		fontSize: hp('2.9%'),
		letterSpacing: 1,
		fontWeight: 'bold'
	},
	//
	// Première page
	//
	logoContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
		height: hp('50%'),
		left: hp('5%')
	},
	logo: {
		height: wp('50%'),
		width: wp('50%')
	},
	//
	// Deuxième && Troisième page
	//
	persoContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
		height: hp('50%')
	},
	perso: {
		height: hp('40%'),
		width: hp('40%')
	},
	//
	// Swipe Container
	//
	swipeContainer: {
		left: hp('1.2%'),
		top: hp('-10%'),
		flexDirection: 'row',
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	swipeContainer2: {
		left: hp('-1.2%'),
		top: hp('-10%'),
		flexDirection: 'row',
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	swipeTextContainer: {
		paddingRight: 12,
		textAlign: 'center'
	},
	swipeTextContainer2: {
		paddingLeft: 12,
		textAlign: 'center'
	},
	swipeText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: hp('1.8%'),
		textAlign: 'center'
	},
	swipeText2: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: hp('1.8%'),
		textAlign: 'center'
	},
	swipeImageContainer: {
		height: hp('6.4%')
	},
	swipeImageContainer2: {
		height: hp('6.4%'),
		paddingRight: 12
	},
	suivant: {
		top: hp('0.5%'),
		height: hp('1.2%'),
		width: hp('1.2%') * 2
	},
	//
	// Bouton
	//
	boutonContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	bouton1: {
		width: wp('70%'),
		height: hp('5%')
	},
	boutonText1: {
		textAlign: 'center',
		color: 'white',
		fontSize: hp('2.8%'),
		fontWeight: 'bold'
	},
	boutonText2: {
		textAlign: 'center',
		color: '#FFA901',
		fontSize: hp('2.8%'),
		fontWeight: 'bold',
		marginTop: 'auto',
		marginBottom: 'auto'
	},
	boutonText2Red: {
		textAlign: 'center',
		color: '#D94B4B',
		fontSize: hp('2.8%'),
		fontWeight: 'bold',
		marginTop: 'auto',
		marginBottom: 'auto'
	},
	bouton2: {
		borderRadius: 50,
		height: hp('5%'),
		width: wp('60%'),
		backgroundColor: 'white',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	//
	// Utils
	//
	bold: {
		fontWeight: 'bold'
	}
});

export default class App extends React.Component {
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
		const Down = {
			from: {
				translateY: 0
			},
			to: {
				translateY: -hp('100%')
			}
		};
		return (
			<View style={{ height: '200%' }}>
				<Animatable.View
					animation={Down}
					iterationCount={1}
					direction='alternate'
					delay={3000}
					duration={2000}
				>
					<View style={{ height: hp('100%') }}>
						<LinearGradient
							colors={['#E06666', '#D94B4B']}
							style={{
								flex: 1
							}}
							start={{ x: 0, y: 0 }}
							end={{ x: 0, y: 1 }}
						>
							<View
								style={{
									marginLeft: 'auto',
									marginRight: 'auto'
								}}
							>
								<View style={styles.landingContainer}>
									<LandingAnimation
										style={{
											height: hp('45%') * 1.404,
											width: hp('45%')
										}}
									/>
								</View>
								<View style={{ paddingBottom: hp('2%') }} />
								<Animatable.Text
									delay={2000}
									animation='fadeIn'
									style={styles.animationText}
								>
									{this.state.fontLoaded && (
										<Text
											style={{
												fontFamily: 'Montserrat-light',
												fontWeight: 'normal'
											}}
										>
											YOUGGY
										</Text>
									)}
								</Animatable.Text>
							</View>
						</LinearGradient>
					</View>
					{/*  */}
					<View style={styles.screenContainer}>
						<LinearGradient
							colors={['#D94B4B', '#E06666']}
							style={{ flex: 1 }}
							start={{ x: 0, y: 0 }}
							end={{ x: 0, y: 1 }}
						>
							<View style={styles.mainContainer}>
								<View style={styles.persoContainer}>
									<View style={{ paddingBottom: hp('4%') }} />
									<PersonnageBenevoleAnimeV3
										style={styles.perso}
									/>
								</View>
								<Text style={styles.title}>
									<Text style={styles.citationLarge}>
										"Je suis un
									</Text>
									{this.state.fontLoaded && (
										<Text
											style={{
												fontFamily: 'Montserrat-light'
											}}
										>
											{' '}
											YOUGGER,{' '}
										</Text>
									)}
									<Text>{'\n'}</Text>

									<Text style={styles.citationLarge}>
										je veux aider !"
									</Text>
								</Text>
								<View style={{ paddingBottom: hp('17%') }} />
								<View style={styles.boutonContainer}>
									<TouchableOpacity
										style={styles.bouton1}
										onPress={() =>
											this.props.navigation.navigate(
												'Connexion',
												{
													index: 0
												}
											)
										}
									>
										<Text style={styles.boutonText1}>
											J'ai déjà un compte
										</Text>
									</TouchableOpacity>
								</View>
								<View style={styles.boutonContainer}>
									<TouchableOpacity
										style={styles.bouton2}
										onPress={() => {
											this.props.navigation.navigate(
												'Inscription'
											);
										}}
									>
										<Text style={styles.boutonText2Red}>
											{'  '}C'est parti !{'  '}
										</Text>
									</TouchableOpacity>
								</View>
							</View>
							<View style={styles.swipeContainer}>
								<View style={styles.swipeTextContainer}>
									<Text style={styles.swipeText}>
										Je suis une association
									</Text>
								</View>
								<View style={styles.swipeImageContainer}>
									<Next style={styles.suivant} />
								</View>
							</View>
						</LinearGradient>
					</View>
				</Animatable.View>
			</View>
		);
	}
}

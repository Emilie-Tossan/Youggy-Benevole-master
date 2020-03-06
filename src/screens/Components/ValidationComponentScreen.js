import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import Valide from './Animation/ValiderAnimation';

const styles = StyleSheet.create({
	screenContainer: {
		width: '100%',
		height: '140%',
		paddingBottom: hp('40%')
	},
	mainContainer: {
		marginTop: 'auto',
		marginBottom: 'auto',
		marginLeft: 'auto',
		marginRight: 'auto',
		textAlign: 'center',
		paddingLeft: wp('9%'),
		paddingRight: wp('9%'),
		height: hp('20%')
	},
	text: {
		fontSize: hp('3%'),
		textAlign: 'center'
	},
	imageContainer: {
		marginLeft: 'auto',
		marginRight: 'auto',
		width: hp('6%'),
		height: hp('6%')
	},
	image: {
		width: hp('6%'),
		height: hp('6%')
	}
});

const Validation = props => {
	if (props.display) {
		setTimeout(() => {
			props.next();
		}, 3000);
	}

	const BackgroundColor = props => {
		console.log(props);
		if (props === 'benevole') return [ '#D94B4B', '#E06666', '#D94B4B' ];
		else if (props === 'asso') return [ '#FFA901', '#FFCC48', '#FFA901' ];
		else return [ 'white', 'white' ];
	};

	return (
		props.display && (
			<View style={styles.screenContainer}>
				<LinearGradient
					colors={BackgroundColor(props.side)}
					style={{
						flex: 1
					}}
					start={{
						x: 0,
						y: 0
					}}
					end={{
						x: 0,
						y: 1
					}}
				>
					<View style={styles.mainContainer}>
						<Text
							style={{
								...styles.text,
								color: `${props.typo}`,
								fontWeight:
									props.side === 'profil' ? '' : 'bold'
							}}
						>
							{props.text}
							{'  '}
						</Text>
						<View style={{ paddingBottom: hp('3%') }} />
						<View style={styles.imageContainer}>
							<Valide style={styles.image} color={props.typo} />
						</View>
					</View>
				</LinearGradient>
			</View>
		)
	);
};

export default Validation;

import React from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	TextInput,
	StyleSheet
} from 'react-native';
import { Input, Divider } from 'react-native-elements';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import * as Font from 'expo-font';

import PhotoProfil from '../../../assets/svg-js/photo_profil';

const Device = require('react-native-device-detection');

const MyMissionComponent = props => {
	const styles = StyleSheet.create({
		mainContainer: {
			width: wp('100%'),

			marginTop: 'auto',
			marginBottom: 'auto',
			marginLeft: 'auto',
			marginRight: 'auto'
		},
		//
		// Desc
		//
		desc: {
			fontSize: hp('2.3%'),
			fontWeight: 'bold'
		},
		societe: {
			fontSize: hp('2.1%'),
			fontWeight: '300'
		},
		//
		// Date
		//
		date: {
			textAlign: 'center',
			fontSize: hp('3%')
		},
		month: {
			textAlign: 'center',
			fontSize: hp('1.5%'),
			fontWeight: '300'
		},
		time: {
			textAlign: 'center',
			fontSize: hp('1.7%'),
			fontWeight: '300'
		},
		//
		// Row
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
			left: wp('-4%'),
			width: wp('90%'),
			marginBottom: 'auto',
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	});

	const Logo = () => {
		return (
			<View style={{ width: '22%' }}>
				<PhotoProfil
					y={10}
					x={31}
					photoStyle={{
						width: 85,
						height: 85
					}}
					style={{
						width: hp('7%') * 1.60975,
						height: hp('7%'),
						position: 'absolute',
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
			<View style={{ width: '78%' }}>
				<Text style={styles.desc}>{props.desc}</Text>
				<Text style={styles.societe}>{props.societe}</Text>
			</View>
		);
	};

	console.log(props);
	return (
		<TouchableOpacity
			style={styles.mainContainer}
			onPress={props.navigation}
		>
			<View style={{ paddingBottom: hp('3%') }} />
			<View style={styles.flexRow}>
				<Logo />
				<View style={{ width: '2%' }} />
				<Desc />
			</View>
			<View style={{ paddingBottom: hp('3%') }} />
			<Divider style={styles.divider} />
		</TouchableOpacity>
	);
};

export default MyMissionComponent;

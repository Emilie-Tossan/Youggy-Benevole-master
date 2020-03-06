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

import Notification from '../../../assets/svg-js/Notification';
const Device = require('react-native-device-detection');

const MessagesInBoxComponent = props => {
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
			fontWeight: '500'
		},
		societe: {
			fontSize: hp('2.1%'),
			fontWeight: '300'
		},
		status: {
			fontSize: hp('1.8%'),
			color: props.status ? '#00F016' : '#D94B4B'
		},
		//
		// Date
		//
		date: {
			textAlign: 'left',
			fontSize: hp('1.8%'),
			color: 'grey',
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
		//console.log('props' + props.notif);
		return (
			<View style={{ width: '22%', top: hp('1%') }}>
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
						props.logo ||
						'https://graphism.fr/wp-content/uploads/2015/02/logobis.jpg'
					}
					// defaultImg={".."}
				/>
				{props.notif ? (
					<Notification
						width={wp('5%')}
						height={wp('5%')}
						displayText={true}
						style={{ marginLeft: 'auto', left: -hp('1.5%') }}
						demande={props.notif <= 5 ? props.notif : '5+'}
					/>
				) : (
					<View />
				)}
			</View>
		);
	};

	const Desc = () => {
		return (
			<View style={{ width: '78%' }}>
				<Text style={styles.desc}>{props.desc}</Text>
				<Text style={styles.societe}>{props.societe}</Text>
				<Text style={styles.date}>{props.date}</Text>
			</View>
		);
	};

	//console.log(props);
	return (
		<View
			style={styles.mainContainer}
			// onPress={props.navigate}
		>
			<View style={{ paddingBottom: hp('3%') }} />
			<View style={styles.flexRow}>
				<Logo />
				<View style={{ width: '2%' }} />
				<Desc />
			</View>
			<View style={{ paddingBottom: hp('3%') }} />
			<Divider style={styles.divider} />
		</View>
	);
};

export default MessagesInBoxComponent;

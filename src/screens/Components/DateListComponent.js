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

import SelectionVide from '../../../assets/svg-js/SelectionVide';
import SelectionRouge from '../../../assets/svg-js/SelectionRouge';

const Device = require('react-native-device-detection');

const Datelist = props => {
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
			fontSize: hp('2.2%')
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
			left: wp('-10%'),
			width: wp('70%'),
			marginTop: 'auto',
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	});

	const Date = () => {
		return (
			<View style={{ width: '90%' }}>
				{props.id != 0 ? <Divider style={styles.divider} /> : <View />}
				<View style={{ paddingBottom: hp('2%') }} />
				<Text style={styles.date}>
					{props.date} de {props.startHour} à {props.endHour}
				</Text>
			</View>
		);
	};

	const Status = () => {
		return (
			<View style={{ width: '10%', top: hp('2%') }}>
				{props.status ? (
					<SelectionRouge width={hp('3%')} height={hp('3%')} />
				) : (
					<SelectionVide width={hp('3%')} height={hp('3%')} />
				)}
			</View>
		);
	};

	console.log(props);
	return (
		<View style={styles.mainContainer}>
			<View style={styles.flexRow}>
				<Status />

				<Date />
			</View>
			<View style={{ paddingBottom: hp('2%') }} />
		</View>
	);
};

export default Datelist;

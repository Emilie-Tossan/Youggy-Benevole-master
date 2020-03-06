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
import Option from '../../../assets/svg-js/option';
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
			left: wp('-5%'),
			width: wp('80%'),
			marginTop: 'auto',
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	});

	const Date = () => {
		return (
			<View style={{ width: '20%' }}>
				<Text style={styles.date}>{props.date}</Text>
				<Text style={styles.month}>{props.month}</Text>
				<Text style={styles.time}>
					{props.startHour} à {props.endHour}
				</Text>
			</View>
		);
	};

	const Desc = () => {
		return (
			<View style={{ width: '80%' }}>
				<Text style={styles.desc}>{props.desc}</Text>
				<Text style={styles.societe}>{props.societe}</Text>
				<Text style={styles.status}>
					{props.status ? 'Participation accepté' : 'Demande envoyé'}
				</Text>
			</View>
		);
	};

	console.log(props);
	return (
		<View style={styles.mainContainer}>
			{props.id != 0 ? <Divider style={styles.divider} /> : <View />}
			<View style={{ paddingBottom: hp('2%') }} />
			<View style={styles.flexRow}>
				<Date />
				<View style={{ width: '2%' }} />
				<Desc />
				<View
					style={{
						width: '10%',
						height: '100%',
						top: hp('2%'),
						left: -hp('7%')
					}}
				>
					<TouchableOpacity
						onPress={() =>
							props.OptionRenderer(props.id, props.status)}
					>
						<Option
							width={hp('0.5%')}
							height={hp('3%')}
							color="#D8D8D8"
						/>
					</TouchableOpacity>
				</View>
			</View>

			<View style={{ paddingBottom: hp('2%') }} />
		</View>
	);
};

export default MyMissionComponent;

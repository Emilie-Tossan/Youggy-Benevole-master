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

import MapMarker from '../../../assets/svg-js/mapMarker';
import Option from '../../../assets/svg-js/option';
import Notification from '../../../assets/svg-js/Notification';

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
			fontSize: hp('2.1%'),
			fontWeight: '500'
		},
		place: {
			fontSize: hp('2%'),
			fontWeight: '300'
		},
		demande: {
			left: '1%',
			fontSize: hp('1.8%'),
			fontWeight: '300',
			color: 'grey'
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
			flexDirection: 'row',
			left: hp('4%')
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
	const Desc = () => {
		return (
			<View style={styles.flexRow}>
				<View>
					<Text style={styles.desc}>{props.desc}</Text>
				</View>
				{props.demande > 0 ? (
					<View
						style={{
							left: hp('1.5%'),
							marginBottom: 'auto',
							marginTop: 'auto'
						}}
					>
						<Notification
							width={wp('5%')}
							height={wp('5%')}
							displayText={true}
							demande={props.demande <= 5 ? props.demande : '5+'}
						/>
					</View>
				) : (
					<View />
				)}
			</View>
		);
	};

	const Place = () => {
		return (
			<View style={styles.flexRow}>
				<View
					style={{
						left: 3,
						top: hp('0.3%'),
						paddingRight: hp('1.4%')
					}}
				>
					<MapMarker
						height={hp('2%')}
						width={hp('1.4%')}
						color="#FFBB01"
					/>
				</View>
				<View>
					<Text style={styles.place}>{props.place}</Text>
				</View>
			</View>
		);
	};

	const Demande = () => {
		if (props.demande > 0)
			return (
				<View style={{ left: hp('4%'), height: hp('2%') }}>
					<Text style={styles.demande}>
						{props.demande} demande{props.demande > 1 ? 's' : ''}
					</Text>
				</View>
			);
		else return <View style={{ height: hp('2%') }} />;
	};

	console.log(props);
	return (
		<View
			style={styles.mainContainer}
			// onPress={props.navigate}
		>
			<View style={styles.flexRow}>
				<View style={{ width: '79%' }}>
					<View style={{ paddingBottom: hp('3%') }} />
					<Desc />
					<View style={{ paddingBottom: hp('0.4%') }} />
					<Place />
					<View style={{ paddingBottom: hp('0.4%') }} />
					<Demande />
					<View style={{ paddingBottom: hp('2%') }} />
					<Divider style={styles.divider} />
				</View>
				<View
					style={{
						width: '10%',
						height: '100%',
						top: hp('5.2%'),
						paddingLeft: hp('1%')
					}}
				>
					<TouchableOpacity
						onPress={() =>
							props.OptionRenderer(props.id, props.demande)}
					>
						<Option width={hp('0.5%')} height={hp('3%')} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default MyMissionComponent;

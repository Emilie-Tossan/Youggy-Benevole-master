import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import Retour from '../../../assets/svg-js/retour';

const Device = require('react-native-device-detection');

const styles = StyleSheet.create({
	backContainer: {
		top: hp('5%'),
		left: Device.isTablet ? wp('4%') : wp('9%'),
		width: wp('100%'),
		flexDirection: 'row'
	},
	backText: {
		fontSize: Device.isTablet ? 20 : 15
	},
	backImage: {
		top: Device.isTablet ? 7 : 3,
		right: 7
	}
});

const BackButton = props => {
	return (
		<TouchableOpacity
			style={styles.backContainer}
			onPress={() => props.goBack()}
		>
			<View style={styles.backImage}>
				<Retour color={!props.color ? 'white' : props.color} />
			</View>
			<View>
				<Text
					style={{
						...styles.backText,
						color: !props.color ? 'white' : props.color,
						fontWeight: !props.color ? 'bold' : 'normal'
					}}
				>
					{props.text}
					{'  '}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default BackButton;

//  import React, { Fragment } from 'react';
// import {
// 	Icon,
// 	TopNavigation,
// 	TopNavigationAction,
// 	IconRegistry,
// 	ApplicationProvider
// } from '@ui-kitten/components';
// import { mapping, light as lightTheme } from '@eva-design/eva';
// import { EvaIconsPack } from '@ui-kitten/eva-icons';

// const BackIcon = style => <Icon {...style} name="arrow-back" />;

// const BackAction = () => <TopNavigationAction icon={BackIcon} />;

// const BackButton = props => {
// 	return (
// 		<Fragment>
// 			<IconRegistry icons={EvaIconsPack} />
// 			<TopNavigation
// 				leftControl={BackAction()}
// 				title="Application Title"
// 			/>
// 		</Fragment>
// 	);
// };

// export default BackButton;

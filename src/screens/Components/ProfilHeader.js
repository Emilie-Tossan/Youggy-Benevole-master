import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import PhotoProfil from '../../../assets/svg-js/photo_profil';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import firebase from 'react-native-firebase';

const styles = StyleSheet.create({
	//
	// Picture
	//
	CoverPicture: {
		height: hp('18%'),
		width: '100%',
		backgroundColor: '#EFEFEF',
		overflow: 'hidden'
	},
	ProfilePicture: {
		top: hp('-10'),
		width: wp('49%'),
		height: hp('16%') * 1.609 * 0.50758 + 20,
		overflow: 'hidden',
		marginLeft: 'auto',
		marginRight: 'auto'
	}
});

const ProfilHeader = props => {
	return (
		<View
			style={{
				width: '100%',
				position: 'absolute',
				marginHorizontal: 'auto'
			}}
		>
			<View style={styles.CoverPicture}>
				{props.cover ? (
					<Image
						source={{ uri: props.cover }}
						style={{ width: '100%', height: hp('18%') }}
					/>
				) : (
					<View style={{ top: '82%', left: '93%' }} />
				)}
			</View>
			<View style={styles.ProfilePicture}>
				<View
					style={{
						alignItems: 'center',
						width: '100%'
						// top: -(hp('15%') + hp('16%') / 2),
						// zIndex: -1
					}}
				>
					<PhotoProfil
						photoStyle={{
							width: hp('15%') * 1.609 * 0.50758,
							height: hp('16%') * 1.609 * 0.50758 + 6
						}}
						profil={props.profil}
						style={{
							width: hp('15%') * 1.60975,
							height: hp('15%'),
							position: 'absolute'
						}}
					/>
				</View>
			</View>
		</View>
	);
};

export default ProfilHeader;

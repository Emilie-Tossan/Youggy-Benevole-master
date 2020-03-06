import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { TSpan } from 'react-native-svg';
import PhotoProfil from '../../../assets/svg-js/photo_profil';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import AjouterPhoto from '../../../assets/svg-js/ajout-photo';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
	//
	// Picture
	//
	CoverPicturePicker: {
		height: hp('18%'),
		width: '100%',
		backgroundColor: '#EFEFEF',
		overflow: 'hidden'
	},
	ProfilePicturePicker: {
		top: hp('-10'),
		width: wp('49%'),
		height: hp('16%') * 1.609 * 0.50758 + 20,
		overflow: 'hidden',
		marginLeft: 'auto',
		marginRight: 'auto'
	}
});

const ProfilPicker = ({ cover, profil, _pickCover, _pickProfil }) => {
	return (
		<View
			style={{
				width: '100%',
				position: 'absolute',

				zIndex: 1,
				marginHorizontal: 'auto'
			}}
		>
			<TouchableOpacity
				style={styles.CoverPicturePicker}
				onPress={_pickCover}
			>
				{cover ? (
					<Image
						source={{ uri: cover }}
						style={{ width: '100%', height: hp('18%') }}
					/>
				) : (
					<View style={{ top: '82%', left: '87%' }}>
						<AjouterPhoto
							style={{
								height: hp('3%'),
								width: hp('3%') * 1.414
							}}
						/>
					</View>
				)}
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.ProfilePicturePicker}
				onPress={_pickProfil}
			>
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
						profil={profil}
						style={{
							width: hp('15%') * 1.60975,
							height: hp('15%'),
							position: 'absolute'
						}}
						displayText={Constants.platform.ios ? true : false}
						text={
							<Text
								fill="#000"
								fontSize="7"
								fontWeight="regular"
								x="9"
								y="-12"
								strokeWidth="0"
							>
								{"j'ajoute "}
								<TSpan x="5" dy="9">
									le logo
								</TSpan>
							</Text>
						}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default ProfilPicker;

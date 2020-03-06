// import React from 'react';
// import {
// 	Image,
// 	PixelRatio,
// 	StyleSheet,
// 	Text,
// 	TouchableOpacity,
// 	View
// } from 'react-native';
// import ImagePicker from 'react-native-image-picker';

// export default class App extends React.Component {
// 	state = {
// 		avatarSource: null,
// 		videoSource: null
// 	};

// 	constructor(props) {
// 		super(props);

// 		this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
// 		this.selectVideoTapped = this.selectVideoTapped.bind(this);
// 	}

// 	selectPhotoTapped() {
// 		const options = {
// 			quality: 1.0,
// 			maxWidth: 500,
// 			maxHeight: 500,
// 			storageOptions: {
// 				skipBackup: true
// 			}
// 		};

// 		ImagePicker.showImagePicker(options, response => {
// 			console.log('Response = ', response);

// 			if (response.didCancel) {
// 				console.log('User cancelled photo picker');
// 			} else if (response.error) {
// 				console.log('ImagePicker Error: ', response.error);
// 			} else if (response.customButton) {
// 				console.log(
// 					'User tapped custom button: ',
// 					response.customButton
// 				);
// 			} else {
// 				let source = { uri: response.uri };

// 				// You can also display the image using data:
// 				// let source = { uri: 'data:image/jpeg;base64,' + response.data };

// 				this.setState({
// 					avatarSource: source
// 				});
// 			}
// 		});
// 	}

// 	selectVideoTapped() {
// 		const options = {
// 			title: 'Video Picker',
// 			takePhotoButtonTitle: 'Take Video...',
// 			mediaType: 'video',
// 			videoQuality: 'medium'
// 		};

// 		ImagePicker.showImagePicker(options, response => {
// 			console.log('Response = ', response);

// 			if (response.didCancel) {
// 				console.log('User cancelled video picker');
// 			} else if (response.error) {
// 				console.log('ImagePicker Error: ', response.error);
// 			} else if (response.customButton) {
// 				console.log(
// 					'User tapped custom button: ',
// 					response.customButton
// 				);
// 			} else {
// 				this.setState({
// 					videoSource: response.uri
// 				});
// 			}
// 		});
// 	}

// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
// 					<View
// 						style={[
// 							styles.avatar,
// 							styles.avatarContainer,
// 							{ marginBottom: 20 }
// 						]}
// 					>
// 						{this.state.avatarSource === null ? (
// 							<Text>Select a Photo</Text>
// 						) : (
// 							<Image
// 								style={styles.avatar}
// 								source={this.state.avatarSource}
// 							/>
// 						)}
// 					</View>
// 				</TouchableOpacity>

// 				<TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
// 					<View style={[ styles.avatar, styles.avatarContainer ]}>
// 						<Text>Select a Video</Text>
// 					</View>
// 				</TouchableOpacity>

// 				{this.state.videoSource && (
// 					<Text style={{ margin: 8, textAlign: 'center' }}>
// 						{this.state.videoSource}
// 					</Text>
// 				)}
// 			</View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: '#F5FCFF'
// 	},
// 	avatarContainer: {
// 		borderColor: '#9B9B9B',
// 		borderWidth: 1 / PixelRatio.get(),
// 		justifyContent: 'center',
// 		alignItems: 'center'
// 	},
// 	avatar: {
// 		borderRadius: 75,
// 		width: 150,
// 		height: 150
// 	}
// });

import * as React from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class ImagePickerExample extends React.Component {
	state = {
		image: null
	};

	render() {
		let { image } = this.state;

		return (
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Button
					title="Pick an image from camera roll"
					onPress={this._pickImage}
				/>
				{image && (
					<Image
						source={{ uri: image }}
						style={{ width: 200, height: 200 }}
					/>
				)}
			</View>
		);
	}

	componentDidMount() {
		this.getPermissionAsync();
		console.log('hi');
	}

	getPermissionAsync = async () => {
		if (Constants.platform.ios) {
			const { status } = await Permissions.askAsync(
				Permissions.CAMERA_ROLL
			);
			if (status !== 'granted') {
				alert(
					'Sorry, we need camera roll permissions to make this work!'
				);
			}
		}
	};

	_pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [ 4, 3 ],
			quality: 1
		});

		console.log(result);

		if (!result.cancelled) {
			this.setState({ image: result.uri });
		}
	};
}

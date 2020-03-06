import React, { Component } from 'react';
import * as Permissions from 'expo-permissions';
import { Platform, Dimensions, Text } from 'react-native';
import { Camera } from 'expo-camera';

export default class CameraContainer extends Component {
	state = {
		hasCameraPermission: null,
		type: Camera.Constants.Type.back,
		autoFocus: Camera.Constants.AutoFocus.on,
		zoom: 0,
		whiteBalance: Camera.Constants.WhiteBalance.auto,
		ratio: ''
	};
	async componentDidMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	}
	getBestRatio = async () => {
		if (Platform.OS === 'android' && this.camera) {
			const ratios = await this.camera.getSupportedRatiosAsync();
			const { height, width } = Dimensions.get('screen');
			const wantedRatio = height / width;
			let bestRatio = 0;
			let bestRatioError = 100000;
			for (let i = 0; i < ratios.length; i++) {
				const r = ratios[i].split(':');
				if (Math.abs(wantedRatio - r[0] / r[1]) < bestRatioError) {
					bestRatioError = Math.abs(wantedRatio - r[0] / r[1]);
					bestRatio = ratios[i];
				}
			}
			this.setState({ ratio: bestRatio });
		}
	};
	render() {
		const { takeCameraRef } = this.props;
		const {
			hasCameraPermission,
			type,
			autoFocus,
			zoom,
			whiteBalance,
			ratio
		} = this.state;
		if (hasCameraPermission) {
			return (
				<Camera
					ref={ref => {
						takeCameraRef(ref);
						this.camera = ref;
						return ref;
					}}
					type={type}
					autoFocus={autoFocus}
					zoom={zoom}
					whiteBalance={whiteBalance}
					onCameraReady={this.getBestRatio}
					ratio={ratio}
				>
					{this.props.children}
				</Camera>
			);
		}
		return this.props.children;
	}
}

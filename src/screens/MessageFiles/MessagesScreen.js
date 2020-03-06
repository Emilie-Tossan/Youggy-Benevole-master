import React, { Component } from 'react';
import {
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	TextInput,
	StyleSheet
} from 'react-native';

import { Input, Divider } from 'react-native-elements';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import PhotoProfil from '../../../assets/svg-js/photo_profil';

import BackButton from '../Components/BackButton';
import Chat from './Chat';

const styles = StyleSheet.create({
	screenContainer: {
		width: '100%',
		height: '100%'
	},
	mainContainer: {
		top: hp('-15%'),
		width: wp('100%'),
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingLeft: wp('4%'),
		paddingRight: wp('4%')
	},
	//
	// Text
	//
	name: {
		fontSize: hp('2%'),
		textAlign: 'center',
		fontWeight: '300'
	},
	mission: {
		fontSize: hp('1.8%'),
		textAlign: 'center',
		fontWeight: '500',
		color: '#8397A4'
	}
});

export default class App extends React.Component {
	constructor() {
		super();
	}

	static navigationOptions = {
		header: null
	};

	state = {
		destinataire: '',
		name: '',
		mission: '',
		idConv: '',
		profil: null
	};

	componentDidMount() {
		const destinataire = this.props.navigation.getParam('destinataire', '');
		const profil = this.props.navigation.getParam('profil', '');
		const name = this.props.navigation.getParam('name', '');
		const mission = this.props.navigation.getParam('mission', '');
		const idConv = this.props.navigation.getParam('idConv', '');
		this.setState({
			profil,
			name,
			mission,
			destinataire,
			idConv
		});
	}

	render() {
		const { goBack } = this.props.navigation;
		const { profil, name, mission, destinataire, idConv } = this.state;
		const Header = () => {
			return (
				<View style={{ position: 'absolute', height: hp('20%') }}>
					<View style={{ backgroundColor: 'white' }}>
						<View style={{ paddingBottom: hp('2%') }} />
						<BackButton
							text='Retour'
							color='black'
							goBack={goBack}
						/>
						<View style={{ paddingBottom: hp('4%') }} />
						<PhotoProfil
							height={hp('1%')}
							width={hp('1%')}
							style={{
								marginLeft: 'auto',
								marginRight: 'auto',
								height: hp('8%'),
								width: hp('13%')
							}}
							profil={profil}
						/>
						<View style={{ paddingBottom: hp('1%') }} />
						<Text style={styles.name}>{name}</Text>
						<View style={{ paddingBottom: hp('1%') }} />
					</View>
					<View style={{ backgroundColor: '#F0F3F5' }}>
						<View style={{ paddingBottom: hp('1.5%') }} />
						<Text style={styles.mission}>{mission}</Text>
						<View style={{ paddingBottom: hp('2%') }} />
					</View>
				</View>
			);
		};

		return (
			<View style={styles.screenContainer}>
				<View
					style={{
						top: '20%',
						height: '85%',
						width: '100%',
						backgroundColor: '#F0F3F5',
						position: 'absolute'
					}}
				/>
				<View style={{ paddingBottom: hp('23%') }} />
				<Chat destinataire={destinataire} idConv={idConv} />
				<Header />
				<View style={{ paddingBottom: hp('15%') }} />
			</View>
		);
	}
}

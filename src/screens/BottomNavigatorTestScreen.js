import {
	BottomNavigation,
	BottomNavigationTab,
	Icon,
	IconRegistry,
	ApplicationProvider,
	Tab,
	TabView
} from '@ui-kitten/components';

import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import LottieView from 'lottie-react-native';

const Device = require('react-native-device-detection');

const styles = StyleSheet.create({
	screenContainer: {
		width: '100%',
		height: '100%'
	},
	mainContainer: {
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 'auto',
		marginBottom: 'auto',

		width: '100%'
	},
	//
	// Bottom navigator
	//
	bottomContainer: {
		// top: hp('86%'),
		height: hp('10%')
	},
	bottomNavigation: {
		height: hp('10%')
	}
});

Profil1Screen = props => {
	return (
		<View
			style={{
				...styles.screenContainer,
				backgroundColor: 'red',
				paddingHorizontal: Device.isTablet ? wp('25%') : wp('13%')
			}}
		>
			<Text>Profil1</Text>
			<Button
				onPress={() => props.navigation.navigate('Profil2')}
				title="Go to ForgotPasswordConfirmProfilAsso demo"
			/>
		</View>
	);
};

Profil2Screen = () => {
	return (
		<View
			style={{
				...styles.screenContainer,
				backgroundColor: 'green',
				paddingHorizontal: Device.isTablet ? wp('25%') : wp('13%')
			}}
		>
			<Text>Profil2</Text>
		</View>
	);
};
const HomeStack = createStackNavigator(
	{
		Profil1: Profil1Screen,
		Profil2: Profil2Screen
	},
	{
		initialRouteName: 'Profil1',
		defaultNavigationOptions: {
			title: 'Youggy'
		}
	}
);
const RoutedApp = createAppContainer(
	createStackNavigator({
		Home: HomeStack
	})
);

export default class App extends React.Component {
	state = {
		topSelectedIndex: 0,
		bottomSelectedIndex: 0,
		selectedIndex: 0
	};

	static navigationOptions = {
		header: null
	};

	PersonIcon = style => (
		<Icon
			{...style}
			name="person-outline"
			animation="zoom"
			tintColor="#55DAFF"
		/>
	);
	ListIcon = style => (
		<Icon {...style} name="list-outline" tintColor="#55DAFF" />
	);
	EmailIcon = style => (
		<Icon {...style} name="email-outline" tintColor="#55DAFF" />
	);

	render() {
		const {
			selectedIndex,
			topSelectedIndex,
			bottomSelectedIndex
		} = this.state;

		Screens = () => {
			if (bottomSelectedIndex == 0)
				return <Text style={{ marginVertical: 'auto' }}>Profil</Text>;
			else if (bottomSelectedIndex == 1)
				return <Text style={{ marginVertical: 'auto' }}>Missions</Text>;
			else if (bottomSelectedIndex == 2)
				return <Text style={{ marginVertical: 'auto' }}>Message</Text>;
		};

		// const HomeStack = createStackNavigator(
		// 	{
		// 		Profil1: Profil1Screen,
		// 		Profil2: Profil2Screen
		// 	},
		// 	{
		// 		initialRouteName: 'Profil1',
		// 		defaultNavigationOptions: {
		// 			title: 'Youggy'
		// 		}
		// 	}
		// );

		// Home = createAppContainer(
		// 	createBottomTabNavigator({
		// 		Home: HomeStack
		// 	})
		// );

		return (
			<View style={styles.screenContainer}>
				<IconRegistry icons={EvaIconsPack} />
				<ApplicationProvider mapping={mapping} theme={lightTheme}>
					{/* <Text>edededede</Text>
					<Text>edededede</Text>
					<Text>edededede</Text>
					<Text>edededede</Text>
					<Text>edededede</Text>
					<Text>edededede</Text>
					<Text>edededede</Text>
					<Text>edededede</Text> */}
					<TabView
						selectedIndex={bottomSelectedIndex}
						style={{ height: '80%' }}
					>
						<Tab>
							<RoutedApp />
						</Tab>
						<Tab>
							<View
								style={{
									...styles.mainContainer,
									paddingHorizontal: Device.isTablet
										? wp('25%')
										: wp('13%')
								}}
							>
								<Text>Missions</Text>
							</View>
						</Tab>
						<Tab>
							<View
								style={{
									...styles.mainContainer,
									paddingHorizontal: Device.isTablet
										? wp('25%')
										: wp('13%')
								}}
							>
								<Text>Messages</Text>
							</View>
						</Tab>
					</TabView>
					<View style={styles.bottomContainer}>
						<BottomNavigation
							style={styles.bottomNavigation}
							selectedIndex={bottomSelectedIndex}
							onSelect={index => {
								console.log(index);
								this.setState({
									bottomSelectedIndex: index
								});
							}}
							indicatorStyle={{
								backgroundColor: '#55DAFF'
							}}
						>
							<BottomNavigationTab
								titleStyle={{ color: '#55DAFF' }}
								title="PROFIL"
								icon={this.PersonIcon}
							/>
							<BottomNavigationTab
								titleStyle={{ color: '#55DAFF' }}
								title="MISSIONS"
								icon={this.ListIcon}
							/>
							<BottomNavigationTab
								titleStyle={{ color: '#55DAFF' }}
								title="MESSAGES"
								icon={this.EmailIcon}
							/>
						</BottomNavigation>
					</View>
					{/* <RoutedApp /> */}
				</ApplicationProvider>
			</View>
		);
	}
}

import React, { Component } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	TextInput,
	StyleSheet
} from 'react-native';
// // import { LinearGradient } from 'expo-linear-gradient';
// // import {
// // 	widthPercentageToDP as wp,
// // 	heightPercentageToDP as hp
// // } from 'react-native-responsive-screen';
// // import * as Font from 'expo-font';
// // import {
// // 	Calendar,
// // 	CalendarList,
// // 	Agenda,
// // 	LocaleConfig
// // } from 'react-native-calendars';

// // import BackButton from './Components/BackButton';
// // import { AuthSession } from 'expo';

// // LocaleConfig.locales['fr'] = {
// // 	monthNames: [
// // 		'Janvier',
// // 		'Février',
// // 		'Mars',
// // 		'Avril',
// // 		'Mai',
// // 		'Juin',
// // 		'Juillet',
// // 		'Août',
// // 		'Septembre',
// // 		'Octobre',
// // 		'Novembre',
// // 		'Décembre'
// // 	],
// // 	monthNamesShort: [
// // 		'Janv.',
// // 		'Févr.',
// // 		'Mars',
// // 		'Avril',
// // 		'Mai',
// // 		'Juin',
// // 		'Juil.',
// // 		'Août',
// // 		'Sept.',
// // 		'Oct.',
// // 		'Nov.',
// // 		'Déc.'
// // 	],
// // 	dayNames: [
// // 		'Dimanche',
// // 		'Lundi',
// // 		'Mardi',
// // 		'Mercredi',
// // 		'Jeudi',
// // 		'Vendredi',
// // 		'Samedi'
// // 	],
// // 	dayNamesShort: [ 'Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.' ],
// // 	today: "Aujourd'hui"
// // };
// // LocaleConfig.defaultLocale = 'fr';

// // const Device = require('react-native-device-detection');

// // const styles = StyleSheet.create({
// // 	screenContainer: {
// // 		width: '100%',
// // 		height: '100%'
// // 	},
// // 	mainContainer: {
// // 		width: wp('100%'),
// // 		marginTop: 'auto',
// // 		marginBottom: 'auto',
// // 		marginLeft: 'auto',
// // 		marginRight: 'auto',
// // 		paddingLeft: wp('8%'),
// // 		paddingRight: wp('8%')
// // 	}
// // });

// // export default class App extends React.Component {
// // 	constructor() {
// // 		super();
// // 		this.state = {};
// // 	}

// // 	static navigationOptions = {
// // 		header: null
// // 	};

// // 	state = {
// // 		fontLoaded: false
// // 	};

// // 	async componentDidMount() {
// // 		await Font.loadAsync({
// // 			'SF-pro': require('../../assets/fonts/SF-Pro-Text-Regular.otf'),
// // 			'Montserrat-light': require('../../assets/fonts/Montserrat-Light.ttf')
// // 		});
// // 		this.setState({ fontLoaded: true });
// // 	}

// // 	render() {
// // 		const { goBack } = this.props.navigation;

// // 		return (
// // 			<View style={styles.screenContainer}>
// // 				<View style={styles.mainContainer} />
// // 				{/* <Agenda
// // 					// Callback which gets executed when visible months change in scroll view. Default = undefined
// // 					onVisibleMonthsChange={months => {
// // 						console.log('now these months are visible', months);
// // 					}}
// // 					// Max amount of months allowed to scroll to the past. Default = 50
// // 					pastScrollRange={50}
// // 					// Max amount of months allowed to scroll to the future. Default = 50
// // 					futureScrollRange={50}
// // 					// Enable or disable scrolling of calendar list
// // 					scrollEnabled={true}
// // 					// Enable or disable vertical scroll indicator. Default = false
// // 					showScrollIndicator={true}
// // 					markedDates={{
// // 						'2019-05-20': { textColor: 'green' },
// // 						'2019-05-22': { startingDay: true, color: 'green' },
// // 						'2019-05-23': {
// // 							selected: true,
// // 							endingDay: true,
// // 							color: 'green',
// // 							textColor: 'gray'
// // 						},
// // 						'2019-05-04': {
// // 							disabled: true,
// // 							startingDay: true,
// // 							color: 'green',
// // 							endingDay: true
// // 						}
// // 					}}
// // 					markingType={'period'}
// // 					onDayPress={day => {
// // 						console.log('selected day', day);
// // 					}}
// // 					// Handler which gets executed on day long press. Default = undefined
// // 					onDayLongPress={day => {
// // 						console.log('selected dayyyyyyyy', day);
// // 					}}
// // 					theme={{
// // 						backgroundColor: '#ffffff',
// // 						calendarBackground: '#ffffff',
// // 						textSectionTitleColor: '#b6c1cd',
// // 						selectedDayBackgroundColor: '#00adf5',
// // 						selectedDayTextColor: '#25fde9',
// // 						todayTextColor: '#00adf5',
// // 						dayTextColor: '#2d4150',
// // 						textDisabledColor: '#d9e1e8',
// // 						dotColor: '#00adf5',
// // 						selectedDotColor: '#ffffff',
// // 						arrowColor: 'orange',
// // 						monthTextColor: 'blue',
// // 						indicatorColor: 'blue',

// // 						textDayFontWeight: '300',
// // 						textMonthFontWeight: 'bold',
// // 						textDayHeaderFontWeight: '300',
// // 						textDayFontSize: 16,
// // 						textMonthFontSize: 16,
// // 						textDayHeaderFontSize: 16
// // 					}}
// // 				/> */}
// // 				<Calendar
// // 					// Specify style for calendar container element. Default = {}
// // 					style={{
// // 						marginTop: 'auto',
// // 						marginBottom: 'auto',
// // 						borderWidth: 1,
// // 						borderColor: 'gray',
// // 						height: 350
// // 					}}
// // 					// Specify theme properties to override specific styles for calendar parts. Default = {}
// // 					theme={{
// // 						backgroundColor: '#ffffff',
// // 						calendarBackground: '#ffffff',
// // 						textSectionTitleColor: '#b6c1cd',
// // 						selectedDayBackgroundColor: '#00adf5',
// // 						selectedDayTextColor: '#ffffff',
// // 						todayTextColor: '#00adf5',
// // 						dayTextColor: '#2d4150',
// // 						textDisabledColor: '#d9e1e8',
// // 						dotColor: '#00adf5',
// // 						selectedDotColor: '#ffffff',
// // 						arrowColor: 'orange',
// // 						monthTextColor: 'blue',
// // 						indicatorColor: 'blue',

// // 						textDayFontWeight: '300',
// // 						textMonthFontWeight: 'bold',
// // 						textDayHeaderFontWeight: '300',
// // 						textDayFontSize: 16,
// // 						textMonthFontSize: 16,
// // 						textDayHeaderFontSize: 16
// // 					}}
// // 				/>
// // 				<CalendarList
// // 					// Specify style for calendar container element. Default = {}
// // 					style={{
// // 						marginTop: 'auto',
// // 						marginBottom: 'auto',
// // 						borderWidth: 1,
// // 						borderColor: 'gray',
// // 						height: 350
// // 					}}
// // 					// Specify theme properties to override specific styles for calendar parts. Default = {}
// // 					theme={{
// // 						backgroundColor: '#ffffff',
// // 						calendarBackground: '#ffffff',
// // 						textSectionTitleColor: '#b6c1cd',
// // 						selectedDayBackgroundColor: '#00adf5',
// // 						selectedDayTextColor: '#ffffff',
// // 						todayTextColor: '#00adf5',
// // 						dayTextColor: '#2d4150',
// // 						textDisabledColor: '#d9e1e8',
// // 						dotColor: '#00adf5',
// // 						selectedDotColor: '#ffffff',
// // 						arrowColor: 'orange',
// // 						monthTextColor: 'blue',
// // 						indicatorColor: 'blue',

// // 						textDayFontWeight: '300',
// // 						textMonthFontWeight: 'bold',
// // 						textDayHeaderFontWeight: '300',
// // 						textDayFontSize: 16,
// // 						textMonthFontSize: 16,
// // 						textDayHeaderFontSize: 16
// // 					}}
// // 				/>
// // 				<View style={{ paddingBottom: hp('20%') }} />
// // 			</View>
// // 		);
// // 	}
// // }

// import React, { Component } from 'react';
// import { Text, StyleSheet, ScrollView, View } from 'react-native';
// import { Calendar, CalendarList } from 'react-native-calendars';

// export default class CalendarsScreen extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {};
// 		this.onDayPress = this.onDayPress.bind(this);
// 	}

// 	render() {
// 		return (
// 			<ScrollView style={styles.container}>
// 				<Text style={styles.text}>
// 					Calendar with selectable date and arrows
// 				</Text>
// 				<CalendarList
// 					onDayPress={this.onDayPress}
// 					style={styles.calendar}
// 					hideExtraDays
// 					markedDates={{
// 						[this.state.selected]: {
// 							selected: true,
// 							disableTouchEvent: true,
// 							selectedDayBackgroundColor: '#00adf5',
// 							selectedDayTextColor: '#ffffff'
// 						},
// 						'2019-12-24': {
// 							startingDay: true,

// 							color: 'yellow'
// 						},
// 						'2019-12-25': {
// 							color: 'yellow'
// 						},
// 						'2019-12-26': {
// 							color: 'yellow',
// 							endingDay: true
// 						}
// 					}}
// 					// markingType={'period'}
// 					markingType={'period'}
// 					theme={{
// 						backgroundColor: '#ffffff',
// 						calendarBackground: '#ffffff',
// 						textSectionTitleColor: '#b6c1cd',
// 						// selectedDayBackgroundColor: '#00adf5',
// 						// selectedDayTextColor: '#ffffff',
// 						todayTextColor: '#00adf5',
// 						dayTextColor: '#2d4150',
// 						textDisabledColor: '#d9e1e8',
// 						dotColor: '#00adf5',
// 						selectedDotColor: '#ffffff',
// 						arrowColor: 'orange',
// 						monthTextColor: 'blue',
// 						indicatorColor: 'blue',

// 						textDayFontWeight: '300',
// 						textMonthFontWeight: 'bold',
// 						textDayHeaderFontWeight: '300',
// 						textDayFontSize: 16,
// 						textMonthFontSize: 16,
// 						textDayHeaderFontSize: 16
// 					}}
// 				/>
// 				<Text style={styles.text}>
// 					Calendar with marked dates and hidden arrows
// 				</Text>
// 				<Calendar
// 					style={styles.calendar}
// 					current={'2012-05-16'}
// 					minDate={'2012-05-10'}
// 					maxDate={'2012-05-29'}
// 					firstDay={1}
// 					markedDates={{
// 						'2012-05-23': { selected: true, marked: true },
// 						'2012-05-24': {
// 							selected: true,
// 							marked: true,
// 							dotColor: 'green'
// 						},
// 						'2012-05-25': { marked: true, dotColor: 'red' },
// 						'2012-05-26': { marked: true },
// 						'2012-05-27': { disabled: true, activeOpacity: 0 }
// 					}}
// 					// disabledByDefault={true}
// 					hideArrows={true}
// 				/>
// 				<Text style={styles.text}>
// 					Calendar with custom day component
// 				</Text>
// 				<Calendar
// 					style={[ styles.calendar, { height: 300 } ]}
// 					dayComponent={({ date, state }) => {
// 						return (
// 							<View>
// 								<Text
// 									style={{
// 										textAlign: 'center',
// 										color:
// 											state === 'disabled'
// 												? 'gray'
// 												: 'black'
// 									}}
// 								>
// 									{date.day}
// 								</Text>
// 							</View>
// 						);
// 					}}
// 				/>
// 				<Text style={styles.text}>
// 					Calendar with period marking and spinner
// 				</Text>
// 				<Calendar
// 					style={styles.calendar}
// 					current={'2012-05-16'}
// 					minDate={'2012-05-10'}
// 					displayLoadingIndicator
// 					markingType={'period'}
// 					theme={{
// 						calendarBackground: '#333248',
// 						textSectionTitleColor: 'white',
// 						dayTextColor: 'red',
// 						todayTextColor: 'white',
// 						selectedDayTextColor: 'white',
// 						monthTextColor: 'white',
// 						indicatorColor: 'white',
// 						selectedDayBackgroundColor: '#333248',
// 						arrowColor: 'white',
// 						// textDisabledColor: 'red',
// 						'stylesheet.calendar.header': {
// 							week: {
// 								marginTop: 5,
// 								flexDirection: 'row',
// 								justifyContent: 'space-between'
// 							}
// 						}
// 					}}
// 					markedDates={{
// 						'2012-05-17': { disabled: true },
// 						'2012-05-08': { textColor: '#666' },
// 						'2012-05-09': { textColor: '#666' },
// 						'2012-05-14': {
// 							startingDay: true,
// 							color: 'blue',
// 							endingDay: true
// 						},
// 						'2012-05-21': { startingDay: true, color: 'blue' },
// 						'2012-05-22': { endingDay: true, color: 'gray' },
// 						'2012-05-24': { startingDay: true, color: 'gray' },
// 						'2012-05-25': { color: 'gray' },
// 						'2012-05-26': { endingDay: true, color: 'gray' }
// 					}}
// 					hideArrows={false}
// 				/>
// 				<Text style={styles.text}>Calendar with multi-dot marking</Text>
// 				<Calendar
// 					style={styles.calendar}
// 					current={'2012-05-16'}
// 					markingType={'multi-dot'}
// 					markedDates={{
// 						'2012-05-08': {
// 							dots: [
// 								{
// 									key: 'vacation',
// 									color: 'blue',
// 									selectedDotColor: 'white'
// 								},
// 								{
// 									key: 'massage',
// 									color: 'red',
// 									selectedDotColor: 'white'
// 								}
// 							],
// 							selected: true
// 						},
// 						'2012-05-09': {
// 							dots: [
// 								{
// 									key: 'vacation',
// 									color: 'blue',
// 									selectedDotColor: 'red'
// 								},
// 								{
// 									key: 'massage',
// 									color: 'red',
// 									selectedDotColor: 'blue'
// 								}
// 							],
// 							disabled: true
// 						}
// 					}}
// 					hideArrows={false}
// 				/>
// 				<Text style={styles.text}>
// 					Calendar with multi-period marking
// 				</Text>
// 				<Calendar
// 					style={styles.calendar}
// 					current={'2012-05-16'}
// 					markingType={'multi-period'}
// 					markedDates={{
// 						'2012-05-16': {
// 							periods: [
// 								{
// 									startingDay: true,
// 									endingDay: false,
// 									color: '#5f9ea0'
// 								},
// 								{
// 									startingDay: true,
// 									endingDay: false,
// 									color: '#ffa500'
// 								}
// 							]
// 						},
// 						'2012-05-17': {
// 							periods: [
// 								{
// 									startingDay: false,
// 									endingDay: true,
// 									color: '#5f9ea0'
// 								},
// 								{
// 									startingDay: false,
// 									endingDay: true,
// 									color: '#ffa500'
// 								},
// 								{
// 									startingDay: true,
// 									endingDay: false,
// 									color: '#f0e68c'
// 								}
// 							]
// 						},
// 						'2012-05-18': {
// 							periods: [
// 								{
// 									startingDay: true,
// 									endingDay: true,
// 									color: '#ffa500'
// 								},
// 								{ color: 'transparent' },
// 								{
// 									startingDay: false,
// 									endingDay: false,
// 									color: '#f0e68c'
// 								}
// 							]
// 						}
// 					}}
// 					hideArrows={false}
// 				/>
// 				<Text style={styles.text}>Calendar with week numbers</Text>
// 				<Calendar
// 					onDayPress={this.onDayPress}
// 					style={styles.calendar}
// 					hideExtraDays
// 					showWeekNumbers
// 					markedDates={{ [this.state.selected]: { selected: true } }}
// 				/>
// 				<Text style={styles.text}>
// 					Custom calendar with custom marking type
// 				</Text>
// 				<Calendar
// 					style={styles.calendar}
// 					onDayLongPress={this.onDayLongPress}
// 					hideExtraDays
// 					current={'2018-03-01'}
// 					minDate={'2018-03-01'}
// 					markingType={'custom'}
// 					markedDates={{
// 						'2018-03-01': {
// 							customStyles: {
// 								container: {
// 									backgroundColor: 'white'
// 									// elevation: 2
// 								},
// 								text: {
// 									color: 'blue'
// 								}
// 							}
// 						},
// 						'2018-03-08': { selected: true },
// 						'2018-03-09': {
// 							customStyles: {
// 								container: {
// 									backgroundColor: 'red'
// 									// elevation: 4
// 								},
// 								text: {
// 									color: 'white'
// 								}
// 							}
// 						},
// 						'2018-03-10': { disabled: true },
// 						'2018-03-14': {
// 							customStyles: {
// 								container: {
// 									backgroundColor: 'green'
// 								},
// 								text: {
// 									color: 'white'
// 								}
// 							}
// 						},
// 						'2018-03-15': {
// 							customStyles: {
// 								container: {
// 									backgroundColor: 'black',
// 									elevation: 2
// 								},
// 								text: {
// 									color: 'yellow'
// 								}
// 							}
// 						},
// 						'2018-03-20': {
// 							customStyles: {
// 								container: {
// 									backgroundColor: 'pink',
// 									elevation: 4
// 								},
// 								text: {
// 									color: 'blue'
// 								}
// 							}
// 						},
// 						'2018-03-21': { disabled: true },
// 						'2018-03-28': {
// 							customStyles: {
// 								container: {
// 									backgroundColor: 'green'
// 								},
// 								text: {
// 									color: 'black',
// 									fontWeight: 'bold'
// 								}
// 							}
// 						},
// 						'2018-03-29': {
// 							customStyles: {
// 								container: {
// 									backgroundColor: 'white',
// 									elevation: 2
// 								},
// 								text: {
// 									color: 'blue'
// 								}
// 							}
// 						},
// 						'2018-03-30': {
// 							customStyles: {
// 								container: {
// 									backgroundColor: 'violet',
// 									elevation: 4,
// 									borderColor: 'red',
// 									borderWidth: 5
// 								},
// 								text: {
// 									marginTop: 3,
// 									fontSize: 11,
// 									color: 'yellow'
// 								}
// 							}
// 						},
// 						'2018-03-31': {
// 							customStyles: {
// 								container: {
// 									backgroundColor: 'green',
// 									borderRadius: 0
// 								},
// 								text: {
// 									color: 'white'
// 								}
// 							}
// 						}
// 					}}
// 					hideArrows={false}
// 				/>
// 			</ScrollView>
// 		);
// 	}

// 	onDayPress(day) {
// 		this.setState({
// 			selected: day.dateString
// 		});
// 	}
// }

// const styles = StyleSheet.create({
// 	calendar: {
// 		borderTopWidth: 1,
// 		paddingTop: 5,
// 		borderBottomWidth: 1,
// 		borderColor: '#eee',
// 		height: 350
// 	},
// 	text: {
// 		textAlign: 'center',
// 		borderColor: '#bbb',
// 		padding: 10,
// 		backgroundColor: '#eee'
// 	},
// 	container: {
// 		flex: 1,
// 		backgroundColor: 'gray'
// 	}
// });

import Calendar from 'react-native-calendario';

export default class CalendarsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		// this.onDayPress = this.onDayPress.bind(this);
	}

	render() {
		return (
			<Calendar
				onChange={range => console.log(range)}
				minDate="2020-01-10"
				locale="fr"
				theme={{
					activeDayColor: {},
					monthTitleTextStyle: {
						color: '#FFCC48',
						fontWeight: '300',
						fontSize: 16
					},
					emptyMonthContainerStyle: {},
					emptyMonthTextStyle: {
						fontWeight: '200'
					},
					weekColumnsContainerStyle: {},
					weekColumnStyle: {
						paddingVertical: 10
					},
					weekColumnTextStyle: {
						color: '#b6c1cd',
						fontSize: 13
					},
					nonTouchableDayContainerStyle: {},
					nonTouchableDayTextStyle: {},
					startDateContainerStyle: {},
					endDateContainerStyle: {},
					dayContainerStyle: {},
					dayTextStyle: {
						color: '#2d4150',
						fontWeight: '200',
						fontSize: 15
					},
					dayOutOfRangeContainerStyle: {},
					dayOutOfRangeTextStyle: {},
					todayContainerStyle: {},
					todayTextStyle: {
						color: '#FFCC48'
					},
					activeDayContainerStyle: {
						backgroundColor: '#FFCC48'
					},
					activeDayTextStyle: {
						color: 'white'
					},
					nonTouchableLastMonthDayTextStyle: {}
				}}
			/>
		);
	}
}

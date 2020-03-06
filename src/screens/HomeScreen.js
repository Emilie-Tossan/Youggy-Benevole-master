import React from 'react';
import { Text, StyleSheet, View, Button, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<ScrollView>
			<Text style={styles.text}>Youggy Test Screen</Text>
			<Button
				onPress={() => navigation.navigate('Fly')}
				title="Go to FlyingAnimation demo"
			/>
			<Button
				onPress={() => navigation.navigate('CalendarTest')}
				title="Go to CalendarTest demo"
			/>
			<Button
				onPress={() => navigation.navigate('GeolocalisationTest')}
				title="Go to GeolocalisationTest demo"
			/>
			<Button
				onPress={() => navigation.navigate('ImagePickerTest')}
				title="Go to ImagePickerTest demo"
			/>
			<Button
				onPress={() => navigation.navigate('BottomNavigatorTest')}
				title="Go to BottomNavigatorTest demo"
			/>
			<Text />
			<Text />
			<Text />
			<Text />
			<Text />
			<Text />
			<Button
				onPress={() => navigation.navigate('BottomNav')}
				title="Go to BottomNav demo"
			/>
			<Text />
			<Text />
			<Text />
			<Text />
			<Text />
			<Text />
			<Text />
			<Text />
			<Text />
			<Text />
			<Text />
			<Text />
			<Text />
			<Text>Messages Benevole</Text>
			<Button
				onPress={() => navigation.navigate('Messages')}
				title="Go to Messages demo"
			/>
			<Button
				onPress={() => navigation.navigate('InBox')}
				title="Go to InBox demo"
			/>

			<Text />
			<Text />
			<Text />
			<Text>Mission</Text>
			<Button
				onPress={() => navigation.navigate('AdressOrGeoloc')}
				title="Go to AdressOrGeoloc demo"
			/>
			<Button
				onPress={() => navigation.navigate('GeolocAnimation')}
				title="Go to GeolocAnimation demo"
			/>
			<Button
				onPress={() => navigation.navigate('MissionDesc')}
				title="Go to MissionDesc demo"
			/>
			<Button
				onPress={() => navigation.navigate('MissionParticipation')}
				title="Go to MissionParticipation demo"
			/>
			<Button
				onPress={() => navigation.navigate('MissionsList')}
				title="Go to MissionsList demo"
			/>
			<Button
				onPress={() => navigation.navigate('MyMissions')}
				title="Go to MyMissions demo"
			/>
			<Text />
			<Text />
			<Text />
			<Text> Profile Bénévole</Text>
			<Button
				onPress={() => navigation.navigate('Profile')}
				title="Go to Profile demo"
			/>
			<Button
				onPress={() => navigation.navigate('ProfileFill')}
				title="Go to ProfileFill demo"
			/>
			<Button
				onPress={() => navigation.navigate('Skills')}
				title="Go to Skills demo"
			/>
			<Button
				onPress={() => navigation.navigate('IdChoiceV2')}
				title="Go to IdChoiceV2 demo"
			/>
			<Button
				onPress={() => navigation.navigate('ChangeMail')}
				title="Go to ChangeMail demo"
			/>
			<Button
				onPress={() => navigation.navigate('ChangeMailConfirm')}
				title="Go to ChangeMailConfirm demo"
			/>
			<Button
				onPress={() => navigation.navigate('ChangePasswordProfil')}
				title="Go to ChangePasswordProfil demo"
			/>

			<Button
				onPress={() =>
					navigation.navigate('ForgotPasswordConfirmProfil')}
				title="Go to ForgotPasswordConfirmProfil demo"
			/>
			<Button
				onPress={() => navigation.navigate('ForgotPasswordProfil')}
				title="Go to ForgotPasswordProfil demo"
			/>
			<Button
				onPress={() => navigation.navigate('TakeDiplome')}
				title="Go to TakeDiplome demo"
			/>
			<Button
				onPress={() => navigation.navigate('CheckDiplome')}
				title="Go to CheckDiplome demo"
			/>
			<Text />
			<Text />
			<Text />
			<Text> Main stack Bénévole</Text>
			<Button
				onPress={() => navigation.navigate('Landing')}
				title="Go to Landing demo"
			/>
			<Button
				onPress={() => navigation.navigate('SwipeAsso')}
				title="Go to SwipeAsso demo"
			/>
			<Button
				onPress={() => navigation.navigate('Swipe')}
				title="Go to Swipe demo"
			/>
			<Button
				onPress={() => navigation.navigate('BottomNav')}
				title="Go to BottomNav demo"
			/>
			{/* <Button
				onPress={() => navigation.navigate('ProfileCreation')}
				title="Go to ProfileCreation demo"
			/>
			<Button
				onPress={() => navigation.navigate('Profile')}
				title="Go to Profile demo"
			/>
			<Button
				onPress={() => navigation.navigate('Main')}
				title="Go to Main demo"
			/>
			<Button
				onPress={() => navigation.navigate('ProfileCreationAsso')}
				title="Go to ProfileCreationAsso demo"
			/>
			<Button
				onPress={() => navigation.navigate('ProfileAsso')}
				title="Go to ProfileAsso demo"
			/>
			<Button
				onPress={() => navigation.navigate('MainAsso')}
				title="Go to MainAsso demo"
			/>
			<Button
				onPress={() => navigation.navigate('Mission')}
				title="Go to Mission demo"
			/> */}

			<Text />
			<Text />
			<Text />
			<Text> Inscription Bénévole</Text>
			<Button
				onPress={() => navigation.navigate('Inscription')}
				title="Go to Inscription demo"
			/>
			<Button
				onPress={() => navigation.navigate('IdChoice')}
				title="Go to IdChoice demo"
			/>
			<Button
				onPress={() =>
					navigation.navigate('TakePhoto', {
						type: "carte d'identité",
						side: 'recto',
						pronom: 'ta',
						pronom2: 'ma',
						pronom3: 'elle'
					})}
				title="Go to TakePhoto demo"
			/>
			<Button
				onPress={() => navigation.navigate('CheckPhoto')}
				title="Go to CheckPhoto demo"
			/>
			{/* <Button
				onPress={() =>
					navigation.navigate('Validation', {
						text: 'Merci',
						next: 'Lansding'
					})}
				title="Go to Validation demo"
			/> */}
			<Button
				onPress={() => navigation.navigate('HowContact')}
				title="Go to HowContact demo"
			/>
			<Button
				onPress={() => navigation.navigate('ContactConfirm')}
				title="Go to ContactConfirm demo"
			/>
			{/* <Button
				onPress={() => navigation.navigate('EditingPhone')}
				title="Go to EditingPhone demo"
			/> */}
			<Button
				onPress={() => navigation.navigate('PasswordCreation')}
				title="Go to PasswordCreation demo"
			/>
			<Text />
			<Text />
			<Text />
			<Text> Connexion</Text>
			<Button
				onPress={() => navigation.navigate('Connexion')}
				title="Go to Connexion demo"
			/>
			<Button
				onPress={() => navigation.navigate('DoubleAuth')}
				title="Go to DoubleAuth demo"
			/>
			<Button
				onPress={() => navigation.navigate('ForgotPassword')}
				title="Go to ForgotPassword demo"
			/>
			<Button
				onPress={() => navigation.navigate('NeedHelp')}
				title="Go to NeedHelp demo"
			/>
			<Button
				onPress={() => navigation.navigate('ChangePassword')}
				title="Go to ChangePassword demo"
			/>
			<Button
				onPress={() => navigation.navigate('ChangeVerification')}
				title="Go to ChangeVerification demo"
			/>
			<Text />
			<Text />
			<Text />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default HomeScreen;

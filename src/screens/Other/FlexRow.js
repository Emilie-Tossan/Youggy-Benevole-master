import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const FlexRow = props => {
	const { itemsList, removeIt } = props;
	const finalList = itemsList.map(item => {
		return (
			<Button
				icon={
					<EntypoIcon
						name="cross"
						size={17}
						color={'#E06666'}
						style={{ top: 2, paddingRight: 5 }}
					/>
				}
				iconRight
				title={item.title}
				type="outline"
				onPress={() => {
					removeIt(item.id);
				}}
				containerStyle={{
					marginVertical: 5,
					marginRight: 10
				}}
				buttonStyle={{
					backgroundColor: item.isCompetence ? '#FAE0E2' : 'white',
					borderColor: '#E06666',
					borderRadius: 100
				}}
				titleStyle={{
					color: '#E06666',
					fontSize: 17,
					marginRight: 10
				}}
				key={item.id}
			/>
		);
	});
	return <View style={styles.container}>{finalList}</View>;
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: '100%',
		overflow: 'visible'
	}
});

export default FlexRow;

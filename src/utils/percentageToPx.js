import { Dimensions } from 'react-native';

//expected value between 0 and 100 inclusive

const percentageToPx = (percentage, heightOrWidth = false) => {
	const { height, width } = Dimensions.get('window');
	let pxValue = 0;
	//console.log(height, width);
	if (heightOrWidth) {
		//look for width
		pxValue = (width * percentage) / 100;
	} else {
		//look for height
		pxValue = (height * percentage) / 100;
	}
	return pxValue;
};

export default percentageToPx;

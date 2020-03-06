import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Selection = (props) => {
	let width = props.style && props.style.width ? props.style.width : 27;
	let height = props.style && props.style.height ? props.style.height : 27;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 27 27"
			preserveAspectRatio="xMinYMin slice"
			{...props}
			{...style}
		>
			<Path
				fill="#FFF"
				d="M13.5 26.75C6.194 26.75.25 20.806.25 13.5S6.194.25 13.5.25 26.75 6.194 26.75 13.5 20.806 26.75 13.5 26.75zm0-25C7.021 1.75 1.75 7.021 1.75 13.5S7.021 25.25 13.5 25.25s11.75-5.271 11.75-11.75S19.979 1.75 13.5 1.75z"
			/>
		</Svg>
	);
};

export default Selection;

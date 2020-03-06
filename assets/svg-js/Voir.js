import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
	let width = props.style && props.style.width ? props.style.width : 18;
	let height = props.style && props.style.height ? props.style.height : 13;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 18 13"
			preserveAspectRatio="xMinYMin slice"
			{...props}
		>
			<Path
				fill="#FFC951"
				d="M17.329 5.538C15.271 2.444 12.002.445 9 .445 5.999.445 2.729 2.444.67 5.538a1.845 1.845 0 00-.327 1.031c0 .356.11.702.327 1.031 2.059 3.094 5.329 5.093 8.33 5.093 3.002 0 6.271-1.999 8.327-5.091.219-.325.33-.673.33-1.033 0-.36-.111-.707-.328-1.031zm-1.041 1.37C14.456 9.663 11.595 11.443 9 11.443s-5.456-1.78-7.289-4.534a.617.617 0 01-.119-.34c0-.108.039-.219.118-.338C3.544 3.476 6.405 1.695 9 1.695s5.456 1.78 7.29 4.538c.079.118.117.228.117.336s-.038.219-.119.339z"
			/>
			<Path
				fill="#FFC951"
				d="M9 2.65c-2.178 0-3.95 1.772-3.95 3.95S6.822 10.55 9 10.55s3.95-1.771 3.95-3.95S11.178 2.65 9 2.65zM10.186 6a1 1 0 110-2 1 1 0 010 2z"
			/>
		</Svg>
	);
}

export default SvgComponent;

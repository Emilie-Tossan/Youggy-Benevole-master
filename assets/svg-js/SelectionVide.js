import React from 'react';
import Svg, { Circle } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
	let width = props.style && props.style.width ? props.style.width : 22;
	let height = props.style && props.style.height ? props.style.height : 22;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 22 22"
			preserveAspectRatio="xMinYMin slice"
			{...props}
		>
			<Circle
				cx={10}
				cy={10}
				r={10}
				transform="translate(1 1)"
				stroke="#FAE0E2"
				fill="none"
				fillRule="evenodd"
			/>
		</Svg>
	);
}

export default SvgComponent;

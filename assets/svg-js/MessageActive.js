import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
	const width = props.style && props.style.width ? props.style.width : 26;
	const height = props.style && props.style.height ? props.style.height : 22;
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 26 22"
			preserveAspectRatio="xMinYMin meet"
			{...props}
		>
			<Path
				fill={props.color}
				d="M13 21.783c-.708 0-1.343-.36-1.697-.965l-2.134-3.641h-6.87A2.306 2.306 0 010 14.863V2.316A2.31 2.31 0 012.299 0h21.402A2.31 2.31 0 0126 2.316v12.547a2.31 2.31 0 01-2.299 2.314h-6.869l-2.137 3.641a1.938 1.938 0 01-1.695.965zM2.299 2C2.145 2 2 2.154 2 2.316v12.547c0 .162.145.314.299.314h8.015l2.699 4.603 2.672-4.603h8.017c.153 0 .299-.152.299-.314V2.316C24 2.139 23.869 2 23.701 2H2.299z"
			/>
		</Svg>
	);
}

export default SvgComponent;

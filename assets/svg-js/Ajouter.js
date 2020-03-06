import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
	const width = props.style && props.style.width ? props.style.width : 24;
	const height = props.style && props.style.height ? props.style.height : 23;
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 24 23"
			preserveAspectRatio="xMinYMin slice"
			{...props}
		>
			<Path
				fill="#FFA901"
				d="M12.227 17.109h-1.453v-5.086H5.98V10.57h4.793V5.484h1.453v5.086h4.793v1.453h-4.793v5.086z"
			/>
			<Path
				fill="#FFA901"
				d="M11.5 23C5.159 23 0 17.841 0 11.5S5.159 0 11.5 0 23 5.159 23 11.5 17.841 23 11.5 23zm0-22C5.71 1 1 5.71 1 11.5S5.71 22 11.5 22 22 17.29 22 11.5 17.29 1 11.5 1z"
			/>
		</Svg>
	);
}

export default SvgComponent;

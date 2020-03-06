import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
	const width = props.style && props.style.width ? props.style.width : 28.875;
	const height =
		props.style && props.style.height ? props.style.height : 21.75;
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 28.875 21.75"
			preserveAspectRatio="xMinYMin meet"
			{...props}
		>
			<Path
				fill="#898989"
				d="M6.375 11.625v-1.5h22.5v1.5h-22.5zm0 9v-1.5h22.5v1.5h-22.5zm0-18v-1.5h22.5v1.5h-22.5zM0 0h3.75v3.75H0V0zm1.125 2.625h1.5v-1.5h-1.5v1.5zM0 9h3.75v3.75H0V9zm1.125 1.125v1.5h1.5v-1.5h-1.5zM0 18h3.75v3.75H0V18zm1.125 1.125v1.5h1.5v-1.5h-1.5z"
			/>
		</Svg>
	);
}

export default SvgComponent;

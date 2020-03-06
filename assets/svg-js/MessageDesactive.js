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
				fill="#898989"
				d="M13 21.783c-.709 0-1.343-.36-1.697-.965l-2.134-3.641h-6.87A2.306 2.306 0 010 14.863V2.316A2.31 2.31 0 012.299 0h21.402A2.31 2.31 0 0126 2.316v12.547a2.31 2.31 0 01-2.299 2.314h-6.869l-2.137 3.641a1.936 1.936 0 01-1.695.965zM2.299 1.5a.819.819 0 00-.799.816v12.547c0 .441.366.814.799.814h7.729l2.569 4.381c.174.297.632.297.805.002l2.571-4.383h7.729a.818.818 0 00.799-.814V2.316a.808.808 0 00-.799-.816H2.299z"
			/>
		</Svg>
	);
}

export default SvgComponent;

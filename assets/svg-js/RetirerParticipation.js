import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
	const width = props.style && props.style.width ? props.style.width : 16;
	const height = props.style && props.style.height ? props.style.height : 17;

	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 16 17"
			preserveAspectRatio="xMinYMin slice"
			{...props}
		>
			<G fill="#EDA3A3" fillRule="nonzero">
				<Path d="M6.5.69c.004.367-.334.696-.705.688H1.39v14.244h4.406c.367-.006.705.325.705.689 0 .364-.338.694-.705.689h-5.1C.33 17 0 16.672 0 16.31V.69C0 .327.331 0 .695 0h5.1c.366-.007.701.326.705.69z" />
				<Path d="M16 8.499a.64.64 0 01-.188.464l-3.704 3.825c-.24.228-.739.309-1.013.056-.273-.252-.23-.753.008-.984l2.604-2.686H4.194a.685.685 0 01-.694-.675c0-.373.31-.675.694-.675h9.513l-2.604-2.686c-.276-.251-.284-.735-.008-.985.281-.253.762-.163 1.013.057l3.704 3.825a.746.746 0 01.188.464z" />
			</G>
		</Svg>
	);
}

export default SvgComponent;

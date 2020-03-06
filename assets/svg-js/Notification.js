import React from 'react';

import Svg, {
	G,
	Path,
	Circle,
	ClipPath,
	Image,
	Defs,
	Text,
	TSpan
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
	let width = props.style && props.style.width ? props.style.width : 18;
	let height = props.style && props.style.height ? props.style.height : 18;
	return (
		<Svg
			width={width}
			height={width}
			viewBox="0 0 18 18"
			preserveAspectRatio="xMinYMin slice"
			{...props}
		>
			<Circle fill="#E06666" cx={9} cy={9} r={9} />
			<Text
				fill="#FFF"
				fontSize={width / 1.9}
				fontWeight="bold"
				strokeWidth="0"
				x={props.demande === '5+' ? '3' : '5.5'}
				y="12.5"
			>
				{props.demande}
			</Text>
		</Svg>
	);
}

export default SvgComponent;

import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
	const width = props.style && props.style.width ? props.style.width : 12;
	const height = props.style && props.style.height ? props.style.height : 12;
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 12 12"
			preserveAspectRatio="xMinYMin slice"
			{...props}
		>
			<Path
				d="M.048 11.89l4.95-1.337c.298-.1.496-.347.496-.644l.495-7.574.495 7.574c0 .297.247.594.544.644l4.901 1.337L5.99.008.048 11.89z"
				fill="#8397A4"
				fillRule="nonzero"
			/>
		</Svg>
	);
}

export default SvgComponent;

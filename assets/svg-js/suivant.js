import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Suivant = props => {
	let width = props.style && props.style.width ? props.style.width : 9;
	let height = props.style && props.style.height ? props.style.height : 14;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 9 14"
			preserveAspectRatio="xMinYMin slice"
			{...props}
			{...style}
		>
			<Path
				fill={props.color ? props.color : '#FFF'}
				d="M1.881 13.887L.119 12.113l5.113-5.078L.113 1.881 1.887.119l6.881 6.927z"
			/>
		</Svg>
	);
};

export default Suivant;

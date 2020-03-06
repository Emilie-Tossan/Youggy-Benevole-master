import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Retour = props => {
	let width = props.style && props.style.width ? props.style.width : 8;
	let height = props.style && props.style.height ? props.style.height : 12;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 8 12"
			preserveAspectRatio="xMinYMin slice"
			{...props}
			{...style}
		>
			<Path
				fill={props.color}
				d="M6.29 11.705L.586 5.961 6.295.291l1.41 1.418-4.291 4.262 4.296 4.324z"
			/>
		</Svg>
	);
};

export default Retour;

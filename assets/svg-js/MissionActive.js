import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
	const width = props.style && props.style.width ? props.style.width : 28.361;
	const height =
		props.style && props.style.height ? props.style.height : 22.219;
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 28.361 22.219"
			preserveAspectRatio="xMinYMin meet"
			{...props}
		>
			<G fill={props.color}>
				<Path d="M0 8.969h4.25v4.25H0zM7.354 1.094h21.007v2H7.354zM0-.031h4.25v4.25H0zM0 17.969h4.25v4.25H0zM7.354 19.094h21.007v2H7.354zM7.354 10.094h21.007v2H7.354z" />
			</G>
		</Svg>
	);
}

export default SvgComponent;

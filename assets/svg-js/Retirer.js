import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
	let width = props.style && props.style.width ? props.style.width : 18;
	let height = props.style && props.style.height ? props.style.height : 18;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 18 18"
			preserveAspectRatio="xMinYMin slice"
			{...props}
		>
			<Path
				fill="#FFCC68"
				d="M5.067 17.36L.456 12.75l3.768-3.767-3.7-3.701L4.997.807l3.701 3.7L12.477.73l4.61 4.611-3.776 3.778 3.708 3.71-4.474 4.475-3.71-3.71-3.768 3.767zm-2.49-4.61l2.49 2.49 3.768-3.768 3.71 3.709 2.353-2.353-3.708-3.71 3.777-3.777-2.49-2.49L8.7 6.628 5 2.928 2.644 5.28l3.701 3.701-3.769 3.768z"
			/>
		</Svg>
	);
}

export default SvgComponent;

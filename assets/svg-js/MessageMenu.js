import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
	const width = props.style && props.style.width ? props.style.width : 20;
	const height = props.style && props.style.height ? props.style.height : 17;
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 20 17"
			preserveAspectRatio="xMinYMin meet"
			{...props}
		>
			<Path
				fill="#FFCC68"
				d="M10 16.757a1.497 1.497 0 01-1.305-.742l-1.642-2.8H1.769c-.975 0-1.769-.8-1.769-1.782V1.782C0 .799.793 0 1.769 0h16.463C19.207 0 20 .799 20 1.782v9.651c0 .982-.793 1.782-1.769 1.782h-5.284l-1.643 2.8c-.272.464-.76.742-1.304.742zM1.769 1.5c-.141 0-.269.134-.269.282v9.651c0 .147.128.282.269.282h6.144L10 15.257a.059.059 0 00.017-.002l2.071-3.54h6.144c.141 0 .269-.135.269-.282V1.782a.273.273 0 00-.269-.282H1.769z"
			/>
		</Svg>
	);
}

export default SvgComponent;

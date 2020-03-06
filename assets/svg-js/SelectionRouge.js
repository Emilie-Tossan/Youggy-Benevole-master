import React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
	let width = props.style && props.style.width ? props.style.width : 22;
	let height = props.style && props.style.height ? props.style.height : 22;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 22 22"
			preserveAspectRatio="xMinYMin slice"
			{...props}
		>
			<G transform="translate(1 1)" fill="none" fillRule="evenodd">
				<Circle
					stroke="#FAE0E2"
					fill="#FAE0E2"
					cx={10}
					cy={10}
					r={10}
				/>
				<Path
					stroke="#E06666"
					strokeWidth={1.5}
					d="M6.5 9.691L8.714 12 14.5 6"
				/>
			</G>
		</Svg>
	);
}

export default SvgComponent;

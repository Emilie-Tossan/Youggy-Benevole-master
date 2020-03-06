import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
	const width = props.style && props.style.width ? props.style.width : 16;
	const height = props.style && props.style.height ? props.style.height : 16;

	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 16 16"
			preserveAspectRatio="xMinYMin slice"
			{...props}
		>
			<Path
				fill="#EDA3A3"
				d="M4.067 16.051c-.2 0-.39-.078-.53-.22l-3.55-3.55a.749.749 0 010-1.06l3.237-3.237-3.171-3.17a.749.749 0 010-1.06L3.468.335a.75.75 0 011.06 0L7.7 3.507 10.947.262a.75.75 0 011.06 0l3.55 3.55a.751.751 0 010 1.06L12.312 8.12l3.178 3.18a.75.75 0 010 1.06l-3.414 3.414a.75.75 0 01-1.06 0l-3.18-3.178-3.238 3.238a.758.758 0 01-.53.218zm-2.49-4.301l2.49 2.49 3.238-3.238a.75.75 0 011.06 0l3.18 3.178 2.353-2.352-3.178-3.18a.75.75 0 010-1.061l3.247-3.247-2.49-2.49L8.23 5.097a.772.772 0 01-1.06 0L4 1.927 1.644 4.281l3.17 3.171a.75.75 0 010 1.061L1.577 11.75z"
			/>
		</Svg>
	);
}

export default SvgComponent;

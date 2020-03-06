import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
	const width = props.style && props.style.width ? props.style.width : 9.121;
	const height =
		props.style && props.style.height ? props.style.height : 9.121;
	return (
		<Svg width={width} height={height} viewBox="0 0 9.121 9.121" {...props}>
			<Path
				fill="#FFA901"
				d="M9.121 1.061L8.061 0l-3.5 3.5-3.5-3.5L0 1.061l3.5 3.5-3.5 3.5 1.061 1.06 3.5-3.5 3.5 3.5 1.06-1.06-3.5-3.5z"
			/>
		</Svg>
	);
}

export default SvgComponent;

import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Editer = props => {
	let width = props.style && props.style.width ? props.style.width : 19;
	let height = props.style && props.style.height ? props.style.height : 20;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			{...props}
			viewBox="0 0 19 20"
			preserveAspectRatio="xMinYMin slice"
			{...style}
		>
			<G fill={props.color ? props.color : '#D8D8D8'}>
				<Path d="M12.645 3.542L1.205 15.58.08 19.877l4.099-1.158 11.45-12.045zM16.266 6.005l2.485-2.616L15.77.254l-2.483 2.612z" />
			</G>
		</Svg>
	);
};

export default Editer;

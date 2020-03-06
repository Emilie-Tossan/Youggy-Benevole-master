import React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Valide = props => {
	let width = props.style && props.style.width ? props.style.width : 42;
	let height = props.style && props.style.height ? props.style.height : 42;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 42 42"
			preserveAspectRatio="xMinYMin slice"
			{...props}
			{...style}
		>
			<G
				transform="translate(1 1)"
				stroke="#FFF"
				fill="none"
				fillRule="evenodd"
			>
				<Circle strokeWidth={1.5} cx={20} cy={20} r={20} />
				<Path strokeWidth={2} d="M12 20.613L16.982 26 30 12" />
			</G>
		</Svg>
	);
};

export default Valide;

import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Verifie = props => {
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
			{...style}
		>
			<G
				transform="translate(1 1)"
				stroke="#4CB050"
				fill="none"
				fillRule="evenodd"
			>
				<Circle cx={10} cy={10} r={10} />
				<Path d="M6 10.306L8.491 13 15 6" />
			</G>
		</Svg>
	);
};

export default Verifie;

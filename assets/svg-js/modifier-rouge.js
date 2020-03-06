import React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const ModifierRouge = props => {
	let width = props.style && props.style.width ? props.style.width : 19;
	let height = props.style && props.style.height ? props.style.height : 20;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 19 20"
			preserveAspectRatio="xMinYMin slice"
			{...props}
			{...style}
		>
			<G fill="#E06666" fillRule="nonzero">
				<Path d="M12.644 3.542L1.204 15.58.08 19.878l4.099-1.16 11.45-12.044zM16.266 6.005l2.485-2.616L15.77.254l-2.482 2.612z" />
			</G>
		</Svg>
	);
};

export default ModifierRouge;

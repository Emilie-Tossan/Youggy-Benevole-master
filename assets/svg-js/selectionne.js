import React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Selectionne = props => {
	let width = props.style && props.style.width ? props.style.width : 27;
	let height = props.style && props.style.height ? props.style.height : 27;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 27 27"
			preserveAspectRatio="xMinYMin slice"
			{...props}
			{...style}
		>
			<Path
				fill="#FFF"
				d="M13.5 26.75C6.194 26.75.25 20.806.25 13.5S6.194.25 13.5.25 26.75 6.194 26.75 13.5 20.806 26.75 13.5 26.75z"
			/>
			<Path
				fill="#E06666"
				d="M11.612 18.721l-3.846-4.159 1.468-1.358 2.382 2.575 7.402-7.96 1.464 1.362z"
			/>
		</Svg>
	);
};

export default Selectionne;

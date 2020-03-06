import React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const OeilOuvert = props => {
	let width = props.style && props.style.width ? props.style.width : 25;
	let height = props.style && props.style.height ? props.style.height : 16;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 25 16"
			preserveAspectRatio="xMinYMin slice"
			{...props}
			{...style}
		>
			<G fill="#FFF">
				<Path d="M24.8 7.5C21.586 2.847 16.707.129 12.5.129 8.294.129 3.414 2.847.2 7.5c-.104.15-.2.351-.2.55 0 .2.096.4.2.55 3.214 4.653 8.094 7.371 12.3 7.371 4.207 0 9.086-2.718 12.3-7.371.104-.15.2-.35.2-.55 0-.199-.096-.4-.2-.55zm-12.3 6.271c-3.17 0-5.74-2.562-5.74-5.721 0-3.159 2.57-5.721 5.74-5.721s5.74 2.562 5.74 5.721c0 3.159-2.57 5.721-5.74 5.721z" />
				<Circle cx={14.5} cy={5.5} r={1.5} />
			</G>
		</Svg>
	);
};

export default OeilOuvert;

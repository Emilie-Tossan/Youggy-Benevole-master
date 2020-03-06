import React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const OeilFerme = props => {
	let width = props.style && props.style.width ? props.style.width : 25;
	let height =
		props.style && props.style.height ? props.style.height : 11.872;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 25 11.872"
			preserveAspectRatio="xMinYMin slice"
			{...props}
			{...style}
		>
			<Path
				fill="#FFF"
				d="M25 .7c0-.202-.096-.404-.2-.556l-.021-.031C23.2 1.805 18.241 6.575 12.53 6.575 6.739 6.575 1.761 1.67.27.044a3.566 3.566 0 00-.07.1C.096.296 0 .498 0 .7c0 .202.096.404.2.556.602.88 1.263 1.693 1.966 2.431L.728 5.337a.25.25 0 00.345.358l1.726-1.379a18.08 18.08 0 002.198 1.791L3.294 9.042a.25.25 0 00.418.273L5.739 6.59A14.942 14.942 0 009.254 8.2l-.573 3.371a.249.249 0 00.247.292.251.251 0 00.24-.179l.966-3.255c.802.18 1.596.272 2.367.272.776 0 1.576-.095 2.384-.277l.91 3.265a.253.253 0 00.294.177.246.246 0 00.194-.281l-.52-3.391c1.231-.373 2.469-.951 3.662-1.707l2.104 2.829c.05.065.125.101.201.101a.247.247 0 00.215-.375l-1.772-3.056a18.33 18.33 0 002.136-1.776l1.859 1.485a.25.25 0 00.346-.359l-1.558-1.785A19.59 19.59 0 0024.8 1.256c.104-.152.2-.354.2-.556z"
			/>
		</Svg>
	);
};

export default OeilFerme;

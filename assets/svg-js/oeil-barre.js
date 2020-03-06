import React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const OeilBarre = props => {
	let width = props.style && props.style.width ? props.style.width : 26.076;
	let height =
		props.style && props.style.height ? props.style.height : 17.657;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 26.076 17.657"
			preserveAspectRatio="xMinYMin slice"
			{...props}
			{...style}
		>
			<Path
				fill="#FFF"
				d="M21.752,4.447l4.324-2.762L25,0L20.005,3.19c-2.276-1.435-4.717-2.219-6.967-2.219
	c-4.206,0-9.086,2.718-12.3,7.371c-0.104,0.15-0.2,0.351-0.2,0.55c0,0.2,0.096,0.4,0.2,0.55c1.021,1.479,2.212,2.762,3.495,3.822
	L0,15.969l1.076,1.688L5.97,14.53c2.307,1.479,4.785,2.283,7.068,2.283c4.207,0,9.086-2.719,12.3-7.371
	c0.104-0.148,0.2-0.35,0.2-0.55c0-0.199-0.097-0.4-0.2-0.55C24.293,6.829,23.068,5.524,21.752,4.447z M7.298,8.892
	c0-3.159,2.57-5.721,5.74-5.721c1.646,0,3.128,0.695,4.175,1.803l-0.904,0.578c-0.266-0.425-0.733-0.71-1.271-0.71
	c-0.828,0-1.5,0.671-1.5,1.5c0,0.304,0.092,0.585,0.247,0.822L7.72,11.04C7.45,10.375,7.298,9.653,7.298,8.892z M13.038,14.614
	c-1.688,0-3.199-0.73-4.249-1.887l9.525-6.085c0.299,0.69,0.464,1.451,0.464,2.25C18.778,12.051,16.208,14.614,13.038,14.614z"
			/>
		</Svg>
	);
};

export default OeilBarre;

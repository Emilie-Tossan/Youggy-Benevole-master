import React from "react";
import Svg, { G, Path } from "react-native-svg";

const IconeDisponibilites = props => {
	let width = props.style && props.style.width ? props.style.width : 178;
	let height =
		props.style && props.style.height ? props.style.height : 180.113;
	let style = props.style ? { ...props.style } : {};

	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 178 180.113"
			preserveAspectRatio="xMinYMin slice"
			{...props}
			{...style}
		>
			<G fill="#898989">
				<Path d="M146 93.785V36.453c0-6.264-5.074-11.34-11.34-11.34h-5.658v6c0 5.516-4.486 10-10 10-5.516 0-10-4.484-10-10v-6H39v6c0 5.516-4.484 10-10 10-5.514 0-10-4.484-10-10v-6h-7.162C5.576 25.113.5 30.19.5 36.453v98.821c0 6.263 5.077 11.339 11.338 11.339h79.434c4.709 19.229 22.049 33.5 42.729 33.5 24.301 0 44-19.7 44-44C178 115.977 164.467 99.01 146 93.785zM12.5 136.114v-78h121.502v34c-24.303 0-44 19.7-44 44H12.5zm121.502 33c-18.227 0-33-14.773-33-33 0-18.225 14.773-33 33-33 18.225 0 32.998 14.775 32.998 33s-14.775 33-32.998 33z" />
				<Path d="M150.5 131.114H139V114.31c0-2.763-2.236-5-4.998-5-2.764 0-5 2.237-5 5v21.804c0 2.764 2.236 5 5 5H150.5c2.764 0 5-2.236 5-5a5 5 0 00-5-5zM27.167 69.281H49.5v22.333H27.167zM60.502 69.281h22.33v22.333h-22.33zM27.167 103.114H49.5v22.334H27.167zM60.502 103.114h22.33v22.334h-22.33zM93.832 69.281h22.334v22.333H93.832zM29 36.114c2.762 0 5-2.237 5-5v-23.5a5 5 0 10-10 0v23.5a5 5 0 005 5zM119.002 36.114c2.762 0 5-2.237 5-5v-23.5a5 5 0 10-10 0v23.5c0 2.762 2.236 5 5 5z" />
			</G>
		</Svg>
	);
};

export default IconeDisponibilites;

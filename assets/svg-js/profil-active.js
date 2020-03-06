import React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const ProfilActive = props => {
	const width = props.style && props.style.width ? props.style.width : 23;
	const height = props.style && props.style.height ? props.style.height : 26;
	const { fill, ...rest } = props;
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 23 26"
			preserveAspectRatio="xMinYMin meet"
			{...rest}
		>
			<G
				fill={
					fill === "bénévole"
						? "#E06666"
						: fill === "association"
						? "#FFA901"
						: "#898989"
				}
			>
				<Path d="M11.424 13.394a6.7 6.7 0 006.697-6.697A6.7 6.7 0 0011.424 0a6.7 6.7 0 00-6.697 6.697 6.7 6.7 0 006.697 6.697zM22.807 19.027a9.866 9.866 0 00-.662-1.232c-1.324-1.953-3.4-3.275-5.719-3.605-.301-.03-.602.029-.842.21-1.204.872-2.648 1.353-4.153 1.353s-2.95-.48-4.153-1.353c-.241-.181-.542-.24-.843-.21a8.265 8.265 0 00-5.718 3.605 6.962 6.962 0 00-.662 1.232.57.57 0 00.03.541c.241.391.512.812.783 1.172.391.541.843 1.053 1.324 1.503.421.421.873.782 1.354 1.142A13.068 13.068 0 0011.431 26c2.858 0 5.598-.901 7.885-2.615.481-.359.933-.75 1.354-1.142.481-.45.933-.962 1.324-1.503.271-.36.541-.751.782-1.172a.677.677 0 00.031-.541z" />
			</G>
		</Svg>
	);
};

export default ProfilActive;

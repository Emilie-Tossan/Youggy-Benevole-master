import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function Cadenas(props) {
	const width = props.style && props.style.width ? props.style.width : 14;
	const height =
		props.style && props.style.height ? props.style.height : 20.25;
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 14 20.25"
			preserveAspectRatio="xMinYMin meet"
			{...props}
		>
			<Path
				fill={props.color ? props.color : '#EDA3A3'}
				d="M7 20.25c-3.86 0-7-3.146-7-7.012v-4.86h1.193V6.066c0-.096.002-.192.007-.287.004-1.592.612-3.008 1.713-4.069A5.852 5.852 0 017 .078c1.544 0 2.996.58 4.088 1.632a5.523 5.523 0 011.713 4.005V5.8c.004.088.006.177.006.266v2.312H14v4.86c0 3.866-3.141 7.012-7 7.012zM1.3 9.678v3.561c0 3.149 2.557 5.711 5.7 5.711 3.143 0 5.699-2.562 5.699-5.711V9.678H1.3zm1.2-1.3h9V5.831a4.497 4.497 0 00-1.311-2.962A4.468 4.468 0 007 1.55a4.501 4.501 0 00-4.5 4.262v2.566z"
			/>
			<Path
				opacity={0.601}
				fill={props.color ? props.color : '#E06666'}
				d="M5.84 14.966l.293-1.089a.06.06 0 00-.012-.055 1.204 1.204 0 01.924-1.973 1.204 1.204 0 01.924 1.973.06.06 0 00-.012.055l.293 1.089.34 1.279H5.5l.34-1.279z"
			/>
		</Svg>
	);
}

export default Cadenas;

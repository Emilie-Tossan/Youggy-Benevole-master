import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function Deconnection(props) {
	const width = props.style && props.style.width ? props.style.width : 16;
	const height = props.style && props.style.height ? props.style.height : 17;
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0.75 16 17"
			preserveAspectRatio="xMinYMin meet"
			{...props}
		>
			<G fill={props.color ? props.color : '#EDA3A3'}>
				<Path d="M6.5 1.439c.004.368-.334.697-.705.689H1.39v14.243h4.406c.366-.005.704.326.704.69 0 .364-.338.694-.705.689h-5.1c-.364 0-.695-.328-.695-.689V1.439C0 1.079.331.75.695.75h5.101c.366-.007.7.326.704.689z" />
				<Path d="M16 9.249c0 .18-.062.333-.188.464l-3.704 3.825c-.241.228-.739.309-1.013.056-.273-.252-.23-.753.007-.984l2.604-2.686H4.194a.685.685 0 01-.694-.675c0-.373.311-.675.694-.675h9.513l-2.604-2.686c-.274-.25-.283-.735-.007-.984.28-.253.762-.163 1.013.056l3.704 3.825a.743.743 0 01.187.464z" />
			</G>
		</Svg>
	);
}

export default Deconnection;

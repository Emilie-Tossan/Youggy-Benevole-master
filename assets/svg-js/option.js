import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
	const width = props.style && props.style.width ? props.style.width : 3;
	const height = props.style && props.style.height ? props.style.height : 17;
	return (
		<Svg
			width={width}
			height={height}
			viewBox='0 0 3 17'
			preserveAspectRatio='xMinYMin meet'
			{...props}
		>
			<G fill={props.color ? props.color : '#FFA901'} fillRule='nonzero'>
				<Path d='M.445 13.843a1.495 1.495 0 00-.421 1.052c0 .42.168.758.42 1.052.296.253.674.421 1.053.421.38 0 .758-.168 1.053-.42.294-.295.42-.674.42-1.053 0-.379-.168-.758-.42-1.052-.548-.548-1.558-.548-2.105 0zM2.55 7.15c-.548-.548-1.516-.548-2.105 0-.253.294-.421.673-.421 1.052s.168.758.42 1.052c.295.295.674.421 1.053.421.379 0 .758-.168 1.052-.42.295-.295.421-.674.421-1.053 0-.379-.168-.758-.42-1.052zM2.55.457c-.548-.548-1.516-.548-2.105 0C.192.75.024 1.088.024 1.509c0 .379.168.758.42 1.052.295.253.674.421 1.053.421.379 0 .758-.168 1.052-.42.295-.295.421-.632.421-1.053 0-.379-.168-.758-.42-1.052z' />
			</G>
		</Svg>
	);
}

export default SvgComponent;

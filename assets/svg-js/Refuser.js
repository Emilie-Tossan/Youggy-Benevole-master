import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
	const width = props.style && props.style.width ? props.style.width : 17;
	const height = props.style && props.style.height ? props.style.height : 20;
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 17 20"
			preserveAspectRatio="xMinYMin meet"
			{...props}
		>
			<Path
				fill="#FFCC68"
				d="M16.965 8.286c0-.746-.298-1.458-.824-1.984a2.801 2.801 0 00-1.462-3.744A2.54 2.54 0 0012.143.036c-1.99 0-3.949.349-5.822 1.039L3.25 2.206a2.566 2.566 0 01-.766.115H1.286a.822.822 0 00-.821.822v9.142c0 .453.369.822.821.822h1.195c.093 0 .182.04.243.11l3.375 3.856c.051.059.08.135.08.213v1.284c0 .769.631 1.394 1.407 1.394h.005c2.018-.011 3.659-1.661 3.659-3.71 0-.481-.113-.962-.327-1.39l-.308-.615h2.895c1.278 0 2.413-.817 2.76-1.987.2-.675.153-1.375-.129-1.994a2.799 2.799 0 00.824-1.982zm-9.629 7.706L3.96 12.137a1.964 1.964 0 00-1.479-.672h-.374v-7.5h.377c.431 0 .85-.065 1.292-.203l3.112-1.146a15.157 15.157 0 015.254-.937c.492 0 .893.4.893.893a.89.89 0 01-.059.305.816.816 0 00.076.725.815.815 0 00.621.379 1.167 1.167 0 01.757 1.962.817.817 0 00-.208.707.816.816 0 00.44.588c.406.203.658.605.658 1.049 0 .444-.252.847-.657 1.049a.811.811 0 00-.441.589.814.814 0 00.208.707c.294.314.391.739.265 1.165-.143.478-.63.812-1.186.812H9.285a.817.817 0 00-.699.39.817.817 0 00-.036.798l.903 1.803c.101.202.154.429.154.686 0 1.047-.798 1.915-1.786 2.027v-1.025a1.97 1.97 0 00-.485-1.296zm.25 3.722z"
			/>
		</Svg>
	);
}

export default SvgComponent;

import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
	let width = props.style && props.style.width ? props.style.width : 14;
	let height = props.style && props.style.height ? props.style.height : 18;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 14 18"
			preserveAspectRatio="xMinYMin slice"
			{...props}
		>
			<G fill="#FFCC68">
				<Path d="M10.84 17.225H3.16c-.86 0-1.589-.698-1.625-1.556L1.096 5.106a.624.624 0 01.598-.65c.334-.028.636.254.65.599l.44 10.562c.008.194.18.358.375.358h7.68a.385.385 0 00.376-.357l.439-10.563a.614.614 0 01.65-.599.625.625 0 01.598.65l-.439 10.563a1.638 1.638 0 01-1.623 1.556z" />
				<Path d="M4.6 14.375a.376.376 0 01-.375-.364l-.24-8.2a.375.375 0 01.75-.022l.24 8.2a.375.375 0 01-.364.386H4.6zM9.4 14.375h-.011a.375.375 0 01-.364-.386l.24-8.2c.006-.208.199-.352.386-.364.207.006.37.179.364.386l-.24 8.2a.374.374 0 01-.375.364zM13 3.665H1a.625.625 0 010-1.25h12a.625.625 0 010 1.25z" />
				<Path d="M8.8 2.852l-.25-.874a.553.553 0 00-.468-.353H5.918c-.185 0-.417.175-.467.353l-.25.874-1.202-.343.25-.875C4.455.916 5.172.375 5.918.375h2.164c.747 0 1.465.542 1.669 1.259l.25.874-1.201.344zM7 14.375A.375.375 0 016.625 14V5.8a.375.375 0 01.75 0V14a.375.375 0 01-.375.375z" />
			</G>
		</Svg>
	);
}

export default SvgComponent;

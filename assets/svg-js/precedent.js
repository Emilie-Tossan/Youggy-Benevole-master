import React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Precedent = props => {
	let width = props.style && props.style.width ? props.style.width : 21.333;
	let height = props.style && props.style.height ? props.style.height : 10;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="-2.333 0 21.333 10"
			preserveAspectRatio="xMinYMin slice"
			{...props}
			{...style}
		>
			<Path
				fill="#FFF"
				d="M19.015 8.235s-2.552-.03-2.938.203c-.503.303-1.032.252-1.638.05-.486-.163-.898.15-3.787.927-2.888.775-4.366.472-4.635-.067-.269-.54.135-1.113.135-1.113s-.438.035-.74-.168c-.302-.201-.436-1.213-.335-1.448s.37-.472.37-.472-.639-.102-.975-.27-.403-1.55-.168-1.751c.234-.202.672-.371.672-.371s-5.71.033-6.752-.202c-.5-.113-.619-.484-.604-.783.017-.354.324-.562.638-.631.605-.136.873-.102 3.494-.237 2.62-.135 4.434-.168 4.434-.168S6.456.69 6.79.554s1.847-.15 3.964.287c2.115.438 2.485 1.398 3.862 1.398 1.378 0 4.266-.067 4.266-.067l.133 6.063z"
			/>
		</Svg>
	);
};

export default Precedent;

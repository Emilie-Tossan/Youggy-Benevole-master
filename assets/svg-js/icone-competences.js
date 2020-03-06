import React from "react";
import Svg, { G, Path } from "react-native-svg";

const IconeCompetences = props => {
	let width = props.style && props.style.width ? props.style.width : 484.006;
	let height =
		props.style && props.style.height ? props.style.height : 484.006;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 484.006 484.006"
			preserveAspectRatio="xMinYMin slice"
			{...props}
			{...style}
		>
			<G fill="#898989">
				<Path d="M484.006 189.845v-10.659L241.897 62.561 0 179.083v10.863l241.897 116.525z" />
				<Path d="M83.808 251.571v69.7l145.836 70.25h24.506l145.436-70.057c.14-.308.271-.613.401-.922V251.57l-158.09 76.152-158.089-76.151zM458.506 358.195V222.599l-19.147 9.656v125.94l-12.476 38.007 18.858 25.243h6.381l18.859-25.243z" />
			</G>
		</Svg>
	);
};

export default IconeCompetences;

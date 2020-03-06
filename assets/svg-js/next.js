import React from "react";
import Svg, { Defs, Path, G, Mask, Use } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Next = props => {
	let width = props.style && props.style.width ? props.style.width : 20;
	let height = props.style && props.style.height ? props.style.height : 10;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 20 10"
			preserveAspectRatio="xMinYMin slice"
			{...props}
			{...style}
		>
			<Defs>
				<Path id="prefix__a" d="M.057.383h19.512v9.5H.057z" />
				<Path id="prefix__c" d="M0 .087h21.397V9.5H0z" />
			</Defs>
			<G fill="none" fillRule="evenodd">
				<Mask id="prefix__b" fill="#fff">
					<Use xlinkHref="#prefix__a" />
				</Mask>
				<G mask="url(#prefix__b)">
					<G transform="translate(-2.382 .383)">
						<Mask id="prefix__d" fill="#fff">
							<Use xlinkHref="#prefix__c" />
						</Mask>
						<Path
							d="M.134 1.789s2.889.067 4.266.067c1.377 0 1.747-.96 3.863-1.398C10.379.02 11.89.037 12.226.172c.336.134.605 1.179.605 1.179s1.814.033 4.434.168 2.888.101 3.493.236c.314.07.621.278.638.632.015.299-.104.67-.604.783-1.042.236-6.752.202-6.752.202s.437.168.672.37c.235.203.168 1.584-.168 1.752-.336.169-.974.27-.974.27s.269.235.37.471c.1.236-.034 1.247-.336 1.449-.303.202-.74.168-.74.168s.404.573.135 1.112c-.269.54-1.747.842-4.635.067-2.889-.774-3.3-1.089-3.788-.926-.604.202-1.133.253-1.637-.05C2.553 7.822 0 7.852 0 7.852L.134 1.79z"
							fill="#FFF"
							mask="url(#prefix__d)"
						/>
					</G>
				</G>
				<G mask="url(#prefix__b)" fill="#FFF">
					<Path d="M17.92 2.398s-.058.159-.058.466c0 .307.073.413.073.413s.838.007 1.066.007c.116 0 .245-.238.243-.47-.002-.218-.077-.431-.235-.431-.326 0-1.09.015-1.09.015" />
				</G>
			</G>
		</Svg>
	);
};

export default Next;

import React from "react";
import Svg, { Defs, Path, G, Use } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title, filter */

const ModifierInformations = props => {
	let width = props.style && props.style.width ? props.style.width : 24;
	let height = props.style && props.style.height ? props.style.height : 24;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			preserveAspectRatio="xMinYMin slice"
			{...props}
			{...style}
		>
			<Defs>
				<Path
					d="M21.931 9.779c-.035-.31-.395-.542-.707-.542a2.443 2.443 0 01-2.278-1.507 2.45 2.45 0 01.615-2.72.61.61 0 00.067-.83 10.885 10.885 0 00-1.742-1.76.612.612 0 00-.836.068c-.656.726-1.834.996-2.744.616A2.443 2.443 0 0112.82.716a.61.61 0 00-.54-.643A10.983 10.983 0 009.806.067a.612.612 0 00-.545.63 2.447 2.447 0 01-1.506 2.346c-.9.367-2.07.1-2.724-.62a.613.613 0 00-.83-.07c-.659.518-1.259 1.11-1.78 1.76a.612.612 0 00.066.836 2.438 2.438 0 01.616 2.744c-.38.904-1.32 1.487-2.394 1.487a.598.598 0 00-.635.54 11.019 11.019 0 00-.005 2.502c.034.31.406.54.721.54.958-.024 1.878.57 2.264 1.508.384.938.137 2.03-.616 2.72a.611.611 0 00-.066.829 10.925 10.925 0 001.74 1.76.612.612 0 00.837-.066c.658-.728 1.836-.997 2.742-.617a2.44 2.44 0 011.489 2.388.611.611 0 00.54.642 10.934 10.934 0 002.474.007.612.612 0 00.545-.63 2.445 2.445 0 011.505-2.346c.905-.37 2.07-.099 2.724.62a.615.615 0 00.83.07 10.951 10.951 0 001.78-1.76.61.61 0 00-.066-.836 2.437 2.437 0 01-.616-2.744 2.463 2.463 0 012.25-1.491l.136.003a.612.612 0 00.644-.539 11.01 11.01 0 00.005-2.501zm-10.914 4.913a3.673 3.673 0 01-3.669-3.669 3.673 3.673 0 013.67-3.669 3.673 3.673 0 013.669 3.67 3.673 3.673 0 01-3.67 3.668z"
					id="prefix__b"
				/>
			</Defs>
			<G transform="rotate(23 11 11)" fillRule="nonzero" fill="none">
				<Use
					fill="#000"
					filter="url(#prefix__a)"
					xlinkHref="#prefix__b"
				/>
				<Use fill="#D8D8D8" xlinkHref="#prefix__b" />
			</G>
		</Svg>
	);
};

export default ModifierInformations;

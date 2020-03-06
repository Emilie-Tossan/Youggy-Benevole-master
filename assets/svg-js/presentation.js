import React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function Presentation(props) {
    const width = props.style && props.style.width ? props.style.width : 15.666;
    const height =
        props.style && props.style.height ? props.style.height : 15.663;
    return (
        <Svg
            width={width}
            height={height}
            viewBox="1.167 1.167 15.666 15.663"
            preserveAspectRatio="xMinYMin meet"
            {...props}
        >
            <Path
                fill={props.color ? props.color : "#EDA3A3"}
                d="M8.998 1.167a7.778 7.778 0 00-5.844 2.619 7.775 7.775 0 00-1.974 5.66 7.834 7.834 0 0011.548 6.442l.059-.031 2.643.92a.905.905 0 001.157-1.126l-.845-2.666.033-.058a7.778 7.778 0 00.862-5.657 7.777 7.777 0 00-3.46-4.895 7.83 7.83 0 00-4.064-1.207l-.115-.001zm.005 14.21a6.371 6.371 0 01-4.579-1.934 6.384 6.384 0 01-1.793-4.079 6.387 6.387 0 016.365-6.742h.095a6.373 6.373 0 013.309.982 6.334 6.334 0 012.818 3.986 6.334 6.334 0 01-.825 4.812l-.104.165a.555.555 0 00-.059.46l.637 2.014-1.994-.694a.553.553 0 00-.463.046l-.167.099a6.388 6.388 0 01-3.24.885zM11.95 7.9a1.051 1.051 0 000 2.1 1.051 1.051 0 000-2.1zm-3 0a1.051 1.051 0 000 2.1 1.051 1.051 0 000-2.1zm-3 0a1.051 1.051 0 000 2.1 1.051 1.051 0 000-2.1z"
            />
        </Svg>
    );
}

export default Presentation;

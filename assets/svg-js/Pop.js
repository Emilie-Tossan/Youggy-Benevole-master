import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
    let width = props.style && props.style.width ? props.style.width : 15;
    let height = props.style && props.style.height ? props.style.height : 15;
    let style = props.style ? { ...props.style } : {};
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 15 15"
            preserveAspectRatio="xMinYMin slice"
            {...props}
            {...style}
        >
            <G fill="#FFA901">
                <Circle opacity={0.198} cx={7.5} cy={7.5} r={7.5} />
                <Path d="M4 7h7v1H4z" />
            </G>
        </Svg>
    );
}

export default SvgComponent;

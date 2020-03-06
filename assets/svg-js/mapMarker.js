import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter, title */

function SvgComponent(props) {
	const width = props.style && props.style.width ? props.style.width : 50.182;
	const height =
		props.style && props.style.height ? props.style.height : 69.818;
	return (
		<Svg
			width={width}
			height={height}
			viewBox="34.909 0 50.182 69.818"
			enableBackground="new 34.909 0 50.182 69.818"
			{...props}
		>
			<Path
				fill={props.color ? props.color : '#D94B4B'}
				d="M60 0c13.895 0 25.091 11.567 25.091 25.614l-.007.519c-.457 17.194-23.34 41.769-24.274 42.86l-.675.826-.944-.826c-.944-1.102-24.281-26.165-24.281-43.378l.003-.425C35.136 11.202 46.378 0 60 0zm.267 14.072c-6.406 0-11.478 5.277-11.478 11.636 0 6.495 5.205 11.637 11.478 11.637 6.407 0 11.477-5.277 11.477-11.637 0-6.495-5.205-11.636-11.477-11.636z"
			/>
			<G
				filter="url(#prefix__a)"
				fill={props.color ? props.color : '#D94B4B'}
			>
				<Path d="M60 0c13.895 0 25.091 11.567 25.091 25.614l-.007.519c-.457 17.194-23.34 41.769-24.274 42.86l-.675.826-.944-.826c-.944-1.102-24.281-26.165-24.281-43.378l.003-.425C35.136 11.202 46.378 0 60 0zm.267 14.072c-6.406 0-11.478 5.277-11.478 11.636 0 6.495 5.205 11.637 11.478 11.637 6.407 0 11.477-5.277 11.477-11.637 0-6.495-5.205-11.636-11.477-11.636z" />
			</G>
		</Svg>
	);
}

export default SvgComponent;

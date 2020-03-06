import React, { useLayoutEffect, useRef, useState } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Animated } from 'react-native';
import _D from './TabMouvementV2';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const LogoAnimation = props => {
	const width =
		props.style && props.style.width ? props.style.width : 711.979;
	const height =
		props.style && props.style.height ? props.style.height : 749.041;
	const style = props.style ? { ...props.style } : {};
	const [ dState, setDState ] = useState(_D[0]);
	const [ falling, setFalling ] = useState(new Animated.Value(0));
	const [ fadeIn, setFadeIn ] = useState(new Animated.Value(0));
	const battementDuration = 3000;
	const battement = 1;
	const decompositionValue = 42;

	const flyingIterationRef = useRef(null);

	let newBattement = false;
	let isMounted = true;
	const flyingIteration = (i, evolution) => {
		if (!i) return;
		if (evolution <= decompositionValue) {
			setTimeout(() => {
				if (isMounted) {
					setDState(_D[evolution]);
					flyingIterationRef.current = requestAnimationFrame(
						flyingIteration.bind(this, i, evolution + 1)
					);
				}
			}, battementDuration / battement / decompositionValue);
		} else {
			newBattement = true;
		}
		if (newBattement) {
			newBattement = false;
			if (isMounted)
				flyingIterationRef.current = requestAnimationFrame(
					flyingIteration.bind(this, --i, 0)
				);
		}
	};

	const ratio = 471.445 / 490.462;
	const newRatio = width / height;
	const ratio2 = 711.979 / 1200;
	const newRatio2 = ratio * newRatio / ratio2;
	const center =
		490.462 * newRatio2 / (2 * newRatio2) -
		264.729 * newRatio2 / (2 * newRatio2);
	const ancre = center - 264.729 * newRatio2 / (2 * newRatio2);

	useLayoutEffect(() => {
		flyingIterationRef.current = requestAnimationFrame(
			flyingIteration.bind(this, battement, 1)
		);
		Animated.timing(falling, {
			useNativeDriver: true,
			toValue: decompositionValue,
			duration: 3000
		}).start();
		Animated.timing(fadeIn, {
			useNativeDriver: true,
			toValue: 1,
			duration: 3000
		}).start();
		return function cleanup() {
			isMounted = false;
			cancelAnimationFrame(flyingIterationRef.current);
		};
	}, []);

	return (
		<Svg
			width={width}
			height={height}
			viewBox={`0 ${-height} 711.979 1200`}
			preserveAspectRatio="xMinYMin slice"
			{...style}
		>
			<Path
				fill="#FFF"
				d="M235.902,490.482c-8.234,0-16.537-1.961-24.678-5.831c-7.485-3.563-16.147-7.761-24.285-12.446
	c-14.004-8.07-30.143-13.022-50.788-15.591c-9.193-1.145-18.689-2.907-28.222-5.239c-11.994-2.933-21.902-10.17-28.653-20.938
	c-4.281-6.824-8.713-14.232-12.128-22.115c-8.984-20.812-21.749-38.234-39.015-53.285c-6.06-5.277-11.466-11.491-16.062-16.896
	c-9.627-11.355-13.436-25.17-11.333-41.059c1.194-8.98,2.665-18.057,4.091-26.838l1.7-10.594c2.19-13.85,0.51-27.174-1.43-38.385
	c-1.838-10.604-3.207-19.406-4.309-27.698c-2.206-16.602,2.053-31.009,12.656-42.821c7.097-7.908,12.758-13.692,18.374-18.763
	c14.801-13.351,25.709-28.319,33.342-45.759c1.579-3.594,3.404-7.106,5.182-10.5c1.082-2.079,2.165-4.156,3.195-6.261
	c9.301-19.031,24.877-30.196,46.282-33.179c8.229-1.144,16.444-2.404,24.66-3.66l5.691-0.874
	c14.927-2.275,28.157-8.688,38.012-14.022c9.211-4.988,17.415-9.114,25.088-12.617c15.188-6.926,31.032-6.783,46.502,0.419
	c9.195,4.284,18.104,8.843,26.487,13.555c13.151,7.397,28.144,12.023,47.188,14.551c10.682,1.425,20.899,3.282,30.366,5.528
	c11.956,2.844,21.645,9.776,28.021,20.039c5.457,8.781,10.233,18.134,14.855,27.175l1.369,2.691
	c4.544,8.902,9.239,18.108,15.662,25.965l6.272,6.356c4.852,4.91,9.707,9.821,14.506,14.783l2.216,2.282
	c4.437,4.564,9.03,9.286,13.227,14.239c9.537,11.247,13.261,25.266,11.069,41.674c-1.108,8.286-2.485,16.664-3.824,24.771
	c-0.663,4.033-1.326,8.066-1.966,12.109c-2.011,12.825-0.521,25.648,1.389,37.597c1.812,11.297,3.635,23.407,4.689,35.428
	c1.028,11.933-2.815,23.398-11.112,33.164c-7.022,8.251-13.59,15.113-20.083,20.979c-14.921,13.523-25.961,28.728-33.741,46.474
	c-2.046,4.666-4.438,9.236-6.748,13.653l-2.267,4.358c-9.001,17.562-23.719,28.012-43.753,31.062l-7.488,1.132
	c-7.627,1.163-15.256,2.322-22.893,3.432c-12.746,1.842-25.327,6.473-40.795,15.009c-6.551,3.609-13.612,7.214-21.592,11.021
	C252.598,488.492,244.203,490.482,235.902,490.482z M235.959,3.918c-7.045,0-14.129,1.604-21.06,4.757
	c-7.586,3.467-15.714,7.557-24.842,12.504c-10.139,5.482-23.765,12.079-39.291,14.451l-5.69,0.869
	c-8.23,1.26-16.466,2.522-24.709,3.665c-20.319,2.833-34.486,12.983-43.304,31.025c-1.046,2.133-2.143,4.242-3.245,6.346
	c-1.741,3.338-3.544,6.796-5.064,10.261c-7.862,17.961-19.083,33.369-34.308,47.097c-5.504,4.973-11.08,10.665-18.077,18.465
	c-9.808,10.926-13.738,24.281-11.687,39.688c1.092,8.241,2.449,16.996,4.287,27.55c1.87,10.853,3.727,25.168,1.43,39.667
	l-1.702,10.607c-1.414,8.752-2.885,17.803-4.067,26.729c-1.96,14.744,1.551,27.526,10.435,38.003
	c4.499,5.301,9.792,11.381,15.647,16.481c17.711,15.442,30.811,33.325,40.037,54.681c3.313,7.644,7.652,14.896,11.849,21.594
	c6.29,10.024,15.127,16.488,26.263,19.211c9.39,2.295,18.731,4.032,27.773,5.153c21.187,2.635,37.794,7.747,52.269,16.082
	c8.01,4.622,16.591,8.776,24.01,12.307c15.291,7.271,30.881,7.236,46.245-0.092c7.907-3.77,14.9-7.338,21.379-10.91
	c15.897-8.782,28.892-13.546,42.13-15.46c7.626-1.107,15.243-2.267,22.864-3.426l7.489-1.142
	c18.978-2.884,32.341-12.356,40.847-28.971l2.281-4.384c2.284-4.36,4.641-8.867,6.632-13.407
	c8.012-18.262,19.363-33.896,34.706-47.812c6.366-5.748,12.814-12.492,19.727-20.61c7.603-8.943,11.131-19.421,10.187-30.285
	c-1.038-11.896-2.843-23.923-4.646-35.146c-1.96-12.268-3.487-25.459-1.389-38.83c0.632-4.048,1.303-8.092,1.965-12.135
	c1.332-8.077,2.706-16.424,3.805-24.653c2.065-15.475-1.256-28.109-10.17-38.621c-4.109-4.846-8.652-9.521-13.051-14.04
	l-2.221-2.286c-4.788-4.953-9.635-9.854-14.479-14.755l-6.463-6.549l0.343-0.348l-0.369,0.301
	c-6.703-8.188-11.508-17.598-16.148-26.699l-1.37-2.688c-4.584-8.97-9.326-18.246-14.69-26.888
	c-5.82-9.369-14.674-15.692-25.604-18.293c-9.337-2.221-19.421-4.053-29.979-5.457c-19.549-2.6-34.987-7.372-48.588-15.021
	c-8.297-4.665-17.116-9.179-26.22-13.42C250.76,5.653,243.3,3.918,235.959,3.918z"
			/>
			<AnimatedPath
				opacity={fadeIn}
				style={{
					transform: [
						{
							translateY: falling.interpolate({
								inputRange: [ 0, decompositionValue ],
								outputRange: [ -height, ancre ]
							})
						}
					]
				}}
				fill="#FFF"
				d={dState}
			/>
		</Svg>
	);
};

export default LogoAnimation;

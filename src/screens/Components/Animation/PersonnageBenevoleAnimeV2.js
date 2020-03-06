import React, { useState, useEffect } from "react";
import { Animated } from "react-native";
import Svg, {
	LinearGradient,
	Stop,
	Path,
	G,
	Defs,
	ClipPath,
	Use,
	RadialGradient,
	Circle
} from "react-native-svg";
import _D from "./TabMouvement";

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const PersonnageBenevole2 = props => {
	const width = props.style && props.style.width ? props.style.width : 424.57;
	const height =
		props.style && props.style.height ? props.style.height : 426.838;
	const style = props.style ? { ...props.style } : {};
	const [flyingUp, setFlyingUp] = useState(new Animated.Value(0));
	const flyingDuration = 500;

	const [dState, setDState] = useState(_D[0]);
	const battementDuration = 500;
	const decompositionValue = 31;

	let newBattement = false;
	const flyingIteration = evolution => {
		if (evolution <= decompositionValue) {
			setTimeout(() => {
				setDState(_D[evolution]);
				flyingIteration(evolution + 1);
			}, battementDuration / decompositionValue);
		} else {
			newBattement = true;
		}
		if (newBattement) {
			newBattement = false;
			flyingIteration(0);
		}
	};

	const flyingY = (val, duration) => {
		let translation = 0;
		const nextVal = val ? 0 : 1;
		if (val === 1) {
			translation = 30;
		}
		Animated.timing(flyingUp, {
			useNativeDriver: true,
			toValue: translation,
			duration: duration * 2
		}).start(() => flyingY(nextVal, duration));
	};

	useEffect(() => {
		flyingY(1, flyingDuration);
		flyingIteration(1);
	}, []);

	return (
		<AnimatedSvg
			width={width}
			height={height}
			viewBox={`0 0 424.57 426.838`}
			preserveAspectRatio="xMinYMin slice"
			{...style}
			style={{
				transform: [{ translateY: flyingUp }]
			}}
		>
			<AnimatedPath
				transform="translate(70, 85) scale(0.6, 0.51)"
				fill="#FFF"
				d={dState}
			/>
			<LinearGradient
				id="prefix__a"
				gradientUnits="userSpaceOnUse"
				x1={160.011}
				y1={648.025}
				x2={172.758}
				y2={648.025}
				gradientTransform="matrix(1 0 0 1 -0.1348 -518.8008)"
			>
				<Stop offset={0} stopColor="#fee3db" />
				<Stop offset={1} stopColor="#fcc3ba" />
			</LinearGradient>
			<G>
				<Path
					fill="url(#prefix__a)"
					d="M168.321,122.12c0,0-5.604-4.416-7.92-1.717c-2.311,2.698,3.547,18.105,7.017,18.491
	c3.472,0.385,5.206-3.703,5.206-3.703"
				/>
				<LinearGradient
					id="prefix__b"
					gradientUnits="userSpaceOnUse"
					x1={-392.21}
					y1={-104.367}
					x2={-388.33}
					y2={-104.367}
					gradientTransform="matrix(-1 0 0 -1 -170.8345 206.0474)"
				>
					<Stop offset={0.049} stopColor="#382514" />
					<Stop offset={1} stopColor="#61493d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__b)"
					d="M218.239,313.121c-0.556-0.268-0.708-0.678-0.737-0.975c-0.146-1.485,2.584-3.624,3.133-4.038
	l0.741-0.559l-0.085,0.925c-0.072,0.802-0.531,4.803-2.406,4.803c-0.001,0-0.001,0-0.001,0
	C218.673,313.28,218.456,313.227,218.239,313.121z M218.32,312.067c0.007,0.06,0.021,0.191,0.277,0.314
	c0.104,0.052,0.2,0.075,0.286,0.075l0,0c0.671,0,1.197-1.577,1.454-3.045C219.301,310.317,218.261,311.466,218.32,312.067z"
				/>
				<LinearGradient
					id="prefix__c"
					gradientUnits="userSpaceOnUse"
					x1={-619.252}
					y1={56.514}
					x2={-615.084}
					y2={56.514}
					gradientTransform="matrix(-0.6547 -0.3839 0.3672 -0.6263 -205.7455 107.5073)"
				>
					<Stop offset={0.049} stopColor="#382514" />
					<Stop offset={1} stopColor="#61493d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__c)"
					d="M217.169,310.39c-0.296-0.425-0.231-0.783-0.129-1.01c0.473-1.017,2.896-1.32,3.626-1.39l0.9-0.085
	l-0.528,0.733c-0.273,0.381-1.701,2.271-2.916,2.271l0,0C217.734,310.91,217.406,310.731,217.169,310.39z M217.785,309.728
	c-0.01,0.021-0.03,0.068,0.058,0.194c0.104,0.147,0.195,0.167,0.278,0.167l0,0c0.406,0,1.046-0.535,1.594-1.132
	C218.768,309.141,217.923,309.433,217.785,309.728z"
				/>
				<LinearGradient
					id="prefix__d"
					gradientUnits="userSpaceOnUse"
					x1={-412.895}
					y1={466.501}
					x2={-389.24}
					y2={466.501}
					gradientTransform="matrix(-1 0 0 1 -170.8345 -152.7471)"
				>
					<Stop offset={0} stopColor="#fdcfcb" />
					<Stop offset={1} stopColor="#fee3db" />
				</LinearGradient>
				<Path
					fill="url(#prefix__d)"
					d="M219.035,321.632c0.744-3.14,1.432-8.854,1.703-11.252c0.089-1.377,0.156-2.845,0.189-4.43
	c0.292-13.589-1.443-32.246-1.443-32.246h15.906c0,0-4.203,25.396-5.49,36.731c-0.126,2.521-0.062,6.385,0.82,11.377
	c1.457,8.252,11.867,21.18,11.319,26.658c-0.548,5.477-5.578,5.889-7.304,4.929c-3.286-1.825-8.889-13.128-12.963-19.719
	C217.7,327.092,218.076,325.671,219.035,321.632z"
				/>
				<LinearGradient
					id="prefix__e"
					gradientUnits="userSpaceOnUse"
					x1={-494.392}
					y1={461.194}
					x2={-489.851}
					y2={461.194}
					gradientTransform="matrix(-0.5139 -0.8578 -0.8578 0.5139 377.786 -315.9727)"
				>
					<Stop offset={0.049} stopColor="#382514" />
					<Stop offset={1} stopColor="#61493d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__e)"
					d="M230.205 344.712l-.587-.925 10.331-2.199.517.995z"
				/>
				<LinearGradient
					id="prefix__f"
					gradientUnits="userSpaceOnUse"
					x1={-384.344}
					y1={831.514}
					x2={-374.108}
					y2={831.514}
					gradientTransform="matrix(-1 0 0 1 -154.1147 -518.8008)"
				>
					<Stop offset={0.049} stopColor="#382514" />
					<Stop offset={1} stopColor="#61493d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__f)"
					d="M229.955 309.719l-9.962 7.873.239-1.882 9.997-7.875z"
				/>
				<LinearGradient
					id="prefix__g"
					gradientUnits="userSpaceOnUse"
					x1={-384.275}
					y1={831.821}
					x2={-374.902}
					y2={831.821}
					gradientTransform="matrix(-1 0 0 1 -154.1147 -518.8008)"
				>
					<Stop offset={0.049} stopColor="#382514" />
					<Stop offset={1} stopColor="#61493d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__g)"
					d="M229.998,316.294l0.162,1.776l-9.373-8.455l0.096-1.645L229.998,316.294z"
				/>
				<LinearGradient
					id="prefix__h"
					gradientUnits="userSpaceOnUse"
					x1={-100.714}
					y1={194.75}
					x2={-90.289}
					y2={194.75}
					gradientTransform="matrix(0.7737 -0.6336 -0.6336 -0.7737 422.3932 414.7259)"
				>
					<Stop offset={0.049} stopColor="#382514" />
					<Stop offset={1} stopColor="#61493d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__h)"
					d="M218.451 324.067l12.752-.296.474 1.352-12.505.41z"
				/>
				<LinearGradient
					id="prefix__i"
					gradientUnits="userSpaceOnUse"
					x1={-374.289}
					y1={875.978}
					x2={-365.832}
					y2={875.978}
					gradientTransform="matrix(-0.999 0.0456 0.0456 0.999 -181.951 -528.5013)"
				>
					<Stop offset={0.049} stopColor="#382514" />
					<Stop offset={1} stopColor="#61493d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__i)"
					d="M225.188 335.607l6.489-10.484-.474-1.352-7.509 11.932z"
				/>
				<LinearGradient
					id="prefix__j"
					gradientUnits="userSpaceOnUse"
					x1={-503.34}
					y1={459.124}
					x2={-496.656}
					y2={459.124}
					gradientTransform="matrix(-0.5139 -0.8578 -0.8578 0.5139 377.786 -315.9727)"
				>
					<Stop offset={0} stopColor="#ea66ae" />
					<Stop offset={1} stopColor="#e11d89" />
				</LinearGradient>
				<Path
					fill="url(#prefix__j)"
					d="M242.176,349.841c-0.368,2.229-1.598,3.104-1.598,3.104s-0.515-1.369-1.073-2.921
	c-0.753-2.101-1.188-3.515-1.188-3.515l3.402-0.878C241.72,345.631,242.547,347.615,242.176,349.841z"
				/>
				<LinearGradient
					id="prefix__k"
					gradientUnits="userSpaceOnUse"
					x1={-519.141}
					y1={100.654}
					x2={-483.318}
					y2={100.654}
					gradientTransform="matrix(-0.5139 -0.8578 -0.8578 0.5139 55.1805 -142.1954)"
				>
					<Stop offset={0.049} stopColor="#382514" />
					<Stop offset={1} stopColor="#61493d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__k)"
					d="M216.753 325.466l17.436 29.029 2.373-.206-18.454-30.702z"
				/>
				<LinearGradient
					id="prefix__l"
					gradientUnits="userSpaceOnUse"
					x1={191.485}
					y1={-104.368}
					x2={195.364}
					y2={-104.368}
					gradientTransform="matrix(1 0 0 -1 16.585 206.0474)"
				>
					<Stop offset={0.049} stopColor="#382514" />
					<Stop offset={1} stopColor="#61493d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__l)"
					d="M210.562,313.28L210.562,313.28c-1.876-0.002-2.336-4-2.408-4.804l-0.084-0.924l0.739,0.558
	c0.549,0.414,3.278,2.553,3.135,4.039c-0.031,0.297-0.182,0.705-0.736,0.973C210.991,313.227,210.773,313.28,210.562,313.28z
	 M209.109,309.412c0.256,1.468,0.783,3.046,1.453,3.046l0,0c0.087,0,0.183-0.024,0.288-0.076c0.257-0.123,0.271-0.256,0.274-0.314
	C211.183,311.466,210.145,310.317,209.109,309.412z"
				/>
				<LinearGradient
					id="prefix__m"
					gradientUnits="userSpaceOnUse"
					x1={44.204}
					y1={-350.16}
					x2={48.371}
					y2={-350.16}
					gradientTransform="matrix(0.6547 -0.3839 -0.3672 -0.6263 51.4946 107.5073)"
				>
					<Stop offset={0.049} stopColor="#382514" />
					<Stop offset={1} stopColor="#61493d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__m)"
					d="M211.325,310.91L211.325,310.91c-1.216,0-2.643-1.891-2.916-2.269l-0.53-0.736l0.901,0.085
	c0.731,0.068,3.153,0.375,3.625,1.392c0.104,0.225,0.168,0.585-0.128,1.01C212.041,310.731,211.711,310.91,211.325,310.91z
	 M209.731,308.958c0.548,0.596,1.188,1.131,1.595,1.131l0,0c0.084,0,0.175-0.021,0.277-0.167c0.089-0.126,0.066-0.173,0.058-0.194
	C211.524,309.433,210.678,309.141,209.731,308.958z"
				/>
				<LinearGradient
					id="prefix__n"
					gradientUnits="userSpaceOnUse"
					x1={170.801}
					y1={466.501}
					x2={194.456}
					y2={466.501}
					gradientTransform="matrix(1 0 0 1 16.585 -152.7471)"
				>
					<Stop offset={0} stopColor="#fdcfcb" />
					<Stop offset={1} stopColor="#fee3db" />
				</LinearGradient>
				<Path
					fill="url(#prefix__n)"
					d="M210.412,321.632c-0.745-3.14-1.433-8.854-1.703-11.252c-0.089-1.377-0.156-2.845-0.19-4.43
	c-0.292-13.589,1.442-32.246,1.442-32.246h-15.903c0,0,4.201,25.396,5.487,36.731c0.128,2.521,0.062,6.385-0.818,11.377
	c-1.456,8.252-11.867,21.18-11.319,26.658c0.548,5.477,5.576,5.889,7.304,4.929c3.286-1.825,8.89-13.128,12.962-19.719
	C211.746,327.092,211.371,325.671,210.412,321.632z"
				/>
				<LinearGradient
					id="prefix__o"
					gradientUnits="userSpaceOnUse"
					x1={-1092.546}
					y1={687.284}
					x2={-1092.546}
					y2={725.068}
					gradientTransform="matrix(-1 0 0 1 -880.5591 -518.8008)"
				>
					<Stop offset={0} stopColor="#fcc3ba" />
					<Stop offset={1} stopColor="#fee3db" />
				</LinearGradient>
				<Path
					fill="url(#prefix__o)"
					d="M201.867,168.485c0,0,0.675,14.265-0.191,19.471c-0.867,5.205-4.549,10.666-4.549,10.666
		s8.306,7.646,14.859,7.646c6.553,0,14.86-7.646,14.86-7.646s-3.681-5.459-4.549-10.666c-0.865-5.206,0.194-19.471,0.194-19.471
		H201.867z"
				/>
				<LinearGradient
					id="prefix__p"
					gradientUnits="userSpaceOnUse"
					x1={-1171.802}
					y1={642.534}
					x2={-1076.549}
					y2={642.534}
					gradientTransform="matrix(-1 0 0 1 -911.25 -518.8)"
				>
					<Stop offset={0} stopColor="#fdcfcb" />
					<Stop offset={1} stopColor="#fee3db" />
				</LinearGradient>
				<Path
					fill="url(#prefix__p)"
					d="M182.103,73.999c-21.156,11.832-16.887,19.484-15.511,45.538c0,0,1.154,24.894,13.867,37.234
	c15.522,15.064,32.143,22.195,32.143,22.195s16.328-7.131,31.85-22.195c12.712-12.341,14.709-39.974,14.709-39.974
	c2.188-6.826,4.563-30.543-16.352-42.799C230.686,66.894,195.594,66.451,182.103,73.999z"
				/>
			</G>
			<G>
				<Path
					fill="#F8C20F"
					d="M184.161,296.659c0,0,9.354-53.612,9.168-58.264c-0.291-7.229-11.414-19.114-11.414-19.114
	s-7.652,4.324-10.12,15.615c-2.312,11.854-2.894,21.979-2.603,26.894c0.289,4.914-0.067,6.938-0.067,6.938l-12.654,2.025
	c0,0-3.472-14.457,0-34.986c3.469-20.534,13.012-28.631,16.772-30.366c2.737-1.262,11.917-2.932,17.206-4.191
	c1.973-0.473,4.191-1.591,4.191-1.591l17.35,3.375l14.859-4.371c0,0,7.848,4.756,12.396,4.178s16.5-6.94,27.729-19.374
	c11.229-12.435,14.99-29.206,14.99-29.206l13.59,5.783c0,0-2.894,12.434-16.191,32.675c-13.304,20.242-36.998,27.459-36.998,27.459
	s-8.842,11.03-9.129,18.258c-0.187,4.614,10.054,58.264,10.054,58.264H184.161z"
				/>
				<Path
					fill="#FFF"
					d="M195.601 198.173l16.387 4.82-10.218 11.373-10.41-13.301zM228.374 198.173l-16.386 4.82 10.216 11.373 10.411-13.301zM281.966 154.22l1.734-6.363 6.361 1.736 13.879-8.096-8.385 18.506zM169.123 268.726l1.224 5.496-4.046.723-8.099 8.531-1.733-12.725z"
				/>
				<LinearGradient
					id="prefix__q"
					gradientUnits="userSpaceOnUse"
					x1={291.547}
					y1={668.344}
					x2={291.547}
					y2={638.902}
					gradientTransform="matrix(1 0 0 1 -0.1348 -518.8008)"
				>
					<Stop offset={0} stopColor="#fdcfcb" />
					<Stop offset={1} stopColor="#fee3db" />
				</LinearGradient>
				<Path
					fill="url(#prefix__q)"
					d="M285.135,148.21c0,0-2.369-5.775-2.813-8.294c-0.444-2.518-2.52-7.105,0-7.626
	c1.258-0.261,1.758,1.651,2.591,2.979c0.832,1.326,1.999,2.067,1.999,2.067s2.225-4.705,2.667-8.172
	c0.444-3.468,0.742-9.03,3.555-9.063c2.815-0.032,8.593,4,8.593,6.725c0,2.723-3.608,17.995-3.608,17.995l-8.093,4.723
	L285.135,148.21z"
				/>
				<LinearGradient
					id="prefix__r"
					gradientUnits="userSpaceOnUse"
					x1={166.698}
					y1={820.886}
					x2={166.698}
					y2={793.232}
					gradientTransform="matrix(1 0 0 1 -0.1348 -518.8008)"
				>
					<Stop offset={0} stopColor="#fdcfcb" />
					<Stop offset={1} stopColor="#fee3db" />
				</LinearGradient>
				<Path
					fill="url(#prefix__r)"
					d="M169.177,274.431c0,0,4.833,5.863,5.221,9.045s1.301,4.676-0.867,4.724
	c-1.178,0.021-1.483-2.144-2.313-3.423c-0.698-1.073-2.023-1.301-2.023-1.301s-2.555,5.685-2.168,9.543
	c0.386,3.855-0.722,8.674-3.615,9.062c-2.892,0.387-5.206-18.601-5.206-18.601l8.102-8.53L169.177,274.431z"
				/>
				<LinearGradient
					id="prefix__s"
					gradientUnits="userSpaceOnUse"
					x1={-194.405}
					y1={961.929}
					x2={-189.863}
					y2={961.929}
					gradientTransform="matrix(0.5139 -0.8578 0.8578 0.5139 -532.0345 -315.9727)"
				>
					<Stop offset={0.049} stopColor="#382514" />
					<Stop offset={1} stopColor="#61493d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__s)"
					d="M188.981 342.583l.516-.995 10.331 2.199-.586.925z"
				/>
				<LinearGradient
					id="prefix__t"
					gradientUnits="userSpaceOnUse"
					x1={199.352}
					y1={831.514}
					x2={209.589}
					y2={831.514}
					gradientTransform="matrix(1 0 0 1 -0.1348 -518.8008)"
				>
					<Stop offset={0.049} stopColor="#382514" />
					<Stop offset={1} stopColor="#61493d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__t)"
					d="M199.218 307.835l9.995 7.875.241 1.882-9.963-7.873z"
				/>
				<LinearGradient
					id="prefix__u"
					gradientUnits="userSpaceOnUse"
					x1={199.42}
					y1={831.822}
					x2={208.793}
					y2={831.822}
					gradientTransform="matrix(1 0 0 1 -0.1348 -518.8008)"
				>
					<Stop offset={0.049} stopColor="#382514" />
					<Stop offset={1} stopColor="#61493d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__u)"
					d="M208.563,307.972l0.095,1.645l-9.373,8.455l0.162-1.776L208.563,307.972z"
				/>
				<LinearGradient
					id="prefix__v"
					gradientUnits="userSpaceOnUse"
					x1={-552.293}
					y1={564.558}
					x2={-541.869}
					y2={564.558}
					gradientTransform="matrix(-0.7737 -0.6336 0.6336 -0.7737 -576.6442 414.7259)"
				>
					<Stop offset={0.049} stopColor="#382514" />
					<Stop offset={1} stopColor="#61493d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__v)"
					d="M210.275 325.533l-12.508-.41.477-1.352 12.752.296z"
				/>
				<LinearGradient
					id="prefix__w"
					gradientUnits="userSpaceOnUse"
					x1={208.777}
					y1={849.362}
					x2={217.235}
					y2={849.362}
					gradientTransform="matrix(0.999 0.0456 -0.0456 0.999 27.704 -528.5013)"
				>
					<Stop offset={0.049} stopColor="#382514" />
					<Stop offset={1} stopColor="#61493d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__w)"
					d="M205.752 335.703l-7.508-11.932-.477 1.352 6.492 10.484z"
				/>
				<LinearGradient
					id="prefix__x"
					gradientUnits="userSpaceOnUse"
					x1={-203.353}
					y1={959.859}
					x2={-196.671}
					y2={959.859}
					gradientTransform="matrix(0.5139 -0.8578 0.8578 0.5139 -532.0345 -315.9727)"
				>
					<Stop offset={0} stopColor="#ea66ae" />
					<Stop offset={1} stopColor="#e11d89" />
				</LinearGradient>
				<Path
					fill="url(#prefix__x)"
					d="M187.725,345.631l3.4,0.878c0,0-0.435,1.414-1.187,3.515c-0.559,1.552-1.073,2.921-1.073,2.921
	s-1.227-0.875-1.598-3.104C186.899,347.615,187.725,345.631,187.725,345.631z"
				/>
				<LinearGradient
					id="prefix__y"
					gradientUnits="userSpaceOnUse"
					x1={224.859}
					y1={626.324}
					x2={257.665}
					y2={628.279}
					gradientTransform="matrix(1 0 0 1 -0.1348 -518.8008)"
				>
					<Stop offset={0.084} stopColor="#dba399" />
					<Stop offset={1} stopColor="#b3857d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__y)"
					d="M225.545,108.243c0,0,0.117-0.048,0.343-0.136c0.223-0.083,0.552-0.206,0.969-0.359
		c0.832-0.302,2.019-0.695,3.454-1.111c1.438-0.414,3.13-0.85,4.975-1.188c0.922-0.164,1.873-0.334,2.854-0.436
		c0.976-0.127,1.979-0.185,2.979-0.229l1.504-0.007c0.499,0.03,0.997,0.062,1.488,0.092c0.493,0.021,0.981,0.13,1.46,0.19
		c0.484,0.055,0.975,0.177,1.399,0.277c0.889,0.226,1.75,0.365,2.568,0.639c0.812,0.275,1.599,0.447,2.273,0.762
		c0.687,0.28,1.313,0.527,1.836,0.84c0.539,0.263,0.964,0.578,1.312,0.828c0.331,0.273,0.585,0.5,0.723,0.686
		c0.148,0.176,0.202,0.287,0.202,0.287s-0.064-0.104-0.229-0.262c-0.153-0.167-0.429-0.365-0.777-0.596
		c-0.369-0.209-0.805-0.47-1.361-0.672c-0.528-0.249-1.173-0.424-1.865-0.625c-0.682-0.236-1.471-0.32-2.266-0.502
		c-0.797-0.18-1.698-0.233-2.599-0.362l-0.686-0.084c-0.193-0.03-0.442-0.023-0.662-0.04c-0.457-0.007-0.912-0.062-1.378-0.032
		c-0.465,0.021-0.936,0.042-1.4,0.062l-1.41,0.155c-0.937,0.142-1.871,0.295-2.781,0.514c-0.913,0.191-1.806,0.449-2.655,0.697
		c-1.712,0.504-3.275,1.089-4.598,1.626c-1.32,0.538-2.402,1.028-3.146,1.391c-0.364,0.182-0.651,0.323-0.847,0.42
		c-0.191,0.102-0.296,0.154-0.296,0.154l-0.021,0.01c-0.804,0.42-1.802,0.106-2.218-0.699c-0.421-0.808-0.109-1.802,0.701-2.222
		C225.437,108.288,225.491,108.263,225.545,108.243z"
				/>
				<LinearGradient
					id="prefix__z"
					gradientUnits="userSpaceOnUse"
					x1={201.988}
					y1={626.327}
					x2={169.182}
					y2={628.282}
					gradientTransform="matrix(1 0 0 1 -0.1348 -518.8008)"
				>
					<Stop offset={0.084} stopColor="#dba399" />
					<Stop offset={1} stopColor="#b3857d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__z)"
					d="M199.649,111.225c0,0-0.104-0.053-0.297-0.154c-0.195-0.096-0.481-0.239-0.848-0.42
		c-0.74-0.36-1.822-0.853-3.145-1.391c-1.323-0.537-2.887-1.122-4.594-1.626c-0.855-0.248-1.747-0.506-2.659-0.697
		c-0.907-0.219-1.846-0.372-2.78-0.514l-1.409-0.155c-0.473-0.021-0.938-0.042-1.401-0.062c-0.469-0.029-0.922,0.024-1.378,0.035
		c-0.223,0.014-0.473,0.007-0.663,0.037l-0.687,0.084c-0.896,0.13-1.803,0.183-2.598,0.362c-0.798,0.184-1.582,0.268-2.264,0.503
		c-0.693,0.202-1.338,0.376-1.867,0.625c-0.558,0.201-0.993,0.461-1.362,0.671c-0.348,0.229-0.624,0.429-0.776,0.595
		c-0.164,0.156-0.229,0.262-0.229,0.262s0.054-0.111,0.203-0.287c0.138-0.185,0.391-0.412,0.724-0.685
		c0.348-0.25,0.771-0.566,1.312-0.829c0.521-0.312,1.149-0.56,1.835-0.839c0.677-0.315,1.465-0.486,2.273-0.762
		c0.819-0.273,1.677-0.413,2.569-0.639c0.43-0.102,0.916-0.223,1.396-0.278c0.479-0.061,0.969-0.169,1.461-0.19
		c0.494-0.031,0.992-0.062,1.49-0.092l1.502,0.007c0.999,0.045,2.004,0.102,2.979,0.229c0.98,0.102,1.935,0.271,2.854,0.437
		c1.846,0.338,3.537,0.773,4.974,1.188c1.438,0.415,2.626,0.809,3.453,1.111c0.418,0.154,0.746,0.276,0.972,0.359
		c0.222,0.087,0.342,0.135,0.342,0.135c0.845,0.333,1.26,1.289,0.929,2.136c-0.333,0.845-1.288,1.261-2.134,0.929
		c-0.055-0.021-0.105-0.045-0.156-0.071L199.649,111.225z"
				/>
				<LinearGradient
					id="prefix__A"
					gradientUnits="userSpaceOnUse"
					x1={209.229}
					y1={661.897}
					x2={219.93}
					y2={661.897}
					gradientTransform="matrix(1 0 0 1 -0.1348 -518.8008)"
				>
					<Stop offset={0.084} stopColor="#dba399" />
					<Stop offset={1} stopColor="#b3857d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__A)"
					d="M209.094,141.01c0,0,3.181,1.644,5.351,1.644c2.168,0,5.351-1.644,5.351-1.644
	s-1.733,4.174-5.351,4.174C210.83,145.184,209.094,141.01,209.094,141.01z"
				/>
				<LinearGradient
					id="prefix__B"
					gradientUnits="userSpaceOnUse"
					x1={264.2}
					y1={623.584}
					x2={154.897}
					y2={623.584}
					gradientTransform="matrix(1 0 0 1 -0.1348 -518.8008)"
				>
					<Stop offset={0.084} stopColor="#dba399" />
					<Stop offset={1} stopColor="#b3857d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__B)"
					d="M245.305,73.411c0,0-17.917-22.262-59.816-9.472c-34.782,16.159-30.565,58.24-30.565,58.24
	s9.866-11.526,38.781-24.828c15.61-7.395,35.604-10.133,35.604-10.133l11.047-8.216c0,0,7.241-1.511,16.065,16.979
	c8.74,18.309-6.267,53.609-6.267,53.609s20.476-37.737,11.744-61.278C255.6,71.335,245.305,73.411,245.305,73.411z"
				/>
				<LinearGradient
					id="prefix__C"
					gradientUnits="userSpaceOnUse"
					x1={-1222.496}
					y1={648.045}
					x2={-1210.908}
					y2={648.045}
					gradientTransform="matrix(-1 0 0 1 -956.2661 -518.8008)"
				>
					<Stop offset={0} stopColor="#fee3db" />
					<Stop offset={1} stopColor="#fcc3ba" />
				</LinearGradient>
				<Path
					fill="url(#prefix__C)"
					d="M257.517,122.275c0,0,5.872-4.569,8.186-1.871c2.314,2.698-3.543,18.105-7.012,18.491
	c-3.471,0.385-4.049-1.897-4.049-1.897"
				/>
				<LinearGradient
					id="prefix__D"
					gradientUnits="userSpaceOnUse"
					x1={178.512}
					y1={687.971}
					x2={184.554}
					y2={687.971}
					gradientTransform="matrix(1 0 0 1 -0.1348 -518.8008)"
				>
					<Stop offset={0} stopColor="#b3857d" />
					<Stop offset={0.875} stopColor="#b3857d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__D)"
					d="M179.115 162.874l-.738 2.374 4.302 10.219 1.741-2.375z"
				/>
				<LinearGradient
					id="prefix__E"
					gradientUnits="userSpaceOnUse"
					x1={174.951}
					y1={688.955}
					x2={188.781}
					y2={688.955}
					gradientTransform="matrix(1 0 0 1 -0.1348 -518.8008)"
				>
					<Stop offset={0} stopColor="#b3857d" />
					<Stop offset={0.875} stopColor="#b3857d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__E)"
					d="M176.024 170.934l12.622-3.719-1.763 2.472-12.067 3.408z"
				/>
				<LinearGradient
					id="prefix__F"
					gradientUnits="userSpaceOnUse"
					x1={190.179}
					y1={697.883}
					x2={145.617}
					y2={697.883}
					gradientTransform="matrix(1 0 0 1 -0.1348 -518.8008)"
				>
					<Stop offset={0.084} stopColor="#dba399" />
					<Stop offset={1} stopColor="#b3857d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__F)"
					d="M180.461,156.77c0,0-1.434,10.752-6.929,18.271c-5.497,7.519-15.329,13.656-15.329,13.656
		l-12.721-1.928l5.781,9.67l3.666-1.734l-2.8,2.748l2.271,3.941l6.373-9.387c0,0,12.65-4.253,18.339-11.765
		c5.691-7.513,10.933-15.008,10.933-15.008L180.461,156.77z"
				/>
				<Path d="M158.202 188.697l1.149-.755 2.033 3.844-.61.218-.492.724z" />
				<LinearGradient
					id="prefix__G"
					gradientUnits="userSpaceOnUse"
					x1={172.012}
					y1={699.55}
					x2={174.33}
					y2={699.55}
					gradientTransform="matrix(1 0 0 1 -0.1348 -518.8008)"
				>
					<Stop offset={0} stopColor="#b3857d" />
					<Stop offset={0.875} stopColor="#b3857d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__G)"
					d="M173.205 175.467l.99 9.52-1.466 1.046-.852-8.918z"
				/>
				<LinearGradient
					id="prefix__H"
					gradientUnits="userSpaceOnUse"
					x1={167.283}
					y1={698.85}
					x2={180.778}
					y2={698.85}
					gradientTransform="matrix(1 0 0 1 -0.1348 -518.8008)"
				>
					<Stop offset={0} stopColor="#b3857d" />
					<Stop offset={0.875} stopColor="#b3857d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__H)"
					d="M180.643 178.208l-1.528 2.031-11.967 1.651 1.972-1.842z"
				/>
				<LinearGradient
					id="prefix__I"
					gradientUnits="userSpaceOnUse"
					x1={163.189}
					y1={705.938}
					x2={165.838}
					y2={705.938}
					gradientTransform="matrix(1 0 0 1 -0.1348 -518.8008)"
				>
					<Stop offset={0} stopColor="#b3857d" />
					<Stop offset={0.875} stopColor="#b3857d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__I)"
					d="M165.703 183.141l-1.506 1.234-1.143 6.759 1.86-.799z"
				/>
				<LinearGradient
					id="prefix__J"
					gradientUnits="userSpaceOnUse"
					x1={160.909}
					y1={706.298}
					x2={169.912}
					y2={706.298}
					gradientTransform="matrix(1 0 0 1 -0.1348 -518.8008)"
				>
					<Stop offset={0} stopColor="#b3857d" />
					<Stop offset={0.875} stopColor="#b3857d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__J)"
					d="M160.774 186.769l6.99 2.193 2.013-1.096-7.731-1.833z"
				/>
				<G>
					<LinearGradient
						id="prefix__K"
						gradientUnits="userSpaceOnUse"
						x1={-1178.862}
						y1={697.883}
						x2={-1223.426}
						y2={697.883}
						gradientTransform="matrix(-1 0 0 1 -944.1802 -518.8008)"
					>
						<Stop offset={0.084} stopColor="#dba399" />
						<Stop offset={1} stopColor="#b3857d" />
					</LinearGradient>
					<Path
						fill="url(#prefix__K)"
						d="M244.264,156.77c0,0,1.436,10.752,6.931,18.271c5.497,7.519,15.325,13.656,15.325,13.656
		l12.725-1.928l-5.783,9.67l-3.664-1.734l2.798,2.748l-2.269,3.941l-6.372-9.387c0,0-12.652-4.253-18.343-11.765
		c-5.688-7.513-10.932-15.008-10.932-15.008L244.264,156.77z"
					/>
					<Path d="M266.521 188.697l-1.147-.755-2.031 3.844.609.218.491.724z" />
					<LinearGradient
						id="prefix__L"
						gradientUnits="userSpaceOnUse"
						x1={-1197.028}
						y1={699.55}
						x2={-1194.711}
						y2={699.55}
						gradientTransform="matrix(-1 0 0 1 -944.1802 -518.8008)"
					>
						<Stop offset={0} stopColor="#b3857d" />
						<Stop offset={0.875} stopColor="#b3857d" />
					</LinearGradient>
					<Path
						fill="url(#prefix__L)"
						d="M251.52 175.467l-.989 9.52 1.466 1.046.85-8.918z"
					/>
					<LinearGradient
						id="prefix__M"
						gradientUnits="userSpaceOnUse"
						x1={-1201.757}
						y1={698.85}
						x2={-1188.263}
						y2={698.85}
						gradientTransform="matrix(-1 0 0 1 -944.1802 -518.8008)"
					>
						<Stop offset={0} stopColor="#b3857d" />
						<Stop offset={0.875} stopColor="#b3857d" />
					</LinearGradient>
					<Path
						fill="url(#prefix__M)"
						d="M244.083 178.208l1.526 2.031 11.968 1.651-1.972-1.842z"
					/>
					<LinearGradient
						id="prefix__N"
						gradientUnits="userSpaceOnUse"
						x1={-1205.852}
						y1={705.938}
						x2={-1203.203}
						y2={705.938}
						gradientTransform="matrix(-1 0 0 1 -944.1802 -518.8008)"
					>
						<Stop offset={0} stopColor="#b3857d" />
						<Stop offset={0.875} stopColor="#b3857d" />
					</LinearGradient>
					<Path
						fill="url(#prefix__N)"
						d="M259.023 183.141l1.506 1.234 1.143 6.759-1.86-.799z"
					/>
					<LinearGradient
						id="prefix__O"
						gradientUnits="userSpaceOnUse"
						x1={-1208.132}
						y1={706.298}
						x2={-1199.128}
						y2={706.298}
						gradientTransform="matrix(-1 0 0 1 -944.1802 -518.8008)"
					>
						<Stop offset={0} stopColor="#b3857d" />
						<Stop offset={0.875} stopColor="#b3857d" />
					</LinearGradient>
					<Path
						fill="url(#prefix__O)"
						d="M263.952 186.769l-6.99 2.193-2.014-1.096 7.731-1.833z"
					/>
				</G>
				<G>
					<LinearGradient
						id="prefix__P"
						gradientUnits="userSpaceOnUse"
						x1={176.628}
						y1={632.335}
						x2={194.799}
						y2={632.335}
						gradientTransform="matrix(1 0 0 1 -0.1348 -518.8008)"
					>
						<Stop offset={0.084} stopColor="#dba399" />
						<Stop offset={1} stopColor="#b3857d" />
					</LinearGradient>
					<Path
						fill="url(#prefix__P)"
						d="M176.903,116.198c0,0,0.204-0.217,0.581-0.568c0.385-0.345,0.929-0.851,1.631-1.395
		c1.412-1.062,3.365-2.497,5.76-3.148c0.589-0.161,1.239-0.241,1.851-0.203c0.579,0.026,1.144,0.04,1.712,0.128
		c1.129,0.11,2.132,0.364,3,0.568c0.867,0.197,1.565,0.46,2.056,0.618c0.488,0.174,0.76,0.295,0.76,0.295s-1.165-0.206-2.905-0.444
		c-0.866-0.126-1.896-0.229-2.961-0.299c-0.53-0.052-1.11-0.042-1.688-0.067c-0.544-0.027-1.073,0.062-1.62,0.191
		c-1.086,0.279-2.143,0.763-3.108,1.255c-0.968,0.495-1.854,1.004-2.596,1.474C177.878,115.525,176.903,116.198,176.903,116.198z"
					/>
				</G>
				<G>
					<LinearGradient
						id="prefix__Q"
						gradientUnits="userSpaceOnUse"
						x1={248.694}
						y1={632.336}
						x2={230.524}
						y2={632.336}
						gradientTransform="matrix(1 0 0 1 -0.1348 -518.8008)"
					>
						<Stop offset={0.084} stopColor="#dba399" />
						<Stop offset={1} stopColor="#b3857d" />
					</LinearGradient>
					<Path
						fill="url(#prefix__Q)"
						d="M248.149,116.198c0,0-0.978-0.673-2.471-1.595c-0.742-0.47-1.629-0.979-2.597-1.474
		c-0.966-0.492-2.021-0.976-3.106-1.255c-0.548-0.13-1.076-0.221-1.621-0.191c-0.576,0.024-1.157,0.015-1.687,0.067
		c-1.068,0.07-2.098,0.173-2.964,0.299c-1.738,0.239-2.904,0.444-2.904,0.444s0.271-0.121,0.759-0.294
		c0.49-0.158,1.188-0.422,2.056-0.619c0.868-0.203,1.871-0.458,3.003-0.568c0.567-0.089,1.128-0.101,1.711-0.128
		c0.613-0.038,1.261,0.042,1.852,0.203c2.394,0.651,4.345,2.086,5.757,3.148c0.707,0.543,1.251,1.049,1.633,1.395
		C247.947,115.981,248.149,116.198,248.149,116.198z"
					/>
				</G>
				<G>
					<Path
						fill="#FFF"
						d="M177.667,121.92c0,0,6.488-5.177,11.845-4.812c5.359,0.363,12.562,5.814,12.562,5.814
		s-4.418,3.242-11.845,2.953C182.799,125.587,177.667,121.92,177.667,121.92z"
					/>
					<Defs>
						<Path
							id="prefix__R"
							d="M177.756,121.934c0,0,6.464-5.157,11.803-4.795c5.34,0.363,12.515,5.794,12.515,5.794
						s-4.401,3.23-11.801,2.943C182.869,125.589,177.756,121.934,177.756,121.934z"
						/>
					</Defs>
					<ClipPath id="prefix__S">
						<Use xlinkHref="#prefix__R" overflow="visible" />
					</ClipPath>
					<G clipPath="url(#prefix__S)">
						<RadialGradient
							id="prefix__T"
							cx={172.579}
							cy={274.277}
							r={5.393}
							gradientTransform="matrix(1 0 0 1 16.585 -152.7471)"
							gradientUnits="userSpaceOnUse"
						>
							<Stop offset={0} stopColor="#afba5b" />
							<Stop offset={0.974} stopColor="#61acb4" />
						</RadialGradient>
						<Circle
							fill="url(#prefix__T)"
							cx={189.164}
							cy={121.529}
							r={5.393}
						/>
						<G>
							<Circle cx={189.164} cy={121.529} r={1.924} />
						</G>
					</G>
					<Path
						d="M173.166,119.445c0,0,2.072,2.06,4.353,2.493c0.601,0.114,1.057-0.211,2.151-0.827c4.383-2.396,8.952-4.759,16.569-1.711
		c2.396,0.958,5.831,3.223,5.831,3.223s-4.649-6.397-12.747-6.782c-4.543,0-6.914,1.142-11.64,3.605
		C176.298,120.169,173.166,119.445,173.166,119.445z"
					/>
				</G>
				<G>
					<Path
						fill="#FFF"
						d="M235.403,125.876c-7.428,0.29-11.846-2.953-11.846-2.953s7.201-5.451,12.562-5.814
		c5.357-0.364,11.844,4.812,11.844,4.812S242.832,125.587,235.403,125.876z"
					/>
					<Defs>
						<Path
							id="prefix__U"
							d="M235.359,125.876c-7.397,0.287-11.802-2.943-11.802-2.943s7.177-5.431,12.517-5.794
						c5.337-0.362,11.802,4.795,11.802,4.795S242.763,125.589,235.359,125.876z"
						/>
					</Defs>
					<ClipPath id="prefix__V">
						<Use xlinkHref="#prefix__U" overflow="visible" />
					</ClipPath>
					<G clipPath="url(#prefix__V)">
						<RadialGradient
							id="prefix__W"
							cx={-429.786}
							cy={274.277}
							r={5.393}
							gradientTransform="matrix(-1 0 0 1 -193.3169 -152.7471)"
							gradientUnits="userSpaceOnUse"
						>
							<Stop offset={0} stopColor="#afba5b" />
							<Stop offset={0.974} stopColor="#61acb4" />
						</RadialGradient>
						<Circle
							fill="url(#prefix__W)"
							cx={236.469}
							cy={121.529}
							r={5.393}
						/>
						<G>
							<Circle cx={236.469} cy={121.529} r={1.924} />
						</G>
					</G>
					<Path
						d="M247.947,119.445c-4.724-2.465-7.096-3.605-11.64-3.605c-8.099,0.385-12.747,6.782-12.747,6.782s3.436-2.264,5.832-3.223
		c7.615-3.046,12.188-0.685,16.568,1.711c1.097,0.616,1.554,0.941,2.152,0.827c2.28-0.434,4.352-2.493,4.352-2.493
		S249.333,120.169,247.947,119.445z"
					/>
				</G>
				<LinearGradient
					id="prefix__X"
					gradientUnits="userSpaceOnUse"
					x1={-219.154}
					y1={601.39}
					x2={-183.331}
					y2={601.39}
					gradientTransform="matrix(0.5139 -0.8578 0.8578 0.5139 -209.429 -142.1954)"
				>
					<Stop offset={0.049} stopColor="#382514" />
					<Stop offset={1} stopColor="#61493d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__X)"
					d="M212.693 325.466l-17.436 29.029-2.372-.206 18.454-30.702z"
				/>
				<G>
					<Path
						fill="#FFF"
						d="M204.176,152.78v5.297c0,0,2.383,1.725,11.073,0.595c5.826-0.757,8.521-3.615,8.521-3.615
		s-0.486,1.874,0.374-1.438c0.859-3.312,0.939-3.718,0.939-3.718L204.176,152.78z"
					/>
					<LinearGradient
						id="prefix__Y"
						gradientUnits="userSpaceOnUse"
						x1={-209.975}
						y1={-1410.797}
						x2={-183.126}
						y2={-1410.797}
						gradientTransform="matrix(1 0 0 -1 409.9019 -1258.7476)"
					>
						<Stop offset={0.084} stopColor="#dba399" />
						<Stop offset={1} stopColor="#b3857d" />
					</LinearGradient>
					<Path
						fill="url(#prefix__Y)"
						d="M226.776,149.593c0,0-8.647,1.365-15.775,1.517c-7.128,0.152-11.222,0-11.07,1.667
		c0.154,1.667,5.612,2.428,14.716,0.91C223.74,152.172,226.776,149.593,226.776,149.593z"
					/>
				</G>
				<G>
					<LinearGradient
						id="prefix__Z"
						gradientUnits="userSpaceOnUse"
						x1={203.147}
						y1={679.412}
						x2={225.924}
						y2={679.412}
						gradientTransform="matrix(1 0 0 1 -0.1348 -518.8008)"
					>
						<Stop offset={0.084} stopColor="#dba399" />
						<Stop offset={1} stopColor="#b3857d" />
					</LinearGradient>
					<Path
						fill="url(#prefix__Z)"
						d="M204.609,160.125c0,0,0.285,0.31,0.814,0.625c0.285,0.142,0.585,0.324,0.983,0.444
		c0.383,0.138,0.818,0.257,1.298,0.354c0.481,0.099,1.001,0.189,1.57,0.25c0.56,0.071,1.164,0.121,1.795,0.168l0.407,0.03
		c0.153,0,0.402,0.026,0.479,0.013c0.177-0.009,0.493-0.028,0.775-0.084c0.585-0.081,1.208-0.257,1.84-0.449
		c2.533-0.825,5.095-2.137,6.919-3.221c0.917-0.543,1.642-1.067,2.082-1.498c0.463-0.421,0.572-0.803,0.572-0.803
		s0.026,0.09,0.045,0.278c0,0.184-0.018,0.479-0.129,0.812c-0.208,0.684-0.722,1.553-1.459,2.472c-1.5,1.817-3.938,3.81-6.96,4.992
		c-0.758,0.298-1.563,0.521-2.41,0.662c-0.436,0.064-0.838,0.1-1.37,0.097c-0.283,0.002-0.386-0.021-0.58-0.028
		c-0.322-0.041-0.414-0.069-0.629-0.105c-0.37-0.06-0.731-0.136-1.084-0.247c-0.354-0.088-0.698-0.203-1.028-0.34
		c-0.662-0.241-1.268-0.583-1.794-0.937c-0.521-0.369-0.962-0.767-1.285-1.188c-0.324-0.413-0.56-0.813-0.681-1.167
		c-0.138-0.346-0.175-0.642-0.185-0.835C204.583,160.227,204.609,160.125,204.609,160.125z"
					/>
				</G>
			</G>
		</AnimatedSvg>
	);
};

export default PersonnageBenevole2;

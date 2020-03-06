import React from 'react';
import Svg, { LinearGradient, Stop, Path, G } from 'react-native-svg';

function SvgComponent(props) {
	const width = props.style && props.style.width ? props.style.width : 200;
	const height = props.style && props.style.height ? props.style.height : 200;
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 200 200"
			preserveAspectRatio="xMinYMin meet"
			{...props}
		>
			<LinearGradient
				id="prefix__a"
				gradientUnits="userSpaceOnUse"
				x1={-1.931}
				y1={278.574}
				x2={-1.931}
				y2={315.45}
				gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
			>
				<Stop offset={0} stopColor="#b19769" />
				<Stop offset={0.513} stopColor="#f3d29a" />
				<Stop offset={0.622} stopColor="#ebcb94" />
				<Stop offset={0.789} stopColor="#d6b884" />
				<Stop offset={0.993} stopColor="#b2986a" />
				<Stop offset={1} stopColor="#b19769" />
			</LinearGradient>
			<Path
				fill="url(#prefix__a)"
				d="M119.475 116.646v-12.617h-12.539v12.617h-3.639V88.428h3.639v11.821h12.539V88.428h3.256v28.218h-3.256z"
			/>
			<LinearGradient
				id="prefix__b"
				gradientUnits="userSpaceOnUse"
				x1={-12.649}
				y1={297.188}
				x2={8.786}
				y2={297.188}
				gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
			>
				<Stop offset={0} stopColor="#b19769" />
				<Stop offset={0.513} stopColor="#f3d29a" />
				<Stop offset={0.622} stopColor="#ebcb94" />
				<Stop offset={0.789} stopColor="#d6b884" />
				<Stop offset={0.993} stopColor="#b2986a" />
				<Stop offset={1} stopColor="#b19769" />
			</LinearGradient>
			<Path
				fill="url(#prefix__b)"
				d="M122.73 88.428v28.218h-3.256v-12.617h-12.539v12.617h-3.64V88.428h3.64v11.821h12.539V88.428h3.256m1-1h-5.256v11.821h-10.539V87.428H102.295v30.218H107.935v-12.617h10.539v12.617h5.256V87.428z"
			/>
			<G opacity={0.4}>
				<LinearGradient
					id="prefix__c"
					gradientUnits="userSpaceOnUse"
					x1={18.931}
					y1={265.758}
					x2={18.931}
					y2={331.758}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__c)"
					d="M131.617 125.637a8.297 8.297 0 002.609 5.555 8.28 8.28 0 001.907-5.83 8.278 8.278 0 00-2.608-5.553 8.31 8.31 0 00-1.908 5.828z"
				/>
				<LinearGradient
					id="prefix__d"
					gradientUnits="userSpaceOnUse"
					x1={27.1}
					y1={265.757}
					x2={27.1}
					y2={331.745}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__d)"
					d="M142.873 132.643a8.281 8.281 0 01-6.135-.014 8.31 8.31 0 0110.614-4.181 8.309 8.309 0 01-4.479 4.195z"
				/>
				<LinearGradient
					id="prefix__e"
					gradientUnits="userSpaceOnUse"
					x1={22.811}
					y1={265.756}
					x2={22.811}
					y2={331.762}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__e)"
					d="M135.586 117.01a8.291 8.291 0 003.791 4.826 8.291 8.291 0 00.549-6.111 8.305 8.305 0 00-3.791-4.826 8.282 8.282 0 00-.549 6.111z"
				/>
				<LinearGradient
					id="prefix__f"
					gradientUnits="userSpaceOnUse"
					x1={31.905}
					y1={265.757}
					x2={31.905}
					y2={331.757}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__f)"
					d="M148.131 121.303a8.296 8.296 0 01-5.982 1.367 8.298 8.298 0 013.416-5.098 8.294 8.294 0 015.986-1.363 8.326 8.326 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__g"
					gradientUnits="userSpaceOnUse"
					x1={24.536}
					y1={265.76}
					x2={24.536}
					y2={331.753}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__g)"
					d="M137.512 107.711a8.302 8.302 0 004.779 3.85 8.293 8.293 0 00-.842-6.078 8.288 8.288 0 00-4.779-3.85 8.306 8.306 0 00.842 6.078z"
				/>
				<LinearGradient
					id="prefix__h"
					gradientUnits="userSpaceOnUse"
					x1={34.086}
					y1={265.76}
					x2={34.086}
					y2={331.752}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__h)"
					d="M150.699 109.072a8.307 8.307 0 01-5.521 2.678 8.294 8.294 0 012.184-5.736 8.302 8.302 0 015.523-2.674 8.303 8.303 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__i"
					gradientUnits="userSpaceOnUse"
					x1={24.02}
					y1={265.764}
					x2={24.02}
					y2={331.752}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__i)"
					d="M137.297 98.217a8.304 8.304 0 005.521 2.676 8.287 8.287 0 00-2.187-5.733 8.288 8.288 0 00-5.521-2.674 8.292 8.292 0 002.187 5.731z"
				/>
				<LinearGradient
					id="prefix__j"
					gradientUnits="userSpaceOnUse"
					x1={33.538}
					y1={265.757}
					x2={33.538}
					y2={331.757}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__j)"
					d="M150.451 96.576a8.29 8.29 0 01-4.777 3.85 8.304 8.304 0 01.838-6.078 8.3 8.3 0 014.781-3.85 8.307 8.307 0 01-.842 6.078z"
				/>
				<LinearGradient
					id="prefix__k"
					gradientUnits="userSpaceOnUse"
					x1={21.288}
					y1={265.764}
					x2={21.288}
					y2={331.754}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__k)"
					d="M134.951 89.014a8.29 8.29 0 005.982 1.365 8.311 8.311 0 00-3.42-5.096 8.281 8.281 0 00-5.982-1.363 8.274 8.274 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__l"
					gradientUnits="userSpaceOnUse"
					x1={30.285}
					y1={265.754}
					x2={30.285}
					y2={331.757}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__l)"
					d="M147.4 84.457a8.302 8.302 0 01-3.789 4.826 8.296 8.296 0 01-.553-6.113 8.301 8.301 0 013.795-4.826 8.314 8.314 0 01.547 6.113z"
				/>
				<LinearGradient
					id="prefix__m"
					gradientUnits="userSpaceOnUse"
					x1={16.48}
					y1={265.767}
					x2={16.48}
					y2={331.755}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__m)"
					d="M130.594 80.574a8.301 8.301 0 006.139-.016 8.302 8.302 0 00-4.479-4.195 8.29 8.29 0 00-6.137.018 8.284 8.284 0 004.477 4.193z"
				/>
				<LinearGradient
					id="prefix__n"
					gradientUnits="userSpaceOnUse"
					x1={24.496}
					y1={265.756}
					x2={24.496}
					y2={331.756}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__n)"
					d="M141.699 73.333a8.297 8.297 0 01-2.605 5.555 8.284 8.284 0 01-1.912-5.831 8.306 8.306 0 012.609-5.556 8.304 8.304 0 011.908 5.832z"
				/>
				<LinearGradient
					id="prefix__o"
					gradientUnits="userSpaceOnUse"
					x1={-48.063}
					y1={265.758}
					x2={-48.063}
					y2={331.758}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__o)"
					d="M69.141 125.637a8.288 8.288 0 01-2.609 5.555 8.286 8.286 0 01-1.908-5.83 8.279 8.279 0 012.609-5.553 8.305 8.305 0 011.908 5.828z"
				/>
				<LinearGradient
					id="prefix__p"
					gradientUnits="userSpaceOnUse"
					x1={-56.232}
					y1={265.757}
					x2={-56.232}
					y2={331.745}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__p)"
					d="M57.885 132.643a8.281 8.281 0 006.135-.014 8.31 8.31 0 00-10.614-4.181 8.309 8.309 0 004.479 4.195z"
				/>
				<LinearGradient
					id="prefix__q"
					gradientUnits="userSpaceOnUse"
					x1={-51.943}
					y1={265.756}
					x2={-51.943}
					y2={331.762}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__q)"
					d="M65.172 117.01a8.291 8.291 0 01-3.791 4.826 8.291 8.291 0 01-.549-6.111 8.305 8.305 0 013.791-4.826 8.291 8.291 0 01.549 6.111z"
				/>
				<LinearGradient
					id="prefix__r"
					gradientUnits="userSpaceOnUse"
					x1={-61.038}
					y1={265.757}
					x2={-61.038}
					y2={331.757}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__r)"
					d="M52.627 121.303a8.296 8.296 0 005.982 1.367 8.29 8.29 0 00-3.416-5.098 8.294 8.294 0 00-5.986-1.363 8.326 8.326 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__s"
					gradientUnits="userSpaceOnUse"
					x1={-53.669}
					y1={265.76}
					x2={-53.669}
					y2={331.753}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__s)"
					d="M63.246 107.711a8.302 8.302 0 01-4.779 3.85 8.293 8.293 0 01.842-6.078 8.288 8.288 0 014.779-3.85 8.306 8.306 0 01-.842 6.078z"
				/>
				<LinearGradient
					id="prefix__t"
					gradientUnits="userSpaceOnUse"
					x1={-63.218}
					y1={265.76}
					x2={-63.218}
					y2={331.752}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__t)"
					d="M50.059 109.072a8.307 8.307 0 005.521 2.678 8.294 8.294 0 00-2.184-5.736 8.302 8.302 0 00-5.523-2.674 8.308 8.308 0 002.186 5.732z"
				/>
				<LinearGradient
					id="prefix__u"
					gradientUnits="userSpaceOnUse"
					x1={-53.152}
					y1={265.764}
					x2={-53.152}
					y2={331.752}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__u)"
					d="M63.461 98.217a8.304 8.304 0 01-5.521 2.676 8.29 8.29 0 012.186-5.733 8.292 8.292 0 015.521-2.674 8.286 8.286 0 01-2.186 5.731z"
				/>
				<LinearGradient
					id="prefix__v"
					gradientUnits="userSpaceOnUse"
					x1={-62.67}
					y1={265.757}
					x2={-62.67}
					y2={331.757}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__v)"
					d="M50.305 96.576a8.3 8.3 0 004.779 3.85 8.304 8.304 0 00-.838-6.078 8.3 8.3 0 00-4.781-3.85 8.311 8.311 0 00.84 6.078z"
				/>
				<LinearGradient
					id="prefix__w"
					gradientUnits="userSpaceOnUse"
					x1={-50.419}
					y1={265.764}
					x2={-50.419}
					y2={331.754}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__w)"
					d="M65.807 89.014a8.29 8.29 0 01-5.982 1.365 8.303 8.303 0 013.42-5.096 8.281 8.281 0 015.982-1.363 8.274 8.274 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__x"
					gradientUnits="userSpaceOnUse"
					x1={-59.418}
					y1={265.754}
					x2={-59.418}
					y2={331.757}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__x)"
					d="M53.357 84.457a8.302 8.302 0 003.789 4.826 8.286 8.286 0 00.551-6.113 8.294 8.294 0 00-3.793-4.826 8.314 8.314 0 00-.547 6.113z"
				/>
				<LinearGradient
					id="prefix__y"
					gradientUnits="userSpaceOnUse"
					x1={-45.613}
					y1={265.767}
					x2={-45.613}
					y2={331.755}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__y)"
					d="M70.164 80.574a8.301 8.301 0 01-6.139-.016 8.3 8.3 0 014.48-4.195 8.286 8.286 0 016.135.018 8.279 8.279 0 01-4.476 4.193z"
				/>
				<LinearGradient
					id="prefix__z"
					gradientUnits="userSpaceOnUse"
					x1={-53.627}
					y1={265.756}
					x2={-53.627}
					y2={331.756}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__z)"
					d="M59.059 73.333a8.297 8.297 0 002.605 5.555 8.293 8.293 0 001.912-5.831 8.306 8.306 0 00-2.609-5.556 8.304 8.304 0 00-1.908 5.832z"
				/>
			</G>
			<G>
				<LinearGradient
					id="prefix__A"
					gradientUnits="userSpaceOnUse"
					x1={-27.472}
					y1={278.441}
					x2={-27.472}
					y2={317.969}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__A)"
					d="M91.648 99.724c1.768-1.602 2.662-3.292 2.662-5.036 0-1.927-.701-3.612-2.085-5.008-1.385-1.397-3.095-2.105-5.082-2.105-1.95 0-3.647.701-5.036 2.078-.798.76-1.447 1.948-1.984 3.632l-.142.446 4.312 1.698.178-.478c.48-1.289.801-1.788.975-1.969a2.32 2.32 0 011.696-.686c.68 0 1.24.227 1.712.693.47.465.698 1.021.698 1.699 0 .697-.25 1.3-.763 1.844-.545.577-1.041.954-1.475 1.12-.307.118-1.074.265-2.984.293l-.493.007v4.597l2.612.057c1.951.365 3.41 1.062 4.336 2.068.926 1.008 1.376 2.137 1.376 3.453 0 1.297-.445 2.369-1.36 3.279-.917.912-1.993 1.354-3.29 1.354-1.274 0-2.342-.443-3.262-1.352-.771-.771-1.262-2.17-1.461-4.158l-.064-.641-4.642 1.682.062.406c.391 2.553 1.322 4.586 2.768 6.043 1.817 1.832 4.037 2.76 6.599 2.76 2.584 0 4.813-.926 6.625-2.75 1.811-1.824 2.729-4.051 2.729-6.623 0-2.541-.893-4.791-2.674-6.709-.859-.834-1.711-1.401-2.543-1.694z"
				/>
				<LinearGradient
					id="prefix__B"
					gradientUnits="userSpaceOnUse"
					x1={-37.419}
					y1={297.188}
					x2={-17.58}
					y2={297.188}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19769" />
					<Stop offset={0.513} stopColor="#f3d29a" />
					<Stop offset={0.622} stopColor="#ebcb94" />
					<Stop offset={0.789} stopColor="#d6b884" />
					<Stop offset={0.993} stopColor="#b2986a" />
					<Stop offset={1} stopColor="#b19769" />
				</LinearGradient>
				<Path
					fill="url(#prefix__B)"
					d="M87.511 118c-2.701 0-5.041-.979-6.954-2.907-1.521-1.533-2.5-3.659-2.907-6.319l-.124-.812 5.632-2.04.128 1.279c.187 1.87.63 3.167 1.317 3.854.821.811 1.773 1.205 2.909 1.205 1.159 0 2.12-.396 2.937-1.208.816-.812 1.213-1.769 1.213-2.925 0-1.185-.407-2.203-1.244-3.115-.852-.926-2.218-1.57-4.06-1.915l-3.021-.059v-5.579l.986-.015c2.004-.029 2.634-.191 2.812-.26.25-.096.677-.346 1.291-.997.428-.453.627-.93.627-1.5 0-.545-.175-.973-.55-1.344-.379-.374-.812-.548-1.36-.548-.539 0-.967.173-1.347.544-.064.067-.35.43-.855 1.786l-.356.956-5.221-2.056.284-.892c.563-1.766 1.255-3.023 2.116-3.842 1.48-1.468 3.293-2.216 5.381-2.216 2.126 0 3.955.758 5.437 2.253 1.48 1.493 2.23 3.296 2.23 5.36 0 1.694-.765 3.332-2.276 4.878.667.345 1.338.845 2.005 1.494 1.881 2.024 2.826 4.396 2.826 7.067 0 2.707-.967 5.054-2.874 6.976-1.912 1.922-4.26 2.897-6.982 2.897zm-8.873-9.379c.375 2.447 1.259 4.388 2.629 5.767 1.719 1.733 3.82 2.612 6.244 2.612 2.445 0 4.555-.876 6.27-2.603 1.714-1.727 2.583-3.837 2.583-6.271 0-2.411-.854-4.554-2.54-6.369-.786-.762-1.58-1.293-2.343-1.562l-.792-.279.622-.563c1.658-1.502 2.498-3.071 2.498-4.666 0-1.791-.653-3.357-1.94-4.656s-2.878-1.957-4.727-1.957c-1.814 0-3.39.65-4.684 1.933-.743.708-1.349 1.828-1.859 3.429l3.403 1.34v-.001c.409-1.098.773-1.818 1.082-2.141a2.846 2.846 0 012.057-.84c.806 0 1.5.282 2.063.837.562.557.847 1.248.847 2.055 0 .83-.294 1.545-.899 2.187-.597.632-1.156 1.051-1.66 1.244-.501.193-1.563.303-3.155.326v3.615l2.123.046c2.14.394 3.692 1.142 4.693 2.229 1.015 1.105 1.508 2.346 1.508 3.792 0 1.436-.493 2.625-1.508 3.634-1.014 1.009-2.206 1.499-3.642 1.499-1.412 0-2.594-.489-3.613-1.496-.857-.857-1.397-2.358-1.607-4.464v-.002l-3.653 1.325z"
				/>
			</G>
		</Svg>
	);
}

export default SvgComponent;

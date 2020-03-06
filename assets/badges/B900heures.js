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
				x1={-40.101}
				y1={282.742}
				x2={-40.101}
				y2={308.065}
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
				fill="url(#prefix__a)"
				d="M74.872 94.417c-1.881 0-3.504.673-4.827 2-1.322 1.326-1.994 2.948-1.994 4.821 0 1.879.672 3.508 1.994 4.839 1.103 1.104 2.503 1.665 4.163 1.665.859 0 1.599-.11 2.216-.328-1.172 1.576-2.834 3.484-4.964 5.691l-.532.547h4.021l.099-.108c1.994-2.246 3.602-4.224 4.78-5.872 1.2-1.688 1.81-3.667 1.81-5.919-.008-2.259-.658-4.057-1.937-5.345-1.332-1.32-2.957-1.991-4.829-1.991zm0 3.074c1.048 0 1.919.357 2.659 1.096.74.737 1.101 1.605 1.101 2.651 0 1.049-.36 1.916-1.101 2.65-.74.738-1.611 1.096-2.659 1.096-1.042 0-1.908-.356-2.647-1.096-.74-.734-1.1-1.603-1.1-2.65 0-1.046.359-1.915 1.1-2.651.739-.738 1.605-1.096 2.647-1.096z"
			/>
			<LinearGradient
				id="prefix__b"
				gradientUnits="userSpaceOnUse"
				x1={-47.394}
				y1={295.69}
				x2={-32.807}
				y2={295.69}
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
				d="M75.17 114.152h-5.426l1.357-1.396c1.641-1.7 3.01-3.23 4.086-4.565-.31.034-.637.051-.979.051-1.796 0-3.316-.609-4.517-1.812-1.42-1.431-2.14-3.178-2.14-5.192 0-2.009.72-3.75 2.14-5.174 1.42-1.425 3.164-2.147 5.181-2.147 2.008 0 3.751.718 5.181 2.136 1.375 1.385 2.076 3.302 2.085 5.698 0 2.346-.64 4.435-1.902 6.211-1.198 1.676-2.817 3.665-4.814 5.914l-.252.276zm-3.062-1h2.619c1.947-2.195 3.527-4.139 4.694-5.771 1.139-1.602 1.717-3.496 1.717-5.628-.008-2.123-.611-3.803-1.792-4.993-1.233-1.222-2.739-1.843-4.474-1.843-1.742 0-3.247.624-4.473 1.853-1.226 1.23-1.848 2.734-1.848 4.468 0 1.741.622 3.251 1.849 4.486 1.005 1.007 2.287 1.518 3.808 1.518.797 0 1.486-.101 2.049-.3l1.546-.546-.978 1.315c-1.136 1.528-2.721 3.357-4.717 5.441zm2.764-7.668c-1.184 0-2.165-.406-3-1.242-.838-.832-1.247-1.814-1.247-3.004 0-1.188.408-2.171 1.248-3.006.836-.835 1.818-1.242 3-1.242 1.189 0 2.175.406 3.012 1.242.839.836 1.248 1.819 1.248 3.005 0 1.189-.409 2.173-1.249 3.006-.837.835-1.822 1.241-3.012 1.241zm0-7.493c-.916 0-1.645.302-2.293.95-.651.646-.954 1.376-.954 2.297 0 .909.312 1.66.952 2.296.649.648 1.377.95 2.295.95.911 0 1.665-.311 2.306-.949.651-.646.954-1.375.954-2.297 0-.907-.312-1.658-.954-2.297-.64-.64-1.395-.95-2.306-.95z"
			/>
			<LinearGradient
				id="prefix__c"
				gradientUnits="userSpaceOnUse"
				x1={-7.882}
				y1={307.056}
				x2={-7.882}
				y2={283.956}
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
				d="M111.838 96.45c-1.312-1.312-2.921-1.978-4.779-1.978-1.854 0-3.459.666-4.771 1.978s-1.978 2.917-1.978 4.771v5.531c0 1.854.666 3.458 1.978 4.771 1.312 1.312 2.917 1.978 4.771 1.978 1.858 0 3.469-.666 4.779-1.978 1.312-1.312 1.979-2.918 1.979-4.771v-5.531c-.001-1.854-.667-3.458-1.979-4.771zm-4.779 14.01c-1.031 0-1.888-.354-2.621-1.083-.731-.729-1.088-1.587-1.088-2.625v-5.531c0-1.03.355-1.884 1.088-2.613.733-.729 1.59-1.084 2.621-1.084 1.037 0 1.896.355 2.629 1.084s1.09 1.583 1.09 2.613v5.531c0 1.038-.355 1.896-1.09 2.625-.733.728-1.592 1.083-2.629 1.083z"
			/>
			<LinearGradient
				id="prefix__d"
				gradientUnits="userSpaceOnUse"
				x1={-15.136}
				y1={295.738}
				x2={-0.628}
				y2={295.738}
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
				fill="url(#prefix__d)"
				d="M107.059 114.001c-1.99 0-3.715-.715-5.125-2.124-1.41-1.411-2.125-3.135-2.125-5.125v-5.531c0-1.991.714-3.715 2.125-5.124 1.41-1.41 3.135-2.125 5.125-2.125 1.996 0 3.723.715 5.133 2.125 1.41 1.411 2.125 3.134 2.125 5.124v5.531c0 1.99-.715 3.715-2.125 5.125-1.409 1.409-3.135 2.124-5.133 2.124zm0-19.029c-1.716 0-3.202.616-4.418 1.832-1.216 1.215-1.832 2.701-1.832 4.417v5.531c0 1.715.617 3.202 1.832 4.418 1.216 1.215 2.702 1.831 4.418 1.831 1.723 0 3.212-.616 4.426-1.831 1.216-1.216 1.832-2.702 1.832-4.418v-5.531c0-1.715-.616-3.201-1.832-4.417-1.216-1.216-2.706-1.832-4.426-1.832zm0 15.988c-1.169 0-2.142-.401-2.974-1.229-.831-.828-1.235-1.803-1.235-2.979v-5.531c0-1.169.404-2.14 1.235-2.967.832-.827 1.805-1.229 2.974-1.229 1.174 0 2.149.402 2.981 1.229.833.828 1.237 1.798 1.237 2.967v5.531c0 1.179-.405 2.153-1.237 2.979-.831.828-1.807 1.229-2.981 1.229zm0-12.936c-.903 0-1.624.298-2.269.938-.642.639-.94 1.356-.94 2.258v5.531c0 .91.299 1.632.94 2.271.644.64 1.365.938 2.269.938.91 0 1.633-.298 2.276-.938.643-.638.942-1.359.942-2.271v-5.531c0-.901-.3-1.619-.942-2.258-.645-.64-1.367-.938-2.276-.938z"
			/>
			<G>
				<LinearGradient
					id="prefix__e"
					gradientUnits="userSpaceOnUse"
					x1={9.793}
					y1={283.798}
					x2={9.793}
					y2={307.453}
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
					fill="url(#prefix__e)"
					d="M128.883 113.037v-8.094h-8.045v8.094h-2.333V94.936h2.333v7.583h8.045v-7.583h2.088v18.102l-2.088-.001z"
				/>
				<LinearGradient
					id="prefix__f"
					gradientUnits="userSpaceOnUse"
					x1={2.56}
					y1={295.738}
					x2={17.026}
					y2={295.738}
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
					fill="url(#prefix__f)"
					d="M130.971 94.936v18.102h-2.088v-8.093h-8.045v8.093h-2.333V94.936h2.333v7.583h8.045v-7.583h2.088m1-1h-4.088v7.583h-6.045v-7.583h-4.333v20.102h4.333v-8.093h6.045v8.093h4.088V93.936z"
				/>
			</G>
			<G opacity={0.4}>
				<LinearGradient
					id="prefix__g"
					gradientUnits="userSpaceOnUse"
					x1={19.002}
					y1={264.433}
					x2={19.002}
					y2={330.438}
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
					d="M131.688 126.96a8.308 8.308 0 002.609 5.556 8.288 8.288 0 001.908-5.83 8.28 8.28 0 00-2.609-5.554 8.32 8.32 0 00-1.908 5.828z"
				/>
				<LinearGradient
					id="prefix__h"
					gradientUnits="userSpaceOnUse"
					x1={27.171}
					y1={264.434}
					x2={27.171}
					y2={330.421}
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
					d="M142.943 133.966a8.281 8.281 0 01-6.135-.014 8.282 8.282 0 014.478-4.199 8.306 8.306 0 016.137.019 8.313 8.313 0 01-4.48 4.194z"
				/>
				<LinearGradient
					id="prefix__i"
					gradientUnits="userSpaceOnUse"
					x1={22.882}
					y1={264.435}
					x2={22.882}
					y2={330.429}
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
					d="M135.657 118.333a8.29 8.29 0 003.79 4.826 8.287 8.287 0 00.55-6.111 8.299 8.299 0 00-3.791-4.825 8.274 8.274 0 00-.549 6.11z"
				/>
				<LinearGradient
					id="prefix__j"
					gradientUnits="userSpaceOnUse"
					x1={31.977}
					y1={264.432}
					x2={31.977}
					y2={330.441}
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
					d="M148.202 122.626a8.29 8.29 0 01-5.981 1.367 8.292 8.292 0 013.416-5.099 8.292 8.292 0 015.985-1.363 8.316 8.316 0 01-3.42 5.095z"
				/>
				<LinearGradient
					id="prefix__k"
					gradientUnits="userSpaceOnUse"
					x1={24.607}
					y1={264.435}
					x2={24.607}
					y2={330.429}
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
					d="M137.583 109.034a8.307 8.307 0 004.778 3.85 8.291 8.291 0 00-.842-6.077 8.285 8.285 0 00-4.778-3.85 8.305 8.305 0 00.842 6.077z"
				/>
				<LinearGradient
					id="prefix__l"
					gradientUnits="userSpaceOnUse"
					x1={34.159}
					y1={264.433}
					x2={34.159}
					y2={330.433}
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
					d="M150.771 110.396a8.311 8.311 0 01-5.521 2.678 8.294 8.294 0 012.184-5.736 8.302 8.302 0 015.523-2.674 8.308 8.308 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__m"
					gradientUnits="userSpaceOnUse"
					x1={24.09}
					y1={264.435}
					x2={24.09}
					y2={330.431}
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
					d="M137.368 99.541a8.3 8.3 0 005.521 2.676 8.291 8.291 0 00-2.186-5.734 8.292 8.292 0 00-5.521-2.674 8.28 8.28 0 002.186 5.732z"
				/>
				<LinearGradient
					id="prefix__n"
					gradientUnits="userSpaceOnUse"
					x1={33.61}
					y1={264.438}
					x2={33.61}
					y2={330.428}
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
					d="M150.521 97.9a8.287 8.287 0 01-4.776 3.85 8.309 8.309 0 01.838-6.078 8.3 8.3 0 014.78-3.85 8.291 8.291 0 01-.842 6.078z"
				/>
				<LinearGradient
					id="prefix__o"
					gradientUnits="userSpaceOnUse"
					x1={21.358}
					y1={264.44}
					x2={21.358}
					y2={330.43}
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
					d="M135.021 90.338a8.29 8.29 0 005.982 1.365 8.303 8.303 0 00-3.42-5.096 8.281 8.281 0 00-5.982-1.363 8.282 8.282 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__p"
					gradientUnits="userSpaceOnUse"
					x1={30.357}
					y1={264.423}
					x2={30.357}
					y2={330.435}
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
					d="M147.473 85.781a8.302 8.302 0 01-3.789 4.826 8.296 8.296 0 01-.554-6.113 8.304 8.304 0 013.795-4.826 8.31 8.31 0 01.548 6.113z"
				/>
				<LinearGradient
					id="prefix__q"
					gradientUnits="userSpaceOnUse"
					x1={16.551}
					y1={264.427}
					x2={16.551}
					y2={330.433}
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
					d="M130.665 81.898a8.309 8.309 0 006.14-.016 8.305 8.305 0 00-4.479-4.195 8.284 8.284 0 00-6.138.018 8.284 8.284 0 004.477 4.193z"
				/>
				<LinearGradient
					id="prefix__r"
					gradientUnits="userSpaceOnUse"
					x1={24.567}
					y1={264.433}
					x2={24.567}
					y2={330.433}
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
					d="M141.771 74.658a8.297 8.297 0 01-2.605 5.555 8.286 8.286 0 01-1.912-5.832 8.301 8.301 0 012.609-5.555 8.316 8.316 0 011.908 5.832z"
				/>
				<LinearGradient
					id="prefix__s"
					gradientUnits="userSpaceOnUse"
					x1={-47.992}
					y1={264.433}
					x2={-47.992}
					y2={330.438}
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
					d="M69.212 126.96a8.295 8.295 0 01-2.609 5.556 8.288 8.288 0 01-1.908-5.83 8.28 8.28 0 012.609-5.554 8.301 8.301 0 011.908 5.828z"
				/>
				<LinearGradient
					id="prefix__t"
					gradientUnits="userSpaceOnUse"
					x1={-56.162}
					y1={264.434}
					x2={-56.162}
					y2={330.421}
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
					d="M57.956 133.966a8.281 8.281 0 006.135-.014 8.284 8.284 0 00-4.477-4.199 8.306 8.306 0 00-6.137.019 8.318 8.318 0 004.479 4.194z"
				/>
				<LinearGradient
					id="prefix__u"
					gradientUnits="userSpaceOnUse"
					x1={-51.873}
					y1={264.435}
					x2={-51.873}
					y2={330.429}
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
					d="M65.243 118.333a8.291 8.291 0 01-3.791 4.826 8.291 8.291 0 01-.549-6.111 8.303 8.303 0 013.791-4.825 8.289 8.289 0 01.549 6.11z"
				/>
				<LinearGradient
					id="prefix__v"
					gradientUnits="userSpaceOnUse"
					x1={-60.966}
					y1={264.432}
					x2={-60.966}
					y2={330.441}
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
					d="M52.698 122.626a8.29 8.29 0 005.982 1.367 8.292 8.292 0 00-3.416-5.099 8.294 8.294 0 00-5.986-1.363 8.328 8.328 0 003.42 5.095z"
				/>
				<LinearGradient
					id="prefix__w"
					gradientUnits="userSpaceOnUse"
					x1={-53.597}
					y1={264.435}
					x2={-53.597}
					y2={330.429}
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
					d="M63.317 109.034a8.306 8.306 0 01-4.779 3.85 8.291 8.291 0 01.842-6.077 8.284 8.284 0 014.779-3.85 8.3 8.3 0 01-.842 6.077z"
				/>
				<LinearGradient
					id="prefix__x"
					gradientUnits="userSpaceOnUse"
					x1={-63.148}
					y1={264.433}
					x2={-63.148}
					y2={330.433}
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
					d="M50.13 110.396a8.311 8.311 0 005.521 2.678 8.294 8.294 0 00-2.184-5.736 8.302 8.302 0 00-5.523-2.674 8.313 8.313 0 002.186 5.732z"
				/>
				<LinearGradient
					id="prefix__y"
					gradientUnits="userSpaceOnUse"
					x1={-53.081}
					y1={264.435}
					x2={-53.081}
					y2={330.431}
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
					d="M63.532 99.541a8.304 8.304 0 01-5.521 2.676 8.291 8.291 0 012.186-5.734 8.292 8.292 0 015.521-2.674 8.285 8.285 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__z"
					gradientUnits="userSpaceOnUse"
					x1={-62.599}
					y1={264.438}
					x2={-62.599}
					y2={330.428}
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
					d="M50.376 97.9a8.296 8.296 0 004.779 3.85 8.304 8.304 0 00-.838-6.078 8.3 8.3 0 00-4.781-3.85 8.315 8.315 0 00.84 6.078z"
				/>
				<LinearGradient
					id="prefix__A"
					gradientUnits="userSpaceOnUse"
					x1={-50.348}
					y1={264.44}
					x2={-50.348}
					y2={330.43}
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
					d="M65.878 90.338a8.29 8.29 0 01-5.982 1.365 8.303 8.303 0 013.42-5.096 8.281 8.281 0 015.982-1.363 8.274 8.274 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__B"
					gradientUnits="userSpaceOnUse"
					x1={-59.346}
					y1={264.423}
					x2={-59.346}
					y2={330.435}
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
					fill="url(#prefix__B)"
					d="M53.429 85.781a8.302 8.302 0 003.789 4.826 8.286 8.286 0 00.551-6.113 8.297 8.297 0 00-3.793-4.826 8.315 8.315 0 00-.547 6.113z"
				/>
				<LinearGradient
					id="prefix__C"
					gradientUnits="userSpaceOnUse"
					x1={-45.541}
					y1={264.427}
					x2={-45.541}
					y2={330.433}
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
					fill="url(#prefix__C)"
					d="M70.235 81.898a8.306 8.306 0 01-6.139-.016 8.3 8.3 0 014.48-4.195 8.276 8.276 0 016.135.018 8.275 8.275 0 01-4.476 4.193z"
				/>
				<LinearGradient
					id="prefix__D"
					gradientUnits="userSpaceOnUse"
					x1={-53.557}
					y1={264.433}
					x2={-53.557}
					y2={330.433}
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
					fill="url(#prefix__D)"
					d="M59.13 74.658a8.297 8.297 0 002.605 5.555 8.296 8.296 0 001.912-5.832 8.301 8.301 0 00-2.609-5.555 8.302 8.302 0 00-1.908 5.832z"
				/>
			</G>
			<G>
				<LinearGradient
					id="prefix__E"
					gradientUnits="userSpaceOnUse"
					x1={-23.979}
					y1={307.056}
					x2={-23.979}
					y2={283.956}
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
					fill="url(#prefix__E)"
					d="M95.741 96.451c-1.312-1.312-2.922-1.979-4.781-1.979-1.853 0-3.457.666-4.77 1.979-1.312 1.312-1.978 2.917-1.978 4.77v5.532c0 1.853.666 3.458 1.978 4.771 1.313 1.312 2.917 1.978 4.77 1.978 1.859 0 3.469-.665 4.781-1.978s1.978-2.918 1.978-4.771v-5.532c0-1.853-.665-3.457-1.978-4.77zm-4.781 14.01c-1.03 0-1.887-.354-2.619-1.084-.732-.729-1.088-1.587-1.088-2.624v-5.532c0-1.03.355-1.884 1.088-2.612.732-.729 1.59-1.084 2.619-1.084 1.038 0 1.897.354 2.631 1.084.731.729 1.088 1.583 1.088 2.612v5.532c0 1.037-.356 1.896-1.088 2.624-.733.728-1.593 1.084-2.631 1.084z"
				/>
				<LinearGradient
					id="prefix__F"
					gradientUnits="userSpaceOnUse"
					x1={-31.233}
					y1={295.738}
					x2={-16.726}
					y2={295.738}
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
					fill="url(#prefix__F)"
					d="M90.96 114.001c-1.989 0-3.712-.715-5.124-2.124-1.41-1.41-2.125-3.134-2.125-5.124v-5.532c0-1.99.715-3.713 2.125-5.123 1.41-1.41 3.134-2.125 5.124-2.125 1.997 0 3.725.715 5.135 2.125 1.41 1.41 2.125 3.133 2.125 5.123v5.532c0 1.99-.715 3.714-2.125 5.124-1.409 1.409-3.137 2.124-5.135 2.124zm0-19.029c-1.714 0-3.201.617-4.417 1.833-1.215 1.215-1.832 2.701-1.832 4.416v5.532c0 1.715.616 3.201 1.832 4.417 1.216 1.215 2.702 1.831 4.417 1.831 1.724 0 3.213-.616 4.428-1.831 1.215-1.216 1.832-2.702 1.832-4.417v-5.532c0-1.715-.616-3.201-1.832-4.416-1.216-1.216-2.706-1.833-4.428-1.833zm0 15.989c-1.171 0-2.143-.402-2.972-1.23-.831-.826-1.235-1.801-1.235-2.978v-5.532c0-1.17.404-2.141 1.235-2.966.831-.827 1.803-1.229 2.972-1.229 1.176 0 2.152.402 2.983 1.229.832.83 1.236 1.8 1.236 2.966v5.532c0 1.177-.404 2.15-1.236 2.979-.832.827-1.808 1.229-2.983 1.229zm0-12.936c-.891 0-1.632.307-2.266.938-.642.638-.941 1.354-.941 2.257v5.532c0 .91.299 1.631.94 2.27.642.641 1.362.938 2.267.938.91 0 1.634-.298 2.278-.938.642-.639.941-1.36.941-2.27v-5.532c0-.9-.299-1.617-.941-2.258-.643-.639-1.367-.937-2.278-.937z"
				/>
			</G>
		</Svg>
	);
}

export default SvgComponent;

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
				x1={-39.951}
				y1={282.95}
				x2={-39.951}
				y2={308.738}
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
				d="M78.302 102.344c.99-1.056 1.491-2.18 1.491-3.346 0-1.243-.452-2.327-1.344-3.229-.892-.899-1.993-1.355-3.274-1.355h-.373c-1.282 0-2.383.456-3.27 1.357-.887.899-1.337 1.983-1.337 3.227 0 1.164.464 2.296 1.382 3.373-2.019 1.559-3.041 3.335-3.041 5.283 0 1.66.594 3.094 1.765 4.268 1.171 1.176 2.749 1.771 4.693 1.771 1.944 0 3.522-.596 4.694-1.771 1.17-1.175 1.764-2.607 1.764-4.268.001-1.947-1.058-3.732-3.15-5.31zm-.767 7.424c-.582.58-1.438.873-2.54.873-1.11 0-1.966-.293-2.545-.873-.587-.586-.872-1.275-.872-2.111 0-.85.285-1.567.871-2.204.575-.63 1.432-1.068 2.545-1.31 1.107.24 1.961.68 2.538 1.312.591.634.879 1.354.879 2.199 0 .836-.287 1.528-.876 2.114zm-1.297-9.582c-.354.373-.662.615-.91.714a3.252 3.252 0 01-.333.099c-.1-.021-.21-.056-.326-.099-.265-.102-.575-.342-.922-.713-.327-.351-.487-.741-.487-1.188 0-.438.148-.795.451-1.095.303-.302.66-.447 1.092-.447.025 0 .055.003.135.012l.159-.004a.61.61 0 01.079-.008c.439 0 .8.146 1.104.447.304.3.45.657.45 1.095-.001.446-.161.836-.492 1.187z"
			/>
			<LinearGradient
				id="prefix__b"
				gradientUnits="userSpaceOnUse"
				x1={-46.909}
				y1={295.671}
				x2={-32.993}
				y2={295.671}
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
				d="M74.994 114.193c-2.081 0-3.779-.646-5.047-1.919-1.268-1.271-1.911-2.825-1.911-4.62 0-1.978.955-3.778 2.84-5.36-.784-1.051-1.181-2.158-1.181-3.296 0-1.378.499-2.582 1.481-3.578.983-.999 2.204-1.506 3.626-1.506h.373c1.418 0 2.64.505 3.629 1.503.988 1 1.489 2.204 1.489 3.581 0 1.144-.426 2.245-1.268 3.278 1.943 1.598 2.928 3.404 2.927 5.378 0 1.793-.643 3.348-1.91 4.62-1.269 1.274-2.967 1.919-5.048 1.919zm-.192-19.279c-1.145 0-2.125.406-2.914 1.208-.792.803-1.194 1.771-1.194 2.876 0 1.04.425 2.065 1.263 3.049l.341.399-.416.32c-1.889 1.458-2.847 3.103-2.847 4.888 0 1.521.544 2.838 1.619 3.914 1.074 1.078 2.534 1.625 4.339 1.625 1.805 0 3.265-.547 4.34-1.624 1.074-1.079 1.618-2.396 1.618-3.915.001-1.781-.992-3.434-2.951-4.911l-.444-.335.381-.406c.899-.96 1.355-1.97 1.355-3.004 0-1.104-.403-2.073-1.199-2.877-.794-.8-1.777-1.207-2.919-1.207h-.372zm.193 16.227c-1.249 0-2.224-.343-2.899-1.02-.685-.684-1.018-1.49-1.018-2.465 0-.979.328-1.81 1.003-2.543.642-.703 1.587-1.195 2.807-1.459l.106-.023.106.023c1.213.263 2.156.756 2.802 1.464.678.728 1.009 1.559 1.009 2.536 0 .962-.344 1.792-1.023 2.468-.678.676-1.652 1.019-2.893 1.019zm-.001-6.486c-.961.223-1.692.604-2.176 1.134-.505.549-.74 1.142-.74 1.867 0 .705.23 1.264.725 1.758.481.482 1.219.727 2.192.727.967 0 1.703-.245 2.187-.728.498-.494.729-1.054.729-1.759 0-.723-.237-1.313-.745-1.858-.489-.536-1.218-.919-2.172-1.141zm.006-3.144l-.106-.021a2.746 2.746 0 01-.399-.12c-.346-.132-.708-.406-1.114-.841-.413-.443-.622-.957-.622-1.529 0-.568.201-1.056.599-1.45.395-.393.88-.592 1.444-.592.036 0 .078.002.192.016l.088-.008c.651.006 1.152.191 1.548.583.396.392.598.88.598 1.451-.001.575-.213 1.089-.628 1.53-.413.435-.768.707-1.087.835a3.29 3.29 0 01-.409.122l-.104.024zm-.202-3.554a.974.974 0 00-.734.301.97.97 0 00-.303.741c0 .32.112.589.353.847.387.414.627.546.735.587.049.018.098.035.146.049.053-.015.109-.034.169-.055.081-.033.311-.164.712-.586.241-.255.354-.524.354-.844a.962.962 0 00-.301-.738.997.997 0 00-.753-.303l-.224.012-.154-.011z"
			/>
			<LinearGradient
				id="prefix__c"
				gradientUnits="userSpaceOnUse"
				x1={-8.228}
				y1={307.056}
				x2={-8.228}
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
				d="M111.49 96.45c-1.311-1.312-2.92-1.978-4.779-1.978-1.854 0-3.459.666-4.771 1.978-1.311 1.312-1.977 2.917-1.977 4.771v5.531c0 1.854.667 3.458 1.977 4.771 1.314 1.312 2.918 1.978 4.771 1.978 1.859 0 3.469-.666 4.779-1.978 1.314-1.312 1.98-2.918 1.98-4.771v-5.531c.001-1.854-.665-3.458-1.98-4.771zm-4.779 14.01c-1.031 0-1.887-.354-2.621-1.083-.732-.729-1.088-1.587-1.088-2.625v-5.531c0-1.03.355-1.884 1.088-2.613.734-.729 1.59-1.084 2.621-1.084 1.037 0 1.896.355 2.629 1.084.734.729 1.09 1.583 1.09 2.613v5.531c0 1.038-.354 1.896-1.09 2.625-.733.728-1.592 1.083-2.629 1.083z"
			/>
			<LinearGradient
				id="prefix__d"
				gradientUnits="userSpaceOnUse"
				x1={-15.482}
				y1={295.738}
				x2={-0.974}
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
				d="M106.711 114.001c-1.988 0-3.712-.715-5.125-2.124-1.409-1.413-2.123-3.137-2.123-5.125v-5.531c0-1.99.714-3.714 2.123-5.124 1.41-1.41 3.135-2.125 5.125-2.125 1.998 0 3.725.715 5.133 2.125 1.411 1.41 2.127 3.134 2.127 5.124v5.531c0 1.991-.716 3.716-2.127 5.125-1.408 1.409-3.135 2.124-5.133 2.124zm0-19.029c-1.716 0-3.202.616-4.418 1.832-1.214 1.216-1.83 2.702-1.83 4.417v5.531c0 1.714.616 3.2 1.831 4.418 1.217 1.215 2.703 1.831 4.417 1.831 1.723 0 3.212-.616 4.426-1.831 1.217-1.215 1.834-2.701 1.834-4.418v-5.531c0-1.715-.617-3.201-1.834-4.417-1.214-1.216-2.703-1.832-4.426-1.832zm0 15.988c-1.168 0-2.141-.401-2.974-1.229-.831-.827-1.235-1.802-1.235-2.979v-5.531c0-1.169.404-2.14 1.235-2.967.833-.828 1.806-1.229 2.974-1.229 1.175 0 2.15.402 2.981 1.229.832.826 1.237 1.797 1.237 2.967v5.531c0 1.18-.405 2.155-1.238 2.98-.83.827-1.805 1.228-2.98 1.228zm0-12.936c-.902 0-1.624.298-2.269.939-.642.638-.94 1.356-.94 2.258v5.531c0 .911.299 1.632.94 2.271.645.64 1.365.938 2.269.938.91 0 1.633-.298 2.276-.938.644-.638.942-1.358.942-2.271v-5.531c0-.902-.3-1.62-.942-2.258-.643-.641-1.366-.939-2.276-.939z"
			/>
			<G>
				<LinearGradient
					id="prefix__e"
					gradientUnits="userSpaceOnUse"
					x1={9.446}
					y1={283.798}
					x2={9.446}
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
					d="M128.535 113.037v-8.094h-8.045v8.094h-2.332V94.936h2.332v7.583h8.045v-7.583h2.088v18.102l-2.088-.001z"
				/>
				<LinearGradient
					id="prefix__f"
					gradientUnits="userSpaceOnUse"
					x1={2.213}
					y1={295.738}
					x2={16.678}
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
					d="M130.623 94.936v18.102h-2.088v-8.093h-8.045v8.093h-2.332V94.936h2.332v7.583h8.045v-7.583h2.088m1-1h-4.088v7.583h-6.045v-7.583h-4.332v20.102h4.332v-8.093h6.045v8.093h4.088V93.936z"
				/>
			</G>
			<G opacity={0.4}>
				<LinearGradient
					id="prefix__g"
					gradientUnits="userSpaceOnUse"
					x1={18.988}
					y1={264.433}
					x2={18.988}
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
					d="M131.674 126.96a8.304 8.304 0 002.609 5.556 8.288 8.288 0 001.908-5.83 8.28 8.28 0 00-2.609-5.554 8.306 8.306 0 00-1.908 5.828z"
				/>
				<LinearGradient
					id="prefix__h"
					gradientUnits="userSpaceOnUse"
					x1={27.157}
					y1={264.434}
					x2={27.157}
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
					d="M142.93 133.966a8.281 8.281 0 01-6.135-.014 8.284 8.284 0 014.477-4.199 8.308 8.308 0 016.138.019 8.327 8.327 0 01-4.48 4.194z"
				/>
				<LinearGradient
					id="prefix__i"
					gradientUnits="userSpaceOnUse"
					x1={22.868}
					y1={264.435}
					x2={22.868}
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
					d="M135.643 118.333a8.291 8.291 0 003.791 4.826 8.291 8.291 0 00.549-6.111 8.299 8.299 0 00-3.791-4.825 8.279 8.279 0 00-.549 6.11z"
				/>
				<LinearGradient
					id="prefix__j"
					gradientUnits="userSpaceOnUse"
					x1={31.962}
					y1={264.432}
					x2={31.962}
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
					d="M148.188 122.626a8.288 8.288 0 01-5.981 1.367 8.3 8.3 0 013.416-5.099 8.292 8.292 0 015.985-1.363 8.328 8.328 0 01-3.42 5.095z"
				/>
				<LinearGradient
					id="prefix__k"
					gradientUnits="userSpaceOnUse"
					x1={24.592}
					y1={264.435}
					x2={24.592}
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
					d="M137.568 109.034a8.306 8.306 0 004.779 3.85 8.292 8.292 0 00-.843-6.077 8.282 8.282 0 00-4.778-3.85 8.305 8.305 0 00.842 6.077z"
				/>
				<LinearGradient
					id="prefix__l"
					gradientUnits="userSpaceOnUse"
					x1={34.143}
					y1={264.433}
					x2={34.143}
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
					d="M150.756 110.396a8.311 8.311 0 01-5.521 2.678 8.295 8.295 0 012.185-5.736 8.3 8.3 0 015.522-2.674 8.303 8.303 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__m"
					gradientUnits="userSpaceOnUse"
					x1={24.077}
					y1={264.435}
					x2={24.077}
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
					d="M137.354 99.541a8.304 8.304 0 005.521 2.676 8.291 8.291 0 00-2.186-5.734 8.292 8.292 0 00-5.521-2.674 8.28 8.28 0 002.186 5.732z"
				/>
				<LinearGradient
					id="prefix__n"
					gradientUnits="userSpaceOnUse"
					x1={33.595}
					y1={264.438}
					x2={33.595}
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
					d="M150.508 97.9a8.286 8.286 0 01-4.777 3.85 8.309 8.309 0 01.838-6.078 8.3 8.3 0 014.781-3.85 8.306 8.306 0 01-.842 6.078z"
				/>
				<LinearGradient
					id="prefix__o"
					gradientUnits="userSpaceOnUse"
					x1={21.344}
					y1={264.44}
					x2={21.344}
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
					d="M135.008 90.338a8.29 8.29 0 005.982 1.365 8.303 8.303 0 00-3.42-5.096 8.281 8.281 0 00-5.982-1.363 8.274 8.274 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__p"
					gradientUnits="userSpaceOnUse"
					x1={30.342}
					y1={264.423}
					x2={30.342}
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
					d="M147.457 85.781a8.302 8.302 0 01-3.789 4.826 8.308 8.308 0 013.242-10.939 8.315 8.315 0 01.547 6.113z"
				/>
				<LinearGradient
					id="prefix__q"
					gradientUnits="userSpaceOnUse"
					x1={16.536}
					y1={264.427}
					x2={16.536}
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
					d="M130.65 81.898a8.306 8.306 0 006.139-.016 8.302 8.302 0 00-4.479-4.195 8.284 8.284 0 00-6.138.018 8.293 8.293 0 004.478 4.193z"
				/>
				<LinearGradient
					id="prefix__r"
					gradientUnits="userSpaceOnUse"
					x1={24.552}
					y1={264.433}
					x2={24.552}
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
					d="M141.756 74.658a8.297 8.297 0 01-2.605 5.555 8.286 8.286 0 01-1.912-5.832 8.305 8.305 0 012.609-5.555 8.307 8.307 0 011.908 5.832z"
				/>
				<LinearGradient
					id="prefix__s"
					gradientUnits="userSpaceOnUse"
					x1={-48.006}
					y1={264.433}
					x2={-48.006}
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
					d="M69.198 126.96a8.295 8.295 0 01-2.609 5.556 8.288 8.288 0 01-1.908-5.83 8.28 8.28 0 012.609-5.554 8.301 8.301 0 011.908 5.828z"
				/>
				<LinearGradient
					id="prefix__t"
					gradientUnits="userSpaceOnUse"
					x1={-56.175}
					y1={264.434}
					x2={-56.175}
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
					d="M57.942 133.966a8.281 8.281 0 006.135-.014 8.284 8.284 0 00-4.477-4.199 8.306 8.306 0 00-6.137.019 8.314 8.314 0 004.479 4.194z"
				/>
				<LinearGradient
					id="prefix__u"
					gradientUnits="userSpaceOnUse"
					x1={-51.886}
					y1={264.435}
					x2={-51.886}
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
					d="M65.229 118.333a8.291 8.291 0 01-3.791 4.826 8.291 8.291 0 01-.549-6.111 8.303 8.303 0 013.791-4.825 8.289 8.289 0 01.549 6.11z"
				/>
				<LinearGradient
					id="prefix__v"
					gradientUnits="userSpaceOnUse"
					x1={-60.98}
					y1={264.432}
					x2={-60.98}
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
					d="M52.684 122.626a8.29 8.29 0 005.982 1.367 8.292 8.292 0 00-3.416-5.099 8.294 8.294 0 00-5.986-1.363 8.328 8.328 0 003.42 5.095z"
				/>
				<LinearGradient
					id="prefix__w"
					gradientUnits="userSpaceOnUse"
					x1={-53.611}
					y1={264.435}
					x2={-53.611}
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
					d="M63.303 109.034a8.306 8.306 0 01-4.779 3.85 8.291 8.291 0 01.842-6.077 8.284 8.284 0 014.779-3.85 8.305 8.305 0 01-.842 6.077z"
				/>
				<LinearGradient
					id="prefix__x"
					gradientUnits="userSpaceOnUse"
					x1={-63.162}
					y1={264.433}
					x2={-63.162}
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
					d="M50.116 110.396a8.311 8.311 0 005.521 2.678 8.294 8.294 0 00-2.184-5.736 8.302 8.302 0 00-5.523-2.674 8.308 8.308 0 002.186 5.732z"
				/>
				<LinearGradient
					id="prefix__y"
					gradientUnits="userSpaceOnUse"
					x1={-53.094}
					y1={264.435}
					x2={-53.094}
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
					d="M63.518 99.541a8.304 8.304 0 01-5.521 2.676 8.291 8.291 0 012.186-5.734 8.292 8.292 0 015.521-2.674 8.285 8.285 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__z"
					gradientUnits="userSpaceOnUse"
					x1={-62.613}
					y1={264.438}
					x2={-62.613}
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
					d="M50.362 97.9a8.296 8.296 0 004.779 3.85 8.304 8.304 0 00-.838-6.078 8.3 8.3 0 00-4.781-3.85 8.315 8.315 0 00.84 6.078z"
				/>
				<LinearGradient
					id="prefix__A"
					gradientUnits="userSpaceOnUse"
					x1={-50.362}
					y1={264.44}
					x2={-50.362}
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
					d="M65.864 90.338a8.29 8.29 0 01-5.982 1.365 8.303 8.303 0 013.42-5.096 8.281 8.281 0 015.982-1.363 8.274 8.274 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__B"
					gradientUnits="userSpaceOnUse"
					x1={-59.36}
					y1={264.423}
					x2={-59.36}
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
					d="M53.415 85.781a8.302 8.302 0 003.789 4.826 8.286 8.286 0 00.551-6.113 8.297 8.297 0 00-3.793-4.826 8.31 8.31 0 00-.547 6.113z"
				/>
				<LinearGradient
					id="prefix__C"
					gradientUnits="userSpaceOnUse"
					x1={-45.556}
					y1={264.427}
					x2={-45.556}
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
					d="M70.221 81.898a8.306 8.306 0 01-6.139-.016 8.3 8.3 0 014.48-4.195 8.276 8.276 0 016.135.018 8.275 8.275 0 01-4.476 4.193z"
				/>
				<LinearGradient
					id="prefix__D"
					gradientUnits="userSpaceOnUse"
					x1={-53.571}
					y1={264.433}
					x2={-53.571}
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
					d="M59.116 74.658a8.297 8.297 0 002.605 5.555 8.296 8.296 0 001.912-5.832 8.301 8.301 0 00-2.609-5.555 8.302 8.302 0 00-1.908 5.832z"
				/>
			</G>
			<G>
				<LinearGradient
					id="prefix__E"
					gradientUnits="userSpaceOnUse"
					x1={-24.326}
					y1={307.056}
					x2={-24.326}
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
					d="M95.394 96.451c-1.312-1.312-2.922-1.979-4.781-1.979-1.853 0-3.457.666-4.77 1.979-1.312 1.312-1.978 2.917-1.978 4.77v5.532c0 1.853.666 3.458 1.978 4.771 1.313 1.312 2.917 1.978 4.77 1.978 1.859 0 3.469-.665 4.781-1.978s1.978-2.918 1.978-4.771v-5.532c0-1.853-.665-3.457-1.978-4.77zm-4.781 14.01c-1.03 0-1.887-.354-2.619-1.084-.732-.729-1.088-1.587-1.088-2.624v-5.532c0-1.03.355-1.884 1.088-2.612.732-.729 1.59-1.084 2.619-1.084 1.038 0 1.897.354 2.631 1.084.731.729 1.088 1.583 1.088 2.612v5.532c0 1.037-.356 1.896-1.088 2.624-.733.728-1.593 1.084-2.631 1.084z"
				/>
				<LinearGradient
					id="prefix__F"
					gradientUnits="userSpaceOnUse"
					x1={-31.58}
					y1={295.738}
					x2={-17.073}
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
					d="M90.613 114.001c-1.989 0-3.712-.715-5.124-2.124-1.41-1.41-2.124-3.134-2.124-5.124v-5.532c0-1.99.715-3.714 2.124-5.123 1.41-1.41 3.134-2.125 5.124-2.125 1.997 0 3.725.715 5.135 2.125 1.41 1.41 2.125 3.133 2.125 5.123v5.532c0 1.99-.715 3.714-2.125 5.124-1.409 1.409-3.137 2.124-5.135 2.124zm0-19.029c-1.714 0-3.201.617-4.417 1.833-1.215 1.215-1.831 2.701-1.831 4.416v5.532c0 1.716.616 3.201 1.831 4.417 1.216 1.215 2.702 1.831 4.417 1.831 1.724 0 3.213-.616 4.428-1.831 1.215-1.216 1.832-2.702 1.832-4.417v-5.532c0-1.715-.616-3.201-1.832-4.416-1.216-1.216-2.706-1.833-4.428-1.833zm0 15.989c-1.17 0-2.143-.402-2.972-1.23-.831-.827-1.235-1.801-1.235-2.978v-5.532c0-1.17.404-2.14 1.236-2.966.831-.827 1.802-1.229 2.971-1.229 1.176 0 2.152.402 2.984 1.229.832.829 1.235 1.799 1.235 2.966v5.532c0 1.177-.404 2.151-1.235 2.979-.833.827-1.808 1.229-2.984 1.229zm0-12.936c-.891 0-1.632.307-2.266.938-.643.638-.941 1.355-.941 2.257v5.532c0 .909.299 1.631.941 2.27.642.641 1.362.938 2.266.938.911 0 1.635-.298 2.279-.938.642-.639.94-1.359.94-2.27v-5.532c0-.9-.299-1.618-.941-2.258-.643-.639-1.367-.937-2.278-.937z"
				/>
			</G>
		</Svg>
	);
}

export default SvgComponent;

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
				x1={-39.561}
				y1={282.016}
				x2={-39.561}
				y2={308.979}
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
				d="M69.285 97.529h8.657c-.272.513-.934 1.438-2.417 3.098-1.646 1.844-2.488 3.41-3.177 5.254-.737 1.971-1.677 4.246-1.771 7.46l-.01.337h3.104l.009-.316c.075-2.48.823-4.287 1.418-5.934.779-2.158 1.431-3.266 3.334-5.4 1.965-2.201 2.99-4.631 3.045-7.218l.007-.336h-12.2l.001 3.055z"
			/>
			<LinearGradient
				id="prefix__b"
				gradientUnits="userSpaceOnUse"
				x1={-46.161}
				y1={295.649}
				x2={-32.951}
				y2={295.649}
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
				d="M74.156 114.178h-4.105l.026-.853c.09-3.077.919-5.275 1.65-7.214l.153-.405c.797-2.134 1.745-3.702 3.272-5.412.928-1.039 1.509-1.763 1.874-2.265h-8.24l-.001-4.056h13.21l-.017.846c-.058 2.711-1.125 5.248-3.172 7.541-1.818 2.039-2.454 3.067-3.237 5.237l-.169.465c-.541 1.474-1.154 3.145-1.219 5.313l-.025.803zm-3.073-1h2.104c.095-2.248.72-3.952 1.273-5.46l.168-.46c.826-2.289 1.531-3.433 3.431-5.563 1.839-2.06 2.818-4.321 2.913-6.721H69.784v2.056h8.989l-.389.734c-.358.675-1.194 1.751-2.486 3.197-1.438 1.61-2.331 3.087-3.082 5.096l-.154.409c-.688 1.826-1.468 3.891-1.579 6.712z"
			/>
			<LinearGradient
				id="prefix__c"
				gradientUnits="userSpaceOnUse"
				x1={-9.228}
				y1={307.056}
				x2={-9.228}
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
				d="M110.492 96.45c-1.312-1.312-2.922-1.978-4.78-1.978-1.854 0-3.458.666-4.771 1.978s-1.979 2.917-1.979 4.771v5.531c0 1.854.666 3.458 1.979 4.771 1.312 1.312 2.916 1.978 4.771 1.978 1.858 0 3.47-.666 4.78-1.978 1.312-1.312 1.979-2.918 1.979-4.771v-5.531c.002-1.854-.664-3.458-1.979-4.771zm-4.78 14.01c-1.03 0-1.887-.354-2.62-1.083-.732-.729-1.088-1.587-1.088-2.625v-5.531c0-1.03.355-1.884 1.088-2.613.733-.729 1.59-1.084 2.62-1.084 1.037 0 1.896.355 2.63 1.084.733.729 1.09 1.583 1.09 2.613v5.531c0 1.038-.355 1.896-1.09 2.625-.733.728-1.593 1.083-2.63 1.083z"
			/>
			<LinearGradient
				id="prefix__d"
				gradientUnits="userSpaceOnUse"
				x1={-16.482}
				y1={295.738}
				x2={-1.974}
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
				d="M105.712 114.001c-1.989 0-3.714-.715-5.124-2.124-1.41-1.411-2.125-3.136-2.125-5.125v-5.531c0-1.991.715-3.714 2.125-5.124s3.134-2.125 5.124-2.125c1.996 0 3.724.715 5.134 2.125 1.412 1.411 2.127 3.135 2.125 5.125v5.53c0 1.99-.715 3.715-2.125 5.125-1.408 1.409-3.136 2.124-5.134 2.124zm0-19.029c-1.715 0-3.201.616-4.417 1.832s-1.832 2.701-1.832 4.417v5.531c0 1.715.616 3.201 1.832 4.418 1.216 1.215 2.702 1.831 4.417 1.831 1.724 0 3.213-.616 4.427-1.831 1.216-1.216 1.832-2.702 1.832-4.418v-5.531c.002-1.715-.614-3.201-1.832-4.417-1.216-1.216-2.705-1.832-4.427-1.832zm0 15.988c-1.168 0-2.141-.401-2.973-1.229-.831-.827-1.235-1.802-1.235-2.979v-5.531c0-1.169.404-2.14 1.235-2.967.832-.827 1.805-1.229 2.973-1.229 1.174 0 2.149.402 2.982 1.229.833.828 1.237 1.799 1.237 2.968v5.531c0 1.179-.405 2.153-1.237 2.979-.831.827-1.806 1.228-2.982 1.228zm0-12.936c-.903 0-1.623.298-2.268.938-.642.639-.94 1.356-.94 2.258v5.531c0 .911.299 1.632.94 2.271.644.64 1.364.938 2.268.938.91 0 1.634-.298 2.277-.938.643-.638.942-1.359.942-2.271v-5.531c0-.901-.3-1.619-.942-2.258-.644-.64-1.369-.938-2.277-.938z"
			/>
			<G>
				<LinearGradient
					id="prefix__e"
					gradientUnits="userSpaceOnUse"
					x1={8.447}
					y1={283.798}
					x2={8.447}
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
					d="M127.537 113.037v-8.094h-8.045v8.094h-2.333V94.936h2.333v7.583h8.045v-7.583h2.088v18.102l-2.088-.001z"
				/>
				<LinearGradient
					id="prefix__f"
					gradientUnits="userSpaceOnUse"
					x1={1.214}
					y1={295.738}
					x2={15.68}
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
					d="M129.625 94.936v18.102h-2.088v-8.093h-8.045v8.093h-2.333V94.936h2.333v7.583h8.045v-7.583h2.088m1-1h-4.088v7.583h-6.045v-7.583h-4.333v20.102h4.333v-8.093h6.045v8.093h4.088V93.936z"
				/>
			</G>
			<G opacity={0.4}>
				<LinearGradient
					id="prefix__g"
					gradientUnits="userSpaceOnUse"
					x1={18.99}
					y1={264.433}
					x2={18.99}
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
					d="M131.676 126.96a8.304 8.304 0 002.609 5.556 8.288 8.288 0 001.908-5.83 8.28 8.28 0 00-2.609-5.554 8.306 8.306 0 00-1.908 5.828z"
				/>
				<LinearGradient
					id="prefix__h"
					gradientUnits="userSpaceOnUse"
					x1={27.159}
					y1={264.434}
					x2={27.159}
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
					d="M142.932 133.966a8.281 8.281 0 01-6.135-.014 8.284 8.284 0 014.477-4.199 8.308 8.308 0 016.138.019 8.327 8.327 0 01-4.48 4.194z"
				/>
				<LinearGradient
					id="prefix__i"
					gradientUnits="userSpaceOnUse"
					x1={22.87}
					y1={264.435}
					x2={22.87}
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
					d="M135.645 118.333a8.291 8.291 0 003.791 4.826 8.291 8.291 0 00.549-6.111 8.299 8.299 0 00-3.791-4.825 8.274 8.274 0 00-.549 6.11z"
				/>
				<LinearGradient
					id="prefix__j"
					gradientUnits="userSpaceOnUse"
					x1={31.963}
					y1={264.432}
					x2={31.963}
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
					d="M148.189 122.626a8.29 8.29 0 01-5.982 1.367 8.292 8.292 0 013.416-5.099 8.294 8.294 0 015.986-1.363 8.32 8.32 0 01-3.42 5.095z"
				/>
				<LinearGradient
					id="prefix__k"
					gradientUnits="userSpaceOnUse"
					x1={24.594}
					y1={264.435}
					x2={24.594}
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
					d="M137.57 109.034a8.306 8.306 0 004.779 3.85 8.292 8.292 0 00-.843-6.077 8.282 8.282 0 00-4.778-3.85 8.305 8.305 0 00.842 6.077z"
				/>
				<LinearGradient
					id="prefix__l"
					gradientUnits="userSpaceOnUse"
					x1={34.145}
					y1={264.433}
					x2={34.145}
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
					d="M150.758 110.396a8.311 8.311 0 01-5.521 2.678 8.295 8.295 0 012.185-5.736 8.3 8.3 0 015.522-2.674 8.303 8.303 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__m"
					gradientUnits="userSpaceOnUse"
					x1={24.078}
					y1={264.435}
					x2={24.078}
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
					d="M137.355 99.541a8.302 8.302 0 005.521 2.676c.026-2.045-.692-4.107-2.187-5.734s-3.481-2.525-5.521-2.674a8.295 8.295 0 002.187 5.732z"
				/>
				<LinearGradient
					id="prefix__n"
					gradientUnits="userSpaceOnUse"
					x1={33.597}
					y1={264.438}
					x2={33.597}
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
					d="M150.51 97.9a8.286 8.286 0 01-4.777 3.85 8.309 8.309 0 01.838-6.078 8.303 8.303 0 014.781-3.85 8.306 8.306 0 01-.842 6.078z"
				/>
				<LinearGradient
					id="prefix__o"
					gradientUnits="userSpaceOnUse"
					x1={21.346}
					y1={264.44}
					x2={21.346}
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
					d="M135.01 90.338a8.29 8.29 0 005.982 1.365 8.303 8.303 0 00-3.42-5.096 8.281 8.281 0 00-5.982-1.363 8.27 8.27 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__p"
					gradientUnits="userSpaceOnUse"
					x1={30.344}
					y1={264.423}
					x2={30.344}
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
					d="M147.459 85.781a8.302 8.302 0 01-3.789 4.826 8.308 8.308 0 013.242-10.939 8.315 8.315 0 01.547 6.113z"
				/>
				<LinearGradient
					id="prefix__q"
					gradientUnits="userSpaceOnUse"
					x1={16.538}
					y1={264.427}
					x2={16.538}
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
					d="M130.652 81.898a8.306 8.306 0 006.139-.016 8.302 8.302 0 00-4.479-4.195 8.284 8.284 0 00-6.138.018 8.293 8.293 0 004.478 4.193z"
				/>
				<LinearGradient
					id="prefix__r"
					gradientUnits="userSpaceOnUse"
					x1={24.554}
					y1={264.433}
					x2={24.554}
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
					d="M141.758 74.658a8.297 8.297 0 01-2.605 5.555 8.281 8.281 0 01-1.911-5.832 8.3 8.3 0 012.608-5.555 8.307 8.307 0 011.908 5.832z"
				/>
				<LinearGradient
					id="prefix__s"
					gradientUnits="userSpaceOnUse"
					x1={-48.005}
					y1={264.433}
					x2={-48.005}
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
					d="M69.199 126.96a8.295 8.295 0 01-2.609 5.556 8.288 8.288 0 01-1.908-5.83 8.28 8.28 0 012.609-5.554 8.297 8.297 0 011.908 5.828z"
				/>
				<LinearGradient
					id="prefix__t"
					gradientUnits="userSpaceOnUse"
					x1={-56.174}
					y1={264.434}
					x2={-56.174}
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
					d="M57.943 133.966a8.281 8.281 0 006.135-.014 8.284 8.284 0 00-4.477-4.199 8.306 8.306 0 00-6.137.019 8.321 8.321 0 004.479 4.194z"
				/>
				<LinearGradient
					id="prefix__u"
					gradientUnits="userSpaceOnUse"
					x1={-51.885}
					y1={264.435}
					x2={-51.885}
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
					d="M65.23 118.333a8.291 8.291 0 01-3.791 4.826 8.291 8.291 0 01-.549-6.111 8.303 8.303 0 013.791-4.825 8.284 8.284 0 01.549 6.11z"
				/>
				<LinearGradient
					id="prefix__v"
					gradientUnits="userSpaceOnUse"
					x1={-60.978}
					y1={264.432}
					x2={-60.978}
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
					d="M52.686 122.626a8.29 8.29 0 005.982 1.367 8.292 8.292 0 00-3.416-5.099 8.294 8.294 0 00-5.986-1.363 8.32 8.32 0 003.42 5.095z"
				/>
				<LinearGradient
					id="prefix__w"
					gradientUnits="userSpaceOnUse"
					x1={-53.609}
					y1={264.435}
					x2={-53.609}
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
					d="M63.305 109.034a8.306 8.306 0 01-4.779 3.85 8.291 8.291 0 01.842-6.077 8.284 8.284 0 014.779-3.85 8.305 8.305 0 01-.842 6.077z"
				/>
				<LinearGradient
					id="prefix__x"
					gradientUnits="userSpaceOnUse"
					x1={-63.161}
					y1={264.433}
					x2={-63.161}
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
					d="M50.117 110.396a8.311 8.311 0 005.521 2.678 8.294 8.294 0 00-2.184-5.736 8.302 8.302 0 00-5.523-2.674 8.313 8.313 0 002.186 5.732z"
				/>
				<LinearGradient
					id="prefix__y"
					gradientUnits="userSpaceOnUse"
					x1={-53.092}
					y1={264.435}
					x2={-53.092}
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
					d="M63.52 99.541a8.304 8.304 0 01-5.521 2.676 8.291 8.291 0 012.186-5.734 8.292 8.292 0 015.521-2.674 8.29 8.29 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__z"
					gradientUnits="userSpaceOnUse"
					x1={-62.612}
					y1={264.438}
					x2={-62.612}
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
					d="M50.363 97.9a8.296 8.296 0 004.779 3.85 8.304 8.304 0 00-.838-6.078 8.3 8.3 0 00-4.781-3.85 8.315 8.315 0 00.84 6.078z"
				/>
				<LinearGradient
					id="prefix__A"
					gradientUnits="userSpaceOnUse"
					x1={-50.361}
					y1={264.44}
					x2={-50.361}
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
					d="M65.865 90.338a8.29 8.29 0 01-5.982 1.365 8.303 8.303 0 013.42-5.096 8.281 8.281 0 015.982-1.363 8.266 8.266 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__B"
					gradientUnits="userSpaceOnUse"
					x1={-59.359}
					y1={264.423}
					x2={-59.359}
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
					d="M53.416 85.781a8.302 8.302 0 003.789 4.826 8.286 8.286 0 00.551-6.113 8.297 8.297 0 00-3.793-4.826 8.315 8.315 0 00-.547 6.113z"
				/>
				<LinearGradient
					id="prefix__C"
					gradientUnits="userSpaceOnUse"
					x1={-45.554}
					y1={264.427}
					x2={-45.554}
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
					d="M70.223 81.898a8.306 8.306 0 01-6.139-.016 8.3 8.3 0 014.48-4.195 8.276 8.276 0 016.135.018 8.282 8.282 0 01-4.476 4.193z"
				/>
				<LinearGradient
					id="prefix__D"
					gradientUnits="userSpaceOnUse"
					x1={-53.57}
					y1={264.433}
					x2={-53.57}
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
					d="M59.117 74.658a8.297 8.297 0 002.605 5.555 8.296 8.296 0 001.912-5.832 8.301 8.301 0 00-2.609-5.555 8.307 8.307 0 00-1.908 5.832z"
				/>
			</G>
			<G>
				<LinearGradient
					id="prefix__E"
					gradientUnits="userSpaceOnUse"
					x1={-25.324}
					y1={307.056}
					x2={-25.324}
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
					d="M94.396 96.451c-1.312-1.312-2.922-1.979-4.781-1.979-1.853 0-3.457.666-4.77 1.979-1.312 1.312-1.978 2.917-1.978 4.77v5.532c0 1.853.666 3.458 1.978 4.771 1.313 1.312 2.917 1.978 4.77 1.978 1.859 0 3.469-.665 4.781-1.978s1.978-2.918 1.978-4.771v-5.532c-.001-1.853-.666-3.457-1.978-4.77zm-4.782 14.01c-1.03 0-1.887-.354-2.619-1.084-.732-.729-1.088-1.587-1.088-2.624v-5.532c0-1.03.355-1.884 1.088-2.612.732-.729 1.59-1.084 2.619-1.084 1.038 0 1.897.354 2.631 1.084.731.729 1.088 1.583 1.088 2.612v5.532c0 1.037-.356 1.896-1.088 2.624s-1.593 1.084-2.631 1.084z"
				/>
				<LinearGradient
					id="prefix__F"
					gradientUnits="userSpaceOnUse"
					x1={-32.578}
					y1={295.738}
					x2={-18.071}
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
					d="M89.615 114.001c-1.989 0-3.712-.715-5.124-2.124-1.41-1.41-2.125-3.134-2.125-5.124v-5.532c0-1.99.715-3.713 2.125-5.123 1.41-1.41 3.134-2.125 5.124-2.125 1.997 0 3.724.715 5.134 2.125 1.409 1.41 2.124 3.133 2.125 5.123v5.532c0 1.99-.715 3.714-2.125 5.124-1.408 1.409-3.136 2.124-5.134 2.124zm0-19.029c-1.714 0-3.201.617-4.417 1.833-1.215 1.215-1.832 2.701-1.832 4.416v5.532c0 1.715.616 3.201 1.832 4.417 1.216 1.215 2.702 1.831 4.417 1.831 1.723 0 3.212-.616 4.427-1.831 1.215-1.216 1.832-2.702 1.832-4.417v-5.532c-.001-1.715-.617-3.201-1.832-4.416-1.215-1.216-2.705-1.833-4.427-1.833zm-.001 15.989c-1.17 0-2.143-.402-2.972-1.23-.831-.826-1.235-1.801-1.235-2.978v-5.532c0-1.17.404-2.141 1.235-2.966.831-.827 1.802-1.229 2.971-1.229 1.176 0 2.152.402 2.984 1.229.832.829 1.235 1.799 1.235 2.966v5.532c0 1.177-.404 2.151-1.235 2.979-.83.827-1.806 1.229-2.983 1.229zm0-12.936c-.891 0-1.632.307-2.266.938-.642.638-.941 1.354-.941 2.257v5.532c0 .91.299 1.631.94 2.27.642.641 1.362.938 2.266.938.899 0 1.644-.307 2.279-.938.642-.639.94-1.359.94-2.27v-5.532c0-.9-.299-1.618-.941-2.258-.642-.639-1.366-.937-2.277-.937z"
				/>
			</G>
		</Svg>
	);
}

export default SvgComponent;

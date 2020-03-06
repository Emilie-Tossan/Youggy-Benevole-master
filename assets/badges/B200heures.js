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
				x1={-39.912}
				y1={284.231}
				x2={-39.912}
				y2={307.066}
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
				d="M71.894 107.096c1.211-.902 2.245-1.674 3.1-2.314a16.371 16.371 0 002.292-2.062c.672-.734 1.009-1.552 1.009-2.454 0-.898-.317-1.664-.953-2.296a3.148 3.148 0 00-2.303-.947c-.885 0-1.647.315-2.286.947-.543.542-.881 1.479-1.015 2.808l-2.309-.833c.238-1.547.792-2.76 1.662-3.637 1.093-1.101 2.409-1.65 3.948-1.65 1.553 0 2.875.547 3.964 1.64 1.089 1.094 1.634 2.417 1.634 3.969 0 1.533-.528 2.867-1.583 4.003a17.211 17.211 0 01-2.336 2.08c-.888.666-1.875 1.405-2.961 2.225-.951.705-1.483 1.316-1.594 1.83h8.475v2.318H69.452c.417-2.85 1.23-4.725 2.442-5.627z"
			/>
			<LinearGradient
				id="prefix__b"
				gradientUnits="userSpaceOnUse"
				x1={-46.649}
				y1={296.036}
				x2={-33.306}
				y2={296.036}
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
				d="M75.039 94.656c1.553 0 2.875.547 3.964 1.64 1.089 1.094 1.634 2.417 1.634 3.969 0 1.533-.528 2.867-1.583 4.002a17.211 17.211 0 01-2.336 2.08c-.888.666-1.875 1.406-2.961 2.225-.951.705-1.483 1.316-1.594 1.83h8.475v2.318H69.452c.417-2.848 1.23-4.723 2.442-5.625s2.245-1.674 3.1-2.314a16.371 16.371 0 002.292-2.062c.672-.734 1.009-1.552 1.009-2.454 0-.898-.317-1.664-.953-2.296a3.148 3.148 0 00-2.303-.947c-.885 0-1.647.315-2.286.947-.543.542-.881 1.479-1.015 2.808l-2.309-.833c.238-1.547.792-2.76 1.662-3.637 1.093-1.101 2.409-1.651 3.948-1.651m0-1c-1.809 0-3.375.655-4.657 1.946-1.019 1.027-1.671 2.436-1.94 4.189l-.125.812.773.278 2.309.837 1.207.436.128-1.276c.136-1.357.47-1.946.726-2.202.451-.446.954-.655 1.58-.655a2.14 2.14 0 011.598.657c.449.445.658.949.658 1.586 0 .646-.245 1.228-.747 1.779a15.324 15.324 0 01-2.151 1.936c-.857.644-1.89 1.414-3.1 2.314-1.446 1.078-2.373 3.133-2.834 6.283l-.168 1.145h13.342v-4.318h-7.319a.156.156 0 01.035-.024c1.091-.823 2.078-1.563 2.965-2.229a18.456 18.456 0 002.469-2.199c1.228-1.322 1.851-2.898 1.851-4.683 0-1.818-.647-3.391-1.925-4.674-1.282-1.288-2.854-1.938-4.675-1.938z"
			/>
			<LinearGradient
				id="prefix__c"
				gradientUnits="userSpaceOnUse"
				x1={-8.243}
				y1={307.372}
				x2={-8.243}
				y2={284.273}
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
				d="M111.477 96.134c-1.312-1.312-2.922-1.979-4.781-1.979-1.854 0-3.457.666-4.77 1.979-1.312 1.312-1.978 2.917-1.978 4.77v5.531c0 1.854.666 3.459 1.978 4.771s2.916 1.978 4.77 1.978c1.859 0 3.47-.666 4.781-1.978 1.312-1.312 1.979-2.918 1.979-4.771v-5.531c-.001-1.853-.667-3.457-1.979-4.77zm-4.782 14.011c-1.031 0-1.887-.354-2.619-1.084-.732-.729-1.088-1.586-1.088-2.625v-5.531c0-1.029.354-1.882 1.088-2.612.732-.729 1.59-1.084 2.619-1.084 1.037 0 1.896.355 2.631 1.084.732.729 1.088 1.583 1.088 2.612v5.531c0 1.039-.355 1.896-1.088 2.625-.733.729-1.594 1.084-2.631 1.084z"
			/>
			<LinearGradient
				id="prefix__d"
				gradientUnits="userSpaceOnUse"
				x1={-15.497}
				y1={296.055}
				x2={-0.989}
				y2={296.055}
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
				d="M106.695 113.684c-1.989 0-3.713-.715-5.123-2.124-1.41-1.408-2.125-3.133-2.125-5.124v-5.531c0-1.991.715-3.715 2.125-5.124 1.41-1.41 3.134-2.125 5.123-2.125 1.998 0 3.726.715 5.135 2.125 1.409 1.41 2.125 3.133 2.126 5.124v5.531c0 1.99-.715 3.715-2.126 5.124-1.409 1.409-3.137 2.124-5.135 2.124zm0-19.028c-1.715 0-3.2.616-4.416 1.832-1.216 1.214-1.832 2.7-1.832 4.417v5.531c0 1.717.616 3.202 1.832 4.417s2.702 1.831 4.416 1.831c1.723 0 3.213-.616 4.428-1.831 1.217-1.216 1.833-2.701 1.833-4.417v-5.531c-.001-1.715-.617-3.201-1.833-4.417-1.215-1.216-2.704-1.832-4.428-1.832zm0 15.989c-1.169 0-2.142-.402-2.972-1.229-.831-.827-1.235-1.802-1.235-2.979v-5.531c0-1.169.404-2.14 1.235-2.967s1.803-1.229 2.972-1.229c1.173 0 2.148.402 2.982 1.229.832.828 1.236 1.798 1.236 2.967v5.531c0 1.178-.404 2.152-1.235 2.979-.831.826-1.807 1.229-2.983 1.229zm0-12.937c-.903 0-1.623.298-2.267.938-.642.639-.94 1.356-.94 2.258v5.531c0 .911.299 1.632.94 2.271.643.641 1.363.938 2.267.938.91 0 1.635-.298 2.278-.938.642-.639.94-1.359.94-2.271v-5.531c0-.902-.299-1.619-.94-2.258-.645-.64-1.369-.938-2.278-.938z"
			/>
			<G>
				<LinearGradient
					id="prefix__e"
					gradientUnits="userSpaceOnUse"
					x1={9.431}
					y1={284.116}
					x2={9.431}
					y2={307.769}
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
					d="M128.521 112.721v-8.092h-8.045v8.092h-2.334V94.62h2.334v7.583h8.045V94.62h2.088v18.101h-2.088z"
				/>
				<LinearGradient
					id="prefix__f"
					gradientUnits="userSpaceOnUse"
					x1={2.198}
					y1={296.055}
					x2={16.665}
					y2={296.055}
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
					d="M130.609 94.62v18.101h-2.088v-8.092h-8.045v8.092h-2.334V94.62h2.334v7.583h8.045V94.62h2.088m1-1h-4.088v7.583h-6.045V93.62h-4.334v20.101h4.334V105.629h6.045V113.721h4.088V93.62z"
				/>
			</G>
			<G opacity={0.4}>
				<LinearGradient
					id="prefix__g"
					gradientUnits="userSpaceOnUse"
					x1={18.975}
					y1={264.749}
					x2={18.975}
					y2={330.755}
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
					d="M131.66 126.645a8.302 8.302 0 002.609 5.556 8.29 8.29 0 001.908-5.83 8.284 8.284 0 00-2.609-5.554 8.308 8.308 0 00-1.908 5.828z"
				/>
				<LinearGradient
					id="prefix__h"
					gradientUnits="userSpaceOnUse"
					x1={27.143}
					y1={264.747}
					x2={27.143}
					y2={330.759}
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
					d="M142.916 133.65a8.286 8.286 0 01-6.135-.014 8.284 8.284 0 014.477-4.199 8.306 8.306 0 016.137.018 8.305 8.305 0 01-4.479 4.195z"
				/>
				<LinearGradient
					id="prefix__i"
					gradientUnits="userSpaceOnUse"
					x1={22.854}
					y1={264.75}
					x2={22.854}
					y2={330.75}
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
					d="M135.629 118.018a8.291 8.291 0 003.791 4.826 8.291 8.291 0 00.549-6.111 8.305 8.305 0 00-3.791-4.826 8.28 8.28 0 00-.549 6.111z"
				/>
				<LinearGradient
					id="prefix__j"
					gradientUnits="userSpaceOnUse"
					x1={31.948}
					y1={264.752}
					x2={31.948}
					y2={330.742}
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
					d="M148.174 122.311a8.296 8.296 0 01-5.982 1.367 8.298 8.298 0 013.416-5.098 8.294 8.294 0 015.986-1.363 8.326 8.326 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__k"
					gradientUnits="userSpaceOnUse"
					x1={24.579}
					y1={264.75}
					x2={24.579}
					y2={330.75}
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
					d="M137.555 108.719a8.302 8.302 0 004.779 3.85 8.295 8.295 0 00-.842-6.078 8.292 8.292 0 00-4.779-3.85 8.306 8.306 0 00.842 6.078z"
				/>
				<LinearGradient
					id="prefix__l"
					gradientUnits="userSpaceOnUse"
					x1={34.129}
					y1={264.749}
					x2={34.129}
					y2={330.749}
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
					d="M150.742 110.08a8.307 8.307 0 01-5.521 2.678 8.294 8.294 0 012.184-5.736 8.302 8.302 0 015.523-2.674 8.303 8.303 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__m"
					gradientUnits="userSpaceOnUse"
					x1={24.063}
					y1={264.748}
					x2={24.063}
					y2={330.748}
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
					d="M137.34 99.225a8.303 8.303 0 005.521 2.675c.027-2.044-.693-4.107-2.187-5.734s-3.481-2.525-5.521-2.674a8.291 8.291 0 002.187 5.733z"
				/>
				<LinearGradient
					id="prefix__n"
					gradientUnits="userSpaceOnUse"
					x1={33.581}
					y1={264.751}
					x2={33.581}
					y2={330.745}
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
					d="M150.494 97.584a8.29 8.29 0 01-4.777 3.85c-.484-1.987-.25-4.157.838-6.079s2.824-3.242 4.781-3.85a8.308 8.308 0 01-.842 6.079z"
				/>
				<LinearGradient
					id="prefix__o"
					gradientUnits="userSpaceOnUse"
					x1={21.331}
					y1={264.755}
					x2={21.331}
					y2={330.745}
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
					d="M134.994 90.022a8.29 8.29 0 005.982 1.365 8.311 8.311 0 00-3.42-5.096 8.281 8.281 0 00-5.982-1.363 8.274 8.274 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__p"
					gradientUnits="userSpaceOnUse"
					x1={30.328}
					y1={264.744}
					x2={30.328}
					y2={330.75}
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
					d="M147.443 85.465a8.302 8.302 0 01-3.789 4.826 8.296 8.296 0 01-.553-6.113 8.304 8.304 0 013.795-4.826 8.315 8.315 0 01.547 6.113z"
				/>
				<LinearGradient
					id="prefix__q"
					gradientUnits="userSpaceOnUse"
					x1={16.523}
					y1={264.732}
					x2={16.523}
					y2={330.75}
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
					d="M130.637 81.583a8.306 8.306 0 006.139-.016 8.302 8.302 0 00-4.479-4.195 8.281 8.281 0 00-6.137.018 8.288 8.288 0 004.477 4.193z"
				/>
				<LinearGradient
					id="prefix__r"
					gradientUnits="userSpaceOnUse"
					x1={24.539}
					y1={264.748}
					x2={24.539}
					y2={330.748}
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
					d="M141.742 74.342a8.297 8.297 0 01-2.605 5.555 8.286 8.286 0 01-1.912-5.832 8.301 8.301 0 012.609-5.555 8.302 8.302 0 011.908 5.832z"
				/>
				<LinearGradient
					id="prefix__s"
					gradientUnits="userSpaceOnUse"
					x1={-48.021}
					y1={264.749}
					x2={-48.021}
					y2={330.755}
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
					d="M69.183 126.645a8.293 8.293 0 01-2.609 5.556 8.29 8.29 0 01-1.908-5.83 8.28 8.28 0 012.609-5.554 8.294 8.294 0 011.908 5.828z"
				/>
				<LinearGradient
					id="prefix__t"
					gradientUnits="userSpaceOnUse"
					x1={-56.19}
					y1={264.747}
					x2={-56.19}
					y2={330.759}
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
					d="M57.927 133.65a8.286 8.286 0 006.135-.014 8.284 8.284 0 00-4.477-4.199 8.306 8.306 0 00-6.137.018 8.309 8.309 0 004.479 4.195z"
				/>
				<LinearGradient
					id="prefix__u"
					gradientUnits="userSpaceOnUse"
					x1={-51.902}
					y1={264.75}
					x2={-51.902}
					y2={330.75}
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
					d="M65.214 118.018a8.291 8.291 0 01-3.791 4.826 8.291 8.291 0 01-.549-6.111 8.305 8.305 0 013.791-4.826 8.29 8.29 0 01.549 6.111z"
				/>
				<LinearGradient
					id="prefix__v"
					gradientUnits="userSpaceOnUse"
					x1={-60.996}
					y1={264.752}
					x2={-60.996}
					y2={330.742}
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
					d="M52.669 122.311a8.296 8.296 0 005.982 1.367 8.29 8.29 0 00-3.416-5.098 8.294 8.294 0 00-5.986-1.363 8.326 8.326 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__w"
					gradientUnits="userSpaceOnUse"
					x1={-53.626}
					y1={264.75}
					x2={-53.626}
					y2={330.75}
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
					d="M63.289 108.719a8.302 8.302 0 01-4.779 3.85 8.295 8.295 0 01.842-6.078 8.292 8.292 0 014.779-3.85 8.31 8.31 0 01-.842 6.078z"
				/>
				<LinearGradient
					id="prefix__x"
					gradientUnits="userSpaceOnUse"
					x1={-63.176}
					y1={264.749}
					x2={-63.176}
					y2={330.749}
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
					d="M50.101 110.08a8.307 8.307 0 005.521 2.678 8.294 8.294 0 00-2.184-5.736 8.302 8.302 0 00-5.523-2.674 8.313 8.313 0 002.186 5.732z"
				/>
				<LinearGradient
					id="prefix__y"
					gradientUnits="userSpaceOnUse"
					x1={-53.11}
					y1={264.748}
					x2={-53.11}
					y2={330.748}
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
					d="M63.503 99.225a8.303 8.303 0 01-5.521 2.675 8.293 8.293 0 012.186-5.734 8.292 8.292 0 015.521-2.674 8.281 8.281 0 01-2.186 5.733z"
				/>
				<LinearGradient
					id="prefix__z"
					gradientUnits="userSpaceOnUse"
					x1={-62.628}
					y1={264.751}
					x2={-62.628}
					y2={330.745}
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
					d="M50.347 97.584a8.3 8.3 0 004.779 3.85c.484-1.987.25-4.157-.838-6.079s-2.824-3.242-4.781-3.85a8.317 8.317 0 00.84 6.079z"
				/>
				<LinearGradient
					id="prefix__A"
					gradientUnits="userSpaceOnUse"
					x1={-50.377}
					y1={264.755}
					x2={-50.377}
					y2={330.745}
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
					d="M65.849 90.022a8.29 8.29 0 01-5.982 1.365 8.303 8.303 0 013.42-5.096 8.281 8.281 0 015.982-1.363 8.274 8.274 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__B"
					gradientUnits="userSpaceOnUse"
					x1={-59.375}
					y1={264.744}
					x2={-59.375}
					y2={330.75}
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
					d="M53.4 85.465a8.302 8.302 0 003.789 4.826 8.286 8.286 0 00.551-6.113 8.297 8.297 0 00-3.793-4.826 8.315 8.315 0 00-.547 6.113z"
				/>
				<LinearGradient
					id="prefix__C"
					gradientUnits="userSpaceOnUse"
					x1={-45.57}
					y1={264.732}
					x2={-45.57}
					y2={330.75}
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
					d="M70.207 81.583a8.306 8.306 0 01-6.139-.016 8.3 8.3 0 014.48-4.195 8.276 8.276 0 016.135.018 8.29 8.29 0 01-4.476 4.193z"
				/>
				<LinearGradient
					id="prefix__D"
					gradientUnits="userSpaceOnUse"
					x1={-53.586}
					y1={264.748}
					x2={-53.586}
					y2={330.748}
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
					d="M59.101 74.342a8.297 8.297 0 002.605 5.555 8.296 8.296 0 001.912-5.832 8.301 8.301 0 00-2.609-5.555 8.307 8.307 0 00-1.908 5.832z"
				/>
			</G>
			<G>
				<LinearGradient
					id="prefix__E"
					gradientUnits="userSpaceOnUse"
					x1={-24.341}
					y1={307.372}
					x2={-24.341}
					y2={284.273}
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
					d="M95.379 96.135c-1.312-1.312-2.922-1.979-4.781-1.979-1.853 0-3.457.666-4.77 1.979-1.312 1.312-1.978 2.917-1.978 4.769v5.533c0 1.852.666 3.457 1.978 4.77 1.313 1.312 2.917 1.977 4.77 1.977 1.859 0 3.469-.664 4.781-1.977s1.978-2.918 1.978-4.77v-5.533c0-1.852-.665-3.456-1.978-4.769zm-4.781 14.01c-1.03 0-1.887-.354-2.619-1.084-.732-.729-1.088-1.586-1.088-2.623v-5.533c0-1.029.355-1.882 1.088-2.611.732-.729 1.59-1.084 2.619-1.084 1.038 0 1.897.354 2.631 1.084.731.729 1.088 1.583 1.088 2.611v5.533c0 1.037-.356 1.896-1.088 2.623-.732.73-1.593 1.084-2.631 1.084z"
				/>
				<LinearGradient
					id="prefix__F"
					gradientUnits="userSpaceOnUse"
					x1={-31.595}
					y1={296.055}
					x2={-17.088}
					y2={296.055}
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
					d="M90.598 113.684c-1.991 0-3.714-.714-5.124-2.123-1.41-1.41-2.125-3.134-2.125-5.123v-5.533c0-1.99.715-3.713 2.125-5.123 1.41-1.411 3.134-2.126 5.124-2.126 1.997 0 3.724.715 5.134 2.126 1.41 1.409 2.125 3.133 2.125 5.123v5.533c0 1.989-.715 3.713-2.125 5.123-1.408 1.409-3.135 2.123-5.134 2.123zm0-19.028c-1.715 0-3.201.617-4.417 1.833-1.215 1.215-1.832 2.701-1.832 4.416v5.533c0 1.715.616 3.2 1.832 4.416 1.215 1.214 2.701 1.83 4.417 1.83 1.724 0 3.213-.615 4.427-1.83 1.215-1.216 1.832-2.701 1.832-4.416v-5.533c0-1.715-.616-3.201-1.832-4.416-1.215-1.217-2.705-1.833-4.427-1.833zm0 15.989c-1.171 0-2.143-.402-2.972-1.23-.831-.826-1.235-1.801-1.235-2.977v-5.533c0-1.169.404-2.139 1.235-2.966.831-.827 1.803-1.229 2.972-1.229 1.176 0 2.152.402 2.983 1.229.832.829 1.235 1.799 1.235 2.966v5.533c0 1.178-.404 2.151-1.235 2.978-.828.826-1.804 1.229-2.983 1.229zm0-12.936c-.891 0-1.632.307-2.266.938-.642.638-.941 1.355-.941 2.257v5.533c0 .909.299 1.63.94 2.269.642.641 1.362.938 2.267.938.913 0 1.637-.298 2.278-.938.642-.639.941-1.359.941-2.27v-5.533c0-.9-.299-1.617-.941-2.257-.643-.639-1.367-.937-2.278-.937z"
				/>
			</G>
		</Svg>
	);
}

export default SvgComponent;

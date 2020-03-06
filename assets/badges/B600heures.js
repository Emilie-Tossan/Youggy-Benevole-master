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
				x1={-40.262}
				y1={283.04}
				x2={-40.262}
				y2={308.752}
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
				d="M75.318 100.304c-.859 0-1.6.108-2.218.324 1.174-1.576 2.838-3.486 4.971-5.695l.531-.548h-4.025l-.097.109c-1.998 2.249-3.607 4.226-4.784 5.877-1.202 1.689-1.812 3.671-1.812 5.926.008 2.262.661 4.059 1.939 5.348 1.332 1.322 2.957 1.994 4.832 1.994 1.882 0 3.508-.675 4.833-2.002 1.324-1.326 1.995-2.949 1.995-4.824 0-1.883-.671-3.513-1.995-4.844-1.106-1.104-2.509-1.665-4.17-1.665zm-.664 10.258c-1.051 0-1.921-.356-2.662-1.099-.74-.735-1.101-1.604-1.101-2.651 0-1.053.361-1.92 1.101-2.658.741-.734 1.611-1.094 2.662-1.094 1.042 0 1.91.358 2.651 1.094.74.738 1.1 1.605 1.1 2.658 0 1.047-.36 1.916-1.1 2.651-.741.742-1.609 1.099-2.651 1.099z"
			/>
			<LinearGradient
				id="prefix__b"
				gradientUnits="userSpaceOnUse"
				x1={-47.561}
				y1={295.713}
				x2={-32.962}
				y2={295.713}
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
				d="M74.655 114.139c-2.01 0-3.754-.72-5.184-2.14-1.377-1.389-2.078-3.306-2.087-5.7 0-2.35.641-4.44 1.905-6.218 1.19-1.668 2.811-3.66 4.817-5.919l.247-.277h5.43l-1.354 1.396c-1.643 1.701-3.015 3.234-4.095 4.573.311-.034.639-.05.983-.05 1.797 0 3.319.609 4.523 1.811 1.422 1.429 2.142 3.177 2.142 5.197 0 2.013-.72 3.755-2.141 5.178-1.423 1.426-3.168 2.149-5.186 2.149zm.146-19.254c-1.958 2.208-3.54 4.151-4.698 5.776-1.141 1.604-1.719 3.5-1.719 5.636.008 2.121.611 3.803 1.794 4.996 1.233 1.224 2.74 1.846 4.477 1.846 1.743 0 3.25-.624 4.479-1.855 1.227-1.229 1.849-2.732 1.849-4.471 0-1.746-.622-3.258-1.85-4.491-1.008-1.006-2.292-1.518-3.815-1.518-.8 0-1.491.1-2.053.296l-1.542.539.976-1.31c1.141-1.532 2.729-3.362 4.724-5.444h-2.622zm-.147 16.177c-1.193 0-2.179-.407-3.016-1.245-.838-.833-1.247-1.816-1.247-3.005 0-1.189.408-2.175 1.248-3.013.842-.834 1.828-1.239 3.015-1.239 1.181 0 2.163.405 3.003 1.239.84.838 1.248 1.823 1.248 3.013 0 1.188-.408 2.172-1.247 3.006-.837.837-1.82 1.244-3.004 1.244zm0-7.501c-.923 0-1.657.302-2.31.949-.65.647-.953 1.38-.953 2.303 0 .908.312 1.659.954 2.297.649.65 1.383.953 2.309.953.918 0 1.648-.303 2.298-.952.642-.638.953-1.39.953-2.298 0-.923-.303-1.655-.953-2.305a3.119 3.119 0 00-2.298-.947z"
			/>
			<LinearGradient
				id="prefix__c"
				gradientUnits="userSpaceOnUse"
				x1={-8.243}
				y1={307.119}
				x2={-8.243}
				y2={284.02}
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
				d="M111.477 96.387c-1.312-1.312-2.922-1.978-4.781-1.978-1.854 0-3.457.666-4.77 1.978-1.312 1.312-1.978 2.917-1.978 4.771v5.531c0 1.854.666 3.457 1.978 4.771 1.312 1.312 2.916 1.978 4.77 1.978 1.859 0 3.47-.666 4.781-1.978 1.312-1.312 1.979-2.917 1.979-4.771v-5.531c-.001-1.854-.667-3.459-1.979-4.771zm-4.782 14.009c-1.031 0-1.887-.354-2.619-1.084-.732-.729-1.088-1.586-1.088-2.625v-5.531c0-1.029.354-1.883 1.088-2.612.732-.729 1.59-1.084 2.619-1.084 1.037 0 1.896.355 2.631 1.084.732.729 1.088 1.583 1.088 2.612v5.531c0 1.039-.355 1.896-1.088 2.625-.732.73-1.594 1.084-2.631 1.084z"
			/>
			<LinearGradient
				id="prefix__d"
				gradientUnits="userSpaceOnUse"
				x1={-15.497}
				y1={295.801}
				x2={-0.989}
				y2={295.801}
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
				d="M106.695 113.938c-1.989 0-3.713-.715-5.123-2.124-1.41-1.411-2.125-3.135-2.125-5.124v-5.531c0-1.992.715-3.716 2.125-5.125 1.41-1.41 3.134-2.125 5.123-2.125 1.998 0 3.726.715 5.135 2.125 1.409 1.409 2.125 3.133 2.126 5.125v5.531c0 1.99-.715 3.715-2.126 5.124-1.409 1.409-3.137 2.124-5.135 2.124zm0-19.029c-1.715 0-3.2.616-4.416 1.832-1.216 1.214-1.832 2.701-1.832 4.417v5.531c0 1.715.617 3.201 1.832 4.417 1.216 1.215 2.702 1.831 4.416 1.831 1.723 0 3.213-.616 4.428-1.831 1.217-1.216 1.833-2.701 1.833-4.417v-5.531c-.001-1.717-.617-3.203-1.833-4.417-1.215-1.216-2.705-1.832-4.428-1.832zm0 15.987c-1.169 0-2.142-.402-2.972-1.229-.831-.827-1.235-1.802-1.235-2.979v-5.531c0-1.17.404-2.141 1.235-2.967.831-.827 1.803-1.229 2.972-1.229 1.173 0 2.148.402 2.982 1.229.832.828 1.236 1.798 1.236 2.967v5.531c0 1.178-.404 2.152-1.235 2.979-.829.827-1.806 1.229-2.983 1.229zm0-12.936c-.903 0-1.623.298-2.267.938-.642.638-.94 1.355-.94 2.258v5.531c0 .911.299 1.632.94 2.271.643.641 1.363.938 2.267.938.911 0 1.636-.298 2.278-.938.642-.639.94-1.359.94-2.271v-5.531c0-.902-.299-1.619-.94-2.258-.645-.64-1.369-.938-2.278-.938z"
			/>
			<G>
				<LinearGradient
					id="prefix__e"
					gradientUnits="userSpaceOnUse"
					x1={9.431}
					y1={283.86}
					x2={9.431}
					y2={307.516}
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
					d="M128.521 112.975v-8.094h-8.045v8.094h-2.334V94.872h2.334v7.583h8.045v-7.583h2.088v18.103h-2.088z"
				/>
				<LinearGradient
					id="prefix__f"
					gradientUnits="userSpaceOnUse"
					x1={2.198}
					y1={295.801}
					x2={16.665}
					y2={295.801}
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
					d="M130.609 94.872v18.103h-2.088v-8.094h-8.045v8.094h-2.334V94.872h2.334v7.583h8.045v-7.583h2.088m1-1h-4.088v7.583h-6.045v-7.583h-4.334v20.103h4.334V105.881h6.045V113.975h4.088V93.872z"
				/>
			</G>
			<G opacity={0.4}>
				<LinearGradient
					id="prefix__g"
					gradientUnits="userSpaceOnUse"
					x1={18.975}
					y1={264.497}
					x2={18.975}
					y2={330.491}
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
					d="M131.66 126.896a8.3 8.3 0 002.609 5.555 8.288 8.288 0 001.908-5.83 8.28 8.28 0 00-2.609-5.553 8.31 8.31 0 00-1.908 5.828z"
				/>
				<LinearGradient
					id="prefix__h"
					gradientUnits="userSpaceOnUse"
					x1={27.143}
					y1={264.495}
					x2={27.143}
					y2={330.495}
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
					d="M142.916 133.902a8.286 8.286 0 01-6.135-.014 8.284 8.284 0 014.477-4.199 8.306 8.306 0 016.137.018 8.305 8.305 0 01-4.479 4.195z"
				/>
				<LinearGradient
					id="prefix__i"
					gradientUnits="userSpaceOnUse"
					x1={22.854}
					y1={264.499}
					x2={22.854}
					y2={330.493}
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
					d="M135.629 118.27a8.291 8.291 0 003.791 4.826 8.291 8.291 0 00.549-6.111 8.303 8.303 0 00-3.791-4.825 8.277 8.277 0 00-.549 6.11z"
				/>
				<LinearGradient
					id="prefix__j"
					gradientUnits="userSpaceOnUse"
					x1={31.948}
					y1={264.494}
					x2={31.948}
					y2={330.504}
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
					d="M148.174 122.562a8.296 8.296 0 01-5.982 1.367 8.3 8.3 0 013.416-5.099 8.284 8.284 0 015.986-1.362 8.32 8.32 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__k"
					gradientUnits="userSpaceOnUse"
					x1={24.579}
					y1={264.505}
					x2={24.579}
					y2={330.485}
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
					d="M137.555 108.971a8.302 8.302 0 004.779 3.85 8.291 8.291 0 00-.842-6.077 8.279 8.279 0 00-4.779-3.849 8.302 8.302 0 00.842 6.076z"
				/>
				<LinearGradient
					id="prefix__l"
					gradientUnits="userSpaceOnUse"
					x1={34.129}
					y1={264.501}
					x2={34.129}
					y2={330.493}
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
					d="M150.742 110.332a8.307 8.307 0 01-5.521 2.678 8.294 8.294 0 012.184-5.736 8.302 8.302 0 015.523-2.674 8.303 8.303 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__m"
					gradientUnits="userSpaceOnUse"
					x1={24.063}
					y1={264.493}
					x2={24.063}
					y2={330.497}
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
					d="M137.34 99.478a8.304 8.304 0 005.521 2.676c.027-2.045-.693-4.107-2.187-5.734s-3.481-2.525-5.521-2.674a8.292 8.292 0 002.187 5.732z"
				/>
				<LinearGradient
					id="prefix__n"
					gradientUnits="userSpaceOnUse"
					x1={33.581}
					y1={264.497}
					x2={33.581}
					y2={330.494}
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
					d="M150.494 97.837a8.296 8.296 0 01-4.777 3.851c-.484-1.986-.25-4.157.838-6.079s2.824-3.242 4.781-3.85a8.307 8.307 0 01-.842 6.078z"
				/>
				<LinearGradient
					id="prefix__o"
					gradientUnits="userSpaceOnUse"
					x1={21.331}
					y1={264.503}
					x2={21.331}
					y2={330.493}
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
					d="M134.994 90.274a8.29 8.29 0 005.982 1.365 8.311 8.311 0 00-3.42-5.096 8.281 8.281 0 00-5.982-1.363 8.272 8.272 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__p"
					gradientUnits="userSpaceOnUse"
					x1={30.328}
					y1={264.49}
					x2={30.328}
					y2={330.496}
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
					d="M147.443 85.718a8.302 8.302 0 01-3.789 4.826 8.296 8.296 0 01-.553-6.113 8.304 8.304 0 013.795-4.826 8.315 8.315 0 01.547 6.113z"
				/>
				<LinearGradient
					id="prefix__q"
					gradientUnits="userSpaceOnUse"
					x1={16.523}
					y1={264.481}
					x2={16.523}
					y2={330.498}
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
					d="M130.637 81.835a8.306 8.306 0 006.139-.016 8.302 8.302 0 00-4.479-4.195 8.281 8.281 0 00-6.137.018 8.288 8.288 0 004.477 4.193z"
				/>
				<LinearGradient
					id="prefix__r"
					gradientUnits="userSpaceOnUse"
					x1={24.539}
					y1={264.495}
					x2={24.539}
					y2={330.495}
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
					d="M141.742 74.595a8.297 8.297 0 01-2.605 5.555 8.286 8.286 0 01-1.912-5.832 8.301 8.301 0 012.609-5.555 8.302 8.302 0 011.908 5.832z"
				/>
				<LinearGradient
					id="prefix__s"
					gradientUnits="userSpaceOnUse"
					x1={-48.021}
					y1={264.497}
					x2={-48.021}
					y2={330.491}
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
					d="M69.183 126.896a8.29 8.29 0 01-2.609 5.555 8.288 8.288 0 01-1.908-5.83 8.275 8.275 0 012.609-5.553 8.297 8.297 0 011.908 5.828z"
				/>
				<LinearGradient
					id="prefix__t"
					gradientUnits="userSpaceOnUse"
					x1={-56.19}
					y1={264.495}
					x2={-56.19}
					y2={330.495}
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
					d="M57.927 133.902a8.286 8.286 0 006.135-.014 8.284 8.284 0 00-4.477-4.199 8.306 8.306 0 00-6.137.018 8.309 8.309 0 004.479 4.195z"
				/>
				<LinearGradient
					id="prefix__u"
					gradientUnits="userSpaceOnUse"
					x1={-51.902}
					y1={264.499}
					x2={-51.902}
					y2={330.493}
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
					d="M65.214 118.27a8.291 8.291 0 01-3.791 4.826 8.291 8.291 0 01-.549-6.111 8.303 8.303 0 013.791-4.825 8.287 8.287 0 01.549 6.11z"
				/>
				<LinearGradient
					id="prefix__v"
					gradientUnits="userSpaceOnUse"
					x1={-60.996}
					y1={264.494}
					x2={-60.996}
					y2={330.504}
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
					d="M52.669 122.562a8.296 8.296 0 005.982 1.367 8.292 8.292 0 00-3.416-5.099 8.284 8.284 0 00-5.986-1.362 8.32 8.32 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__w"
					gradientUnits="userSpaceOnUse"
					x1={-53.626}
					y1={264.505}
					x2={-53.626}
					y2={330.485}
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
					d="M63.289 108.971a8.302 8.302 0 01-4.779 3.85 8.291 8.291 0 01.842-6.077 8.279 8.279 0 014.779-3.849 8.307 8.307 0 01-.842 6.076z"
				/>
				<LinearGradient
					id="prefix__x"
					gradientUnits="userSpaceOnUse"
					x1={-63.176}
					y1={264.501}
					x2={-63.176}
					y2={330.493}
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
					d="M50.101 110.332a8.307 8.307 0 005.521 2.678 8.294 8.294 0 00-2.184-5.736 8.302 8.302 0 00-5.523-2.674 8.313 8.313 0 002.186 5.732z"
				/>
				<LinearGradient
					id="prefix__y"
					gradientUnits="userSpaceOnUse"
					x1={-53.11}
					y1={264.493}
					x2={-53.11}
					y2={330.497}
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
					d="M63.503 99.478a8.304 8.304 0 01-5.521 2.676 8.291 8.291 0 012.186-5.734 8.292 8.292 0 015.521-2.674 8.282 8.282 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__z"
					gradientUnits="userSpaceOnUse"
					x1={-62.628}
					y1={264.497}
					x2={-62.628}
					y2={330.494}
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
					d="M50.347 97.837a8.306 8.306 0 004.779 3.851c.484-1.986.25-4.157-.838-6.079s-2.824-3.242-4.781-3.85a8.316 8.316 0 00.84 6.078z"
				/>
				<LinearGradient
					id="prefix__A"
					gradientUnits="userSpaceOnUse"
					x1={-50.377}
					y1={264.503}
					x2={-50.377}
					y2={330.493}
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
					d="M65.849 90.274a8.29 8.29 0 01-5.982 1.365 8.303 8.303 0 013.42-5.096 8.281 8.281 0 015.982-1.363 8.272 8.272 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__B"
					gradientUnits="userSpaceOnUse"
					x1={-59.375}
					y1={264.49}
					x2={-59.375}
					y2={330.496}
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
					d="M53.4 85.718a8.302 8.302 0 003.789 4.826 8.286 8.286 0 00.551-6.113 8.297 8.297 0 00-3.793-4.826 8.315 8.315 0 00-.547 6.113z"
				/>
				<LinearGradient
					id="prefix__C"
					gradientUnits="userSpaceOnUse"
					x1={-45.57}
					y1={264.481}
					x2={-45.57}
					y2={330.498}
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
					d="M70.207 81.835a8.306 8.306 0 01-6.139-.016 8.3 8.3 0 014.48-4.195 8.276 8.276 0 016.135.018 8.29 8.29 0 01-4.476 4.193z"
				/>
				<LinearGradient
					id="prefix__D"
					gradientUnits="userSpaceOnUse"
					x1={-53.586}
					y1={264.495}
					x2={-53.586}
					y2={330.495}
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
					d="M59.101 74.595a8.297 8.297 0 002.605 5.555 8.296 8.296 0 001.912-5.832 8.301 8.301 0 00-2.609-5.555 8.307 8.307 0 00-1.908 5.832z"
				/>
			</G>
			<G>
				<LinearGradient
					id="prefix__E"
					gradientUnits="userSpaceOnUse"
					x1={-24.341}
					y1={307.119}
					x2={-24.341}
					y2={284.02}
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
					d="M95.379 96.388c-1.312-1.312-2.922-1.979-4.781-1.979-1.853 0-3.457.666-4.77 1.979-1.312 1.312-1.978 2.917-1.978 4.77v5.531c0 1.854.666 3.459 1.978 4.771 1.313 1.312 2.917 1.978 4.77 1.978 1.859 0 3.469-.664 4.781-1.978 1.312-1.312 1.978-2.917 1.978-4.771v-5.531c0-1.853-.665-3.458-1.978-4.77zm-4.781 14.008c-1.03 0-1.887-.354-2.619-1.084-.732-.729-1.088-1.586-1.088-2.623v-5.533c0-1.029.355-1.883 1.088-2.611.732-.729 1.59-1.084 2.619-1.084 1.038 0 1.897.354 2.631 1.084.731.729 1.088 1.583 1.088 2.611v5.533c0 1.037-.356 1.895-1.088 2.623-.732.731-1.593 1.084-2.631 1.084z"
				/>
				<LinearGradient
					id="prefix__F"
					gradientUnits="userSpaceOnUse"
					x1={-31.595}
					y1={295.801}
					x2={-17.088}
					y2={295.801}
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
					d="M90.598 113.938c-1.989 0-3.712-.715-5.124-2.124-1.41-1.409-2.125-3.133-2.125-5.124v-5.531c0-1.99.715-3.714 2.125-5.124 1.41-1.41 3.134-2.125 5.124-2.125 1.997 0 3.724.715 5.134 2.125 1.41 1.409 2.125 3.132 2.125 5.124v5.531c0 1.991-.715 3.715-2.125 5.124-1.407 1.409-3.135 2.124-5.134 2.124zm0-19.029c-1.714 0-3.201.617-4.417 1.833-1.215 1.215-1.832 2.701-1.832 4.417v5.531c0 1.716.616 3.202 1.832 4.417 1.216 1.215 2.702 1.831 4.417 1.831 1.724 0 3.213-.616 4.427-1.831 1.215-1.215 1.832-2.701 1.832-4.417v-5.531c0-1.716-.616-3.202-1.832-4.417-1.215-1.216-2.705-1.833-4.427-1.833zm0 15.987c-1.171 0-2.143-.402-2.972-1.23-.831-.826-1.235-1.801-1.235-2.977v-5.533c0-1.17.404-2.14 1.235-2.966.831-.827 1.803-1.229 2.972-1.229 1.176 0 2.152.402 2.983 1.229.832.829 1.235 1.799 1.235 2.966v5.533c0 1.176-.404 2.15-1.235 2.978-.828.827-1.804 1.229-2.983 1.229zm0-12.935c-.891 0-1.632.307-2.266.938-.642.638-.941 1.354-.941 2.257v5.533c0 .909.299 1.63.94 2.269.642.641 1.362.938 2.267.938.913 0 1.637-.298 2.278-.938.642-.64.941-1.36.941-2.27v-5.533c0-.9-.299-1.617-.941-2.257-.643-.639-1.367-.937-2.278-.937z"
				/>
			</G>
		</Svg>
	);
}

export default SvgComponent;

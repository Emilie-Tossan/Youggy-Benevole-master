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
				x1={-34.533}
				y1={281.839}
				x2={-34.533}
				y2={311.514}
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
				d="M81.146 98.98c-.991 0-1.847.125-2.559.375 1.354-1.821 3.275-4.024 5.736-6.573l.613-.633h-4.645l-.112.126c-2.306 2.596-4.163 4.878-5.522 6.782-1.388 1.951-2.091 4.238-2.091 6.839.009 2.608.762 4.686 2.238 6.17 1.537 1.529 3.413 2.303 5.576 2.303 2.172 0 4.049-.777 5.577-2.311 1.528-1.531 2.302-3.406 2.302-5.568 0-2.172-.774-4.053-2.302-5.59-1.275-1.273-2.894-1.92-4.811-1.92zm-.766 11.84c-1.213 0-2.217-.414-3.072-1.268-.855-.851-1.271-1.853-1.271-3.062 0-1.211.416-2.215 1.271-3.064.855-.849 1.859-1.266 3.072-1.266 1.203 0 2.204.416 3.06 1.266.854.85 1.27 1.854 1.27 3.064s-.415 2.213-1.27 3.062c-.857.854-1.857 1.268-3.06 1.268z"
			/>
			<LinearGradient
				id="prefix__b"
				gradientUnits="userSpaceOnUse"
				x1={-42.879}
				y1={296.466}
				x2={-26.186}
				y2={296.466}
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
				d="M80.38 114.869c-2.301 0-4.296-.824-5.928-2.448-1.574-1.583-2.376-3.776-2.386-6.522 0-2.696.735-5.095 2.184-7.131 1.373-1.924 3.242-4.22 5.555-6.824l.261-.294h6.05l-1.435 1.481c-1.962 2.033-3.588 3.854-4.848 5.43.411-.053.849-.08 1.312-.08 2.054 0 3.792.695 5.165 2.067 1.625 1.635 2.448 3.634 2.448 5.943 0 2.302-.824 4.294-2.448 5.922-1.624 1.629-3.62 2.456-5.93 2.456zm.136-22.22c-2.273 2.561-4.107 4.814-5.451 6.699-1.326 1.863-1.999 4.066-1.999 6.549.009 2.472.713 4.43 2.093 5.817 1.437 1.43 3.194 2.155 5.221 2.155 2.035 0 3.792-.728 5.223-2.163 1.431-1.435 2.156-3.188 2.156-5.216 0-2.036-.726-3.798-2.156-5.237-1.177-1.176-2.677-1.773-4.457-1.773-.933 0-1.738.117-2.394.347l-1.542.542.975-1.312c1.331-1.79 3.204-3.944 5.571-6.408h-3.24zm-.136 18.671c-1.352 0-2.472-.463-3.425-1.414-.954-.948-1.418-2.066-1.418-3.416 0-1.353.464-2.471 1.418-3.419.957-.949 2.077-1.411 3.424-1.411 1.34 0 2.456.462 3.412 1.411.954.949 1.418 2.067 1.418 3.419s-.464 2.47-1.417 3.417c-.954.951-2.07 1.413-3.412 1.413zm0-8.66c-1.07 0-1.96.366-2.72 1.12-.755.751-1.123 1.638-1.123 2.71 0 1.07.368 1.956 1.124 2.708.757.755 1.646 1.122 2.719 1.122 1.064 0 1.949-.367 2.707-1.122.756-.751 1.123-1.637 1.123-2.708 0-1.072-.367-1.958-1.123-2.71-.759-.754-1.645-1.12-2.707-1.12z"
			/>
			<G>
				<LinearGradient
					id="prefix__c"
					gradientUnits="userSpaceOnUse"
					x1={-15.479}
					y1={309.673}
					x2={-15.479}
					y2={282.775}
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
					d="M105.027 94.455c-1.529-1.527-3.402-2.303-5.567-2.303-2.158 0-4.026.775-5.555 2.303-1.527 1.528-2.303 3.396-2.303 5.555v6.442c0 2.157.775 4.024 2.303 5.555 1.529 1.527 3.396 2.304 5.555 2.304 2.165 0 4.038-.775 5.567-2.304 1.527-1.528 2.303-3.396 2.303-5.555v-6.442c0-2.159-.775-4.027-2.303-5.555zm-5.567 16.313c-1.2 0-2.197-.412-3.051-1.26-.853-.85-1.267-1.85-1.267-3.057v-6.442c0-1.199.414-2.193 1.267-3.043.854-.849 1.852-1.262 3.051-1.262 1.208 0 2.209.413 3.063 1.262.852.85 1.268 1.844 1.268 3.043v6.442c0 1.207-.416 2.207-1.268 3.057-.853.847-1.855 1.26-3.063 1.26z"
				/>
				<LinearGradient
					id="prefix__d"
					gradientUnits="userSpaceOnUse"
					x1={-23.843}
					y1={296.493}
					x2={-7.115}
					y2={296.493}
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
					d="M99.46 114.811c-2.293 0-4.281-.824-5.909-2.45-1.625-1.628-2.449-3.615-2.449-5.908v-6.442c0-2.294.824-4.283 2.449-5.909 1.627-1.625 3.615-2.45 5.909-2.45 2.301 0 4.293.824 5.921 2.449 1.625 1.626 2.449 3.614 2.449 5.909v6.442c0 2.294-.824 4.282-2.449 5.908-1.627 1.626-3.619 2.451-5.921 2.451zm0-22.159c-2.019 0-3.769.726-5.202 2.157-1.431 1.432-2.156 3.182-2.156 5.202v6.442c0 2.019.726 3.769 2.157 5.201 1.433 1.432 3.183 2.157 5.201 2.157 2.027 0 3.781-.726 5.214-2.157 1.431-1.432 2.156-3.182 2.156-5.201v-6.442c0-2.021-.726-3.771-2.156-5.202-1.434-1.432-3.188-2.157-5.214-2.157zm0 18.616c-1.337 0-2.451-.46-3.403-1.405-.953-.948-1.415-2.063-1.415-3.411v-6.442c0-1.337.462-2.449 1.414-3.397.953-.947 2.066-1.408 3.404-1.408 1.346 0 2.463.46 3.416 1.407.952.951 1.415 2.062 1.415 3.398v6.442c0 1.346-.463 2.461-1.414 3.41-.953.946-2.07 1.406-3.417 1.406zm0-15.064c-1.06 0-1.942.365-2.698 1.116-.764.761-1.12 1.616-1.12 2.688v6.442c0 1.067.366 1.952 1.12 2.702.755.75 1.638 1.114 2.698 1.114 1.069 0 1.956-.364 2.711-1.114.754-.752 1.12-1.636 1.12-2.702v-6.442c0-1.057-.366-1.936-1.121-2.689-.755-.75-1.643-1.115-2.71-1.115z"
				/>
			</G>
			<G>
				<LinearGradient
					id="prefix__e"
					gradientUnits="userSpaceOnUse"
					x1={5.103}
					y1={282.592}
					x2={5.103}
					y2={310.135}
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
					d="M124.873 113.77v-9.424h-9.365v9.424h-2.719V92.691h2.719v8.831h9.365v-8.831h2.434v21.079h-2.434z"
				/>
				<LinearGradient
					id="prefix__f"
					gradientUnits="userSpaceOnUse"
					x1={-3.156}
					y1={296.494}
					x2={13.362}
					y2={296.494}
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
					d="M127.307 92.691v21.079h-2.434v-9.424h-9.365v9.424h-2.719V92.691h2.719v8.831h9.365v-8.831h2.434m1-1h-4.434v8.831h-7.365v-8.831H111.789v23.079H116.508v-9.424h7.365v9.424h4.434V91.691z"
				/>
			</G>
			<G opacity={0.4}>
				<LinearGradient
					id="prefix__g"
					gradientUnits="userSpaceOnUse"
					x1={18.975}
					y1={265.065}
					x2={18.975}
					y2={331.065}
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
					d="M131.66 126.328a8.297 8.297 0 002.609 5.555 8.288 8.288 0 001.908-5.83 8.28 8.28 0 00-2.609-5.553 8.31 8.31 0 00-1.908 5.828z"
				/>
				<LinearGradient
					id="prefix__h"
					gradientUnits="userSpaceOnUse"
					x1={27.143}
					y1={265.065}
					x2={27.143}
					y2={331.052}
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
					d="M142.916 133.334a8.286 8.286 0 01-6.135-.014 8.31 8.31 0 0110.614-4.181 8.312 8.312 0 01-4.479 4.195z"
				/>
				<LinearGradient
					id="prefix__i"
					gradientUnits="userSpaceOnUse"
					x1={22.854}
					y1={265.063}
					x2={22.854}
					y2={331.07}
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
					d="M135.629 117.701a8.291 8.291 0 003.791 4.826 8.291 8.291 0 00.549-6.111 8.305 8.305 0 00-3.791-4.826 8.282 8.282 0 00-.549 6.111z"
				/>
				<LinearGradient
					id="prefix__j"
					gradientUnits="userSpaceOnUse"
					x1={31.948}
					y1={265.065}
					x2={31.948}
					y2={331.065}
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
					d="M148.174 121.994a8.296 8.296 0 01-5.982 1.367 8.298 8.298 0 013.416-5.098 8.29 8.29 0 015.986-1.363 8.326 8.326 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__k"
					gradientUnits="userSpaceOnUse"
					x1={24.579}
					y1={265.07}
					x2={24.579}
					y2={331.057}
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
					d="M137.555 108.402a8.302 8.302 0 004.779 3.85 8.293 8.293 0 00-.842-6.078 8.277 8.277 0 00-4.779-3.848 8.301 8.301 0 00.842 6.076z"
				/>
				<LinearGradient
					id="prefix__l"
					gradientUnits="userSpaceOnUse"
					x1={34.129}
					y1={265.069}
					x2={34.129}
					y2={331.062}
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
					d="M150.742 109.764a8.307 8.307 0 01-5.521 2.678 8.291 8.291 0 012.184-5.735 8.308 8.308 0 015.523-2.675 8.305 8.305 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__m"
					gradientUnits="userSpaceOnUse"
					x1={24.063}
					y1={265.067}
					x2={24.063}
					y2={331.06}
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
					d="M137.34 98.91a8.304 8.304 0 005.521 2.676c.027-2.045-.693-4.108-2.187-5.735s-3.481-2.525-5.521-2.674a8.293 8.293 0 002.187 5.733z"
				/>
				<LinearGradient
					id="prefix__n"
					gradientUnits="userSpaceOnUse"
					x1={33.581}
					y1={265.063}
					x2={33.581}
					y2={331.063}
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
					d="M150.494 97.269a8.286 8.286 0 01-4.777 3.85c-.484-1.987-.25-4.157.838-6.079s2.824-3.242 4.781-3.85a8.309 8.309 0 01-.842 6.079z"
				/>
				<LinearGradient
					id="prefix__o"
					gradientUnits="userSpaceOnUse"
					x1={21.331}
					y1={265.069}
					x2={21.331}
					y2={331.06}
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
					d="M134.994 89.707a8.29 8.29 0 005.982 1.365 8.311 8.311 0 00-3.42-5.096 8.281 8.281 0 00-5.982-1.363 8.274 8.274 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__p"
					gradientUnits="userSpaceOnUse"
					x1={30.328}
					y1={265.055}
					x2={30.328}
					y2={331.067}
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
					d="M147.443 85.15a8.302 8.302 0 01-3.789 4.826 8.296 8.296 0 01-.553-6.113 8.304 8.304 0 013.795-4.826 8.315 8.315 0 01.547 6.113z"
				/>
				<LinearGradient
					id="prefix__q"
					gradientUnits="userSpaceOnUse"
					x1={16.523}
					y1={265.058}
					x2={16.523}
					y2={331.064}
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
					d="M130.637 81.267a8.306 8.306 0 006.139-.016 8.302 8.302 0 00-4.479-4.195 8.281 8.281 0 00-6.137.018 8.288 8.288 0 004.477 4.193z"
				/>
				<LinearGradient
					id="prefix__r"
					gradientUnits="userSpaceOnUse"
					x1={24.539}
					y1={265.068}
					x2={24.539}
					y2={331.063}
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
					d="M141.742 74.027a8.297 8.297 0 01-2.605 5.555 8.286 8.286 0 01-1.912-5.832 8.301 8.301 0 012.609-5.555 8.302 8.302 0 011.908 5.832z"
				/>
				<LinearGradient
					id="prefix__s"
					gradientUnits="userSpaceOnUse"
					x1={-48.021}
					y1={265.065}
					x2={-48.021}
					y2={331.065}
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
					d="M69.183 126.328a8.288 8.288 0 01-2.609 5.555 8.288 8.288 0 01-1.908-5.83 8.275 8.275 0 012.609-5.553 8.295 8.295 0 011.908 5.828z"
				/>
				<LinearGradient
					id="prefix__t"
					gradientUnits="userSpaceOnUse"
					x1={-56.19}
					y1={265.065}
					x2={-56.19}
					y2={331.052}
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
					d="M57.927 133.334a8.286 8.286 0 006.135-.014 8.31 8.31 0 00-10.614-4.181 8.316 8.316 0 004.479 4.195z"
				/>
				<LinearGradient
					id="prefix__u"
					gradientUnits="userSpaceOnUse"
					x1={-51.902}
					y1={265.063}
					x2={-51.902}
					y2={331.07}
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
					d="M65.214 117.701a8.291 8.291 0 01-3.791 4.826 8.291 8.291 0 01-.549-6.111 8.305 8.305 0 013.791-4.826 8.291 8.291 0 01.549 6.111z"
				/>
				<LinearGradient
					id="prefix__v"
					gradientUnits="userSpaceOnUse"
					x1={-60.996}
					y1={265.065}
					x2={-60.996}
					y2={331.065}
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
					d="M52.669 121.994a8.296 8.296 0 005.982 1.367 8.29 8.29 0 00-3.416-5.098 8.29 8.29 0 00-5.986-1.363 8.326 8.326 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__w"
					gradientUnits="userSpaceOnUse"
					x1={-53.626}
					y1={265.07}
					x2={-53.626}
					y2={331.057}
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
					d="M63.289 108.402a8.302 8.302 0 01-4.779 3.85 8.293 8.293 0 01.842-6.078 8.277 8.277 0 014.779-3.848 8.306 8.306 0 01-.842 6.076z"
				/>
				<LinearGradient
					id="prefix__x"
					gradientUnits="userSpaceOnUse"
					x1={-63.176}
					y1={265.069}
					x2={-63.176}
					y2={331.062}
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
					d="M50.101 109.764a8.307 8.307 0 005.521 2.678 8.291 8.291 0 00-2.184-5.735 8.308 8.308 0 00-5.523-2.675 8.314 8.314 0 002.186 5.732z"
				/>
				<LinearGradient
					id="prefix__y"
					gradientUnits="userSpaceOnUse"
					x1={-53.11}
					y1={265.067}
					x2={-53.11}
					y2={331.06}
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
					d="M63.503 98.91a8.304 8.304 0 01-5.521 2.676 8.293 8.293 0 012.186-5.735 8.292 8.292 0 015.521-2.674 8.283 8.283 0 01-2.186 5.733z"
				/>
				<LinearGradient
					id="prefix__z"
					gradientUnits="userSpaceOnUse"
					x1={-62.628}
					y1={265.063}
					x2={-62.628}
					y2={331.063}
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
					d="M50.347 97.269a8.296 8.296 0 004.779 3.85c.484-1.987.25-4.157-.838-6.079s-2.824-3.242-4.781-3.85a8.318 8.318 0 00.84 6.079z"
				/>
				<LinearGradient
					id="prefix__A"
					gradientUnits="userSpaceOnUse"
					x1={-50.377}
					y1={265.069}
					x2={-50.377}
					y2={331.06}
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
					d="M65.849 89.707a8.29 8.29 0 01-5.982 1.365 8.303 8.303 0 013.42-5.096 8.281 8.281 0 015.982-1.363 8.274 8.274 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__B"
					gradientUnits="userSpaceOnUse"
					x1={-59.375}
					y1={265.055}
					x2={-59.375}
					y2={331.067}
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
					d="M53.4 85.15a8.302 8.302 0 003.789 4.826 8.286 8.286 0 00.551-6.113 8.297 8.297 0 00-3.793-4.826 8.315 8.315 0 00-.547 6.113z"
				/>
				<LinearGradient
					id="prefix__C"
					gradientUnits="userSpaceOnUse"
					x1={-45.57}
					y1={265.058}
					x2={-45.57}
					y2={331.064}
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
					d="M70.207 81.267a8.306 8.306 0 01-6.139-.016 8.3 8.3 0 014.48-4.195 8.276 8.276 0 016.135.018 8.29 8.29 0 01-4.476 4.193z"
				/>
				<LinearGradient
					id="prefix__D"
					gradientUnits="userSpaceOnUse"
					x1={-53.586}
					y1={265.068}
					x2={-53.586}
					y2={331.063}
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
					d="M59.101 74.027a8.297 8.297 0 002.605 5.555 8.296 8.296 0 001.912-5.832 8.301 8.301 0 00-2.609-5.555 8.307 8.307 0 00-1.908 5.832z"
				/>
			</G>
		</Svg>
	);
}

export default SvgComponent;

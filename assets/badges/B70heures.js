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
				x1={-33.273}
				y1={280.808}
				x2={-33.273}
				y2={311.705}
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
				d="M74.683 95.792h9.92c-.312.588-1.07 1.646-2.771 3.551-1.886 2.111-2.851 3.906-3.64 6.018-.844 2.259-1.921 4.867-2.029 8.549l-.011.387h3.556l.011-.363c.086-2.843.943-4.914 1.625-6.799.893-2.475 1.639-3.742 3.82-6.188 2.252-2.523 3.426-5.307 3.49-8.272l.008-.385H74.683v3.502z"
			/>
			<LinearGradient
				id="prefix__b"
				gradientUnits="userSpaceOnUse"
				x1={-40.762}
				y1={296.432}
				x2={-25.772}
				y2={296.432}
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
				d="M80.193 114.797h-4.556l.026-.901c.103-3.511 1.049-6.022 1.883-8.238l.177-.471c.91-2.436 1.992-4.226 3.735-6.176 1.137-1.273 1.823-2.137 2.235-2.718h-9.511V91.79h14.99l-.019.896c-.067 3.088-1.284 5.98-3.617 8.595-2.091 2.344-2.822 3.526-3.723 6.024l-.192.525c-.623 1.695-1.328 3.617-1.403 6.118l-.025.849zm-3.526-1h2.557c.099-2.603.821-4.571 1.46-6.312l.19-.521c.942-2.613 1.748-3.919 3.917-6.351 2.138-2.396 3.268-5.027 3.359-7.824H75.183v2.502h10.251l-.39.734c-.408.768-1.363 1.996-2.84 3.65-1.655 1.852-2.682 3.549-3.545 5.86l-.178.474c-.795 2.116-1.697 4.51-1.814 7.788z"
			/>
			<G>
				<LinearGradient
					id="prefix__c"
					gradientUnits="userSpaceOnUse"
					x1={-15.478}
					y1={309.609}
					x2={-15.478}
					y2={282.713}
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
					d="M105.027 94.518c-1.529-1.527-3.402-2.303-5.566-2.303-2.159 0-4.027.775-5.555 2.303-1.527 1.528-2.303 3.396-2.303 5.555v6.441c0 2.158.775 4.026 2.303 5.555 1.529 1.527 3.396 2.304 5.555 2.304 2.164 0 4.037-.774 5.566-2.304 1.527-1.527 2.303-3.396 2.303-5.555v-6.441c0-2.159-.775-4.027-2.303-5.555zm-5.566 16.313c-1.201 0-2.198-.413-3.051-1.261-.853-.85-1.267-1.85-1.267-3.057v-6.442c0-1.199.414-2.193 1.267-3.043.854-.849 1.852-1.262 3.051-1.262 1.207 0 2.209.413 3.062 1.262.852.85 1.268 1.844 1.268 3.043v6.442c0 1.207-.416 2.207-1.268 3.057-.853.848-1.855 1.261-3.062 1.261z"
				/>
				<LinearGradient
					id="prefix__d"
					gradientUnits="userSpaceOnUse"
					x1={-23.842}
					y1={296.432}
					x2={-7.115}
					y2={296.432}
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
					d="M99.461 114.872c-2.293 0-4.281-.824-5.909-2.45-1.625-1.626-2.449-3.613-2.449-5.908v-6.441c0-2.294.824-4.282 2.449-5.908 1.625-1.625 3.613-2.45 5.909-2.45 2.301 0 4.292.824 5.92 2.449 1.625 1.626 2.449 3.614 2.449 5.909v6.441c0 2.295-.824 4.283-2.449 5.908-1.626 1.626-3.617 2.45-5.92 2.45zm0-22.157c-2.021 0-3.771.726-5.202 2.157-1.431 1.432-2.156 3.182-2.156 5.201v6.441c0 2.02.726 3.77 2.156 5.201 1.433 1.432 3.184 2.157 5.202 2.157 2.027 0 3.781-.726 5.213-2.157 1.431-1.431 2.156-3.181 2.156-5.201v-6.441c0-2.02-.726-3.77-2.156-5.201-1.433-1.432-3.187-2.157-5.213-2.157zm0 18.616c-1.338 0-2.451-.46-3.403-1.406-.952-.948-1.415-2.063-1.415-3.411v-6.442c0-1.337.462-2.449 1.414-3.397.954-.947 2.066-1.408 3.404-1.408 1.346 0 2.463.46 3.415 1.407.952.951 1.415 2.062 1.415 3.397v6.442c0 1.346-.463 2.461-1.414 3.41-.954.948-2.07 1.408-3.416 1.408zm0-15.064c-1.06 0-1.942.365-2.698 1.116-.764.761-1.12 1.616-1.12 2.688v6.442c0 1.067.366 1.952 1.12 2.702.755.75 1.637 1.115 2.698 1.115 1.067 0 1.954-.365 2.71-1.115.754-.752 1.12-1.636 1.12-2.702v-6.442c0-1.057-.366-1.936-1.121-2.689-.755-.75-1.641-1.115-2.709-1.115z"
				/>
			</G>
			<G>
				<LinearGradient
					id="prefix__e"
					gradientUnits="userSpaceOnUse"
					x1={5.103}
					y1={282.528}
					x2={5.103}
					y2={310.074}
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
					d="M124.873 113.832v-9.424h-9.365v9.424h-2.719V92.754h2.719v8.83h9.365v-8.83h2.434v21.078h-2.434z"
				/>
				<LinearGradient
					id="prefix__f"
					gradientUnits="userSpaceOnUse"
					x1={-3.156}
					y1={296.432}
					x2={13.362}
					y2={296.432}
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
					d="M127.307 92.754v21.078h-2.434v-9.424h-9.365v9.424h-2.719V92.754h2.719v8.83h9.365v-8.83h2.434m1-1h-4.434v8.83h-7.365v-8.83H111.789v23.078H116.508v-9.424h7.365v9.424h4.434V91.754z"
				/>
			</G>
			<G opacity={0.4}>
				<LinearGradient
					id="prefix__g"
					gradientUnits="userSpaceOnUse"
					x1={18.975}
					y1={265.001}
					x2={18.975}
					y2={331.001}
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
					d="M131.66 126.393a8.3 8.3 0 002.609 5.555 8.288 8.288 0 001.908-5.83 8.28 8.28 0 00-2.609-5.553 8.305 8.305 0 00-1.908 5.828z"
				/>
				<LinearGradient
					id="prefix__h"
					gradientUnits="userSpaceOnUse"
					x1={27.143}
					y1={265.002}
					x2={27.143}
					y2={330.99}
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
					d="M142.916 133.396a8.281 8.281 0 01-6.135-.014 8.306 8.306 0 0110.614-4.18 8.296 8.296 0 01-4.479 4.194z"
				/>
				<LinearGradient
					id="prefix__i"
					gradientUnits="userSpaceOnUse"
					x1={22.854}
					y1={265.003}
					x2={22.854}
					y2={330.997}
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
					d="M135.629 117.766a8.286 8.286 0 003.791 4.825 8.288 8.288 0 00.549-6.11 8.305 8.305 0 00-3.791-4.826 8.28 8.28 0 00-.549 6.111z"
				/>
				<LinearGradient
					id="prefix__j"
					gradientUnits="userSpaceOnUse"
					x1={31.948}
					y1={265.002}
					x2={31.948}
					y2={331.002}
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
					d="M148.174 122.059a8.29 8.29 0 01-5.982 1.366 8.298 8.298 0 013.416-5.098 8.29 8.29 0 015.986-1.363 8.328 8.328 0 01-3.42 5.095z"
				/>
				<LinearGradient
					id="prefix__k"
					gradientUnits="userSpaceOnUse"
					x1={24.579}
					y1={264.998}
					x2={24.579}
					y2={331.005}
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
					d="M137.555 108.466a8.304 8.304 0 004.779 3.851 8.293 8.293 0 00-.842-6.078 8.288 8.288 0 00-4.779-3.85 8.304 8.304 0 00.842 6.077z"
				/>
				<LinearGradient
					id="prefix__l"
					gradientUnits="userSpaceOnUse"
					x1={34.129}
					y1={265.008}
					x2={34.129}
					y2={330.993}
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
					d="M150.742 109.827a8.311 8.311 0 01-5.521 2.678 8.291 8.291 0 012.184-5.735 8.302 8.302 0 015.523-2.674 8.303 8.303 0 01-2.186 5.731z"
				/>
				<LinearGradient
					id="prefix__m"
					gradientUnits="userSpaceOnUse"
					x1={24.063}
					y1={265.008}
					x2={24.063}
					y2={330.996}
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
					d="M137.34 98.973a8.303 8.303 0 005.521 2.675c.027-2.044-.693-4.106-2.187-5.733s-3.481-2.525-5.521-2.674a8.292 8.292 0 002.187 5.732z"
				/>
				<LinearGradient
					id="prefix__n"
					gradientUnits="userSpaceOnUse"
					x1={33.581}
					y1={265.007}
					x2={33.581}
					y2={330.997}
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
					d="M150.494 97.332a8.29 8.29 0 01-4.777 3.85c-.484-1.986-.25-4.156.838-6.078s2.824-3.242 4.781-3.85a8.307 8.307 0 01-.842 6.078z"
				/>
				<LinearGradient
					id="prefix__o"
					gradientUnits="userSpaceOnUse"
					x1={21.331}
					y1={265.008}
					x2={21.331}
					y2={330.998}
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
					d="M134.994 89.77a8.29 8.29 0 005.982 1.365 8.311 8.311 0 00-3.42-5.096 8.281 8.281 0 00-5.982-1.363 8.274 8.274 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__p"
					gradientUnits="userSpaceOnUse"
					x1={30.328}
					y1={264.996}
					x2={30.328}
					y2={331.002}
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
					d="M147.443 85.213a8.302 8.302 0 01-3.789 4.826 8.296 8.296 0 01-.553-6.113 8.304 8.304 0 013.795-4.826 8.315 8.315 0 01.547 6.113z"
				/>
				<LinearGradient
					id="prefix__q"
					gradientUnits="userSpaceOnUse"
					x1={16.523}
					y1={265.006}
					x2={16.523}
					y2={331}
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
					d="M130.637 81.33a8.306 8.306 0 006.139-.016 8.302 8.302 0 00-4.479-4.195 8.281 8.281 0 00-6.137.018 8.288 8.288 0 004.477 4.193z"
				/>
				<LinearGradient
					id="prefix__r"
					gradientUnits="userSpaceOnUse"
					x1={24.539}
					y1={265.001}
					x2={24.539}
					y2={331.001}
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
					d="M141.742 74.09a8.297 8.297 0 01-2.605 5.555 8.286 8.286 0 01-1.912-5.832 8.301 8.301 0 012.609-5.555 8.302 8.302 0 011.908 5.832z"
				/>
				<LinearGradient
					id="prefix__s"
					gradientUnits="userSpaceOnUse"
					x1={-48.021}
					y1={265.001}
					x2={-48.021}
					y2={331.001}
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
					d="M69.183 126.393a8.29 8.29 0 01-2.609 5.555 8.288 8.288 0 01-1.908-5.83 8.275 8.275 0 012.609-5.553 8.29 8.29 0 011.908 5.828z"
				/>
				<LinearGradient
					id="prefix__t"
					gradientUnits="userSpaceOnUse"
					x1={-56.19}
					y1={265.002}
					x2={-56.19}
					y2={330.99}
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
					d="M57.927 133.396a8.281 8.281 0 006.135-.014 8.306 8.306 0 00-10.614-4.18 8.3 8.3 0 004.479 4.194z"
				/>
				<LinearGradient
					id="prefix__u"
					gradientUnits="userSpaceOnUse"
					x1={-51.902}
					y1={265.003}
					x2={-51.902}
					y2={330.997}
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
					d="M65.214 117.766a8.286 8.286 0 01-3.791 4.825 8.288 8.288 0 01-.549-6.11 8.305 8.305 0 013.791-4.826 8.289 8.289 0 01.549 6.111z"
				/>
				<LinearGradient
					id="prefix__v"
					gradientUnits="userSpaceOnUse"
					x1={-60.996}
					y1={265.002}
					x2={-60.996}
					y2={331.002}
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
					d="M52.669 122.059a8.29 8.29 0 005.982 1.366 8.29 8.29 0 00-3.416-5.098 8.29 8.29 0 00-5.986-1.363 8.328 8.328 0 003.42 5.095z"
				/>
				<LinearGradient
					id="prefix__w"
					gradientUnits="userSpaceOnUse"
					x1={-53.626}
					y1={264.998}
					x2={-53.626}
					y2={331.005}
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
					d="M63.289 108.466a8.304 8.304 0 01-4.779 3.851 8.293 8.293 0 01.842-6.078 8.288 8.288 0 014.779-3.85 8.309 8.309 0 01-.842 6.077z"
				/>
				<LinearGradient
					id="prefix__x"
					gradientUnits="userSpaceOnUse"
					x1={-63.176}
					y1={265.008}
					x2={-63.176}
					y2={330.993}
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
					d="M50.101 109.827a8.311 8.311 0 005.521 2.678 8.291 8.291 0 00-2.184-5.735 8.302 8.302 0 00-5.523-2.674 8.312 8.312 0 002.186 5.731z"
				/>
				<LinearGradient
					id="prefix__y"
					gradientUnits="userSpaceOnUse"
					x1={-53.11}
					y1={265.008}
					x2={-53.11}
					y2={330.996}
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
					d="M63.503 98.973a8.303 8.303 0 01-5.521 2.675 8.29 8.29 0 012.186-5.733 8.292 8.292 0 015.521-2.674 8.282 8.282 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__z"
					gradientUnits="userSpaceOnUse"
					x1={-62.628}
					y1={265.007}
					x2={-62.628}
					y2={330.997}
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
					d="M50.347 97.332a8.3 8.3 0 004.779 3.85c.484-1.986.25-4.156-.838-6.078s-2.824-3.242-4.781-3.85a8.316 8.316 0 00.84 6.078z"
				/>
				<LinearGradient
					id="prefix__A"
					gradientUnits="userSpaceOnUse"
					x1={-50.377}
					y1={265.008}
					x2={-50.377}
					y2={330.998}
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
					d="M65.849 89.77a8.29 8.29 0 01-5.982 1.365 8.303 8.303 0 013.42-5.096 8.281 8.281 0 015.982-1.363 8.274 8.274 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__B"
					gradientUnits="userSpaceOnUse"
					x1={-59.375}
					y1={264.996}
					x2={-59.375}
					y2={331.002}
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
					d="M53.4 85.213a8.302 8.302 0 003.789 4.826 8.286 8.286 0 00.551-6.113 8.297 8.297 0 00-3.793-4.826 8.315 8.315 0 00-.547 6.113z"
				/>
				<LinearGradient
					id="prefix__C"
					gradientUnits="userSpaceOnUse"
					x1={-45.57}
					y1={265.006}
					x2={-45.57}
					y2={331}
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
					d="M70.207 81.33a8.306 8.306 0 01-6.139-.016 8.3 8.3 0 014.48-4.195 8.276 8.276 0 016.135.018 8.29 8.29 0 01-4.476 4.193z"
				/>
				<LinearGradient
					id="prefix__D"
					gradientUnits="userSpaceOnUse"
					x1={-53.586}
					y1={265.001}
					x2={-53.586}
					y2={331.001}
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
					d="M59.101 74.09a8.297 8.297 0 002.605 5.555 8.296 8.296 0 001.912-5.832 8.301 8.301 0 00-2.609-5.555 8.307 8.307 0 00-1.908 5.832z"
				/>
			</G>
		</Svg>
	);
}

export default SvgComponent;

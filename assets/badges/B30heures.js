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
				x1={-34.595}
				y1={282.896}
				x2={-34.595}
				y2={311.957}
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
				d="M83.417 100.979c1.3-1.177 1.957-2.42 1.957-3.703 0-1.417-.515-2.656-1.533-3.682-1.018-1.027-2.275-1.548-3.736-1.548-1.434 0-2.681.516-3.703 1.527-.587.559-1.064 1.432-1.459 2.671l-.104.328 3.17 1.248.131-.351c.353-.947.589-1.314.717-1.447a1.705 1.705 0 011.247-.504c.5 0 .912.167 1.259.51.346.342.514.75.514 1.249 0 .513-.183.957-.562 1.356-.4.424-.765.701-1.083.823-.226.086-.79.195-2.194.215l-.363.005v3.378l1.921.041c1.435.27 2.508.781 3.189 1.522.68.739 1.011 1.569 1.011 2.538 0 .953-.327 1.742-1 2.41-.674.67-1.465.996-2.418.996-.938 0-1.722-.326-2.399-.994-.567-.566-.928-1.596-1.074-3.059l-.047-.47-3.413 1.237.046.297c.287 1.878.972 3.373 2.035 4.443 1.335 1.346 2.968 2.028 4.852 2.028 1.9 0 3.539-.681 4.871-2.021 1.332-1.342 2.006-2.979 2.006-4.869 0-1.869-.656-3.523-1.965-4.934-.635-.61-1.261-1.026-1.873-1.24z"
			/>
			<LinearGradient
				id="prefix__b"
				gradientUnits="userSpaceOnUse"
				x1={-42.058}
				y1={296.679}
				x2={-27.19}
				y2={296.679}
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
				d="M80.378 114.546c-2.022 0-3.774-.732-5.207-2.176-1.14-1.147-1.871-2.736-2.174-4.721l-.11-.702 4.404-1.597.111 1.109c.132 1.326.454 2.279.93 2.755.585.577 1.236.848 2.045.848.825 0 1.482-.271 2.065-.851.582-.577.853-1.23.853-2.056 0-.837-.288-1.557-.879-2.199-.606-.66-1.586-1.12-2.913-1.37l-2.329-.043v-4.36l.856-.013c1.488-.021 1.925-.145 2.023-.182.169-.065.464-.24.897-.699.291-.307.426-.628.426-1.013 0-.363-.116-.647-.366-.894a1.28 1.28 0 00-1.805-.003c-.011.012-.217.244-.597 1.264l-.31.827-4.078-1.605.246-.773c.421-1.321.941-2.264 1.591-2.882 1.114-1.103 2.479-1.665 4.048-1.665 1.599 0 2.976.571 4.091 1.696 1.114 1.122 1.678 2.479 1.678 4.034 0 1.235-.534 2.428-1.59 3.552.45.254.903.6 1.353 1.035 1.412 1.52 2.118 3.293 2.118 5.293 0 2.027-.724 3.783-2.151 5.222-1.431 1.439-3.189 2.169-5.226 2.169zm-6.376-6.939c.28 1.72.912 3.084 1.878 4.058 1.238 1.248 2.751 1.881 4.497 1.881 1.761 0 3.281-.63 4.517-1.873 1.234-1.243 1.86-2.763 1.86-4.517 0-1.739-.616-3.284-1.831-4.594-.562-.541-1.131-.922-1.672-1.112l-.793-.278.623-.563c1.189-1.078 1.792-2.199 1.792-3.333 0-1.281-.467-2.401-1.388-3.33-.921-.929-2.059-1.4-3.381-1.4-1.296 0-2.424.465-3.352 1.382-.513.489-.936 1.256-1.296 2.35l2.262.891c.292-.764.547-1.253.777-1.493a2.303 2.303 0 013.218-.003c.439.435.663.975.663 1.604 0 .64-.235 1.211-.7 1.7-.45.478-.876.796-1.266.946-.38.145-1.112.225-2.236.246v2.396l1.432.03c1.625.299 2.791.862 3.546 1.685.769.836 1.143 1.776 1.143 2.876 0 1.095-.375 1.999-1.148 2.765-.772.769-1.678 1.142-2.77 1.142-1.075 0-1.974-.372-2.75-1.139-.629-.628-1.033-1.702-1.203-3.195l-2.422.878z"
			/>
			<G>
				<LinearGradient
					id="prefix__c"
					gradientUnits="userSpaceOnUse"
					x1={-15.477}
					y1={309.861}
					x2={-15.477}
					y2={282.966}
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
					d="M105.025 94.266c-1.526-1.528-3.399-2.303-5.565-2.303-2.158 0-4.026.775-5.554 2.303-1.527 1.528-2.303 3.396-2.303 5.554v6.442c0 2.157.775 4.026 2.303 5.555 1.529 1.527 3.396 2.303 5.554 2.303 2.166 0 4.039-.773 5.565-2.303 1.529-1.527 2.306-3.396 2.306-5.555V99.82c0-2.158-.774-4.027-2.306-5.554zm-5.565 16.313c-1.2 0-2.197-.413-3.05-1.263-.853-.848-1.267-1.848-1.267-3.055v-6.443c0-1.199.414-2.193 1.267-3.042.854-.849 1.852-1.262 3.05-1.262 1.209 0 2.209.413 3.062 1.262.854.849 1.269 1.844 1.269 3.042v6.443c0 1.207-.414 2.205-1.269 3.055-.851.85-1.853 1.263-3.062 1.263z"
				/>
				<LinearGradient
					id="prefix__d"
					gradientUnits="userSpaceOnUse"
					x1={-23.842}
					y1={296.684}
					x2={-7.114}
					y2={296.684}
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
					d="M99.46 114.619c-2.293 0-4.28-.824-5.908-2.449-1.625-1.626-2.449-3.613-2.449-5.908V99.82c0-2.293.824-4.281 2.449-5.907 1.625-1.625 3.613-2.45 5.908-2.45 2.304 0 4.296.824 5.919 2.45 1.627 1.622 2.452 3.61 2.452 5.907v6.442c0 2.295-.825 4.283-2.452 5.908-1.622 1.625-3.613 2.449-5.919 2.449zm0-22.156c-2.02 0-3.77.726-5.201 2.157-1.431 1.432-2.156 3.181-2.156 5.2v6.442c0 2.02.726 3.77 2.156 5.201 1.433 1.431 3.183 2.156 5.201 2.156 2.03 0 3.784-.726 5.212-2.156 1.433-1.431 2.159-3.181 2.159-5.201V99.82c0-2.022-.727-3.771-2.159-5.2-1.43-1.432-3.183-2.157-5.212-2.157zm0 18.616c-1.338 0-2.451-.461-3.403-1.408-.951-.945-1.414-2.061-1.414-3.409v-6.443c0-1.338.462-2.449 1.415-3.396.953-.947 2.066-1.407 3.402-1.407 1.346 0 2.463.46 3.414 1.407.953.947 1.416 2.058 1.416 3.396v6.443c0 1.347-.463 2.462-1.416 3.409-.948.947-2.065 1.408-3.414 1.408zm0-15.064c-1.059 0-1.941.365-2.697 1.116-.753.75-1.12 1.629-1.12 2.688v6.443c0 1.068.366 1.951 1.12 2.7.755.752 1.637 1.117 2.697 1.117 1.07 0 1.956-.365 2.708-1.116.766-.762 1.122-1.619 1.122-2.701v-6.443c0-1.059-.366-1.938-1.121-2.688-.755-.751-1.641-1.116-2.709-1.116z"
				/>
			</G>
			<G>
				<LinearGradient
					id="prefix__e"
					gradientUnits="userSpaceOnUse"
					x1={5.104}
					y1={282.781}
					x2={5.104}
					y2={310.325}
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
					d="M124.874 113.579v-9.425h-9.367v9.425h-2.717V92.501h2.717v8.831h9.367v-8.831h2.433v21.078h-2.433z"
				/>
				<LinearGradient
					id="prefix__f"
					gradientUnits="userSpaceOnUse"
					x1={-3.155}
					y1={296.685}
					x2={13.362}
					y2={296.685}
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
					d="M127.307 92.501v21.078h-2.433v-9.425h-9.367v9.425h-2.717V92.501h2.717v8.831h9.367v-8.831h2.433m1-1h-4.433v8.83h-7.367v-8.83H111.79v23.078H116.507v-9.425h7.367v9.425h4.433V91.501z"
				/>
			</G>
			<G opacity={0.4}>
				<LinearGradient
					id="prefix__g"
					gradientUnits="userSpaceOnUse"
					x1={18.973}
					y1={265.253}
					x2={18.973}
					y2={331.253}
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
					d="M131.659 126.141a8.298 8.298 0 002.608 5.555 8.283 8.283 0 001.908-5.83 8.275 8.275 0 00-2.609-5.553 8.31 8.31 0 00-1.907 5.828z"
				/>
				<LinearGradient
					id="prefix__h"
					gradientUnits="userSpaceOnUse"
					x1={27.142}
					y1={265.253}
					x2={27.142}
					y2={331.253}
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
					d="M142.915 133.146a8.284 8.284 0 01-6.136-.015 8.284 8.284 0 014.478-4.198 8.309 8.309 0 016.138.018 8.311 8.311 0 01-4.48 4.195z"
				/>
				<LinearGradient
					id="prefix__i"
					gradientUnits="userSpaceOnUse"
					x1={22.853}
					y1={265.255}
					x2={22.853}
					y2={331.249}
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
					d="M135.628 117.514a8.285 8.285 0 003.791 4.825 8.283 8.283 0 00.549-6.11 8.303 8.303 0 00-3.79-4.826 8.275 8.275 0 00-.55 6.111z"
				/>
				<LinearGradient
					id="prefix__j"
					gradientUnits="userSpaceOnUse"
					x1={31.948}
					y1={265.254}
					x2={31.948}
					y2={331.254}
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
					d="M148.173 121.807a8.288 8.288 0 01-5.981 1.366 8.29 8.29 0 013.416-5.098 8.29 8.29 0 015.986-1.363 8.338 8.338 0 01-3.421 5.095z"
				/>
				<LinearGradient
					id="prefix__k"
					gradientUnits="userSpaceOnUse"
					x1={24.578}
					y1={265.25}
					x2={24.578}
					y2={331.257}
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
					d="M137.555 108.214a8.302 8.302 0 004.778 3.851 8.298 8.298 0 00-.842-6.078 8.276 8.276 0 00-4.779-3.85 8.305 8.305 0 00.843 6.077z"
				/>
				<LinearGradient
					id="prefix__l"
					gradientUnits="userSpaceOnUse"
					x1={34.129}
					y1={265.254}
					x2={34.129}
					y2={331.254}
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
					d="M150.741 109.575a8.311 8.311 0 01-5.521 2.678 8.287 8.287 0 012.184-5.735 8.307 8.307 0 015.523-2.676 8.309 8.309 0 01-2.186 5.733z"
				/>
				<LinearGradient
					id="prefix__m"
					gradientUnits="userSpaceOnUse"
					x1={24.061}
					y1={265.248}
					x2={24.061}
					y2={331.256}
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
					d="M137.339 98.72a8.298 8.298 0 005.521 2.676 8.289 8.289 0 00-2.186-5.735 8.292 8.292 0 00-5.521-2.674 8.29 8.29 0 002.186 5.733z"
				/>
				<LinearGradient
					id="prefix__n"
					gradientUnits="userSpaceOnUse"
					x1={33.58}
					y1={265.261}
					x2={33.58}
					y2={331.248}
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
					d="M150.493 97.08a8.293 8.293 0 01-4.777 3.85 8.306 8.306 0 01.839-6.079 8.298 8.298 0 014.78-3.85 8.314 8.314 0 01-.842 6.079z"
				/>
				<LinearGradient
					id="prefix__o"
					gradientUnits="userSpaceOnUse"
					x1={21.329}
					y1={265.259}
					x2={21.329}
					y2={331.249}
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
					d="M134.993 89.517a8.287 8.287 0 005.981 1.365 8.303 8.303 0 00-3.42-5.096 8.281 8.281 0 00-5.982-1.363 8.28 8.28 0 003.421 5.094z"
				/>
				<LinearGradient
					id="prefix__p"
					gradientUnits="userSpaceOnUse"
					x1={30.326}
					y1={265.25}
					x2={30.326}
					y2={331.253}
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
					d="M147.441 84.96a8.298 8.298 0 01-3.789 4.826 8.296 8.296 0 01-.553-6.113 8.305 8.305 0 013.795-4.826 8.315 8.315 0 01.547 6.113z"
				/>
				<LinearGradient
					id="prefix__q"
					gradientUnits="userSpaceOnUse"
					x1={16.523}
					y1={265.252}
					x2={16.523}
					y2={331.252}
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
					d="M130.637 81.077a8.301 8.301 0 006.139-.016 8.302 8.302 0 00-4.479-4.195 8.29 8.29 0 00-6.137.018 8.27 8.27 0 004.477 4.193z"
				/>
				<LinearGradient
					id="prefix__r"
					gradientUnits="userSpaceOnUse"
					x1={24.538}
					y1={265.253}
					x2={24.538}
					y2={331.253}
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
					d="M141.741 73.837a8.305 8.305 0 01-2.604 5.555 8.275 8.275 0 01-1.912-5.831 8.305 8.305 0 012.608-5.556 8.297 8.297 0 011.908 5.832z"
				/>
				<LinearGradient
					id="prefix__s"
					gradientUnits="userSpaceOnUse"
					x1={-48.021}
					y1={265.253}
					x2={-48.021}
					y2={331.253}
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
					d="M69.183 126.141a8.29 8.29 0 01-2.609 5.555 8.288 8.288 0 01-1.908-5.83 8.275 8.275 0 012.609-5.553 8.292 8.292 0 011.908 5.828z"
				/>
				<LinearGradient
					id="prefix__t"
					gradientUnits="userSpaceOnUse"
					x1={-56.19}
					y1={265.253}
					x2={-56.19}
					y2={331.253}
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
					d="M57.927 133.146a8.281 8.281 0 006.135-.015 8.282 8.282 0 00-4.477-4.198 8.306 8.306 0 00-6.137.018 8.316 8.316 0 004.479 4.195z"
				/>
				<LinearGradient
					id="prefix__u"
					gradientUnits="userSpaceOnUse"
					x1={-51.902}
					y1={265.255}
					x2={-51.902}
					y2={331.249}
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
					d="M65.214 117.514a8.289 8.289 0 01-3.791 4.825 8.288 8.288 0 01-.549-6.11 8.305 8.305 0 013.791-4.826 8.29 8.29 0 01.549 6.111z"
				/>
				<LinearGradient
					id="prefix__v"
					gradientUnits="userSpaceOnUse"
					x1={-60.996}
					y1={265.254}
					x2={-60.996}
					y2={331.254}
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
					d="M52.669 121.807a8.29 8.29 0 005.982 1.366 8.29 8.29 0 00-3.416-5.098 8.29 8.29 0 00-5.986-1.363 8.328 8.328 0 003.42 5.095z"
				/>
				<LinearGradient
					id="prefix__w"
					gradientUnits="userSpaceOnUse"
					x1={-53.626}
					y1={265.25}
					x2={-53.626}
					y2={331.257}
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
					d="M63.289 108.214a8.304 8.304 0 01-4.779 3.851 8.293 8.293 0 01.842-6.078 8.273 8.273 0 014.779-3.85 8.31 8.31 0 01-.842 6.077z"
				/>
				<LinearGradient
					id="prefix__x"
					gradientUnits="userSpaceOnUse"
					x1={-63.176}
					y1={265.254}
					x2={-63.176}
					y2={331.254}
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
					d="M50.101 109.575a8.311 8.311 0 005.521 2.678 8.291 8.291 0 00-2.184-5.735 8.31 8.31 0 00-5.523-2.676 8.313 8.313 0 002.186 5.733z"
				/>
				<LinearGradient
					id="prefix__y"
					gradientUnits="userSpaceOnUse"
					x1={-53.11}
					y1={265.248}
					x2={-53.11}
					y2={331.256}
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
					d="M63.503 98.72a8.3 8.3 0 01-5.521 2.676 8.293 8.293 0 012.186-5.735 8.292 8.292 0 015.521-2.674 8.281 8.281 0 01-2.186 5.733z"
				/>
				<LinearGradient
					id="prefix__z"
					gradientUnits="userSpaceOnUse"
					x1={-62.628}
					y1={265.261}
					x2={-62.628}
					y2={331.248}
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
					d="M50.347 97.08a8.3 8.3 0 004.779 3.85c.484-1.987.25-4.157-.838-6.079s-2.824-3.242-4.781-3.85a8.318 8.318 0 00.84 6.079z"
				/>
				<LinearGradient
					id="prefix__A"
					gradientUnits="userSpaceOnUse"
					x1={-50.377}
					y1={265.259}
					x2={-50.377}
					y2={331.249}
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
					d="M65.849 89.517a8.29 8.29 0 01-5.982 1.365 8.303 8.303 0 013.42-5.096 8.281 8.281 0 015.982-1.363 8.274 8.274 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__B"
					gradientUnits="userSpaceOnUse"
					x1={-59.375}
					y1={265.25}
					x2={-59.375}
					y2={331.253}
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
					d="M53.4 84.96a8.302 8.302 0 003.789 4.826 8.286 8.286 0 00.551-6.113 8.294 8.294 0 00-3.793-4.826 8.315 8.315 0 00-.547 6.113z"
				/>
				<LinearGradient
					id="prefix__C"
					gradientUnits="userSpaceOnUse"
					x1={-45.57}
					y1={265.252}
					x2={-45.57}
					y2={331.252}
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
					d="M70.207 81.077a8.301 8.301 0 01-6.139-.016 8.3 8.3 0 014.48-4.195 8.286 8.286 0 016.135.018 8.282 8.282 0 01-4.476 4.193z"
				/>
				<LinearGradient
					id="prefix__D"
					gradientUnits="userSpaceOnUse"
					x1={-53.586}
					y1={265.253}
					x2={-53.586}
					y2={331.253}
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
					d="M59.101 73.837a8.297 8.297 0 002.605 5.555 8.293 8.293 0 001.912-5.831 8.306 8.306 0 00-2.609-5.556 8.307 8.307 0 00-1.908 5.832z"
				/>
			</G>
		</Svg>
	);
}

export default SvgComponent;

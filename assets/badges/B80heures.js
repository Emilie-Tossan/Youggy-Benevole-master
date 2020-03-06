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
				x1={-34.19}
				y1={281.711}
				x2={-34.19}
				y2={311.34}
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
				d="M84.558 101.434c1.137-1.214 1.713-2.506 1.713-3.847 0-1.428-.52-2.674-1.544-3.708-1.025-1.034-2.291-1.559-3.762-1.559h-.43c-1.473 0-2.736.524-3.757 1.56-1.02 1.033-1.537 2.279-1.537 3.707 0 1.338.534 2.64 1.589 3.876-2.32 1.792-3.495 3.834-3.495 6.073 0 1.905.682 3.555 2.027 4.903 1.346 1.351 3.16 2.033 5.394 2.033 2.233 0 4.048-.684 5.394-2.033 1.345-1.351 2.027-2.998 2.027-4.903 0-2.238-1.217-4.29-3.619-6.102zm-.883 8.53c-.669.665-1.651 1.002-2.918 1.002-1.276 0-2.26-.337-2.924-1.002-.674-.673-1.001-1.468-1.001-2.428 0-.976.327-1.802 1-2.532.661-.725 1.646-1.229 2.925-1.504 1.272.275 2.252.779 2.916 1.507.68.729 1.011 1.558 1.011 2.529-.001.96-.331 1.754-1.009 2.428zm-1.49-11.012c-.405.428-.761.706-1.046.82a3.123 3.123 0 01-.382.114 2.952 2.952 0 01-.375-.112c-.303-.117-.66-.395-1.059-.821-.377-.402-.56-.851-.56-1.366 0-.503.169-.913.517-1.258a1.701 1.701 0 011.255-.514c.029 0 .063.004.156.014l.182-.004c.04-.006.07-.01.092-.01.504 0 .918.168 1.268.514.348.345.517.755.517 1.258 0 .516-.185.963-.565 1.365z"
			/>
			<LinearGradient
				id="prefix__b"
				gradientUnits="userSpaceOnUse"
				x1={-42.11}
				y1={296.328}
				x2={-26.268}
				y2={296.328}
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
				d="M80.756 114.973c-2.372 0-4.306-.733-5.748-2.181-1.442-1.445-2.173-3.214-2.173-5.256 0-2.268 1.107-4.335 3.291-6.15-.919-1.209-1.385-2.485-1.385-3.799 0-1.563.565-2.929 1.681-4.058 1.118-1.134 2.502-1.709 4.113-1.709h.43c1.609 0 2.994.574 4.117 1.707 1.121 1.132 1.689 2.498 1.689 4.06 0 1.318-.5 2.587-1.488 3.779 2.253 1.832 3.394 3.905 3.394 6.17 0 2.04-.731 3.809-2.172 5.256-1.443 1.447-3.378 2.181-5.749 2.181zm-.221-22.153c-1.334 0-2.478.475-3.401 1.411-.924.936-1.393 2.065-1.393 3.356 0 1.215.494 2.41 1.469 3.552l.341.399-.416.32c-2.19 1.691-3.301 3.602-3.301 5.678 0 1.768.633 3.299 1.881 4.55 1.248 1.252 2.943 1.887 5.04 1.887 2.096 0 3.792-.635 5.04-1.887 1.248-1.253 1.881-2.783 1.881-4.55 0-2.072-1.15-3.99-3.42-5.703l-.444-.335.38-.406c1.047-1.119 1.578-2.298 1.578-3.505 0-1.289-.471-2.418-1.399-3.356-.928-.936-2.074-1.411-3.407-1.411h-.429zm.222 18.646c-1.414 0-2.517-.387-3.278-1.148-.771-.771-1.147-1.681-1.147-2.781 0-1.104.37-2.044 1.132-2.871.729-.798 1.801-1.355 3.187-1.654l.106-.022.105.023c1.377.298 2.447.855 3.179 1.658.768.822 1.142 1.762 1.142 2.866-.001 1.101-.379 2.01-1.157 2.782-.764.761-1.865 1.147-3.269 1.147zm-.001-7.453c-1.126.258-1.985.704-2.555 1.328-.593.645-.869 1.342-.869 2.195 0 .833.271 1.492.854 2.074.567.567 1.432.855 2.57.855 1.13 0 1.994-.288 2.565-.856.587-.583.861-1.242.862-2.074 0-.839-.287-1.555-.877-2.188-.574-.629-1.431-1.077-2.55-1.334zm.001-3.615l-.109-.024a3.46 3.46 0 01-.437-.13c-.387-.149-.793-.458-1.253-.948-.461-.492-.695-1.066-.695-1.708 0-.633.224-1.176.665-1.613a2.206 2.206 0 011.607-.659c.038 0 .083.003.201.016l.229-.016c.633 0 1.178.222 1.62.659.442.438.666.98.666 1.613 0 .641-.236 1.215-.701 1.708-.458.482-.869.799-1.224.941a3.909 3.909 0 01-.458.138l-.111.023zm-.227-4.083c-.36.001-.646.119-.898.369a1.181 1.181 0 00-.369.903c0 .39.135.716.424 1.024.458.489.745.646.875.697.064.023.13.045.194.063.066-.019.137-.042.213-.069.107-.043.385-.2.853-.693.292-.309.428-.634.428-1.021 0-.372-.114-.65-.369-.902a1.228 1.228 0 00-.917-.37l-.263.014-.171-.015z"
			/>
			<G>
				<LinearGradient
					id="prefix__c"
					gradientUnits="userSpaceOnUse"
					x1={-15.477}
					y1={309.545}
					x2={-15.477}
					y2={282.648}
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
					d="M105.025 94.581c-1.526-1.527-3.399-2.303-5.565-2.303-2.158 0-4.026.775-5.554 2.303-1.527 1.528-2.303 3.396-2.303 5.555v6.441c0 2.157.775 4.026 2.303 5.555 1.529 1.527 3.396 2.304 5.554 2.304 2.166 0 4.039-.775 5.565-2.304 1.529-1.528 2.306-3.396 2.306-5.555v-6.441c0-2.158-.774-4.027-2.306-5.555zm-5.565 16.314c-1.2 0-2.197-.412-3.05-1.261-.853-.85-1.267-1.849-1.267-3.057v-6.441c0-1.199.414-2.193 1.267-3.043.854-.849 1.852-1.262 3.05-1.262 1.209 0 2.209.413 3.062 1.262.854.85 1.269 1.844 1.269 3.043v6.441c0 1.208-.414 2.207-1.269 3.057-.851.846-1.853 1.261-3.062 1.261z"
				/>
				<LinearGradient
					id="prefix__d"
					gradientUnits="userSpaceOnUse"
					x1={-23.842}
					y1={296.368}
					x2={-7.114}
					y2={296.368}
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
					d="M99.46 114.936c-2.292 0-4.28-.824-5.908-2.45-1.625-1.626-2.449-3.613-2.449-5.908v-6.441c0-2.294.824-4.283 2.449-5.909 1.626-1.625 3.614-2.45 5.908-2.45 2.303 0 4.294.824 5.919 2.45 1.627 1.624 2.452 3.611 2.452 5.909v6.441c0 2.294-.825 4.282-2.452 5.908-1.624 1.625-3.615 2.45-5.919 2.45zm0-22.158c-2.02 0-3.769.726-5.201 2.157-1.431 1.432-2.156 3.182-2.156 5.202v6.441c0 2.02.726 3.77 2.156 5.201 1.433 1.432 3.183 2.157 5.201 2.157 2.028 0 3.782-.726 5.212-2.157 1.433-1.432 2.159-3.182 2.159-5.201v-6.441c0-2.022-.727-3.772-2.159-5.201-1.431-1.433-3.185-2.158-5.212-2.158zm0 18.617c-1.338 0-2.451-.46-3.402-1.406-.952-.948-1.415-2.063-1.415-3.411v-6.441c0-1.338.462-2.449 1.414-3.397.953-.947 2.066-1.408 3.403-1.408 1.347 0 2.463.46 3.414 1.408.953.947 1.416 2.059 1.416 3.397v6.441c0 1.348-.463 2.464-1.416 3.411-.95.946-2.067 1.406-3.414 1.406zm0-15.064c-1.059 0-1.941.365-2.697 1.117-.764.761-1.12 1.615-1.12 2.688v6.441c0 1.067.366 1.952 1.12 2.702s1.636 1.115 2.697 1.115c1.069 0 1.955-.365 2.709-1.115.765-.761 1.121-1.619 1.121-2.702v-6.441c0-1.074-.356-1.928-1.121-2.688-.755-.752-1.641-1.117-2.709-1.117z"
				/>
			</G>
			<G>
				<LinearGradient
					id="prefix__e"
					gradientUnits="userSpaceOnUse"
					x1={5.104}
					y1={282.464}
					x2={5.104}
					y2={310.01}
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
					d="M124.874 113.896v-9.424h-9.367v9.424h-2.717v-21.08h2.717v8.83h9.367v-8.83h2.433v21.078h-2.433v.002z"
				/>
				<LinearGradient
					id="prefix__f"
					gradientUnits="userSpaceOnUse"
					x1={-3.155}
					y1={296.369}
					x2={13.362}
					y2={296.369}
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
					d="M127.307 92.817v21.078h-2.433v-9.424h-9.367v9.424h-2.717V92.817h2.717v8.83h9.367v-8.83h2.433m1-1h-4.433v8.83h-7.367v-8.83H111.79v23.078H116.507v-9.424h7.367v9.424h4.433V91.817z"
				/>
			</G>
			<G opacity={0.4}>
				<LinearGradient
					id="prefix__g"
					gradientUnits="userSpaceOnUse"
					x1={18.973}
					y1={264.94}
					x2={18.973}
					y2={330.934}
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
					d="M131.659 126.455a8.296 8.296 0 002.608 5.555 8.283 8.283 0 001.908-5.83 8.275 8.275 0 00-2.609-5.553 8.313 8.313 0 00-1.907 5.828z"
				/>
				<LinearGradient
					id="prefix__h"
					gradientUnits="userSpaceOnUse"
					x1={27.142}
					y1={264.938}
					x2={27.142}
					y2={330.937}
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
					d="M142.915 133.461a8.289 8.289 0 01-6.136-.014 8.314 8.314 0 0110.616-4.181 8.311 8.311 0 01-4.48 4.195z"
				/>
				<LinearGradient
					id="prefix__i"
					gradientUnits="userSpaceOnUse"
					x1={22.853}
					y1={264.935}
					x2={22.853}
					y2={330.947}
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
					d="M135.628 117.828a8.287 8.287 0 003.791 4.826 8.286 8.286 0 00.549-6.111 8.303 8.303 0 00-3.79-4.826 8.277 8.277 0 00-.55 6.111z"
				/>
				<LinearGradient
					id="prefix__j"
					gradientUnits="userSpaceOnUse"
					x1={31.948}
					y1={264.938}
					x2={31.948}
					y2={330.938}
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
					d="M148.173 122.121a8.293 8.293 0 01-5.981 1.367 8.29 8.29 0 013.416-5.098 8.29 8.29 0 015.986-1.363 8.336 8.336 0 01-3.421 5.094z"
				/>
				<LinearGradient
					id="prefix__k"
					gradientUnits="userSpaceOnUse"
					x1={24.578}
					y1={264.94}
					x2={24.578}
					y2={330.934}
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
					d="M137.555 108.529a8.3 8.3 0 004.778 3.85 8.298 8.298 0 00-.842-6.078 8.286 8.286 0 00-4.779-3.849 8.304 8.304 0 00.843 6.077z"
				/>
				<LinearGradient
					id="prefix__l"
					gradientUnits="userSpaceOnUse"
					x1={34.129}
					y1={264.945}
					x2={34.129}
					y2={330.93}
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
					d="M150.741 109.891a8.307 8.307 0 01-5.521 2.678 8.287 8.287 0 012.184-5.735 8.3 8.3 0 015.523-2.674 8.31 8.31 0 01-2.186 5.731z"
				/>
				<LinearGradient
					id="prefix__m"
					gradientUnits="userSpaceOnUse"
					x1={24.061}
					y1={264.943}
					x2={24.061}
					y2={330.932}
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
					d="M137.339 99.036a8.307 8.307 0 005.521 2.676 8.286 8.286 0 00-2.186-5.734 8.292 8.292 0 00-5.521-2.674 8.29 8.29 0 002.186 5.732z"
				/>
				<LinearGradient
					id="prefix__n"
					gradientUnits="userSpaceOnUse"
					x1={33.58}
					y1={264.942}
					x2={33.58}
					y2={330.933}
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
					d="M150.493 97.396a8.29 8.29 0 01-4.777 3.85 8.304 8.304 0 01.839-6.078 8.298 8.298 0 014.78-3.85 8.312 8.312 0 01-.842 6.078z"
				/>
				<LinearGradient
					id="prefix__o"
					gradientUnits="userSpaceOnUse"
					x1={21.329}
					y1={264.944}
					x2={21.329}
					y2={330.935}
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
					d="M134.993 89.833a8.287 8.287 0 005.981 1.365 8.303 8.303 0 00-3.42-5.096 8.281 8.281 0 00-5.982-1.363 8.28 8.28 0 003.421 5.094z"
				/>
				<LinearGradient
					id="prefix__p"
					gradientUnits="userSpaceOnUse"
					x1={30.326}
					y1={264.937}
					x2={30.326}
					y2={330.937}
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
					d="M147.441 85.276a8.298 8.298 0 01-3.789 4.826 8.308 8.308 0 013.242-10.939 8.315 8.315 0 01.547 6.113z"
				/>
				<LinearGradient
					id="prefix__q"
					gradientUnits="userSpaceOnUse"
					x1={16.523}
					y1={264.932}
					x2={16.523}
					y2={330.938}
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
					d="M130.637 81.394a8.306 8.306 0 006.139-.016 8.302 8.302 0 00-4.479-4.195 8.281 8.281 0 00-6.137.018 8.278 8.278 0 004.477 4.193z"
				/>
				<LinearGradient
					id="prefix__r"
					gradientUnits="userSpaceOnUse"
					x1={24.538}
					y1={264.932}
					x2={24.538}
					y2={330.937}
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
					d="M141.741 74.153a8.305 8.305 0 01-2.604 5.555 8.277 8.277 0 01-1.912-5.832 8.3 8.3 0 012.608-5.555 8.299 8.299 0 011.908 5.832z"
				/>
				<LinearGradient
					id="prefix__s"
					gradientUnits="userSpaceOnUse"
					x1={-48.021}
					y1={264.94}
					x2={-48.021}
					y2={330.934}
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
					d="M69.183 126.455a8.288 8.288 0 01-2.609 5.555 8.288 8.288 0 01-1.908-5.83 8.275 8.275 0 012.609-5.553 8.295 8.295 0 011.908 5.828z"
				/>
				<LinearGradient
					id="prefix__t"
					gradientUnits="userSpaceOnUse"
					x1={-56.19}
					y1={264.938}
					x2={-56.19}
					y2={330.937}
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
					d="M57.927 133.461a8.286 8.286 0 006.135-.014 8.31 8.31 0 00-10.614-4.181 8.316 8.316 0 004.479 4.195z"
				/>
				<LinearGradient
					id="prefix__u"
					gradientUnits="userSpaceOnUse"
					x1={-51.902}
					y1={264.935}
					x2={-51.902}
					y2={330.947}
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
					d="M65.214 117.828a8.291 8.291 0 01-3.791 4.826 8.291 8.291 0 01-.549-6.111 8.305 8.305 0 013.791-4.826 8.291 8.291 0 01.549 6.111z"
				/>
				<LinearGradient
					id="prefix__v"
					gradientUnits="userSpaceOnUse"
					x1={-60.996}
					y1={264.938}
					x2={-60.996}
					y2={330.938}
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
					d="M52.669 122.121a8.296 8.296 0 005.982 1.367 8.29 8.29 0 00-3.416-5.098 8.29 8.29 0 00-5.986-1.363 8.326 8.326 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__w"
					gradientUnits="userSpaceOnUse"
					x1={-53.626}
					y1={264.94}
					x2={-53.626}
					y2={330.934}
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
					d="M63.289 108.529a8.302 8.302 0 01-4.779 3.85 8.293 8.293 0 01.842-6.078 8.282 8.282 0 014.779-3.849 8.308 8.308 0 01-.842 6.077z"
				/>
				<LinearGradient
					id="prefix__x"
					gradientUnits="userSpaceOnUse"
					x1={-63.176}
					y1={264.945}
					x2={-63.176}
					y2={330.93}
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
					d="M50.101 109.891a8.307 8.307 0 005.521 2.678 8.291 8.291 0 00-2.184-5.735 8.302 8.302 0 00-5.523-2.674 8.314 8.314 0 002.186 5.731z"
				/>
				<LinearGradient
					id="prefix__y"
					gradientUnits="userSpaceOnUse"
					x1={-53.11}
					y1={264.943}
					x2={-53.11}
					y2={330.932}
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
					d="M63.503 99.036a8.309 8.309 0 01-5.521 2.676 8.291 8.291 0 012.186-5.734 8.292 8.292 0 015.521-2.674 8.28 8.28 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__z"
					gradientUnits="userSpaceOnUse"
					x1={-62.628}
					y1={264.942}
					x2={-62.628}
					y2={330.933}
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
					d="M50.347 97.396a8.296 8.296 0 004.779 3.85c.484-1.986.25-4.156-.838-6.078s-2.824-3.242-4.781-3.85a8.316 8.316 0 00.84 6.078z"
				/>
				<LinearGradient
					id="prefix__A"
					gradientUnits="userSpaceOnUse"
					x1={-50.377}
					y1={264.944}
					x2={-50.377}
					y2={330.935}
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
					d="M65.849 89.833a8.29 8.29 0 01-5.982 1.365 8.303 8.303 0 013.42-5.096 8.281 8.281 0 015.982-1.363 8.274 8.274 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__B"
					gradientUnits="userSpaceOnUse"
					x1={-59.375}
					y1={264.937}
					x2={-59.375}
					y2={330.937}
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
					d="M53.4 85.276a8.302 8.302 0 003.789 4.826 8.286 8.286 0 00.551-6.113 8.297 8.297 0 00-3.793-4.826 8.315 8.315 0 00-.547 6.113z"
				/>
				<LinearGradient
					id="prefix__C"
					gradientUnits="userSpaceOnUse"
					x1={-45.57}
					y1={264.932}
					x2={-45.57}
					y2={330.938}
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
					d="M70.207 81.394a8.306 8.306 0 01-6.139-.016 8.3 8.3 0 014.48-4.195 8.276 8.276 0 016.135.018 8.29 8.29 0 01-4.476 4.193z"
				/>
				<LinearGradient
					id="prefix__D"
					gradientUnits="userSpaceOnUse"
					x1={-53.586}
					y1={264.932}
					x2={-53.586}
					y2={330.937}
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
					d="M59.101 74.153a8.297 8.297 0 002.605 5.555 8.296 8.296 0 001.912-5.832 8.301 8.301 0 00-2.609-5.555 8.308 8.308 0 00-1.908 5.832z"
				/>
			</G>
		</Svg>
	);
}

export default SvgComponent;

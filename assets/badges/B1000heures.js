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
				x1={-17.584}
				y1={305.215}
				x2={-17.584}
				y2={285.872}
				gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
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
				d="M101.357 97.676c-1.099-1.099-2.446-1.656-4.003-1.656-1.552 0-2.896.558-3.994 1.656-1.098 1.098-1.656 2.442-1.656 3.994v4.633c0 1.553.558 2.896 1.656 3.994 1.1 1.1 2.442 1.656 3.994 1.656 1.558 0 2.905-.559 4.003-1.656 1.1-1.1 1.658-2.441 1.658-3.994v-4.633c.001-1.552-.558-2.896-1.658-3.994zm-4.003 11.73c-.863 0-1.579-.297-2.193-.906-.613-.609-.911-1.328-.911-2.197v-4.633c0-.861.298-1.577.911-2.188.614-.61 1.331-.908 2.193-.908.869 0 1.589.298 2.202.908.614.61.912 1.325.912 2.188v4.633c0 .869-.298 1.588-.912 2.197-.613.609-1.333.906-2.202.906z"
			/>
			<LinearGradient
				id="prefix__b"
				gradientUnits="userSpaceOnUse"
				x1={-23.741}
				y1={295.738}
				x2={-11.429}
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
				fill="url(#prefix__b)"
				d="M97.354 112.453c-1.688 0-3.151-.606-4.348-1.803-1.196-1.196-1.802-2.658-1.802-4.348v-4.633c0-1.689.606-3.151 1.802-4.347 1.196-1.196 2.659-1.803 4.348-1.803 1.695 0 3.162.606 4.357 1.803 1.197 1.195 1.805 2.658 1.805 4.347v4.633c0 1.688-.607 3.15-1.805 4.348-1.197 1.197-2.663 1.803-4.357 1.803zm0-15.933c-1.414 0-2.639.508-3.641 1.51-1.001 1.001-1.509 2.226-1.509 3.64v4.633c0 1.414.508 2.639 1.509 3.641 1.002 1.002 2.227 1.51 3.641 1.51 1.419 0 2.647-.508 3.65-1.51 1.003-1.003 1.512-2.229 1.512-3.641v-4.633c0-1.414-.509-2.639-1.512-3.64-1.002-1.002-2.23-1.51-3.65-1.51zm0 13.386c-1 0-1.833-.344-2.545-1.052-.713-.708-1.059-1.542-1.059-2.552v-4.633c0-1.001.346-1.833 1.058-2.542.714-.709 1.546-1.054 2.546-1.054 1.006 0 1.842.345 2.555 1.054.712.708 1.059 1.54 1.059 2.542v4.633c0 1.01-.347 1.845-1.06 2.552-.712.708-1.547 1.052-2.554 1.052zm0-10.832c-.732 0-1.316.242-1.84.763-.521.519-.764 1.102-.764 1.833v4.633c0 .739.243 1.325.764 1.843.523.519 1.107.761 1.84.761.739 0 1.327-.242 1.85-.761.521-.518.764-1.104.764-1.843v-4.633c0-.732-.243-1.315-.764-1.833-.524-.521-1.111-.763-1.85-.763z"
			/>
			<LinearGradient
				id="prefix__c"
				gradientUnits="userSpaceOnUse"
				x1={-4.222}
				y1={305.215}
				x2={-4.222}
				y2={285.872}
				gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
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
				d="M114.721 97.676c-1.098-1.099-2.445-1.656-4.004-1.656-1.551 0-2.895.558-3.994 1.656-1.098 1.099-1.656 2.442-1.656 3.994v4.633c0 1.553.56 2.896 1.656 3.994 1.1 1.1 2.443 1.656 3.994 1.656 1.559 0 2.906-.559 4.004-1.656 1.1-1.1 1.658-2.441 1.658-3.994v-4.633c0-1.552-.559-2.896-1.658-3.994zm-4.004 11.73c-.863 0-1.578-.297-2.193-.906-.612-.609-.91-1.328-.91-2.197v-4.633c0-.861.298-1.577.91-2.188.615-.61 1.332-.908 2.193-.908.869 0 1.59.298 2.203.908s.912 1.325.912 2.188v4.633c0 .869-.299 1.588-.912 2.197s-1.334.906-2.203.906z"
			/>
			<LinearGradient
				id="prefix__d"
				gradientUnits="userSpaceOnUse"
				x1={-10.378}
				y1={295.738}
				x2={1.934}
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
				d="M110.717 112.453c-1.688 0-3.151-.606-4.348-1.803-1.196-1.197-1.803-2.66-1.803-4.348v-4.633c0-1.688.606-3.15 1.803-4.347 1.198-1.196 2.66-1.803 4.348-1.803 1.697 0 3.163.606 4.357 1.803 1.197 1.195 1.805 2.658 1.805 4.347v4.633c0 1.688-.607 3.15-1.805 4.348-1.196 1.197-2.662 1.803-4.357 1.803zm0-15.933c-1.412 0-2.638.508-3.641 1.51-1.002 1.002-1.51 2.227-1.51 3.64v4.633c0 1.413.508 2.638 1.51 3.641 1.002 1.002 2.227 1.51 3.641 1.51 1.42 0 2.648-.508 3.65-1.51 1.003-1.003 1.512-2.229 1.512-3.641v-4.633c0-1.414-.509-2.639-1.512-3.64-1.001-1.002-2.228-1.51-3.65-1.51zm0 13.386c-.999 0-1.831-.344-2.545-1.051-.713-.709-1.059-1.544-1.059-2.553v-4.633c0-1 .346-1.832 1.057-2.542.717-.71 1.549-1.054 2.547-1.054 1.007 0 1.843.345 2.556 1.054s1.06 1.541 1.06 2.542v4.633c0 1.009-.347 1.844-1.06 2.552-.712.708-1.548 1.052-2.556 1.052zm0-10.832c-.73 0-1.316.243-1.842.763-.52.519-.762 1.102-.762 1.833v4.633c0 .739.242 1.325.763 1.843.523.519 1.109.761 1.841.761.74 0 1.328-.242 1.851-.761.521-.519.765-1.104.765-1.843v-4.633c0-.732-.243-1.314-.765-1.833-.524-.521-1.112-.763-1.851-.763z"
			/>
			<G>
				<LinearGradient
					id="prefix__e"
					gradientUnits="userSpaceOnUse"
					x1={9.816}
					y1={285.741}
					x2={9.816}
					y2={305.549}
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
					d="M128.23 111.564v-6.775h-6.736v6.775h-1.953V96.407h1.953v6.35h6.736v-6.35h1.75v15.158h-1.75z"
				/>
				<LinearGradient
					id="prefix__f"
					gradientUnits="userSpaceOnUse"
					x1={3.596}
					y1={295.739}
					x2={16.036}
					y2={295.739}
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
					d="M129.98 96.407v15.158h-1.75v-6.775h-6.736v6.775h-1.953V96.407h1.953v6.35h6.736v-6.35h1.75m1-1h-3.75v6.35h-4.736v-6.35H118.541v17.158H122.494v-6.775h4.736v6.775h3.75V95.407z"
				/>
			</G>
			<G opacity={0.4}>
				<LinearGradient
					id="prefix__g"
					gradientUnits="userSpaceOnUse"
					x1={19.078}
					y1={264.433}
					x2={19.078}
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
					d="M131.764 126.96a8.304 8.304 0 002.609 5.556 8.288 8.288 0 001.908-5.83 8.28 8.28 0 00-2.609-5.554 8.306 8.306 0 00-1.908 5.828z"
				/>
				<LinearGradient
					id="prefix__h"
					gradientUnits="userSpaceOnUse"
					x1={27.247}
					y1={264.434}
					x2={27.247}
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
					d="M143.02 133.966a8.281 8.281 0 01-6.135-.014 8.284 8.284 0 014.477-4.199 8.308 8.308 0 016.138.019 8.327 8.327 0 01-4.48 4.194z"
				/>
				<LinearGradient
					id="prefix__i"
					gradientUnits="userSpaceOnUse"
					x1={22.957}
					y1={264.435}
					x2={22.957}
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
					d="M135.732 118.333a8.287 8.287 0 003.791 4.826 8.291 8.291 0 00.549-6.111 8.303 8.303 0 00-3.791-4.825 8.284 8.284 0 00-.549 6.11z"
				/>
				<LinearGradient
					id="prefix__j"
					gradientUnits="userSpaceOnUse"
					x1={32.051}
					y1={264.432}
					x2={32.051}
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
					d="M148.277 122.626a8.29 8.29 0 01-5.982 1.367 8.292 8.292 0 013.416-5.099 8.294 8.294 0 015.986-1.363 8.32 8.32 0 01-3.42 5.095z"
				/>
				<LinearGradient
					id="prefix__k"
					gradientUnits="userSpaceOnUse"
					x1={24.682}
					y1={264.435}
					x2={24.682}
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
					d="M137.658 109.034a8.306 8.306 0 004.779 3.85 8.296 8.296 0 00-.842-6.077 8.287 8.287 0 00-4.779-3.85 8.305 8.305 0 00.842 6.077z"
				/>
				<LinearGradient
					id="prefix__l"
					gradientUnits="userSpaceOnUse"
					x1={34.233}
					y1={264.433}
					x2={34.233}
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
					d="M150.846 110.396a8.311 8.311 0 01-5.521 2.678 8.29 8.29 0 012.184-5.736 8.3 8.3 0 015.522-2.674 8.298 8.298 0 01-2.185 5.732z"
				/>
				<LinearGradient
					id="prefix__m"
					gradientUnits="userSpaceOnUse"
					x1={24.166}
					y1={264.435}
					x2={24.166}
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
					d="M137.443 99.541a8.302 8.302 0 005.521 2.676 8.287 8.287 0 00-2.187-5.734 8.288 8.288 0 00-5.521-2.674 8.295 8.295 0 002.187 5.732z"
				/>
				<LinearGradient
					id="prefix__n"
					gradientUnits="userSpaceOnUse"
					x1={33.685}
					y1={264.438}
					x2={33.685}
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
					d="M150.598 97.9a8.286 8.286 0 01-4.777 3.85 8.304 8.304 0 01.839-6.078 8.298 8.298 0 014.78-3.85 8.306 8.306 0 01-.842 6.078z"
				/>
				<LinearGradient
					id="prefix__o"
					gradientUnits="userSpaceOnUse"
					x1={21.434}
					y1={264.44}
					x2={21.434}
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
					d="M135.098 90.338a8.29 8.29 0 005.982 1.365 8.303 8.303 0 00-3.42-5.096 8.281 8.281 0 00-5.982-1.363 8.266 8.266 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__p"
					gradientUnits="userSpaceOnUse"
					x1={30.432}
					y1={264.423}
					x2={30.432}
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
					d="M147.547 85.781a8.302 8.302 0 01-3.789 4.826A8.308 8.308 0 01147 79.668a8.315 8.315 0 01.547 6.113z"
				/>
				<LinearGradient
					id="prefix__q"
					gradientUnits="userSpaceOnUse"
					x1={16.627}
					y1={264.427}
					x2={16.627}
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
					d="M130.74 81.898a8.306 8.306 0 006.139-.016 8.302 8.302 0 00-4.479-4.195 8.281 8.281 0 00-6.137.018 8.287 8.287 0 004.477 4.193z"
				/>
				<LinearGradient
					id="prefix__r"
					gradientUnits="userSpaceOnUse"
					x1={24.642}
					y1={264.433}
					x2={24.642}
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
					d="M141.846 74.658a8.3 8.3 0 01-2.604 5.555 8.277 8.277 0 01-1.912-5.832 8.3 8.3 0 012.608-5.555 8.311 8.311 0 011.908 5.832z"
				/>
				<LinearGradient
					id="prefix__s"
					gradientUnits="userSpaceOnUse"
					x1={-47.917}
					y1={264.433}
					x2={-47.917}
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
					d="M69.287 126.96a8.295 8.295 0 01-2.609 5.556 8.288 8.288 0 01-1.908-5.83 8.28 8.28 0 012.609-5.554 8.306 8.306 0 011.908 5.828z"
				/>
				<LinearGradient
					id="prefix__t"
					gradientUnits="userSpaceOnUse"
					x1={-56.086}
					y1={264.434}
					x2={-56.086}
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
					d="M58.031 133.966a8.281 8.281 0 006.135-.014 8.284 8.284 0 00-4.477-4.199 8.306 8.306 0 00-6.137.019 8.314 8.314 0 004.479 4.194z"
				/>
				<LinearGradient
					id="prefix__u"
					gradientUnits="userSpaceOnUse"
					x1={-51.797}
					y1={264.435}
					x2={-51.797}
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
					d="M65.318 118.333a8.291 8.291 0 01-3.791 4.826 8.291 8.291 0 01-.549-6.111 8.303 8.303 0 013.791-4.825 8.289 8.289 0 01.549 6.11z"
				/>
				<LinearGradient
					id="prefix__v"
					gradientUnits="userSpaceOnUse"
					x1={-60.891}
					y1={264.432}
					x2={-60.891}
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
					d="M52.773 122.626a8.29 8.29 0 005.982 1.367 8.292 8.292 0 00-3.416-5.099 8.294 8.294 0 00-5.986-1.363 8.328 8.328 0 003.42 5.095z"
				/>
				<LinearGradient
					id="prefix__w"
					gradientUnits="userSpaceOnUse"
					x1={-53.522}
					y1={264.435}
					x2={-53.522}
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
					d="M63.392 109.034a8.306 8.306 0 01-4.779 3.85 8.291 8.291 0 01.842-6.077 8.284 8.284 0 014.779-3.85 8.305 8.305 0 01-.842 6.077z"
				/>
				<LinearGradient
					id="prefix__x"
					gradientUnits="userSpaceOnUse"
					x1={-63.073}
					y1={264.433}
					x2={-63.073}
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
					d="M50.205 110.396a8.311 8.311 0 005.521 2.678 8.294 8.294 0 00-2.184-5.736 8.302 8.302 0 00-5.523-2.674 8.308 8.308 0 002.186 5.732z"
				/>
				<LinearGradient
					id="prefix__y"
					gradientUnits="userSpaceOnUse"
					x1={-53.005}
					y1={264.435}
					x2={-53.005}
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
					d="M63.607 99.541a8.304 8.304 0 01-5.521 2.676 8.291 8.291 0 012.186-5.734 8.292 8.292 0 015.521-2.674 8.285 8.285 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__z"
					gradientUnits="userSpaceOnUse"
					x1={-62.525}
					y1={264.438}
					x2={-62.525}
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
					d="M50.451 97.9a8.296 8.296 0 004.779 3.85 8.304 8.304 0 00-.838-6.078 8.3 8.3 0 00-4.781-3.85 8.31 8.31 0 00.84 6.078z"
				/>
				<LinearGradient
					id="prefix__A"
					gradientUnits="userSpaceOnUse"
					x1={-50.273}
					y1={264.44}
					x2={-50.273}
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
					d="M65.953 90.338a8.29 8.29 0 01-5.982 1.365 8.303 8.303 0 013.42-5.096 8.281 8.281 0 015.982-1.363 8.274 8.274 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__B"
					gradientUnits="userSpaceOnUse"
					x1={-59.272}
					y1={264.423}
					x2={-59.272}
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
					d="M53.503 85.781a8.302 8.302 0 003.789 4.826 8.286 8.286 0 00.551-6.113 8.297 8.297 0 00-3.793-4.826 8.315 8.315 0 00-.547 6.113z"
				/>
				<LinearGradient
					id="prefix__C"
					gradientUnits="userSpaceOnUse"
					x1={-45.467}
					y1={264.427}
					x2={-45.467}
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
					d="M70.31 81.898a8.306 8.306 0 01-6.139-.016 8.3 8.3 0 014.48-4.195 8.276 8.276 0 016.135.018 8.275 8.275 0 01-4.476 4.193z"
				/>
				<LinearGradient
					id="prefix__D"
					gradientUnits="userSpaceOnUse"
					x1={-53.482}
					y1={264.433}
					x2={-53.482}
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
					d="M59.205 74.658a8.297 8.297 0 002.605 5.555 8.296 8.296 0 001.912-5.832 8.301 8.301 0 00-2.609-5.555 8.302 8.302 0 00-1.908 5.832z"
				/>
			</G>
			<G>
				<LinearGradient
					id="prefix__E"
					gradientUnits="userSpaceOnUse"
					x1={-42.639}
					y1={285.663}
					x2={-42.639}
					y2={305.707}
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
					fill="url(#prefix__E)"
					d="M70.446 99.15h1.582v12.463h2.139V96.358h-2.01z"
				/>
				<LinearGradient
					id="prefix__F"
					gradientUnits="userSpaceOnUse"
					x1={-46.285}
					y1={295.739}
					x2={-39.777}
					y2={295.739}
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
					d="M74.167 96.358v15.255h-2.14V99.15h-1.582l1.711-2.792h2.011m1-1h-3.571l-.292.478-1.711 2.792-.933 1.522h2.368v12.463H75.168V96.358l-.001-1z"
				/>
			</G>
			<G>
				<LinearGradient
					id="prefix__G"
					gradientUnits="userSpaceOnUse"
					x1={-31.066}
					y1={305.215}
					x2={-31.066}
					y2={285.872}
					gradientTransform="matrix(1 0 0 -1 114.945 399.725)"
				>
					<Stop offset={0} stopColor="#b19669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.623} stopColor="#eaca93" />
					<Stop offset={0.792} stopColor="#d5b683" />
					<Stop offset={0.998} stopColor="#b19669" />
					<Stop offset={1} stopColor="#b19669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__G)"
					d="M87.878 97.677c-1.1-1.1-2.447-1.657-4.004-1.657-1.552 0-2.896.558-3.994 1.657-1.099 1.099-1.656 2.442-1.656 3.993v4.633c0 1.553.558 2.896 1.656 3.994 1.1 1.1 2.442 1.656 3.994 1.656 1.557 0 2.904-.557 4.004-1.656 1.099-1.098 1.655-2.441 1.655-3.994v-4.633c.001-1.551-.556-2.895-1.655-3.993zm-4.003 11.731c-.863 0-1.58-.297-2.193-.908-.613-.609-.911-1.328-.911-2.197v-4.633c0-.861.298-1.577.911-2.188a2.969 2.969 0 012.193-.907c.869 0 1.589.297 2.203.907.612.61.91 1.327.91 2.188v4.633c0 .869-.298 1.588-.91 2.197-.614.611-1.334.908-2.203.908z"
				/>
				<LinearGradient
					id="prefix__H"
					gradientUnits="userSpaceOnUse"
					x1={-37.221}
					y1={295.738}
					x2={-24.912}
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
					fill="url(#prefix__H)"
					d="M83.874 112.453c-1.688 0-3.151-.606-4.348-1.803-1.196-1.196-1.802-2.658-1.802-4.348v-4.633c0-1.688.606-3.151 1.802-4.346 1.196-1.197 2.659-1.804 4.348-1.804 1.694 0 3.161.607 4.357 1.804 1.197 1.195 1.803 2.657 1.802 4.346v4.633c0 1.691-.606 3.154-1.802 4.348-1.196 1.197-2.662 1.803-4.357 1.803zm0-15.933c-1.414 0-2.639.508-3.641 1.511-1.001 1.001-1.509 2.226-1.509 3.639v4.633c0 1.414.508 2.639 1.509 3.641 1.002 1.002 2.227 1.51 3.641 1.51 1.42 0 2.648-.508 3.65-1.51 1.001-1 1.509-2.225 1.509-3.641v-4.633c.001-1.414-.507-2.638-1.509-3.639-1.002-1.003-2.23-1.511-3.65-1.511zm.001 13.388c-1.002 0-1.835-.345-2.546-1.055-.712-.707-1.058-1.541-1.058-2.551v-4.633c0-1.001.346-1.833 1.058-2.542a3.489 3.489 0 012.546-1.053c1.007 0 1.842.344 2.555 1.052a3.475 3.475 0 011.058 2.543v4.633c0 1.009-.346 1.843-1.057 2.552-.713.709-1.549 1.054-2.556 1.054zm0-10.833c-.734 0-1.319.242-1.84.761-.521.52-.764 1.103-.764 1.834v4.633c0 .739.243 1.325.764 1.843.522.521 1.106.763 1.84.763.74 0 1.328-.242 1.851-.763.52-.518.762-1.104.762-1.843v-4.633c0-.732-.242-1.315-.763-1.834-.522-.519-1.111-.761-1.85-.761z"
				/>
			</G>
		</Svg>
	);
}

export default SvgComponent;

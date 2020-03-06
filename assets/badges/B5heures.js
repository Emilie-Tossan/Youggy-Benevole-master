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
				x1={113.022}
				y1={121.204}
				x2={113.022}
				y2={84.327}
			>
				<Stop offset={0} stopColor="#b19769" />
				<Stop offset={0.513} stopColor="#f3d29a" />
				<Stop offset={0.622} stopColor="#ebcb94" />
				<Stop offset={0.789} stopColor="#d6b884" />
				<Stop offset={0.993} stopColor="#b2986a" />
				<Stop offset={1} stopColor="#b19769" />
			</LinearGradient>
			<Path
				fill="url(#prefix__a)"
				d="M119.481 116.698v-12.617h-12.538v12.617h-3.639V88.479h3.639V100.3h12.538V88.479h3.257v28.219h-3.257z"
			/>
			<LinearGradient
				id="prefix__b"
				gradientUnits="userSpaceOnUse"
				x1={102.305}
				y1={102.589}
				x2={123.738}
				y2={102.589}
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
				d="M122.738 88.479v28.219h-3.257v-12.617h-12.538v12.617h-3.639V88.479h3.639V100.3h12.538V88.479h3.257m1-1h-5.257V99.3h-10.538V87.479H102.304v30.219H107.943v-12.617h10.538v12.617h5.257V87.479z"
			/>
			<G>
				<LinearGradient
					id="prefix__c"
					gradientUnits="userSpaceOnUse"
					x1={86.732}
					y1={122.386}
					x2={86.732}
					y2={84.87}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__c)"
					d="M83.077 96.155a9.788 9.788 0 012.066-.211c1.317 0 2.583.211 3.796.636 2.721.93 4.742 2.647 6.073 5.155.836 1.552 1.254 3.155 1.254 4.803 0 1.025-.157 2.049-.477 3.072-.835 2.731-2.507 4.773-5.014 6.126-1.532.812-3.115 1.22-4.75 1.22-1.036 0-2.083-.167-3.143-.495-2.189-.671-4.086-2.095-5.687-4.272l2.578-2.86c1.307 1.931 2.707 3.117 4.202 3.565a6.708 6.708 0 001.995.318c1.035 0 2.049-.259 3.037-.777 1.612-.858 2.685-2.164 3.214-3.919a6.6 6.6 0 00.318-1.996c0-1.023-.265-2.036-.794-3.037-.873-1.623-2.19-2.741-3.956-3.354-.766-.271-1.612-.406-2.542-.406-1.261 0-2.872.313-4.84.937l-2.206-1.925 3.179-8.775v-1.431h10.347v3.655H84.47l-1.393 3.971z"
				/>
				<LinearGradient
					id="prefix__d"
					gradientUnits="userSpaceOnUse"
					x1={75.909}
					y1={102.742}
					x2={97.267}
					y2={102.742}
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
					d="M91.729 88.527v3.655h-7.257l-1.396 3.973a9.788 9.788 0 012.066-.211c1.317 0 2.583.211 3.796.636 2.721.93 4.742 2.647 6.073 5.155.836 1.552 1.254 3.155 1.254 4.803 0 1.025-.157 2.049-.477 3.072-.835 2.731-2.507 4.773-5.014 6.126-1.532.812-3.115 1.22-4.75 1.22-1.036 0-2.083-.167-3.143-.495-2.189-.671-4.086-2.095-5.687-4.272l2.578-2.86c1.307 1.931 2.707 3.117 4.202 3.565a6.708 6.708 0 001.995.318c1.035 0 2.049-.259 3.037-.777 1.612-.858 2.685-2.164 3.214-3.919a6.6 6.6 0 00.318-1.996c0-1.023-.265-2.036-.794-3.037-.873-1.623-2.19-2.741-3.956-3.354-.766-.271-1.612-.406-2.542-.406-1.261 0-2.872.313-4.84.937L78.2 98.735l3.179-8.775v-1.431h10.35m1-1.002H80.383v2.255l-3.119 8.61-.233.644.516.45 2.206 1.925.423.369.536-.17c1.865-.59 3.392-.89 4.538-.89.81 0 1.553.118 2.209.349 1.538.535 2.651 1.479 3.408 2.886.447.845.675 1.709.675 2.563 0 .553-.091 1.123-.272 1.695-.457 1.514-1.349 2.602-2.73 3.337-.833.438-1.699.66-2.567.66a5.764 5.764 0 01-1.699-.273c-1.272-.382-2.504-1.447-3.67-3.171l-.716-1.058-.855.948-2.578 2.86-.545.605.482.656c1.723 2.345 3.808 3.904 6.199 4.637 1.154.357 2.311.539 3.436.539 1.791 0 3.546-.449 5.218-1.336 2.743-1.479 4.591-3.738 5.501-6.718.345-1.104.521-2.238.521-3.364 0-1.81-.462-3.585-1.374-5.276-1.444-2.724-3.676-4.619-6.63-5.628a12.43 12.43 0 00-4.705-.674l.624-1.776h7.548V87.527h-.001z"
				/>
			</G>
			<G opacity={0.4}>
				<LinearGradient
					id="prefix__e"
					gradientUnits="userSpaceOnUse"
					x1={133.883}
					y1={134.019}
					x2={133.883}
					y2={68.019}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__e)"
					d="M131.624 125.688a8.297 8.297 0 002.609 5.555 8.288 8.288 0 001.908-5.83 8.275 8.275 0 00-2.609-5.553 8.308 8.308 0 00-1.908 5.828z"
				/>
				<LinearGradient
					id="prefix__f"
					gradientUnits="userSpaceOnUse"
					x1={142.052}
					y1={134.02}
					x2={142.052}
					y2={68.02}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__f)"
					d="M142.88 132.693a8.286 8.286 0 01-6.135-.014 8.31 8.31 0 0110.614-4.181 8.305 8.305 0 01-4.479 4.195z"
				/>
				<LinearGradient
					id="prefix__g"
					gradientUnits="userSpaceOnUse"
					x1={137.762}
					y1={134.019}
					x2={137.762}
					y2={68.019}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__g)"
					d="M135.593 117.061a8.291 8.291 0 003.791 4.826 8.291 8.291 0 00.549-6.111 8.305 8.305 0 00-3.791-4.826 8.28 8.28 0 00-.549 6.111z"
				/>
				<LinearGradient
					id="prefix__h"
					gradientUnits="userSpaceOnUse"
					x1={146.856}
					y1={134.019}
					x2={146.856}
					y2={68.019}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__h)"
					d="M148.138 121.354a8.296 8.296 0 01-5.982 1.367 8.29 8.29 0 013.416-5.098 8.294 8.294 0 015.986-1.363 8.326 8.326 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__i"
					gradientUnits="userSpaceOnUse"
					x1={139.488}
					y1={134.018}
					x2={139.488}
					y2={68.024}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__i)"
					d="M137.519 107.762a8.302 8.302 0 004.779 3.85 8.293 8.293 0 00-.842-6.078 8.282 8.282 0 00-4.779-3.849 8.299 8.299 0 00.842 6.077z"
				/>
				<LinearGradient
					id="prefix__j"
					gradientUnits="userSpaceOnUse"
					x1={149.038}
					y1={134.017}
					x2={149.038}
					y2={68.024}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__j)"
					d="M150.706 109.123a8.307 8.307 0 01-5.521 2.678 8.294 8.294 0 012.184-5.736 8.302 8.302 0 015.523-2.674 8.303 8.303 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__k"
					gradientUnits="userSpaceOnUse"
					x1={138.972}
					y1={134.019}
					x2={138.972}
					y2={68.022}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__k)"
					d="M137.304 98.269a8.304 8.304 0 005.521 2.676 8.291 8.291 0 00-2.186-5.734 8.292 8.292 0 00-5.521-2.674 8.287 8.287 0 002.186 5.732z"
				/>
				<LinearGradient
					id="prefix__l"
					gradientUnits="userSpaceOnUse"
					x1={148.49}
					y1={134.022}
					x2={148.49}
					y2={68.022}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__l)"
					d="M150.458 96.628a8.29 8.29 0 01-4.777 3.85c-.484-1.986-.25-4.156.838-6.078s2.824-3.242 4.781-3.85a8.307 8.307 0 01-.842 6.078z"
				/>
				<LinearGradient
					id="prefix__m"
					gradientUnits="userSpaceOnUse"
					x1={136.239}
					y1={134.014}
					x2={136.239}
					y2={68.023}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__m)"
					d="M134.958 89.065a8.29 8.29 0 005.982 1.365 8.303 8.303 0 00-3.42-5.096 8.281 8.281 0 00-5.982-1.363 8.272 8.272 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__n"
					gradientUnits="userSpaceOnUse"
					x1={145.236}
					y1={134.023}
					x2={145.236}
					y2={68.02}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__n)"
					d="M147.407 84.509a8.302 8.302 0 01-3.789 4.826 8.296 8.296 0 01-.553-6.113 8.305 8.305 0 013.795-4.826 8.314 8.314 0 01.547 6.113z"
				/>
				<LinearGradient
					id="prefix__o"
					gradientUnits="userSpaceOnUse"
					x1={131.432}
					y1={134.022}
					x2={131.432}
					y2={68.022}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__o)"
					d="M130.601 80.625a8.301 8.301 0 006.139-.016 8.302 8.302 0 00-4.479-4.195 8.29 8.29 0 00-6.137.018 8.277 8.277 0 004.477 4.193z"
				/>
				<LinearGradient
					id="prefix__p"
					gradientUnits="userSpaceOnUse"
					x1={139.447}
					y1={134.02}
					x2={139.447}
					y2={68.02}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__p)"
					d="M141.706 73.385a8.297 8.297 0 01-2.605 5.555 8.284 8.284 0 01-1.912-5.831 8.306 8.306 0 012.609-5.556 8.307 8.307 0 011.908 5.832z"
				/>
				<LinearGradient
					id="prefix__q"
					gradientUnits="userSpaceOnUse"
					x1={66.888}
					y1={134.019}
					x2={66.888}
					y2={68.019}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__q)"
					d="M69.147 125.688a8.288 8.288 0 01-2.609 5.555 8.288 8.288 0 01-1.908-5.83 8.275 8.275 0 012.609-5.553 8.294 8.294 0 011.908 5.828z"
				/>
				<LinearGradient
					id="prefix__r"
					gradientUnits="userSpaceOnUse"
					x1={58.72}
					y1={134.02}
					x2={58.72}
					y2={68.02}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__r)"
					d="M57.892 132.693a8.286 8.286 0 006.135-.014 8.31 8.31 0 00-10.614-4.181 8.302 8.302 0 004.479 4.195z"
				/>
				<LinearGradient
					id="prefix__s"
					gradientUnits="userSpaceOnUse"
					x1={63.009}
					y1={134.019}
					x2={63.009}
					y2={68.019}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__s)"
					d="M65.179 117.061a8.291 8.291 0 01-3.791 4.826 8.291 8.291 0 01-.549-6.111 8.305 8.305 0 013.791-4.826 8.29 8.29 0 01.549 6.111z"
				/>
				<LinearGradient
					id="prefix__t"
					gradientUnits="userSpaceOnUse"
					x1={53.915}
					y1={134.019}
					x2={53.915}
					y2={68.019}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__t)"
					d="M52.634 121.354a8.296 8.296 0 005.982 1.367 8.29 8.29 0 00-3.416-5.098 8.294 8.294 0 00-5.986-1.363 8.318 8.318 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__u"
					gradientUnits="userSpaceOnUse"
					x1={61.284}
					y1={134.018}
					x2={61.284}
					y2={68.024}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__u)"
					d="M63.253 107.762a8.302 8.302 0 01-4.779 3.85 8.293 8.293 0 01.842-6.078 8.282 8.282 0 014.779-3.849 8.304 8.304 0 01-.842 6.077z"
				/>
				<LinearGradient
					id="prefix__v"
					gradientUnits="userSpaceOnUse"
					x1={51.734}
					y1={134.017}
					x2={51.734}
					y2={68.024}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__v)"
					d="M50.065 109.123a8.307 8.307 0 005.521 2.678 8.294 8.294 0 00-2.184-5.736 8.302 8.302 0 00-5.523-2.674 8.313 8.313 0 002.186 5.732z"
				/>
				<LinearGradient
					id="prefix__w"
					gradientUnits="userSpaceOnUse"
					x1={61.8}
					y1={134.019}
					x2={61.8}
					y2={68.022}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__w)"
					d="M63.468 98.269a8.304 8.304 0 01-5.521 2.676 8.291 8.291 0 012.186-5.734 8.292 8.292 0 015.521-2.674 8.287 8.287 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__x"
					gradientUnits="userSpaceOnUse"
					x1={52.282}
					y1={134.022}
					x2={52.282}
					y2={68.022}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__x)"
					d="M50.312 96.628a8.3 8.3 0 004.779 3.85c.484-1.986.25-4.156-.838-6.078s-2.824-3.242-4.781-3.85a8.311 8.311 0 00.84 6.078z"
				/>
				<LinearGradient
					id="prefix__y"
					gradientUnits="userSpaceOnUse"
					x1={64.532}
					y1={134.014}
					x2={64.532}
					y2={68.023}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__y)"
					d="M65.813 89.065a8.29 8.29 0 01-5.982 1.365 8.303 8.303 0 013.42-5.096 8.281 8.281 0 015.982-1.363 8.263 8.263 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__z"
					gradientUnits="userSpaceOnUse"
					x1={55.535}
					y1={134.023}
					x2={55.535}
					y2={68.02}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__z)"
					d="M53.364 84.509a8.302 8.302 0 003.789 4.826 8.286 8.286 0 00.551-6.113 8.294 8.294 0 00-3.793-4.826 8.314 8.314 0 00-.547 6.113z"
				/>
				<LinearGradient
					id="prefix__A"
					gradientUnits="userSpaceOnUse"
					x1={69.34}
					y1={134.022}
					x2={69.34}
					y2={68.022}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__A)"
					d="M70.171 80.625a8.301 8.301 0 01-6.139-.016 8.3 8.3 0 014.48-4.195 8.286 8.286 0 016.135.018 8.275 8.275 0 01-4.476 4.193z"
				/>
				<LinearGradient
					id="prefix__B"
					gradientUnits="userSpaceOnUse"
					x1={61.324}
					y1={134.02}
					x2={61.324}
					y2={68.02}
				>
					<Stop offset={0} stopColor="#b09669" />
					<Stop offset={0.513} stopColor="#f2d199" />
					<Stop offset={0.622} stopColor="#eaca93" />
					<Stop offset={0.789} stopColor="#d5b784" />
					<Stop offset={0.993} stopColor="#b1976a" />
					<Stop offset={1} stopColor="#b09669" />
				</LinearGradient>
				<Path
					fill="url(#prefix__B)"
					d="M59.065 73.385a8.297 8.297 0 002.605 5.555 8.293 8.293 0 001.912-5.831 8.306 8.306 0 00-2.609-5.556 8.311 8.311 0 00-1.908 5.832z"
				/>
			</G>
		</Svg>
	);
}

export default SvgComponent;

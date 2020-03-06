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
				x1={-35.334}
				y1={281.391}
				x2={-35.334}
				y2={310.56}
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
				d="M79.645 92.341c-2.166 0-4.037.774-5.562 2.304-1.522 1.527-2.295 3.396-2.295 5.553 0 2.166.772 4.041 2.296 5.574 1.271 1.271 2.883 1.916 4.797 1.916.989 0 1.84-.127 2.551-.375-1.349 1.814-3.266 4.013-5.718 6.554l-.611.633h4.631l.111-.125c2.299-2.59 4.15-4.864 5.507-6.767 1.383-1.942 2.084-4.225 2.084-6.815-.01-2.602-.76-4.673-2.231-6.155-1.534-1.524-3.404-2.297-5.56-2.297zm0 3.54c1.208 0 2.21.412 3.062 1.262.853.849 1.268 1.849 1.268 3.055 0 1.208-.415 2.207-1.268 3.056s-1.854 1.26-3.062 1.26c-1.2 0-2.197-.41-3.051-1.26-.852-.85-1.266-1.848-1.266-3.056 0-1.206.414-2.206 1.266-3.055.854-.85 1.851-1.262 3.051-1.262z"
			/>
			<LinearGradient
				id="prefix__b"
				gradientUnits="userSpaceOnUse"
				x1={-43.657}
				y1={296.305}
				x2={-27.009}
				y2={296.305}
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
				d="M79.958 114.999h-6.033l1.429-1.48c1.957-2.027 3.577-3.842 4.832-5.411-.409.054-.845.08-1.305.08-2.048 0-3.781-.694-5.15-2.062-1.621-1.631-2.442-3.625-2.442-5.927 0-2.294.821-4.281 2.441-5.906 1.621-1.626 3.611-2.451 5.916-2.451 2.292 0 4.281.821 5.913 2.441 1.568 1.581 2.368 3.769 2.378 6.508 0 2.688-.732 5.078-2.177 7.107-1.366 1.916-3.23 4.206-5.54 6.809l-.262.292zm-3.678-1h3.229c2.269-2.558 4.098-4.806 5.436-6.682 1.321-1.856 1.991-4.052 1.991-6.525-.01-2.465-.711-4.418-2.086-5.803-1.435-1.425-3.187-2.148-5.205-2.148-2.029 0-3.782.726-5.208 2.157-1.426 1.431-2.149 3.18-2.149 5.2 0 2.029.724 3.786 2.15 5.221 1.174 1.173 2.668 1.769 4.442 1.769.923 0 1.727-.117 2.387-.347l1.538-.537-.972 1.308c-1.324 1.781-3.192 3.929-5.553 6.387zm3.365-8.985c-1.34 0-2.454-.46-3.403-1.405-.951-.948-1.414-2.064-1.414-3.411s.462-2.461 1.413-3.409c.951-.948 2.065-1.408 3.404-1.408 1.348 0 2.465.46 3.415 1.408.952.948 1.415 2.063 1.415 3.409 0 1.346-.463 2.462-1.415 3.411-.95.945-2.067 1.405-3.415 1.405zm0-8.633c-1.061 0-1.944.365-2.698 1.117-.753.75-1.119 1.633-1.119 2.7 0 1.083.355 1.941 1.119 2.702.763.76 1.621 1.114 2.698 1.114 1.085 0 1.946-.354 2.709-1.114.765-.762 1.121-1.62 1.121-2.702 0-1.066-.367-1.95-1.121-2.7-.753-.752-1.639-1.117-2.709-1.117z"
			/>
			<G>
				<LinearGradient
					id="prefix__c"
					gradientUnits="userSpaceOnUse"
					x1={-15.477}
					y1={309.483}
					x2={-15.477}
					y2={282.585}
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
					d="M105.027 94.644c-1.527-1.527-3.402-2.303-5.567-2.303-2.158 0-4.026.775-5.555 2.303-1.527 1.528-2.303 3.396-2.303 5.555v6.442c0 2.158.775 4.025 2.303 5.555 1.529 1.527 3.396 2.304 5.555 2.304 2.165 0 4.04-.774 5.567-2.304 1.529-1.528 2.305-3.396 2.305-5.555v-6.442c0-2.158-.775-4.027-2.305-5.555zm-5.567 16.313c-1.2 0-2.197-.412-3.051-1.26-.853-.85-1.267-1.85-1.267-3.057v-6.443c0-1.199.414-2.193 1.267-3.043.854-.849 1.852-1.262 3.051-1.262 1.208 0 2.209.413 3.063 1.262.854.85 1.268 1.844 1.268 3.043v6.443c0 1.207-.414 2.207-1.268 3.057-.853.848-1.855 1.26-3.063 1.26z"
				/>
				<LinearGradient
					id="prefix__d"
					gradientUnits="userSpaceOnUse"
					x1={-23.843}
					y1={296.305}
					x2={-7.113}
					y2={296.305}
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
					d="M99.46 114.999c-2.293 0-4.281-.824-5.909-2.45-1.625-1.627-2.449-3.614-2.449-5.908v-6.442c0-2.294.824-4.282 2.449-5.908 1.626-1.625 3.614-2.45 5.909-2.45 2.303 0 4.295.824 5.921 2.45 1.626 1.625 2.451 3.613 2.451 5.908v6.442c0 2.295-.825 4.283-2.451 5.908-1.624 1.626-3.616 2.45-5.921 2.45zm0-22.158c-2.02 0-3.77.726-5.202 2.157-1.431 1.432-2.156 3.182-2.156 5.201v6.442c0 2.019.726 3.769 2.156 5.201 1.433 1.432 3.184 2.157 5.202 2.157 2.03 0 3.784-.726 5.214-2.157 1.432-1.432 2.158-3.181 2.158-5.201v-6.442c0-2.021-.727-3.771-2.158-5.201-1.432-1.432-3.186-2.157-5.214-2.157zm0 18.616c-1.337 0-2.451-.46-3.403-1.405-.953-.948-1.415-2.063-1.415-3.411v-6.443c0-1.337.462-2.449 1.414-3.397.954-.947 2.066-1.408 3.404-1.408 1.346 0 2.463.46 3.416 1.407.952.949 1.415 2.06 1.415 3.398v6.443c0 1.348-.463 2.463-1.415 3.411-.952.945-2.069 1.405-3.416 1.405zm0-15.064c-1.06 0-1.942.365-2.698 1.116-.764.761-1.12 1.616-1.12 2.688v6.443c0 1.067.366 1.952 1.12 2.702.755.75 1.638 1.114 2.698 1.114 1.069 0 1.956-.364 2.711-1.114.754-.75 1.12-1.634 1.12-2.702v-6.443c0-1.073-.356-1.927-1.12-2.688-.756-.751-1.644-1.116-2.711-1.116z"
				/>
			</G>
			<G>
				<LinearGradient
					id="prefix__e"
					gradientUnits="userSpaceOnUse"
					x1={5.104}
					y1={282.401}
					x2={5.104}
					y2={309.946}
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
					d="M124.875 113.959v-9.424h-9.367v9.424h-2.717V92.88h2.717v8.831h9.367V92.88h2.432v21.079h-2.432z"
				/>
				<LinearGradient
					id="prefix__f"
					gradientUnits="userSpaceOnUse"
					x1={-3.154}
					y1={296.305}
					x2={13.362}
					y2={296.305}
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
					d="M127.307 92.88v21.079h-2.432v-9.424h-9.367v9.424h-2.717V92.88h2.717v8.831h9.367V92.88h2.432m1-1h-4.432v8.831h-7.367V91.88H111.791v23.079H116.508v-9.424h7.367v9.424h4.432V91.88z"
				/>
			</G>
			<G opacity={0.4}>
				<LinearGradient
					id="prefix__g"
					gradientUnits="userSpaceOnUse"
					x1={18.975}
					y1={264.877}
					x2={18.975}
					y2={330.877}
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
					d="M131.66 126.518a8.297 8.297 0 002.609 5.555 8.285 8.285 0 001.908-5.829 8.284 8.284 0 00-2.609-5.554 8.308 8.308 0 00-1.908 5.828z"
				/>
				<LinearGradient
					id="prefix__h"
					gradientUnits="userSpaceOnUse"
					x1={27.143}
					y1={264.874}
					x2={27.143}
					y2={330.874}
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
					d="M142.916 133.523a8.281 8.281 0 01-6.135-.015 8.282 8.282 0 014.477-4.198 8.306 8.306 0 016.137.018 8.305 8.305 0 01-4.479 4.195z"
				/>
				<LinearGradient
					id="prefix__i"
					gradientUnits="userSpaceOnUse"
					x1={22.854}
					y1={264.875}
					x2={22.854}
					y2={330.881}
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
					d="M135.629 117.891a8.291 8.291 0 003.791 4.826 8.291 8.291 0 00.549-6.111 8.305 8.305 0 00-3.791-4.826 8.28 8.28 0 00-.549 6.111z"
				/>
				<LinearGradient
					id="prefix__j"
					gradientUnits="userSpaceOnUse"
					x1={31.948}
					y1={264.879}
					x2={31.948}
					y2={330.869}
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
					d="M148.174 122.184a8.296 8.296 0 01-5.982 1.367 8.298 8.298 0 013.416-5.098 8.294 8.294 0 015.986-1.363 8.326 8.326 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__k"
					gradientUnits="userSpaceOnUse"
					x1={24.579}
					y1={264.882}
					x2={24.579}
					y2={330.869}
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
					d="M137.555 108.592a8.302 8.302 0 004.779 3.85 8.295 8.295 0 00-.842-6.078 8.28 8.28 0 00-4.779-3.848 8.302 8.302 0 00.842 6.076z"
				/>
				<LinearGradient
					id="prefix__l"
					gradientUnits="userSpaceOnUse"
					x1={34.129}
					y1={264.876}
					x2={34.129}
					y2={330.876}
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
					d="M150.742 109.953a8.307 8.307 0 01-5.521 2.678 8.294 8.294 0 012.184-5.736 8.302 8.302 0 015.523-2.674 8.303 8.303 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__m"
					gradientUnits="userSpaceOnUse"
					x1={24.063}
					y1={264.869}
					x2={24.063}
					y2={330.877}
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
					d="M137.34 99.099a8.3 8.3 0 005.521 2.676c.027-2.045-.693-4.108-2.187-5.735s-3.481-2.525-5.521-2.674a8.291 8.291 0 002.187 5.733z"
				/>
				<LinearGradient
					id="prefix__n"
					gradientUnits="userSpaceOnUse"
					x1={33.581}
					y1={264.87}
					x2={33.581}
					y2={330.877}
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
					d="M150.494 97.458a8.292 8.292 0 01-4.777 3.851c-.484-1.988-.25-4.158.838-6.08s2.824-3.242 4.781-3.85a8.308 8.308 0 01-.842 6.079z"
				/>
				<LinearGradient
					id="prefix__o"
					gradientUnits="userSpaceOnUse"
					x1={21.331}
					y1={264.88}
					x2={21.331}
					y2={330.87}
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
					d="M134.994 89.896a8.29 8.29 0 005.982 1.365 8.311 8.311 0 00-3.42-5.096 8.281 8.281 0 00-5.982-1.363 8.274 8.274 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__p"
					gradientUnits="userSpaceOnUse"
					x1={30.328}
					y1={264.869}
					x2={30.328}
					y2={330.875}
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
					d="M147.443 85.339a8.302 8.302 0 01-3.789 4.826 8.296 8.296 0 01-.553-6.113 8.304 8.304 0 013.795-4.826 8.315 8.315 0 01.547 6.113z"
				/>
				<LinearGradient
					id="prefix__q"
					gradientUnits="userSpaceOnUse"
					x1={16.523}
					y1={264.879}
					x2={16.523}
					y2={330.873}
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
					d="M130.637 81.457a8.306 8.306 0 006.139-.016 8.302 8.302 0 00-4.479-4.195 8.281 8.281 0 00-6.137.018 8.288 8.288 0 004.477 4.193z"
				/>
				<LinearGradient
					id="prefix__r"
					gradientUnits="userSpaceOnUse"
					x1={24.539}
					y1={264.873}
					x2={24.539}
					y2={330.873}
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
					d="M141.742 74.216a8.297 8.297 0 01-2.605 5.555 8.286 8.286 0 01-1.912-5.832 8.301 8.301 0 012.609-5.555 8.302 8.302 0 011.908 5.832z"
				/>
				<LinearGradient
					id="prefix__s"
					gradientUnits="userSpaceOnUse"
					x1={-48.021}
					y1={264.877}
					x2={-48.021}
					y2={330.877}
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
					d="M69.183 126.518a8.288 8.288 0 01-2.609 5.555 8.285 8.285 0 01-1.908-5.829 8.28 8.28 0 012.609-5.554 8.294 8.294 0 011.908 5.828z"
				/>
				<LinearGradient
					id="prefix__t"
					gradientUnits="userSpaceOnUse"
					x1={-56.19}
					y1={264.874}
					x2={-56.19}
					y2={330.874}
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
					d="M57.927 133.523a8.281 8.281 0 006.135-.015 8.282 8.282 0 00-4.477-4.198 8.306 8.306 0 00-6.137.018 8.309 8.309 0 004.479 4.195z"
				/>
				<LinearGradient
					id="prefix__u"
					gradientUnits="userSpaceOnUse"
					x1={-51.902}
					y1={264.875}
					x2={-51.902}
					y2={330.881}
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
					d="M65.214 117.891a8.291 8.291 0 01-3.791 4.826 8.291 8.291 0 01-.549-6.111 8.305 8.305 0 013.791-4.826 8.29 8.29 0 01.549 6.111z"
				/>
				<LinearGradient
					id="prefix__v"
					gradientUnits="userSpaceOnUse"
					x1={-60.996}
					y1={264.879}
					x2={-60.996}
					y2={330.869}
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
					d="M52.669 122.184a8.296 8.296 0 005.982 1.367 8.29 8.29 0 00-3.416-5.098 8.294 8.294 0 00-5.986-1.363 8.326 8.326 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__w"
					gradientUnits="userSpaceOnUse"
					x1={-53.626}
					y1={264.882}
					x2={-53.626}
					y2={330.869}
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
					d="M63.289 108.592a8.302 8.302 0 01-4.779 3.85 8.295 8.295 0 01.842-6.078 8.28 8.28 0 014.779-3.848 8.307 8.307 0 01-.842 6.076z"
				/>
				<LinearGradient
					id="prefix__x"
					gradientUnits="userSpaceOnUse"
					x1={-63.176}
					y1={264.876}
					x2={-63.176}
					y2={330.876}
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
					d="M50.101 109.953a8.307 8.307 0 005.521 2.678 8.294 8.294 0 00-2.184-5.736 8.302 8.302 0 00-5.523-2.674 8.313 8.313 0 002.186 5.732z"
				/>
				<LinearGradient
					id="prefix__y"
					gradientUnits="userSpaceOnUse"
					x1={-53.11}
					y1={264.869}
					x2={-53.11}
					y2={330.877}
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
					d="M63.503 99.099a8.3 8.3 0 01-5.521 2.676 8.293 8.293 0 012.186-5.735 8.292 8.292 0 015.521-2.674 8.281 8.281 0 01-2.186 5.733z"
				/>
				<LinearGradient
					id="prefix__z"
					gradientUnits="userSpaceOnUse"
					x1={-62.628}
					y1={264.87}
					x2={-62.628}
					y2={330.877}
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
					d="M50.347 97.458a8.302 8.302 0 004.779 3.851c.484-1.988.25-4.158-.838-6.08s-2.824-3.242-4.781-3.85a8.317 8.317 0 00.84 6.079z"
				/>
				<LinearGradient
					id="prefix__A"
					gradientUnits="userSpaceOnUse"
					x1={-50.377}
					y1={264.88}
					x2={-50.377}
					y2={330.87}
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
					d="M65.849 89.896a8.29 8.29 0 01-5.982 1.365 8.303 8.303 0 013.42-5.096 8.281 8.281 0 015.982-1.363 8.274 8.274 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__B"
					gradientUnits="userSpaceOnUse"
					x1={-59.375}
					y1={264.869}
					x2={-59.375}
					y2={330.875}
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
					d="M53.4 85.339a8.302 8.302 0 003.789 4.826 8.286 8.286 0 00.551-6.113 8.297 8.297 0 00-3.793-4.826 8.315 8.315 0 00-.547 6.113z"
				/>
				<LinearGradient
					id="prefix__C"
					gradientUnits="userSpaceOnUse"
					x1={-45.57}
					y1={264.879}
					x2={-45.57}
					y2={330.873}
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
					d="M70.207 81.457a8.306 8.306 0 01-6.139-.016 8.3 8.3 0 014.48-4.195 8.276 8.276 0 016.135.018 8.29 8.29 0 01-4.476 4.193z"
				/>
				<LinearGradient
					id="prefix__D"
					gradientUnits="userSpaceOnUse"
					x1={-53.586}
					y1={264.873}
					x2={-53.586}
					y2={330.873}
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
					d="M59.101 74.216a8.297 8.297 0 002.605 5.555 8.296 8.296 0 001.912-5.832 8.301 8.301 0 00-2.609-5.555 8.307 8.307 0 00-1.908 5.832z"
				/>
			</G>
		</Svg>
	);
}

export default SvgComponent;

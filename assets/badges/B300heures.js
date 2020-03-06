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
				x1={-39.708}
				y1={284.069}
				x2={-39.708}
				y2={309.208}
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
				d="M77.894 101.943c1.124-1.018 1.693-2.092 1.693-3.201 0-1.225-.446-2.296-1.326-3.184-.881-.89-1.968-1.341-3.232-1.341-1.24 0-2.318.446-3.203 1.322-.507.482-.92 1.238-1.262 2.31l-.089.284 2.742 1.08.113-.305c.306-.819.51-1.137.62-1.252.3-.293.653-.436 1.078-.436.433 0 .79.144 1.089.441.299.295.444.648.444 1.079 0 .444-.159.827-.486 1.174-.346.367-.662.605-.937.712-.195.074-.684.169-1.898.187l-.314.006v2.922l1.662.035c1.241.232 2.168.677 2.758 1.316.589.641.875 1.358.875 2.196 0 .825-.283 1.508-.866 2.085a2.832 2.832 0 01-2.092.861c-.811 0-1.489-.281-2.075-.861-.491-.489-.803-1.38-.929-2.645l-.042-.408-2.951 1.07.041.26c.248 1.623.84 2.916 1.759 3.843 1.155 1.163 2.567 1.755 4.196 1.755 1.643 0 3.061-.589 4.213-1.749 1.152-1.159 1.735-2.576 1.735-4.211 0-1.615-.567-3.048-1.7-4.269-.546-.527-1.087-.888-1.616-1.076z"
			/>
			<LinearGradient
				id="prefix__b"
				gradientUnits="userSpaceOnUse"
				x1={-46.237}
				y1={295.992}
				x2={-33.235}
				y2={295.992}
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
				d="M75.262 113.748c-1.766 0-3.297-.64-4.551-1.902-.995-1.004-1.634-2.39-1.898-4.12l-.105-.664 3.94-1.43.108 1.046c.143 1.432.505 2.063.785 2.341.493.488 1.04.716 1.722.716.696 0 1.249-.228 1.739-.716.491-.485.719-1.035.719-1.73 0-.716-.236-1.307-.743-1.858-.517-.56-1.352-.951-2.482-1.163l-2.07-.037v-3.902l.805-.015c1.278-.019 1.647-.123 1.73-.154.114-.044.367-.181.751-.588.238-.253.35-.518.35-.831a.945.945 0 00-.295-.723 1.032 1.032 0 00-1.466-.004s-.174.194-.501 1.07l-.29.782-3.649-1.438.228-.728c.369-1.157.825-1.981 1.395-2.523.976-.966 2.171-1.46 3.547-1.46 1.402 0 2.609.501 3.588 1.49.976.984 1.47 2.174 1.47 3.536 0 1.063-.449 2.089-1.336 3.057.369.218.739.506 1.107.861 1.236 1.33 1.853 2.881 1.853 4.628 0 1.772-.633 3.308-1.88 4.563-1.253 1.258-2.79 1.896-4.571 1.896zm-5.437-6.028c.244 1.449.781 2.599 1.596 3.421 1.059 1.066 2.352 1.607 3.841 1.607 1.504 0 2.803-.539 3.858-1.602 1.055-1.062 1.59-2.359 1.59-3.858 0-1.487-.527-2.809-1.566-3.929-.476-.458-.958-.782-1.417-.944l-.79-.28.621-.562c1.014-.918 1.528-1.87 1.528-2.83 0-1.089-.397-2.042-1.181-2.832-.784-.792-1.752-1.193-2.877-1.193-1.103 0-2.062.396-2.851 1.178-.427.406-.781 1.041-1.084 1.944l1.834.723c.247-.635.463-1.044.662-1.251a2.055 2.055 0 012.881-.003c.392.387.591.869.591 1.433 0 .568-.209 1.079-.622 1.517-.397.42-.774.701-1.121.835-.331.126-.95.197-1.893.218v1.941l1.173.024c1.428.261 2.448.755 3.115 1.478.678.737 1.008 1.566 1.008 2.535 0 .953-.341 1.774-1.015 2.44-.68.677-1.479 1.006-2.443 1.006-.949 0-1.743-.329-2.427-1.006-.551-.549-.895-1.439-1.05-2.721l-1.961.711z"
			/>
			<LinearGradient
				id="prefix__c"
				gradientUnits="userSpaceOnUse"
				x1={-8.243}
				y1={307.308}
				x2={-8.243}
				y2={284.209}
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
				d="M111.477 96.197c-1.312-1.312-2.922-1.978-4.781-1.978-1.854 0-3.457.666-4.77 1.978-1.312 1.312-1.978 2.917-1.978 4.772v5.53c0 1.854.666 3.458 1.978 4.771s2.916 1.979 4.77 1.979c1.859 0 3.47-.666 4.781-1.979 1.312-1.312 1.979-2.916 1.979-4.771v-5.53c-.001-1.855-.667-3.459-1.979-4.772zm-4.782 14.01c-1.031 0-1.887-.354-2.619-1.083s-1.088-1.587-1.088-2.625v-5.53c0-1.031.354-1.885 1.088-2.614.732-.729 1.59-1.084 2.619-1.084 1.037 0 1.896.355 2.631 1.084.732.729 1.088 1.583 1.088 2.614v5.53c0 1.038-.355 1.896-1.088 2.625s-1.594 1.083-2.631 1.083z"
			/>
			<LinearGradient
				id="prefix__d"
				gradientUnits="userSpaceOnUse"
				x1={-15.497}
				y1={295.991}
				x2={-0.989}
				y2={295.991}
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
				d="M106.695 113.748c-1.989 0-3.713-.715-5.123-2.125-1.41-1.409-2.125-3.134-2.125-5.124v-5.53c0-1.992.715-3.716 2.125-5.125 1.41-1.41 3.134-2.124 5.123-2.124 1.998 0 3.726.715 5.135 2.124 1.41 1.411 2.125 3.135 2.126 5.125v5.53c0 1.99-.715 3.715-2.126 5.124-1.409 1.41-3.137 2.125-5.135 2.125zm0-19.029c-1.714 0-3.2.616-4.416 1.831-1.215 1.215-1.832 2.702-1.832 4.418v5.53c0 1.716.617 3.201 1.832 4.417 1.216 1.216 2.701 1.832 4.416 1.832 1.724 0 3.213-.616 4.428-1.832 1.217-1.216 1.833-2.701 1.833-4.417v-5.53c-.001-1.715-.618-3.202-1.833-4.418-1.215-1.215-2.705-1.831-4.428-1.831zm0 15.988c-1.17 0-2.142-.402-2.972-1.229-.831-.828-1.235-1.803-1.235-2.979v-5.53c0-1.171.404-2.142 1.235-2.968.831-.827 1.803-1.229 2.972-1.229 1.173 0 2.148.402 2.982 1.229.832.828 1.236 1.799 1.236 2.969v5.53c0 1.177-.404 2.151-1.235 2.979-.829.826-1.805 1.228-2.983 1.228zm0-12.936c-.903 0-1.623.298-2.267.938-.642.638-.94 1.356-.94 2.259v5.53c0 .91.299 1.632.94 2.271.643.64 1.362.938 2.267.938.912 0 1.636-.298 2.278-.938.642-.639.94-1.36.94-2.271v-5.53c0-.903-.299-1.621-.94-2.259-.645-.64-1.369-.938-2.278-.938z"
			/>
			<G>
				<LinearGradient
					id="prefix__e"
					gradientUnits="userSpaceOnUse"
					x1={9.431}
					y1={284.051}
					x2={9.431}
					y2={307.705}
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
					d="M128.521 112.784v-8.093h-8.045v8.093h-2.334V94.683h2.334v7.583h8.045v-7.583h2.088v18.102l-2.088-.001z"
				/>
				<LinearGradient
					id="prefix__f"
					gradientUnits="userSpaceOnUse"
					x1={2.198}
					y1={295.99}
					x2={16.665}
					y2={295.99}
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
					d="M130.609 94.683v18.102h-2.088v-8.094h-8.045v8.094h-2.334V94.683h2.334v7.583h8.045v-7.583h2.088m1-1h-4.088v7.583h-6.045v-7.583h-4.334v20.102h4.334V105.691h6.045V113.785h4.088V93.683z"
				/>
			</G>
			<G opacity={0.4}>
				<LinearGradient
					id="prefix__g"
					gradientUnits="userSpaceOnUse"
					x1={18.975}
					y1={264.688}
					x2={18.975}
					y2={330.682}
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
					d="M131.66 126.707a8.297 8.297 0 002.609 5.555 8.288 8.288 0 001.908-5.83 8.28 8.28 0 00-2.609-5.553 8.31 8.31 0 00-1.908 5.828z"
				/>
				<LinearGradient
					id="prefix__h"
					gradientUnits="userSpaceOnUse"
					x1={27.143}
					y1={264.685}
					x2={27.143}
					y2={330.685}
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
					d="M142.916 133.713a8.286 8.286 0 01-6.135-.014 8.31 8.31 0 0110.614-4.181 8.312 8.312 0 01-4.479 4.195z"
				/>
				<LinearGradient
					id="prefix__i"
					gradientUnits="userSpaceOnUse"
					x1={22.854}
					y1={264.684}
					x2={22.854}
					y2={330.695}
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
					d="M135.629 118.08a8.291 8.291 0 003.791 4.826 8.291 8.291 0 00.549-6.111 8.305 8.305 0 00-3.791-4.826 8.282 8.282 0 00-.549 6.111z"
				/>
				<LinearGradient
					id="prefix__j"
					gradientUnits="userSpaceOnUse"
					x1={31.948}
					y1={264.688}
					x2={31.948}
					y2={330.679}
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
					d="M148.174 122.373a8.296 8.296 0 01-5.982 1.367 8.298 8.298 0 013.416-5.098 8.29 8.29 0 015.986-1.363 8.326 8.326 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__k"
					gradientUnits="userSpaceOnUse"
					x1={24.579}
					y1={264.688}
					x2={24.579}
					y2={330.682}
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
					d="M137.555 108.781a8.302 8.302 0 004.779 3.85 8.293 8.293 0 00-.842-6.078 8.282 8.282 0 00-4.779-3.849 8.304 8.304 0 00.842 6.077z"
				/>
				<LinearGradient
					id="prefix__l"
					gradientUnits="userSpaceOnUse"
					x1={34.129}
					y1={264.693}
					x2={34.129}
					y2={330.678}
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
					d="M150.742 110.143a8.307 8.307 0 01-5.521 2.678 8.291 8.291 0 012.184-5.735 8.302 8.302 0 015.523-2.674 8.305 8.305 0 01-2.186 5.731z"
				/>
				<LinearGradient
					id="prefix__m"
					gradientUnits="userSpaceOnUse"
					x1={24.063}
					y1={264.691}
					x2={24.063}
					y2={330.68}
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
					d="M137.34 99.288a8.309 8.309 0 005.521 2.676c.027-2.045-.693-4.107-2.187-5.734s-3.481-2.525-5.521-2.674a8.29 8.29 0 002.187 5.732z"
				/>
				<LinearGradient
					id="prefix__n"
					gradientUnits="userSpaceOnUse"
					x1={33.581}
					y1={264.688}
					x2={33.581}
					y2={330.684}
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
					d="M150.494 97.647a8.29 8.29 0 01-4.777 3.85c-.484-1.986-.25-4.156.838-6.078s2.824-3.242 4.781-3.85a8.306 8.306 0 01-.842 6.078z"
				/>
				<LinearGradient
					id="prefix__o"
					gradientUnits="userSpaceOnUse"
					x1={21.331}
					y1={264.685}
					x2={21.331}
					y2={330.685}
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
					d="M134.994 90.085a8.29 8.29 0 005.982 1.365 8.311 8.311 0 00-3.42-5.096 8.281 8.281 0 00-5.982-1.363 8.274 8.274 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__p"
					gradientUnits="userSpaceOnUse"
					x1={30.328}
					y1={264.685}
					x2={30.328}
					y2={330.685}
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
					d="M147.443 85.528a8.302 8.302 0 01-3.789 4.826 8.296 8.296 0 01-.553-6.113 8.304 8.304 0 013.795-4.826 8.315 8.315 0 01.547 6.113z"
				/>
				<LinearGradient
					id="prefix__q"
					gradientUnits="userSpaceOnUse"
					x1={16.523}
					y1={264.68}
					x2={16.523}
					y2={330.686}
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
					d="M130.637 81.646a8.306 8.306 0 006.139-.016 8.302 8.302 0 00-4.479-4.195 8.281 8.281 0 00-6.137.018 8.288 8.288 0 004.477 4.193z"
				/>
				<LinearGradient
					id="prefix__r"
					gradientUnits="userSpaceOnUse"
					x1={24.539}
					y1={264.68}
					x2={24.539}
					y2={330.685}
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
					d="M141.742 74.405a8.297 8.297 0 01-2.605 5.555 8.286 8.286 0 01-1.912-5.832 8.301 8.301 0 012.609-5.555 8.302 8.302 0 011.908 5.832z"
				/>
				<LinearGradient
					id="prefix__s"
					gradientUnits="userSpaceOnUse"
					x1={-48.021}
					y1={264.688}
					x2={-48.021}
					y2={330.682}
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
					d="M69.183 126.707a8.288 8.288 0 01-2.609 5.555 8.288 8.288 0 01-1.908-5.83 8.275 8.275 0 012.609-5.553 8.295 8.295 0 011.908 5.828z"
				/>
				<LinearGradient
					id="prefix__t"
					gradientUnits="userSpaceOnUse"
					x1={-56.19}
					y1={264.685}
					x2={-56.19}
					y2={330.685}
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
					d="M57.927 133.713a8.286 8.286 0 006.135-.014 8.31 8.31 0 00-10.614-4.181 8.316 8.316 0 004.479 4.195z"
				/>
				<LinearGradient
					id="prefix__u"
					gradientUnits="userSpaceOnUse"
					x1={-51.902}
					y1={264.684}
					x2={-51.902}
					y2={330.695}
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
					d="M65.214 118.08a8.291 8.291 0 01-3.791 4.826 8.291 8.291 0 01-.549-6.111 8.305 8.305 0 013.791-4.826 8.291 8.291 0 01.549 6.111z"
				/>
				<LinearGradient
					id="prefix__v"
					gradientUnits="userSpaceOnUse"
					x1={-60.996}
					y1={264.688}
					x2={-60.996}
					y2={330.679}
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
					d="M52.669 122.373a8.296 8.296 0 005.982 1.367 8.29 8.29 0 00-3.416-5.098 8.29 8.29 0 00-5.986-1.363 8.326 8.326 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__w"
					gradientUnits="userSpaceOnUse"
					x1={-53.626}
					y1={264.688}
					x2={-53.626}
					y2={330.682}
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
					d="M63.289 108.781a8.302 8.302 0 01-4.779 3.85 8.293 8.293 0 01.842-6.078 8.282 8.282 0 014.779-3.849 8.309 8.309 0 01-.842 6.077z"
				/>
				<LinearGradient
					id="prefix__x"
					gradientUnits="userSpaceOnUse"
					x1={-63.176}
					y1={264.693}
					x2={-63.176}
					y2={330.678}
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
					d="M50.101 110.143a8.307 8.307 0 005.521 2.678 8.291 8.291 0 00-2.184-5.735 8.302 8.302 0 00-5.523-2.674 8.314 8.314 0 002.186 5.731z"
				/>
				<LinearGradient
					id="prefix__y"
					gradientUnits="userSpaceOnUse"
					x1={-53.11}
					y1={264.691}
					x2={-53.11}
					y2={330.68}
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
					d="M63.503 99.288a8.309 8.309 0 01-5.521 2.676 8.291 8.291 0 012.186-5.734 8.292 8.292 0 015.521-2.674 8.28 8.28 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__z"
					gradientUnits="userSpaceOnUse"
					x1={-62.628}
					y1={264.688}
					x2={-62.628}
					y2={330.684}
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
					d="M50.347 97.647a8.3 8.3 0 004.779 3.85c.484-1.986.25-4.156-.838-6.078s-2.824-3.242-4.781-3.85a8.315 8.315 0 00.84 6.078z"
				/>
				<LinearGradient
					id="prefix__A"
					gradientUnits="userSpaceOnUse"
					x1={-50.377}
					y1={264.685}
					x2={-50.377}
					y2={330.685}
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
					d="M65.849 90.085a8.29 8.29 0 01-5.982 1.365 8.303 8.303 0 013.42-5.096 8.281 8.281 0 015.982-1.363 8.274 8.274 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__B"
					gradientUnits="userSpaceOnUse"
					x1={-59.375}
					y1={264.685}
					x2={-59.375}
					y2={330.685}
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
					d="M53.4 85.528a8.302 8.302 0 003.789 4.826 8.286 8.286 0 00.551-6.113 8.297 8.297 0 00-3.793-4.826 8.315 8.315 0 00-.547 6.113z"
				/>
				<LinearGradient
					id="prefix__C"
					gradientUnits="userSpaceOnUse"
					x1={-45.57}
					y1={264.68}
					x2={-45.57}
					y2={330.686}
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
					d="M70.207 81.646a8.306 8.306 0 01-6.139-.016 8.3 8.3 0 014.48-4.195 8.276 8.276 0 016.135.018 8.29 8.29 0 01-4.476 4.193z"
				/>
				<LinearGradient
					id="prefix__D"
					gradientUnits="userSpaceOnUse"
					x1={-53.586}
					y1={264.68}
					x2={-53.586}
					y2={330.685}
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
					d="M59.101 74.405a8.297 8.297 0 002.605 5.555 8.296 8.296 0 001.912-5.832 8.301 8.301 0 00-2.609-5.555 8.307 8.307 0 00-1.908 5.832z"
				/>
			</G>
			<G>
				<LinearGradient
					id="prefix__E"
					gradientUnits="userSpaceOnUse"
					x1={-24.341}
					y1={307.308}
					x2={-24.341}
					y2={284.209}
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
					d="M95.379 96.198c-1.312-1.312-2.922-1.979-4.781-1.979-1.853 0-3.457.666-4.77 1.979-1.312 1.312-1.978 2.917-1.978 4.771v5.531c0 1.854.666 3.458 1.978 4.77 1.313 1.312 2.917 1.979 4.77 1.979 1.859 0 3.469-.665 4.781-1.979 1.312-1.312 1.978-2.916 1.978-4.77v-5.531c0-1.854-.665-3.458-1.978-4.771zm-4.781 14.01c-1.03 0-1.887-.354-2.619-1.084s-1.088-1.587-1.088-2.624v-5.531c0-1.031.355-1.885 1.088-2.613.732-.729 1.59-1.084 2.619-1.084 1.038 0 1.897.354 2.631 1.084.731.729 1.088 1.583 1.088 2.613v5.531c0 1.037-.356 1.895-1.088 2.624s-1.593 1.084-2.631 1.084z"
				/>
				<LinearGradient
					id="prefix__F"
					gradientUnits="userSpaceOnUse"
					x1={-31.595}
					y1={295.991}
					x2={-17.088}
					y2={295.991}
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
					d="M90.598 113.748c-1.989 0-3.713-.715-5.124-2.125-1.41-1.409-2.125-3.133-2.125-5.123v-5.531c0-1.99.715-3.714 2.125-5.125 1.411-1.41 3.134-2.125 5.124-2.125 1.997 0 3.724.715 5.134 2.125 1.41 1.41 2.125 3.134 2.125 5.125v5.531c0 1.99-.715 3.714-2.125 5.123-1.408 1.41-3.135 2.125-5.134 2.125zm0-19.029c-1.714 0-3.2.616-4.417 1.832-1.215 1.216-1.832 2.702-1.832 4.417v5.531c0 1.715.616 3.201 1.832 4.416 1.216 1.216 2.702 1.832 4.417 1.832 1.723 0 3.213-.616 4.427-1.832 1.215-1.215 1.832-2.701 1.832-4.416v-5.531c0-1.715-.616-3.202-1.832-4.417-1.216-1.216-2.705-1.832-4.427-1.832zm0 15.989c-1.169 0-2.142-.402-2.972-1.229-.831-.828-1.235-1.803-1.235-2.979v-5.531c0-1.171.404-2.142 1.235-2.967.831-.827 1.803-1.229 2.972-1.229 1.176 0 2.152.402 2.983 1.229.832.829 1.235 1.8 1.235 2.967v5.531c0 1.176-.404 2.15-1.235 2.979-.83.827-1.806 1.229-2.983 1.229zm0-12.936c-.891 0-1.632.307-2.266.938-.642.638-.941 1.355-.941 2.258v5.531c0 .909.299 1.63.941 2.27.642.641 1.362.938 2.266.938.912 0 1.636-.298 2.278-.938.642-.64.941-1.36.941-2.27v-5.531c0-.901-.299-1.619-.941-2.259-.643-.639-1.367-.937-2.278-.937z"
				/>
			</G>
		</Svg>
	);
}

export default SvgComponent;

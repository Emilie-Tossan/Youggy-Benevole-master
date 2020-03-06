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
				x1={-39.866}
				y1={283.394}
				x2={-39.866}
				y2={307.321}
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
				d="M72.749 99.604c.419-.092.86-.135 1.318-.135.84 0 1.646.135 2.42.405 1.735.593 3.025 1.688 3.874 3.286.533.99.8 2.014.8 3.064 0 .653-.101 1.307-.305 1.959-.533 1.742-1.599 3.045-3.197 3.906-.978.52-1.986.778-3.029.778a6.693 6.693 0 01-2.005-.315c-1.396-.428-2.605-1.336-3.627-2.724l1.645-1.825c.833 1.23 1.728 1.988 2.681 2.273a4.25 4.25 0 001.272.203c.658 0 1.305-.166 1.937-.496 1.029-.547 1.713-1.381 2.05-2.498.136-.432.204-.854.204-1.274 0-.651-.17-1.298-.508-1.937-.557-1.035-1.396-1.75-2.522-2.141a4.854 4.854 0 00-1.622-.259c-.805 0-1.83.199-3.087.597l-1.405-1.227 2.025-5.597v-.914h6.601v2.331h-4.63l-.89 2.54z"
			/>
			<LinearGradient
				id="prefix__b"
				gradientUnits="userSpaceOnUse"
				x1={-47.236}
				y1={295.922}
				x2={-32.784}
				y2={295.922}
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
				d="M78.267 94.737v2.331h-4.63l-.889 2.535c.419-.092.86-.135 1.318-.135.84 0 1.646.135 2.42.405 1.735.593 3.025 1.688 3.874 3.286.533.991.8 2.014.8 3.063a6.55 6.55 0 01-.305 1.961c-.533 1.741-1.599 3.045-3.197 3.905-.978.519-1.986.778-3.029.778a6.756 6.756 0 01-2.005-.314c-1.396-.429-2.605-1.337-3.627-2.725l1.645-1.825c.833 1.229 1.728 1.988 2.681 2.272.436.137.858.203 1.272.203.658 0 1.305-.164 1.937-.496 1.029-.547 1.713-1.379 2.05-2.498.136-.43.204-.853.204-1.273 0-.652-.17-1.298-.508-1.938-.557-1.035-1.396-1.748-2.522-2.139a4.828 4.828 0 00-1.622-.26c-.805 0-1.83.199-3.087.596l-1.405-1.226 2.025-5.597v-.914h6.6m1-.995H70.666V95.476l-1.966 5.432-.233.645.516.449 1.405 1.227.423.367.535-.168c1.156-.365 2.093-.55 2.786-.55.475 0 .909.067 1.291.202.891.309 1.535.855 1.973 1.67.261.492.389.973.389 1.463 0 .318-.052.637-.158.975-.263.871-.774 1.494-1.565 1.916a3.11 3.11 0 01-1.467.379c-.315 0-.634-.053-.975-.158-.734-.221-1.454-.852-2.15-1.879l-.716-1.059-.855.949-1.645 1.825-.545.604.483.656c1.146 1.559 2.54 2.598 4.139 3.087a7.756 7.756 0 002.298.359c1.202 0 2.378-.302 3.498-.896 1.836-.988 3.074-2.502 3.685-4.496a7.549 7.549 0 00.349-2.254c0-1.214-.309-2.404-.919-3.537-.966-1.818-2.458-3.084-4.432-3.76a8.296 8.296 0 00-2.604-.458l.141-.401H79.268v-3.331l-.001-.997z"
			/>
			<LinearGradient
				id="prefix__c"
				gradientUnits="userSpaceOnUse"
				x1={-8.243}
				y1={307.183}
				x2={-8.243}
				y2={284.083}
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
				d="M111.477 96.323c-1.312-1.312-2.922-1.978-4.781-1.978-1.854 0-3.457.666-4.77 1.978-1.312 1.312-1.978 2.917-1.978 4.771v5.531c0 1.854.666 3.458 1.978 4.771 1.312 1.312 2.916 1.978 4.77 1.978 1.859 0 3.47-.666 4.781-1.978 1.312-1.312 1.979-2.918 1.979-4.771v-5.531c-.001-1.854-.667-3.458-1.979-4.771zm-4.782 14.01c-1.031 0-1.887-.354-2.619-1.083s-1.088-1.587-1.088-2.625v-5.531c0-1.03.354-1.884 1.088-2.613.732-.729 1.59-1.084 2.619-1.084 1.037 0 1.896.355 2.631 1.084.732.729 1.088 1.583 1.088 2.613v5.531c0 1.038-.355 1.896-1.088 2.625s-1.594 1.083-2.631 1.083z"
			/>
			<LinearGradient
				id="prefix__d"
				gradientUnits="userSpaceOnUse"
				x1={-15.497}
				y1={295.865}
				x2={-0.989}
				y2={295.865}
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
				d="M106.695 113.874c-1.989 0-3.713-.715-5.123-2.124-1.41-1.411-2.125-3.135-2.125-5.125v-5.531c0-1.991.715-3.715 2.125-5.125 1.41-1.41 3.134-2.124 5.123-2.124 1.998 0 3.726.715 5.135 2.124 1.41 1.411 2.125 3.135 2.126 5.125v5.531c0 1.99-.715 3.715-2.126 5.125-1.409 1.409-3.137 2.124-5.135 2.124zm0-19.029c-1.714 0-3.2.616-4.416 1.831-1.215 1.215-1.832 2.702-1.832 4.417v5.531c0 1.715.617 3.202 1.832 4.418 1.216 1.215 2.702 1.831 4.416 1.831 1.723 0 3.213-.616 4.428-1.831 1.216-1.217 1.833-2.703 1.833-4.418v-5.531c-.001-1.715-.618-3.201-1.833-4.417-1.215-1.215-2.705-1.831-4.428-1.831zm0 15.988c-1.169 0-2.141-.401-2.972-1.229s-1.235-1.802-1.235-2.979v-5.531c0-1.17.404-2.141 1.235-2.967.831-.827 1.803-1.229 2.972-1.229 1.173 0 2.148.402 2.982 1.229.832.828 1.236 1.798 1.236 2.968v5.531c0 1.178-.404 2.152-1.235 2.979s-1.806 1.228-2.983 1.228zm0-12.936c-.903 0-1.623.298-2.267.938-.642.638-.94 1.355-.94 2.258v5.531c0 .911.299 1.632.94 2.271.644.64 1.363.938 2.267.938.911 0 1.635-.298 2.278-.938.642-.639.94-1.359.94-2.271v-5.531c0-.902-.299-1.62-.94-2.258-.645-.64-1.369-.938-2.278-.938z"
			/>
			<G>
				<LinearGradient
					id="prefix__e"
					gradientUnits="userSpaceOnUse"
					x1={9.431}
					y1={283.925}
					x2={9.431}
					y2={307.58}
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
					d="M128.521 112.91v-8.094h-8.045v8.094h-2.334V94.809h2.334v7.583h8.045v-7.583h2.088v18.102l-2.088-.001z"
				/>
				<LinearGradient
					id="prefix__f"
					gradientUnits="userSpaceOnUse"
					x1={2.198}
					y1={295.865}
					x2={16.665}
					y2={295.865}
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
					d="M130.609 94.809v18.102h-2.088v-8.093h-8.045v8.093h-2.334V94.809h2.334v7.583h8.045v-7.583h2.088m1-1h-4.088v7.583h-6.045v-7.583h-4.334v20.102h4.334v-8.093h6.045v8.093h4.088V93.809z"
				/>
			</G>
			<G opacity={0.4}>
				<LinearGradient
					id="prefix__g"
					gradientUnits="userSpaceOnUse"
					x1={18.975}
					y1={264.56}
					x2={18.975}
					y2={330.565}
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
					d="M131.66 126.833a8.304 8.304 0 002.609 5.556 8.288 8.288 0 001.908-5.83 8.284 8.284 0 00-2.609-5.554 8.31 8.31 0 00-1.908 5.828z"
				/>
				<LinearGradient
					id="prefix__h"
					gradientUnits="userSpaceOnUse"
					x1={27.143}
					y1={264.56}
					x2={27.143}
					y2={330.559}
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
					d="M142.916 133.839a8.281 8.281 0 01-6.135-.014 8.284 8.284 0 014.477-4.199 8.306 8.306 0 016.137.019 8.318 8.318 0 01-4.479 4.194z"
				/>
				<LinearGradient
					id="prefix__i"
					gradientUnits="userSpaceOnUse"
					x1={22.854}
					y1={264.563}
					x2={22.854}
					y2={330.552}
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
					d="M135.629 118.206a8.286 8.286 0 003.791 4.825 8.288 8.288 0 00.549-6.11 8.303 8.303 0 00-3.791-4.825 8.278 8.278 0 00-.549 6.11z"
				/>
				<LinearGradient
					id="prefix__j"
					gradientUnits="userSpaceOnUse"
					x1={31.948}
					y1={264.559}
					x2={31.948}
					y2={330.568}
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
					d="M148.174 122.499a8.285 8.285 0 01-5.982 1.366 8.298 8.298 0 013.416-5.098 8.294 8.294 0 015.986-1.363 8.328 8.328 0 01-3.42 5.095z"
				/>
				<LinearGradient
					id="prefix__k"
					gradientUnits="userSpaceOnUse"
					x1={24.579}
					y1={264.563}
					x2={24.579}
					y2={330.556}
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
					d="M137.555 108.906a8.304 8.304 0 004.779 3.851 8.291 8.291 0 00-.842-6.077 8.284 8.284 0 00-4.779-3.85 8.302 8.302 0 00.842 6.076z"
				/>
				<LinearGradient
					id="prefix__l"
					gradientUnits="userSpaceOnUse"
					x1={34.129}
					y1={264.56}
					x2={34.129}
					y2={330.56}
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
					d="M150.742 110.27a8.311 8.311 0 01-5.521 2.678 8.294 8.294 0 012.184-5.736 8.302 8.302 0 015.523-2.674 8.307 8.307 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__m"
					gradientUnits="userSpaceOnUse"
					x1={24.063}
					y1={264.562}
					x2={24.063}
					y2={330.558}
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
					d="M137.34 99.414a8.304 8.304 0 005.521 2.676c.027-2.045-.693-4.107-2.187-5.734s-3.481-2.525-5.521-2.674a8.29 8.29 0 002.187 5.732z"
				/>
				<LinearGradient
					id="prefix__n"
					gradientUnits="userSpaceOnUse"
					x1={33.581}
					y1={264.565}
					x2={33.581}
					y2={330.555}
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
					d="M150.494 97.773a8.286 8.286 0 01-4.777 3.85c-.484-1.986-.25-4.156.838-6.078s2.824-3.242 4.781-3.85a8.306 8.306 0 01-.842 6.078z"
				/>
				<LinearGradient
					id="prefix__o"
					gradientUnits="userSpaceOnUse"
					x1={21.331}
					y1={264.566}
					x2={21.331}
					y2={330.557}
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
					d="M134.994 90.211a8.29 8.29 0 005.982 1.365 8.311 8.311 0 00-3.42-5.096 8.281 8.281 0 00-5.982-1.363 8.274 8.274 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__p"
					gradientUnits="userSpaceOnUse"
					x1={30.328}
					y1={264.55}
					x2={30.328}
					y2={330.562}
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
					d="M147.443 85.654a8.302 8.302 0 01-3.789 4.826 8.296 8.296 0 01-.553-6.113 8.304 8.304 0 013.795-4.826 8.315 8.315 0 01.547 6.113z"
				/>
				<LinearGradient
					id="prefix__q"
					gradientUnits="userSpaceOnUse"
					x1={16.523}
					y1={264.554}
					x2={16.523}
					y2={330.56}
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
					d="M130.637 81.771a8.306 8.306 0 006.139-.016 8.302 8.302 0 00-4.479-4.195 8.281 8.281 0 00-6.137.018 8.28 8.28 0 004.477 4.193z"
				/>
				<LinearGradient
					id="prefix__r"
					gradientUnits="userSpaceOnUse"
					x1={24.539}
					y1={264.565}
					x2={24.539}
					y2={330.559}
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
					d="M141.742 74.531a8.297 8.297 0 01-2.605 5.555 8.286 8.286 0 01-1.912-5.832 8.301 8.301 0 012.609-5.555 8.302 8.302 0 011.908 5.832z"
				/>
				<LinearGradient
					id="prefix__s"
					gradientUnits="userSpaceOnUse"
					x1={-48.021}
					y1={264.56}
					x2={-48.021}
					y2={330.565}
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
					d="M69.183 126.833a8.295 8.295 0 01-2.609 5.556 8.288 8.288 0 01-1.908-5.83 8.28 8.28 0 012.609-5.554 8.295 8.295 0 011.908 5.828z"
				/>
				<LinearGradient
					id="prefix__t"
					gradientUnits="userSpaceOnUse"
					x1={-56.19}
					y1={264.56}
					x2={-56.19}
					y2={330.559}
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
					d="M57.927 133.839a8.281 8.281 0 006.135-.014 8.284 8.284 0 00-4.477-4.199 8.306 8.306 0 00-6.137.019 8.321 8.321 0 004.479 4.194z"
				/>
				<LinearGradient
					id="prefix__u"
					gradientUnits="userSpaceOnUse"
					x1={-51.902}
					y1={264.563}
					x2={-51.902}
					y2={330.552}
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
					d="M65.214 118.206a8.286 8.286 0 01-3.791 4.825 8.288 8.288 0 01-.549-6.11 8.303 8.303 0 013.791-4.825 8.288 8.288 0 01.549 6.11z"
				/>
				<LinearGradient
					id="prefix__v"
					gradientUnits="userSpaceOnUse"
					x1={-60.996}
					y1={264.559}
					x2={-60.996}
					y2={330.568}
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
					d="M52.669 122.499a8.285 8.285 0 005.982 1.366 8.29 8.29 0 00-3.416-5.098 8.294 8.294 0 00-5.986-1.363 8.328 8.328 0 003.42 5.095z"
				/>
				<LinearGradient
					id="prefix__w"
					gradientUnits="userSpaceOnUse"
					x1={-53.626}
					y1={264.563}
					x2={-53.626}
					y2={330.556}
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
					d="M63.289 108.906a8.304 8.304 0 01-4.779 3.851 8.291 8.291 0 01.842-6.077 8.284 8.284 0 014.779-3.85 8.307 8.307 0 01-.842 6.076z"
				/>
				<LinearGradient
					id="prefix__x"
					gradientUnits="userSpaceOnUse"
					x1={-63.176}
					y1={264.56}
					x2={-63.176}
					y2={330.56}
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
					d="M50.101 110.27a8.311 8.311 0 005.521 2.678 8.294 8.294 0 00-2.184-5.736 8.302 8.302 0 00-5.523-2.674 8.316 8.316 0 002.186 5.732z"
				/>
				<LinearGradient
					id="prefix__y"
					gradientUnits="userSpaceOnUse"
					x1={-53.11}
					y1={264.562}
					x2={-53.11}
					y2={330.558}
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
					d="M63.503 99.414a8.304 8.304 0 01-5.521 2.676 8.291 8.291 0 012.186-5.734 8.292 8.292 0 015.521-2.674 8.28 8.28 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__z"
					gradientUnits="userSpaceOnUse"
					x1={-62.628}
					y1={264.565}
					x2={-62.628}
					y2={330.555}
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
					d="M50.347 97.773a8.296 8.296 0 004.779 3.85c.484-1.986.25-4.156-.838-6.078s-2.824-3.242-4.781-3.85a8.315 8.315 0 00.84 6.078z"
				/>
				<LinearGradient
					id="prefix__A"
					gradientUnits="userSpaceOnUse"
					x1={-50.377}
					y1={264.566}
					x2={-50.377}
					y2={330.557}
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
					d="M65.849 90.211a8.29 8.29 0 01-5.982 1.365 8.303 8.303 0 013.42-5.096 8.281 8.281 0 015.982-1.363 8.274 8.274 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__B"
					gradientUnits="userSpaceOnUse"
					x1={-59.375}
					y1={264.55}
					x2={-59.375}
					y2={330.562}
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
					d="M53.4 85.654a8.302 8.302 0 003.789 4.826 8.286 8.286 0 00.551-6.113 8.297 8.297 0 00-3.793-4.826 8.315 8.315 0 00-.547 6.113z"
				/>
				<LinearGradient
					id="prefix__C"
					gradientUnits="userSpaceOnUse"
					x1={-45.57}
					y1={264.554}
					x2={-45.57}
					y2={330.56}
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
					d="M70.207 81.771a8.306 8.306 0 01-6.139-.016 8.3 8.3 0 014.48-4.195 8.276 8.276 0 016.135.018 8.282 8.282 0 01-4.476 4.193z"
				/>
				<LinearGradient
					id="prefix__D"
					gradientUnits="userSpaceOnUse"
					x1={-53.586}
					y1={264.565}
					x2={-53.586}
					y2={330.559}
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
					d="M59.101 74.531a8.297 8.297 0 002.605 5.555 8.296 8.296 0 001.912-5.832 8.301 8.301 0 00-2.609-5.555 8.307 8.307 0 00-1.908 5.832z"
				/>
			</G>
			<G>
				<LinearGradient
					id="prefix__E"
					gradientUnits="userSpaceOnUse"
					x1={-24.341}
					y1={307.183}
					x2={-24.341}
					y2={284.083}
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
					d="M95.379 96.324c-1.312-1.312-2.922-1.979-4.781-1.979-1.853 0-3.457.666-4.77 1.979-1.312 1.312-1.978 2.917-1.978 4.77v5.532c0 1.853.666 3.458 1.978 4.771 1.313 1.312 2.917 1.978 4.77 1.978 1.859 0 3.469-.665 4.781-1.978s1.978-2.918 1.978-4.771v-5.532c0-1.853-.665-3.457-1.978-4.77zm-4.781 14.01c-1.03 0-1.887-.354-2.619-1.084-.732-.729-1.088-1.587-1.088-2.624v-5.532c0-1.03.355-1.884 1.088-2.612.732-.729 1.59-1.084 2.619-1.084 1.038 0 1.897.354 2.631 1.084.731.729 1.088 1.583 1.088 2.612v5.532c0 1.037-.356 1.896-1.088 2.624s-1.593 1.084-2.631 1.084z"
				/>
				<LinearGradient
					id="prefix__F"
					gradientUnits="userSpaceOnUse"
					x1={-31.595}
					y1={295.865}
					x2={-17.088}
					y2={295.865}
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
					d="M90.598 113.874c-1.989 0-3.712-.715-5.124-2.124-1.41-1.41-2.125-3.134-2.125-5.124v-5.532c0-1.99.715-3.713 2.125-5.124 1.411-1.41 3.134-2.125 5.124-2.125 1.997 0 3.724.715 5.134 2.125 1.41 1.41 2.125 3.134 2.125 5.124v5.532c0 1.99-.715 3.714-2.125 5.124-1.408 1.409-3.136 2.124-5.134 2.124zm0-19.029c-1.714 0-3.2.616-4.417 1.832-1.215 1.216-1.832 2.702-1.832 4.417v5.532c0 1.715.616 3.201 1.832 4.417 1.216 1.215 2.702 1.831 4.417 1.831 1.723 0 3.212-.616 4.427-1.831 1.215-1.216 1.832-2.702 1.832-4.417v-5.532c0-1.715-.616-3.201-1.832-4.417-1.216-1.216-2.705-1.832-4.427-1.832zm0 15.989c-1.171 0-2.143-.402-2.972-1.23-.831-.826-1.235-1.801-1.235-2.978v-5.532c0-1.17.404-2.141 1.235-2.966.831-.827 1.803-1.229 2.972-1.229 1.176 0 2.152.402 2.983 1.229.832.829 1.235 1.799 1.235 2.966v5.532c0 1.177-.404 2.151-1.235 2.979-.831.827-1.807 1.229-2.983 1.229zm0-12.936c-.891 0-1.632.307-2.266.938-.642.638-.941 1.354-.941 2.257v5.532c0 .91.299 1.631.94 2.27.642.641 1.362.938 2.267.938.911 0 1.635-.298 2.278-.938.642-.639.94-1.359.94-2.27v-5.532c0-.9-.299-1.618-.941-2.258-.642-.639-1.366-.937-2.277-.937z"
				/>
			</G>
		</Svg>
	);
}

export default SvgComponent;

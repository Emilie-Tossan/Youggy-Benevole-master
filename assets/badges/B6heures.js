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
				x1={-28.007}
				y1={277.499}
				x2={-28.007}
				y2={317.112}
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
				d="M87.919 96.988c-1.324 0-2.465.167-3.416.5 1.807-2.43 4.372-5.369 7.656-8.771l.818-.847h-6.2l-.149.168c-3.078 3.465-5.558 6.512-7.371 9.055-1.853 2.604-2.792 5.656-2.792 9.127.012 3.484 1.017 6.254 2.987 8.237 2.051 2.039 4.556 3.073 7.443 3.073 2.899 0 5.404-1.037 7.444-3.084s3.073-4.547 3.073-7.434c0-2.898-1.033-5.41-3.074-7.462-1.699-1.7-3.859-2.562-6.419-2.562zm-1.023 15.803c-1.618 0-2.959-.553-4.101-1.688-1.141-1.137-1.695-2.475-1.695-4.09 0-1.617.555-2.955 1.695-4.092 1.142-1.137 2.483-1.688 4.101-1.688 1.605 0 2.941.552 4.083 1.688 1.141 1.137 1.695 2.475 1.695 4.092 0 1.615-.555 2.953-1.695 4.09-1.142 1.135-2.478 1.688-4.083 1.688z"
			/>
			<LinearGradient
				id="prefix__b"
				gradientUnits="userSpaceOnUse"
				x1={-38.98}
				y1={297.023}
				x2={-17.033}
				y2={297.023}
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
				d="M86.895 118.031c-3.024 0-5.647-1.083-7.795-3.219-2.068-2.082-3.122-4.972-3.135-8.59 0-3.562.971-6.73 2.885-9.419 1.824-2.56 4.315-5.62 7.404-9.097l.298-.336h7.604l-1.637 1.694c-2.766 2.866-5.029 5.413-6.747 7.59a12.94 12.94 0 012.147-.167c2.698 0 4.977.912 6.773 2.71 2.137 2.149 3.22 4.779 3.22 7.816 0 3.023-1.083 5.644-3.219 7.786-2.137 2.145-4.76 3.232-7.798 3.232zm.107-29.661c-3.065 3.451-5.534 6.483-7.338 9.013-1.791 2.517-2.699 5.49-2.699 8.837.012 3.345.968 5.998 2.842 7.885 1.952 1.94 4.337 2.926 7.088 2.926 2.762 0 5.147-.988 7.09-2.937 1.942-1.949 2.927-4.332 2.927-7.081 0-2.764-.985-5.155-2.929-7.11-1.601-1.603-3.641-2.416-6.064-2.416-1.263 0-2.356.159-3.251.472l-1.541.54.974-1.31c1.818-2.444 4.408-5.411 7.697-8.819h-4.796zm-.106 24.921c-1.755 0-3.212-.6-4.454-1.833-1.24-1.235-1.842-2.688-1.842-4.444s.603-3.21 1.842-4.446c1.24-1.233 2.696-1.833 4.454-1.833 1.745 0 3.195.6 4.436 1.833 1.24 1.235 1.842 2.689 1.842 4.446 0 1.755-.603 3.208-1.842 4.444-1.242 1.233-2.693 1.833-4.436 1.833zm0-11.557c-1.48 0-2.706.504-3.749 1.542-1.041 1.038-1.547 2.261-1.547 3.737s.506 2.698 1.548 3.735c1.044 1.037 2.27 1.542 3.748 1.542 1.466 0 2.686-.505 3.73-1.542 1.041-1.038 1.547-2.26 1.547-3.735 0-1.478-.506-2.7-1.548-3.737s-2.262-1.542-3.729-1.542z"
			/>
			<G>
				<LinearGradient
					id="prefix__c"
					gradientUnits="userSpaceOnUse"
					x1={-1.766}
					y1={278.409}
					x2={-1.766}
					y2={315.288}
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
					fill="url(#prefix__c)"
					d="M119.639 116.811v-12.617H107.1v12.617h-3.639V88.59h3.639v11.821h12.539V88.59h3.258v28.219h-3.258v.002z"
				/>
				<LinearGradient
					id="prefix__d"
					gradientUnits="userSpaceOnUse"
					x1={-12.484}
					y1={297.025}
					x2={8.952}
					y2={297.025}
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
					d="M122.896 88.59v28.219h-3.258v-12.617H107.1v12.617h-3.639V88.59h3.639v11.821h12.539V88.59h3.257m1-1h-5.258v11.821H108.1V87.59H102.461v30.219H108.1v-12.617h10.539v12.617h5.258V87.59h-.001z"
				/>
			</G>
			<G opacity={0.4}>
				<LinearGradient
					id="prefix__e"
					gradientUnits="userSpaceOnUse"
					x1={18.931}
					y1={265.63}
					x2={18.931}
					y2={331.63}
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
					d="M131.617 125.764a8.3 8.3 0 002.609 5.555 8.282 8.282 0 001.907-5.83 8.27 8.27 0 00-2.608-5.553 8.301 8.301 0 00-1.908 5.828z"
				/>
				<LinearGradient
					id="prefix__f"
					gradientUnits="userSpaceOnUse"
					x1={27.1}
					y1={265.631}
					x2={27.1}
					y2={331.619}
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
					d="M142.873 132.768a8.286 8.286 0 01-6.135-.013 8.278 8.278 0 014.477-4.198 8.286 8.286 0 016.137.018 8.313 8.313 0 01-4.479 4.193z"
				/>
				<LinearGradient
					id="prefix__g"
					gradientUnits="userSpaceOnUse"
					x1={22.811}
					y1={265.632}
					x2={22.811}
					y2={331.626}
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
					fill="url(#prefix__g)"
					d="M135.586 117.137a8.295 8.295 0 003.791 4.825 8.294 8.294 0 00.549-6.112 8.3 8.3 0 00-3.791-4.824 8.28 8.28 0 00-.549 6.111z"
				/>
				<LinearGradient
					id="prefix__h"
					gradientUnits="userSpaceOnUse"
					x1={31.905}
					y1={265.631}
					x2={31.905}
					y2={331.631}
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
					fill="url(#prefix__h)"
					d="M148.131 121.43a8.29 8.29 0 01-5.982 1.366 8.303 8.303 0 019.402-6.461 8.328 8.328 0 01-3.42 5.095z"
				/>
				<LinearGradient
					id="prefix__i"
					gradientUnits="userSpaceOnUse"
					x1={24.536}
					y1={265.626}
					x2={24.536}
					y2={331.639}
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
					fill="url(#prefix__i)"
					d="M137.512 107.835a8.3 8.3 0 004.779 3.853 8.293 8.293 0 00-.842-6.078 8.291 8.291 0 00-4.779-3.852 8.301 8.301 0 00.842 6.077z"
				/>
				<LinearGradient
					id="prefix__j"
					gradientUnits="userSpaceOnUse"
					x1={34.086}
					y1={265.628}
					x2={34.086}
					y2={331.636}
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
					fill="url(#prefix__j)"
					d="M150.699 109.197a8.308 8.308 0 01-5.521 2.679 8.291 8.291 0 012.184-5.735 8.31 8.31 0 015.523-2.677 8.304 8.304 0 01-2.186 5.733z"
				/>
				<LinearGradient
					id="prefix__k"
					gradientUnits="userSpaceOnUse"
					x1={24.02}
					y1={265.635}
					x2={24.02}
					y2={331.627}
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
					fill="url(#prefix__k)"
					d="M137.297 98.342a8.304 8.304 0 005.521 2.676 8.29 8.29 0 00-2.187-5.734 8.288 8.288 0 00-5.521-2.674 8.29 8.29 0 002.187 5.732z"
				/>
				<LinearGradient
					id="prefix__l"
					gradientUnits="userSpaceOnUse"
					x1={33.538}
					y1={265.639}
					x2={33.538}
					y2={331.626}
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
					fill="url(#prefix__l)"
					d="M150.451 96.702a8.285 8.285 0 01-4.777 3.849c-.484-1.986-.25-4.156.838-6.078s2.824-3.241 4.781-3.85a8.308 8.308 0 01-.842 6.079z"
				/>
				<LinearGradient
					id="prefix__m"
					gradientUnits="userSpaceOnUse"
					x1={21.288}
					y1={265.638}
					x2={21.288}
					y2={331.628}
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
					fill="url(#prefix__m)"
					d="M134.951 89.139a8.29 8.29 0 005.982 1.365 8.314 8.314 0 00-3.42-5.096 8.281 8.281 0 00-5.982-1.363 8.274 8.274 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__n"
					gradientUnits="userSpaceOnUse"
					x1={30.285}
					y1={265.626}
					x2={30.285}
					y2={331.632}
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
					fill="url(#prefix__n)"
					d="M147.4 84.583a8.302 8.302 0 01-3.789 4.826 8.293 8.293 0 01-.553-6.112 8.298 8.298 0 013.795-4.826 8.311 8.311 0 01.547 6.112z"
				/>
				<LinearGradient
					id="prefix__o"
					gradientUnits="userSpaceOnUse"
					x1={16.48}
					y1={265.62}
					x2={16.48}
					y2={331.632}
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
					fill="url(#prefix__o)"
					d="M130.594 80.7a8.301 8.301 0 006.139-.016 8.302 8.302 0 00-4.479-4.195 8.29 8.29 0 00-6.137.018 8.284 8.284 0 004.477 4.193z"
				/>
				<LinearGradient
					id="prefix__p"
					gradientUnits="userSpaceOnUse"
					x1={24.496}
					y1={265.631}
					x2={24.496}
					y2={331.631}
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
					fill="url(#prefix__p)"
					d="M141.699 73.459a8.297 8.297 0 01-2.605 5.555 8.284 8.284 0 01-1.912-5.831 8.306 8.306 0 012.609-5.556 8.304 8.304 0 011.908 5.832z"
				/>
				<LinearGradient
					id="prefix__q"
					gradientUnits="userSpaceOnUse"
					x1={-48.063}
					y1={265.63}
					x2={-48.063}
					y2={331.63}
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
					fill="url(#prefix__q)"
					d="M69.141 125.764a8.294 8.294 0 01-2.608 5.555 8.283 8.283 0 01-1.908-5.83 8.27 8.27 0 012.608-5.553 8.297 8.297 0 011.908 5.828z"
				/>
				<LinearGradient
					id="prefix__r"
					gradientUnits="userSpaceOnUse"
					x1={-56.231}
					y1={265.631}
					x2={-56.231}
					y2={331.619}
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
					fill="url(#prefix__r)"
					d="M57.885 132.768a8.289 8.289 0 006.136-.013 8.28 8.28 0 00-4.478-4.198 8.284 8.284 0 00-6.136.018 8.31 8.31 0 004.478 4.193z"
				/>
				<LinearGradient
					id="prefix__s"
					gradientUnits="userSpaceOnUse"
					x1={-51.943}
					y1={265.632}
					x2={-51.943}
					y2={331.626}
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
					fill="url(#prefix__s)"
					d="M65.172 117.137a8.294 8.294 0 01-3.79 4.825 8.294 8.294 0 01-.549-6.112 8.297 8.297 0 013.791-4.824 8.285 8.285 0 01.548 6.111z"
				/>
				<LinearGradient
					id="prefix__t"
					gradientUnits="userSpaceOnUse"
					x1={-61.037}
					y1={265.631}
					x2={-61.037}
					y2={331.631}
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
					fill="url(#prefix__t)"
					d="M52.628 121.43a8.289 8.289 0 005.982 1.366 8.3 8.3 0 00-3.417-5.099 8.287 8.287 0 00-5.985-1.362 8.324 8.324 0 003.42 5.095z"
				/>
				<LinearGradient
					id="prefix__u"
					gradientUnits="userSpaceOnUse"
					x1={-53.667}
					y1={265.626}
					x2={-53.667}
					y2={331.639}
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
					fill="url(#prefix__u)"
					d="M63.247 107.835a8.302 8.302 0 01-4.779 3.853 8.288 8.288 0 01.841-6.078 8.291 8.291 0 014.779-3.852 8.3 8.3 0 01-.841 6.077z"
				/>
				<LinearGradient
					id="prefix__v"
					gradientUnits="userSpaceOnUse"
					x1={-63.218}
					y1={265.627}
					x2={-63.218}
					y2={331.635}
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
					fill="url(#prefix__v)"
					d="M50.059 109.197a8.31 8.31 0 005.521 2.679 8.291 8.291 0 00-2.184-5.735 8.308 8.308 0 00-5.523-2.677 8.309 8.309 0 002.186 5.733z"
				/>
				<LinearGradient
					id="prefix__w"
					gradientUnits="userSpaceOnUse"
					x1={-53.151}
					y1={265.635}
					x2={-53.151}
					y2={331.627}
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
					fill="url(#prefix__w)"
					d="M63.462 98.342a8.309 8.309 0 01-5.522 2.676 8.298 8.298 0 012.187-5.734 8.29 8.29 0 015.521-2.674 8.29 8.29 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__x"
					gradientUnits="userSpaceOnUse"
					x1={-62.67}
					y1={265.639}
					x2={-62.67}
					y2={331.626}
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
					fill="url(#prefix__x)"
					d="M50.306 96.702a8.29 8.29 0 004.778 3.849 8.299 8.299 0 00-.838-6.078 8.298 8.298 0 00-4.78-3.85 8.307 8.307 0 00.84 6.079z"
				/>
				<LinearGradient
					id="prefix__y"
					gradientUnits="userSpaceOnUse"
					x1={-50.419}
					y1={265.638}
					x2={-50.419}
					y2={331.628}
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
					fill="url(#prefix__y)"
					d="M65.808 89.139a8.291 8.291 0 01-5.982 1.365 8.306 8.306 0 013.42-5.096 8.279 8.279 0 015.981-1.363 8.277 8.277 0 01-3.419 5.094z"
				/>
				<LinearGradient
					id="prefix__z"
					gradientUnits="userSpaceOnUse"
					x1={-59.417}
					y1={265.626}
					x2={-59.417}
					y2={331.632}
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
					fill="url(#prefix__z)"
					d="M53.358 84.583a8.297 8.297 0 003.788 4.826 8.288 8.288 0 00.552-6.112 8.295 8.295 0 00-3.793-4.826 8.302 8.302 0 00-.547 6.112z"
				/>
				<LinearGradient
					id="prefix__A"
					gradientUnits="userSpaceOnUse"
					x1={-45.613}
					y1={265.62}
					x2={-45.613}
					y2={331.632}
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
					fill="url(#prefix__A)"
					d="M70.164 80.7a8.301 8.301 0 01-6.139-.016 8.305 8.305 0 014.479-4.195 8.288 8.288 0 016.136.018 8.279 8.279 0 01-4.476 4.193z"
				/>
				<LinearGradient
					id="prefix__B"
					gradientUnits="userSpaceOnUse"
					x1={-53.627}
					y1={265.631}
					x2={-53.627}
					y2={331.631}
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
					fill="url(#prefix__B)"
					d="M59.059 73.459a8.297 8.297 0 002.605 5.555 8.311 8.311 0 00-.697-11.387 8.304 8.304 0 00-1.908 5.832z"
				/>
			</G>
		</Svg>
	);
}

export default SvgComponent;

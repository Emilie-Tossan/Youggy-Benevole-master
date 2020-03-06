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
				x1={-27.446}
				y1={277.037}
				x2={-27.446}
				y2={317.066}
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
				d="M92.634 100.287c1.536-1.639 2.314-3.384 2.314-5.195 0-1.927-.702-3.612-2.085-5.008-1.384-1.397-3.094-2.105-5.082-2.105h-.582c-1.988 0-3.695.708-5.074 2.106-1.377 1.396-2.075 3.081-2.075 5.007 0 1.807.721 3.566 2.146 5.236-3.133 2.42-4.721 5.178-4.721 8.203 0 2.572.921 4.802 2.739 6.623 1.817 1.824 4.269 2.75 7.286 2.75s5.469-.926 7.286-2.75c1.817-1.821 2.738-4.051 2.738-6.623-.001-3.023-1.645-5.795-4.89-8.244zm-1.193 11.524c-.904.898-2.23 1.354-3.942 1.354-1.723 0-3.052-.455-3.95-1.353-.91-.91-1.353-1.982-1.353-3.281 0-1.315.441-2.434 1.351-3.418.894-.979 2.223-1.661 3.952-2.031 1.718.37 3.042 1.055 3.938 2.035.918.982 1.365 2.102 1.365 3.414 0 1.297-.446 2.369-1.361 3.28zm-2.012-14.875c-.547.579-1.028.954-1.414 1.108-.19.069-.362.121-.516.154a3.869 3.869 0 01-.506-.15c-.409-.16-.891-.533-1.43-1.11-.509-.544-.756-1.148-.756-1.846 0-.678.229-1.234.698-1.699a2.3 2.3 0 011.694-.693c.039 0 .086.005.211.018l.247-.005a.914.914 0 01.124-.013c.68 0 1.24.227 1.712.693.47.465.698 1.021.698 1.699 0 .697-.249 1.3-.762 1.844z"
			/>
			<LinearGradient
				id="prefix__b"
				gradientUnits="userSpaceOnUse"
				x1={-37.97}
				y1={296.783}
				x2={-16.921}
				y2={296.783}
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
				d="M87.5 118.404c-3.155 0-5.726-.975-7.641-2.897-1.914-1.917-2.884-4.265-2.884-6.976 0-3.053 1.518-5.836 4.513-8.279-1.287-1.644-1.938-3.378-1.938-5.16 0-2.062.747-3.865 2.219-5.358 1.476-1.496 3.303-2.255 5.43-2.255h.582c2.127 0 3.957.758 5.438 2.253 1.479 1.493 2.229 3.296 2.229 5.36 0 1.789-.701 3.512-2.083 5.129 3.092 2.467 4.659 5.26 4.66 8.31 0 2.711-.97 5.058-2.884 6.977-1.915 1.922-4.486 2.896-7.641 2.896zm-.301-29.925c-1.85 0-3.438.659-4.718 1.957-1.281 1.299-1.931 2.866-1.931 4.656 0 1.683.682 3.336 2.026 4.912l.341.399-.416.321c-3.003 2.32-4.526 4.947-4.526 7.808 0 2.437.872 4.546 2.593 6.27 1.72 1.728 4.053 2.604 6.932 2.604s5.212-.876 6.932-2.603c1.72-1.725 2.592-3.834 2.592-6.271-.001-2.856-1.579-5.496-4.691-7.845l-.444-.335.38-.406c1.446-1.543 2.179-3.176 2.179-4.854 0-1.79-.653-3.357-1.94-4.656-1.287-1.299-2.877-1.957-4.727-1.957h-.582zm.3 25.186c-1.86 0-3.309-.504-4.304-1.499-1.009-1.01-1.5-2.198-1.5-3.635 0-1.448.485-2.677 1.484-3.757.963-1.055 2.382-1.789 4.215-2.182l.105-.022.105.022c1.82.393 3.234 1.129 4.202 2.188 1.005 1.075 1.496 2.304 1.496 3.751 0 1.436-.494 2.624-1.509 3.634-1.001.995-2.446 1.5-4.294 1.5zm0-10.071c-1.574.353-2.779.977-3.583 1.856-.822.89-1.22 1.896-1.22 3.081 0 1.157.395 2.115 1.207 2.928.801.8 2.011 1.206 3.597 1.206 1.575 0 2.782-.407 3.589-1.209.817-.812 1.214-1.77 1.214-2.925 0-1.182-.402-2.187-1.23-3.072-.812-.887-2.012-1.513-3.574-1.865zm0-4.885l-.104-.022a4.4 4.4 0 01-.573-.169c-.492-.192-1.035-.607-1.624-1.238-.599-.641-.891-1.356-.891-2.188 0-.806.285-1.497.846-2.054a2.816 2.816 0 012.046-.838c.048 0 .107.004.263.021l.184-.008a.627.627 0 01.134-.013c.806 0 1.5.282 2.063.837.562.556.847 1.247.847 2.055 0 .831-.293 1.546-.898 2.187-.598.633-1.134 1.047-1.593 1.229a4.603 4.603 0 01-.597.179l-.103.022zm-.3-5.509c-.538 0-.964.174-1.342.548-.375.372-.549.798-.549 1.343 0 .574.197 1.052.621 1.504.606.649 1.013.895 1.247.986.109.04.22.075.324.102a3.97 3.97 0 00.346-.11c.167-.066.569-.291 1.221-.981.426-.453.625-.93.625-1.501 0-.545-.175-.972-.549-1.343-.379-.374-.812-.548-1.361-.548l-.36.018c-.155-.012-.194-.017-.223-.018z"
			/>
			<G>
				<LinearGradient
					id="prefix__c"
					gradientUnits="userSpaceOnUse"
					x1={-1.909}
					y1={278.321}
					x2={-1.909}
					y2={315.198}
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
					d="M119.497 116.896v-12.617h-12.539v12.617h-3.64V88.679h3.64V100.5h12.539V88.679h3.256v28.219h-3.256v-.002z"
				/>
				<LinearGradient
					id="prefix__d"
					gradientUnits="userSpaceOnUse"
					x1={-12.627}
					y1={296.935}
					x2={8.808}
					y2={296.935}
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
					d="M122.753 88.679v28.219h-3.256v-12.619h-12.539v12.617h-3.64V88.679h3.64V100.5h12.539V88.679h3.256m1-1h-5.256V99.5h-10.539V87.679H102.318v30.219H107.958v-12.619h10.539v12.617h5.256V87.679z"
				/>
			</G>
			<G opacity={0.4}>
				<LinearGradient
					id="prefix__e"
					gradientUnits="userSpaceOnUse"
					x1={18.955}
					y1={265.508}
					x2={18.955}
					y2={331.508}
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
					fill="url(#prefix__e)"
					d="M131.641 125.887a8.296 8.296 0 002.608 5.555 8.282 8.282 0 001.908-5.83 8.283 8.283 0 00-2.609-5.553 8.3 8.3 0 00-1.907 5.828z"
				/>
				<LinearGradient
					id="prefix__f"
					gradientUnits="userSpaceOnUse"
					x1={27.123}
					y1={265.507}
					x2={27.123}
					y2={331.495}
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
					fill="url(#prefix__f)"
					d="M142.896 132.893a8.281 8.281 0 01-6.135-.014 8.31 8.31 0 0110.614-4.181 8.316 8.316 0 01-4.479 4.195z"
				/>
				<LinearGradient
					id="prefix__g"
					gradientUnits="userSpaceOnUse"
					x1={22.832}
					y1={265.506}
					x2={22.832}
					y2={331.512}
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
					d="M135.607 117.26a8.291 8.291 0 003.791 4.826 8.286 8.286 0 00.549-6.111 8.303 8.303 0 00-3.79-4.826 8.282 8.282 0 00-.55 6.111z"
				/>
				<LinearGradient
					id="prefix__h"
					gradientUnits="userSpaceOnUse"
					x1={31.927}
					y1={265.507}
					x2={31.927}
					y2={331.507}
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
					d="M148.152 121.553a8.293 8.293 0 01-5.981 1.367 8.298 8.298 0 013.416-5.098 8.293 8.293 0 015.985-1.363 8.31 8.31 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__i"
					gradientUnits="userSpaceOnUse"
					x1={24.558}
					y1={265.512}
					x2={24.558}
					y2={331.499}
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
					d="M137.534 107.961a8.3 8.3 0 004.778 3.85 8.293 8.293 0 00-.842-6.078 8.282 8.282 0 00-4.779-3.849 8.304 8.304 0 00.843 6.077z"
				/>
				<LinearGradient
					id="prefix__j"
					gradientUnits="userSpaceOnUse"
					x1={34.108}
					y1={265.51}
					x2={34.108}
					y2={331.502}
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
					d="M150.721 109.322A8.298 8.298 0 01145.2 112a8.29 8.29 0 012.184-5.736 8.3 8.3 0 015.522-2.674 8.298 8.298 0 01-2.185 5.732z"
				/>
				<LinearGradient
					id="prefix__k"
					gradientUnits="userSpaceOnUse"
					x1={24.041}
					y1={265.507}
					x2={24.041}
					y2={331.503}
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
					d="M137.318 98.468a8.304 8.304 0 005.521 2.676 8.291 8.291 0 00-2.186-5.734 8.292 8.292 0 00-5.521-2.674 8.296 8.296 0 002.186 5.732z"
				/>
				<LinearGradient
					id="prefix__l"
					gradientUnits="userSpaceOnUse"
					x1={33.56}
					y1={265.507}
					x2={33.56}
					y2={331.504}
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
					d="M150.475 96.827a8.296 8.296 0 01-4.777 3.851c-.484-1.987-.25-4.157.838-6.079s2.824-3.242 4.779-3.85a8.316 8.316 0 01-.84 6.078z"
				/>
				<LinearGradient
					id="prefix__m"
					gradientUnits="userSpaceOnUse"
					x1={21.311}
					y1={265.512}
					x2={21.311}
					y2={331.502}
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
					d="M134.975 89.265a8.287 8.287 0 005.981 1.365 8.311 8.311 0 00-3.42-5.096 8.28 8.28 0 00-5.981-1.363 8.25 8.25 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__n"
					gradientUnits="userSpaceOnUse"
					x1={30.308}
					y1={265.502}
					x2={30.308}
					y2={331.505}
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
					d="M147.423 84.708a8.298 8.298 0 01-3.789 4.826 8.296 8.296 0 01-.553-6.113 8.301 8.301 0 013.795-4.826 8.314 8.314 0 01.547 6.113z"
				/>
				<LinearGradient
					id="prefix__o"
					gradientUnits="userSpaceOnUse"
					x1={16.502}
					y1={265.495}
					x2={16.502}
					y2={331.507}
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
					d="M130.616 80.825a8.301 8.301 0 006.139-.016 8.302 8.302 0 00-4.479-4.195 8.291 8.291 0 00-6.137.018 8.294 8.294 0 004.477 4.193z"
				/>
				<LinearGradient
					id="prefix__p"
					gradientUnits="userSpaceOnUse"
					x1={24.519}
					y1={265.506}
					x2={24.519}
					y2={331.506}
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
					d="M141.723 73.584a8.302 8.302 0 01-2.605 5.555 8.284 8.284 0 01-1.912-5.831 8.306 8.306 0 012.609-5.556 8.327 8.327 0 011.908 5.832z"
				/>
				<LinearGradient
					id="prefix__q"
					gradientUnits="userSpaceOnUse"
					x1={-48.041}
					y1={265.508}
					x2={-48.041}
					y2={331.508}
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
					d="M69.163 125.887a8.288 8.288 0 01-2.609 5.555 8.286 8.286 0 01-1.908-5.83 8.279 8.279 0 012.609-5.553 8.305 8.305 0 011.908 5.828z"
				/>
				<LinearGradient
					id="prefix__r"
					gradientUnits="userSpaceOnUse"
					x1={-56.21}
					y1={265.507}
					x2={-56.211}
					y2={331.495}
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
					d="M57.907 132.893a8.281 8.281 0 006.135-.014 8.31 8.31 0 00-10.614-4.181 8.309 8.309 0 004.479 4.195z"
				/>
				<LinearGradient
					id="prefix__s"
					gradientUnits="userSpaceOnUse"
					x1={-51.921}
					y1={265.506}
					x2={-51.921}
					y2={331.512}
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
					d="M65.194 117.26a8.291 8.291 0 01-3.791 4.826 8.291 8.291 0 01-.549-6.111 8.305 8.305 0 013.791-4.826 8.291 8.291 0 01.549 6.111z"
				/>
				<LinearGradient
					id="prefix__t"
					gradientUnits="userSpaceOnUse"
					x1={-61.015}
					y1={265.507}
					x2={-61.015}
					y2={331.507}
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
					d="M52.649 121.553a8.296 8.296 0 005.982 1.367 8.29 8.29 0 00-3.416-5.098 8.294 8.294 0 00-5.986-1.363 8.326 8.326 0 003.42 5.094z"
				/>
				<LinearGradient
					id="prefix__u"
					gradientUnits="userSpaceOnUse"
					x1={-53.646}
					y1={265.512}
					x2={-53.646}
					y2={331.499}
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
					d="M63.268 107.961a8.302 8.302 0 01-4.779 3.85 8.293 8.293 0 01.842-6.078 8.282 8.282 0 014.779-3.849 8.304 8.304 0 01-.842 6.077z"
				/>
				<LinearGradient
					id="prefix__v"
					gradientUnits="userSpaceOnUse"
					x1={-63.197}
					y1={265.51}
					x2={-63.197}
					y2={331.502}
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
					d="M50.081 109.322A8.307 8.307 0 0055.602 112a8.294 8.294 0 00-2.184-5.736 8.302 8.302 0 00-5.523-2.674 8.308 8.308 0 002.186 5.732z"
				/>
				<LinearGradient
					id="prefix__w"
					gradientUnits="userSpaceOnUse"
					x1={-53.129}
					y1={265.507}
					x2={-53.129}
					y2={331.503}
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
					d="M63.483 98.468a8.304 8.304 0 01-5.521 2.676 8.291 8.291 0 012.186-5.734 8.292 8.292 0 015.521-2.674 8.287 8.287 0 01-2.186 5.732z"
				/>
				<LinearGradient
					id="prefix__x"
					gradientUnits="userSpaceOnUse"
					x1={-62.649}
					y1={265.507}
					x2={-62.649}
					y2={331.504}
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
					d="M50.327 96.827a8.306 8.306 0 004.779 3.851c.484-1.987.25-4.157-.838-6.079s-2.824-3.242-4.781-3.85a8.311 8.311 0 00.84 6.078z"
				/>
				<LinearGradient
					id="prefix__y"
					gradientUnits="userSpaceOnUse"
					x1={-50.397}
					y1={265.512}
					x2={-50.397}
					y2={331.502}
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
					d="M65.829 89.265a8.29 8.29 0 01-5.982 1.365 8.303 8.303 0 013.42-5.096 8.281 8.281 0 015.982-1.363 8.274 8.274 0 01-3.42 5.094z"
				/>
				<LinearGradient
					id="prefix__z"
					gradientUnits="userSpaceOnUse"
					x1={-59.396}
					y1={265.502}
					x2={-59.396}
					y2={331.505}
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
					d="M53.379 84.708a8.302 8.302 0 003.789 4.826 8.286 8.286 0 00.551-6.113 8.294 8.294 0 00-3.793-4.826 8.314 8.314 0 00-.547 6.113z"
				/>
				<LinearGradient
					id="prefix__A"
					gradientUnits="userSpaceOnUse"
					x1={-45.591}
					y1={265.495}
					x2={-45.591}
					y2={331.507}
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
					d="M70.186 80.825a8.301 8.301 0 01-6.139-.016 8.3 8.3 0 014.48-4.195 8.286 8.286 0 016.135.018 8.279 8.279 0 01-4.476 4.193z"
				/>
				<LinearGradient
					id="prefix__B"
					gradientUnits="userSpaceOnUse"
					x1={-53.606}
					y1={265.506}
					x2={-53.606}
					y2={331.506}
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
					d="M59.081 73.584a8.297 8.297 0 002.605 5.555 8.293 8.293 0 001.912-5.831 8.306 8.306 0 00-2.609-5.556 8.304 8.304 0 00-1.908 5.832z"
				/>
			</G>
		</Svg>
	);
}

export default SvgComponent;

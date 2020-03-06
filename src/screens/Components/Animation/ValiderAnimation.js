import React, { Component } from "react";
import { Animated } from "react-native";
import Svg, { Path, G } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

class ValiderAnimation extends Component {
	constructor() {
		super();
		this.state = {
			progress: new Animated.Value(0),
			dashOffset: new Animated.Value(300)
		};
	}
	componentDidMount() {
		Animated.timing(this.state.progress, {
			toValue: 1,
			duration: 700
		}).start();
		setTimeout(() => {
			Animated.timing(this.state.dashOffset, {
				toValue: 260,
				duration: 500
			}).start();
		}, 900);
	}

	render() {
		function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
			var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

			return {
				x: centerX + radius * Math.cos(angleInRadians),
				y: centerY + radius * Math.sin(angleInRadians)
			};
		}

		function describeArc(x, y, radius, startAngle, endAngle) {
			var start = polarToCartesian(x, y, radius, endAngle);
			var end = polarToCartesian(x, y, radius, startAngle);

			var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

			var d = [
				"M",
				start.x,
				start.y,
				"A",
				radius,
				radius,
				0,
				largeArcFlag,
				0,
				end.x,
				end.y
			].join(" ");

			return d;
		}

		const dRange = [];
		const iRange = [];
		const steps = 360.994;
		for (let i = 0; i < steps; i++) {
			dRange.push(describeArc(20, 20, 20, 0, i));
			iRange.push(i / (steps - 1));
		}

		const _d = this.state.progress.interpolate({
			inputRange: iRange,
			outputRange: dRange
		});

		const { dashOffset } = this.state;

		let width =
			this.props.style && this.props.style.width
				? this.props.style.width
				: 42;
		let height =
			this.props.style && this.props.style.height
				? this.props.style.height
				: 42;
		let style = this.props.style ? { ...this.props.style } : {};

		return (
			<Svg
				width={width}
				height={height}
				viewBox="0 0 42 42"
				preserveAspectRatio="xMinYMin slice"
				{...style}
			>
				<G
					transform="translate(1 1)"
					stroke={this.props.color}
					fill="none"
					fillRule="evenodd"
				>
					<AnimatedPath d={_d} strokeWidth={1.5} fill="none" />
					<AnimatedPath
						strokeDasharray={300}
						strokeDashoffset={dashOffset}
						strokeWidth={2}
						d="M12 20.613L16.982 26 30 12"
					/>
				</G>
			</Svg>
		);
	}
}

export default ValiderAnimation;

import React from "react";
import { View } from "react-native";
import B1000 from "./B1000heures";
import B100 from "./B100heures";
import B10 from "./B10heures";
import B1 from "./B1heures";
import B200 from "./B200heures";
import B20 from "./B20heures";
import B2 from "./B2heures";
import B300 from "./B300heures";
import B30 from "./B30heures";
import B3 from "./B3heures";
import B400 from "./B400heures";
import B40 from "./B40heures";
import B4 from "./B4heures";
import B500 from "./B500heures";
import B50 from "./B50heures";
import B5 from "./B5heures";
import B600 from "./B600heures";
import B60 from "./B60heures";
import B6 from "./B6heures";
import B700 from "./B700heures";
import B70 from "./B70heures";
import B7 from "./B7heures";
import B800 from "./B800heures";
import B80 from "./B80heures";
import B8 from "./B8heures";
import B900 from "./B900heures";
import B90 from "./B90heures";
import B9 from "./B9heures";

function Badges(props) {
	const { height, width, style } = props;
	const table = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		20,
		30,
		40,
		50,
		60,
		70,
		80,
		90,
		100,
		200,
		300,
		400,
		500,
		600,
		700,
		800,
		900,
		1000
	];
	const tableComponents = [
		<B1 height={height} width={width} style={style} />,
		<B2 height={height} width={width} style={style} />,
		<B3 height={height} width={width} style={style} />,
		<B4 height={height} width={width} style={style} />,
		<B5 height={height} width={width} style={style} />,
		<B6 height={height} width={width} style={style} />,
		<B7 height={height} width={width} style={style} />,
		<B8 height={height} width={width} style={style} />,
		<B9 height={height} width={width} style={style} />,
		<B10 height={height} width={width} style={style} />,
		<B20 height={height} width={width} style={style} />,
		<B30 height={height} width={width} style={style} />,
		<B40 height={height} width={width} style={style} />,
		<B50 height={height} width={width} style={style} />,
		<B60 height={height} width={width} style={style} />,
		<B70 height={height} width={width} style={style} />,
		<B80 height={height} width={width} style={style} />,
		<B90 height={height} width={width} style={style} />,
		<B100 height={height} width={width} style={style} />,
		<B200 height={height} width={width} style={style} />,
		<B300 height={height} width={width} style={style} />,
		<B400 height={height} width={width} style={style} />,
		<B500 height={height} width={width} style={style} />,
		<B600 height={height} width={width} style={style} />,
		<B700 height={height} width={width} style={style} />,
		<B800 height={height} width={width} style={style} />,
		<B900 height={height} width={width} style={style} />,
		<B1000 height={height} width={width} style={style} />
	];

	let neerest = false;
	for (let index = table.length - 1; index >= 0; index--) {
		const elem = table[index];
		if (elem <= props.hours) {
			neerest = index;
			break;
		}
	}
	return neerest !== false && <View>{tableComponents[neerest]}</View>;
}

export default Badges;

const dateToday = () => {
	const date = new Date();
	return `${date.getFullYear()}-${date.getDate()}-${date.getMonth() + 1}`;
};

export default dateToday;

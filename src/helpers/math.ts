export function roundToDecimal(value: number, decimals: number) {
	const factor = 10 ** decimals;
	return Math.round(value * factor) / factor;
}

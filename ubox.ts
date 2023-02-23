class Ubox {
	binToDec(binary: string): number {
		return parseInt(binary, 2);
	}
	decToBin(decimal: number): string {
		return decimal.toString(2);
	}
	decToHex(decimal: number): string {
		return decimal.toString(16);
	}
	squared(x: number): number {
		return x * x;
	}
	cubed(x: number): number {
		return x * x * x;
	}
}

export default Ubox;

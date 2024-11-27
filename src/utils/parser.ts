type ParserOptions = {
	replace?: Record<string, (str: string) => any>;
	format?: Record<string, (str: string) => any>;
};

const removeDublicates = (sorted: number[]) => {
	for (let i = 0; i < sorted.length - 1; i++) {
		if (sorted[i] === sorted[i + 1]) {
			sorted.splice(i + 1, 1);
			i--;
		}
	}
	return sorted;
};

export const parseText = (str: string, options: ParserOptions) => {
	const slices: Array<{ start: number; length: number; format?: any; replace?: any }> = [];
	const charLength = removeDublicates(
		[
			...Object.keys(options.format ?? {}).map((item) => item.length),
			...Object.keys(options.replace ?? {}).map((item) => item.length),
		].sort(),
	);

	for (let i = 0; i < str.length; i++) {
		for (let len of charLength) {
			const char = str.substring(i, i + len);
			if (options.format) {
				const format = options.format[char];
				if (format !== undefined) {
					slices.push({ start: i, length: len, format });
				}
			}
			if (options.replace) {
				const replace = options.replace[char];
				if (replace !== undefined) {
					slices.push({ start: i, length: len, replace });
				}
			}
		}
	}

	if (slices.length === 0) return str;

	let start = 0;
	const parts: Array<{ str: string; formats: any[]; replace?: any }> = [];
	const activeFormats = new Set<any>();
	for (let i = 0; i < slices.length; i++) {
		if (slices[i].start > start) {
			parts.push({
				str: str.slice(start, slices[i].start),
				formats: Array.from(activeFormats.values()),
			});
		}
		if (slices[i].format) {
			if (activeFormats.has(slices[i].format)) {
				activeFormats.delete(slices[i].format);
			} else {
				activeFormats.add(slices[i].format);
			}
		}
		if (slices[i].replace) {
			parts.push({
				str: str.slice(slices[i].start, slices[i].length),
				replace: slices[i].replace,
				formats: Array.from(activeFormats.values()),
			});
		}
		start = slices[i].start + slices[i].length;
	}
	if (start < str.length) {
		parts.push({ str: str.slice(start, str.length), formats: [] });
	}

	return parts.map((item) => {
		if (item.replace) return item.replace(item.str);
		if (item.formats.length > 0) {
			return item.formats[0](item.str);
		}
		return item.str;
	});
};

export default function filterArray<T>(array: T[], callback: (element: T) => boolean) {
	const newArray: T[] = []

	if (array.length === 0) {
		return newArray
	}

	for (let i = 0; i < array.length; i += 1) {
		console.log(array[i])
		if (callback(array[i])) {
			newArray.push(array[i])
		}
	}
	return newArray
}

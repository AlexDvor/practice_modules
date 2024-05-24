export const wait = (ms: number | undefined) =>
	new Promise(resolve => setTimeout(resolve, ms))

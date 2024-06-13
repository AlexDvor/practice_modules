function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
	return obj[key]
}

extractValue({ name: 'John' }, 'name')

type Person = {
	name: string
}

type AdditionFields = {
	age: number
}

function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
	return Object.assign({}, obj1, obj2)
}

merge<Person, AdditionFields>({ name: 'alex' }, { age: 33 })

///////////////////////////////////////

type Length = {
	length: number
}

function getLength<T extends Length>(str: T) {
	return str.length
}

getLength('text')
getLength([1, 2, 3])
getLength(100) // Errro: Argument of type 'number' is not assignable to parameter of type 'ILength'

/////////////////////////////////

function arrayLogger<T extends Array<string>>(array: T): void {
	array.forEach(item => console.log(item))
}

arrayLogger(['Hello', 'World']) // Ok
arrayLogger([1, 2, 3]) // Error

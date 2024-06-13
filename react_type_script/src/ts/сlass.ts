interface Animal {
	name: string
}

interface Dog extends Animal {
	bark: string
}

class MyDog implements Dog {
	name = 'Fido'
	bark = 'Woof!'
}

// Error: Property 'name' is missing in type 'OtherDog'
class OtherDog implements Dog {
	bark = 'Woof!'
}

///////////////////////////////////////////////////////// Generic in Class

class DataStorage<T> {
	private data: T[] = []

	addItem(item: T) {
		this.data.push(item)
	}

	getItems() {
		return [...this.data]
	}
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Hello')
textStorage.addItem('World')
console.log(textStorage.getItems()) // ['Hello', 'World']
textStorage.addItem(1) // Error: Argument of type 'number' is not assignable to parameter of type 'string'

const numberStorage = new DataStorage<number>()
numberStorage.addItem(1)
numberStorage.addItem(2)
console.log(numberStorage.getItems()) // [1, 2]
numberStorage.addItem('TEXT') // Error: Argument of type 'number' is not assignable to parameter of type 'number'

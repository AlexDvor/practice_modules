// class User {
// 	name: string
// 	email: string

// 	constructor(params: { name: string; email: string }) {
// 		this.name = params.name
// 		this.email = params.email
// 	}
// }

// const mango = new User({
// 	name: 'Mango',
// 	email: 'mango@mail.com',
// })

// console.log(mango)
// // { name: "Mango", email: "mango@mail.com" }

/////////////////////////////////////////////////////////////////////
// private

// class User {
// 	name
// 	#email

// 	constructor(params) {
// 		this.name = params.name
// 		this.#email = params.email
// 	}

// 	getEmail() {
// 		return this.#email
// 	}

// 	changeEmail(newEmail) {
// 		if (this.#validateEmail(newEmail)) {
// 			this.#email = newEmail
// 		} else {
// 			console.log('Invalid email format')
// 		}
// 	}

// 	#validateEmail(email) {
// 		return email.includes('@')
// 	}
// }

// const mango = new User({
// 	name: 'Mango',
// 	email: 'mango@mail.com',
// })

// mango.changeEmail('newmail.com') // "Invalid email format"
// mango.changeEmail('new@mail.com')

// console.log(mango.getEmail()) // "new@mail.com"

// mango.#validateEmail('test') // Error

/////////////////////////////////////////////////////////////////////
// static

class User {
	name: string
	age: string

	static #users: Array<string> = []

	#location: {
		country: string
		city: string
	}

	constructor(params) {
		this.name = params.name
		this.age = params.age
		this.#location = params.location
		User.#users.push(params.name)
	}

	get name() {
		return this.name
	}

	set name(newName) {
		this.name = newName
	}

	#hasName(name) {
		return User.#users.includes(name)
	}
}

const newUser1 = new User({
	name: 'Alex',
	age: '36',
	location: {
		country: 'Spain',
		city: 'Madrid',
	},
})
const newUser2 = new User({
	name: 'Pedro',
	age: '30',
	location: {
		country: 'Spain',
		city: 'Madrid',
	},
})
const newUser3 = new User({
	name: 'Juan',
	age: '62',
	location: {
		country: 'Spain',
		city: 'Madrid',
	},
})

console.log('newUser3', newUser3)
console.log(User.users)
console.log(User.hasName('Alex'))

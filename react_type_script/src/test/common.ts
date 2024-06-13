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

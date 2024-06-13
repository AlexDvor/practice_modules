let mixedType: string | number | boolean

mixedType = 'string'
mixedType = 10
mixedType = true
mixedType = {}

function combine(param1: number | string, param2: number | string) {
	if (typeof param1 === 'number' && typeof param2 === 'number') {
		return param1 + param2
	} else {
		return param1.toString() + param2.toString()
	}
}


type Dog = {
	legs: 4
	bark: () => void
}

type Fish = {
	fins: 2
	swim: () => void
}

let pet: Dog | Fish

// type guard function
function isDog(pet: Dog | Fish): pet is Dog {
	return 'bark' in pet
}


if (isDog(pet)) {
	pet.bark() 
} else {
	pet.swim() 
}

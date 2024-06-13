// typeof
// in
// instanceof
// User-Defined Type Guards
type Admin = {
	name: string
	privileges: string[]
}

type Employee = {
	name: string
	startDate: Date
}

type AdminOrEmployee = Admin | Employee

function printDetails(obj: AdminOrEmployee) {
	console.log(`Name: ${obj.name}`)

	if ('privileges' in obj) {
		console.log(`Privileges: ${obj.privileges.join(', ')}`)
	}

	if ('startDate' in obj) {
		console.log(`Start Date: ${obj.startDate}`)
	}
}

// instanceof

class Car {
	drive() {
		console.log('Driving a car...')
	}
}

class Truck {
	drive() {
		console.log('Driving a truck...')
	}

	loadCargo(amount: number) {
		console.log(`Loading cargo: ${amount}`)
	}
}

type Vehicle = Car | Truck

const carInstance = new Car()
const truckInstance = new Truck()

function useVehicle(vehicle: Vehicle) {
	vehicle.drive()

	if (vehicle instanceof Truck) {
		vehicle.loadCargo(1000)
	}
}

useVehicle(carInstance)
useVehicle(truckInstance)

///// Index Properties

type Person = {
	name: string
	[x: string]: string
}

const user: Person = {
	name: 'Alex',
	gender: 'MAN',
	country: 'Ukraine',
}

export {}

//////////////////

type InitialFormType = {
	name: string
	email: string
	password: string
}

type Form = InitialFormType & {
	errors: Partial<Record<keyof InitialFormType, [string]>>
}

const obj: Form = {
	errors: { email: [''] },
}

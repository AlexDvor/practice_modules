type CreateUserTypes = {
	firstName: string
	lastName: string
	phone?: string
	email?: string
}

export const createUser = ({
	firstName,
	lastName,
	phone = '',
	email = '',
}: CreateUserTypes) => ({
	type: 'USER',
	firstName,
	lastName,
	password: 'password',
	phone,
	email,
})

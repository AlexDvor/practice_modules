import { useState } from 'react'

import validatePassword from '../helper/validatePassword'
import { wait } from '../helper/wait'

interface CreateUserProps {
	name: string
	password: string
}

interface ValidatePasswordResult {
	success: boolean
	error: string | null
}

const useCreateUser = () => {
	const [successMessage, setSuccessMessage] = useState<string>('')
	const [errorMessage, setErrorMessage] = useState<string>('')

	const onSubmit = async ({ password }: CreateUserProps): Promise<void> => {
		const { success, error }: ValidatePasswordResult = validatePassword(password)

		if (!success && error) {
			throw new Error(error)
		}

		await wait(1000)
	}

	const onSuccess = ({ name, password }: CreateUserProps) => {
		setErrorMessage('')
		setSuccessMessage(`User ${name} created with password ${password}`)
	}

	const onError = (error: Error) => {
		setErrorMessage(error.message)
	}

	return { successMessage, errorMessage, onSubmit, onSuccess, onError }
}

export { useCreateUser }

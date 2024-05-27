import Title from './components/Title/Title'
import Form from './components/Form/Form'
import Input from './components/Input/Input'
import Text from './components/Text/Text'
import { useCreateUser } from './hooks/useCreateUser'
import './App.css'

function App() {
	const { successMessage, errorMessage, onSubmit, onSuccess, onError } = useCreateUser()

	const handleFormSubmit = async (data: Record<string, string>) => {
		const { name, password } = data
		if (name && password) {
			await onSubmit({ name, password })
		} else {
			throw new Error('Name and password are required')
		}
	}

	const handleFormSuccess = (data: Record<string, string>) => {
		const { name, password } = data
		if (name && password) {
			onSuccess({ name, password })
		}
	}

	return (
		<main data-testid='app'>
			<Title>Create user</Title>
			<Form onSubmit={handleFormSubmit} onSuccess={handleFormSuccess} onError={onError}>
				<Input label='User name' name='name' />
				<Input label='Password' name='password' type='password' />
				<Input type='submit' value='Create user' />
			</Form>
			{successMessage && <Text isSuccess>{successMessage}</Text>}
			{errorMessage && <Text isError>{errorMessage}</Text>}
		</main>
	)
}

export default App

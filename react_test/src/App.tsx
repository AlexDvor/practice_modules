import Title from 'components/Title/Title'
import Form from 'components/Form/Form'
import Input from 'components/Input/Input'
import Text from 'components/Text/Text'
import { useCreateUser } from 'hooks/useCreateUser'
import './App.css'

/// Set Internal TEST

function App() {
	const { successMessage, errorMessage, onSubmit, onSuccess, onError } = useCreateUser()
	return (
		<main data-testid='app'>
			<Title>Create user</Title>
			<Form onSubmit={onSubmit} onSuccess={onSuccess} onError={onError}>
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

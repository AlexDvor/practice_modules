import { describe } from '@jest/globals'
import validatePassword from '../helper/validatePassword'
import { dummyPasswords } from '../jest.mock/passwords.mock'

describe('validatePassword', () => {
	it.todo('should return true for a valid password')
	it.todo('should validate a password against 8 min characters')
	it.todo('should validate a password against mixed case')
	it.todo('should validate a password against digits and characters')
	it.todo('should validate a password against dummy passwords')
})

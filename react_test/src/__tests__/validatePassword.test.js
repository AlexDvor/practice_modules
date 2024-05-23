import { describe } from '@jest/globals'
import validatePassword from '../helper/validatePassword'
import { dummyPasswords } from '../jest.mock/passwords.mock'

describe('validatePassword', () => {
	it('should return true for a valid password', () => {
		const validPassword = 'MyPassword123!'
		const expectedResult = validatePassword(validPassword)
		expect(expectedResult).toBe(true)
	})
	it('should validate a password against 8 min characters', () => {
		const inValidPassword = 'MyPs67!'
		const expectedResult = validatePassword(inValidPassword)
		expect(expectedResult).toBe(false)
	})
	it('should validate a password against mixed case', () => {
		const inValidPassword = 'mypassword12!'
		const inValidPassword2 = 'MYPASSWORD12222!'
		expect(validatePassword(inValidPassword)).toBe(false)
		expect(validatePassword(inValidPassword2)).toBe(false)
	})
	it('should validate a password against digits and characters', () => {
		const inValidPassword = 'MyPassword!@'
		const inValidPassword2 = 'MyPassword#!'
		expect(validatePassword(inValidPassword)).toBe(false)
		expect(validatePassword(inValidPassword2)).toBe(false)
	})
	it('should validate a password against special character', () => {
		const inValidPassword = 'MyPassword123'
		const expectedResult = validatePassword(inValidPassword)
		expect(expectedResult).toBe(false)
	})
})

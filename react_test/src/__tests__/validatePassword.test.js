import { describe } from '@jest/globals'
import validatePassword from '../helper/validatePassword'
import { passwordValidationErrors } from '../constants/constants'

describe('validatePassword', () => {
	it('should return {success:true, error:null} for a valid password', () => {
		const validPassword = 'MyPassword123!'
		const expectedValue = validatePassword(validPassword)
		const expectedResult = { success: true, error: null }
		expect(expectedValue).toEqual(expectedResult)
	})
	it('should validate a password against 8 min characters and return error message', () => {
		const inValidPassword = 'MyPs67!'
		const expectedValue = validatePassword(inValidPassword)
		const expectedResult = { success: false, error: passwordValidationErrors.length }
		expect(expectedValue).toEqual(expectedResult)
	})
	it('should validate a password against mixed case', () => {
		const inValidPassword = 'mypassword12!'
		const inValidPassword2 = 'MYPASSWORD12222!'
		const expectedResult = { success: false, error: passwordValidationErrors.case }
		expect(validatePassword(inValidPassword)).toEqual(expectedResult)
		expect(validatePassword(inValidPassword2)).toEqual(expectedResult)
	})
	it('should validate a password against digits and characters', () => {
		const inValidPassword = 'MyPassword!@'
		const inValidPassword2 = 'MyPassword#!'
		const expectedResult = { success: false, error: passwordValidationErrors.number }
		expect(validatePassword(inValidPassword)).toEqual(expectedResult)
		expect(validatePassword(inValidPassword2)).toEqual(expectedResult)
	})
	it('should validate a password against special character', () => {
		const inValidPassword = 'MyPassword123'
		const expectedValue = validatePassword(inValidPassword)
		const expectedResult = { success: false, error: passwordValidationErrors.special }
		expect(expectedValue).toEqual(expectedResult)
	})
})

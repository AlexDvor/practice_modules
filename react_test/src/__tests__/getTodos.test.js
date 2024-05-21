import { getTodos } from '../services/getTodos'
import axios from 'axios'

const axiosSpy = jest.spyOn(axios, 'get')
const errorSpy = jest.spyOn(console, 'error')

describe('getTodos', () => {
	it('should return an empty array in case of error and print error in console', async () => {
		const errorMs = 'Network error'
		axiosSpy.mockRejectedValueOnce(new Error(errorMs))
		const result = await getTodos()
		expect(errorSpy).toHaveBeenCalledWith(new Error(errorMs))
		expect(result).toEqual([])
	})

	it('should return 200 todos using axios.get', async () => {
		const result = await getTodos()
		expect(axiosSpy).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/')
		expect(result).toHaveLength(200)
	})
})

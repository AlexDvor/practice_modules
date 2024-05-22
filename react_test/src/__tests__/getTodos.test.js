import { TodoServices } from '../services/todo.services'
import { mockTodo } from '../jest.mock/todo.mock'
import axios from 'axios'

const idTodo = 'abcd'
const mockedV4 = jest.fn(() => idTodo)
const axiosSpy = jest.spyOn(axios, 'get')
const errorSpy = jest.spyOn(console, 'error')

jest.mock('uuid', () => ({
	v4: () => mockedV4(),
}))

global.fetch = jest.fn(() =>
	Promise.resolve({
		ok: true,
		json: () => Promise.resolve(mockTodo),
	})
)

describe('TodoServices', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	describe('getTodos', () => {
		it('should return an empty array in case of error and print error in console', async () => {
			const errorMs = 'Network error'
			axiosSpy.mockRejectedValueOnce(new Error(errorMs))
			const result = await TodoServices.getTodos()
			expect(errorSpy).toHaveBeenCalledWith(new Error(errorMs))
			expect(result).toEqual([])
		})
		it('should return 200 todos using axios.get', async () => {
			const result = await TodoServices.getTodos()
			expect(axiosSpy).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/')
			expect(result).toHaveLength(200)
		})
	})

	describe('createTodo', () => {
		it('should return todo object with provided title, completed and id', () => {
			const title = 'Learn Jest'
			const expectedResult = { title, completed: false, id: idTodo }
			const result = TodoServices.createTodo(title)
			expect(result).toEqual(expectedResult)
			expect(mockedV4).toHaveBeenCalledTimes(1)
		})
		it('should create todo on server', async () => {
			const result = await TodoServices.createTodoOnServer('my todo')
			expect(result).toEqual(mockTodo)
			expect(fetch).toHaveBeenCalledTimes(1)
		})
		it('should throw an error if there is a network', async () => {
			fetch.mockRejectedValueOnce('Network error')
			await expect(TodoServices.createTodoOnServer('my todo')).rejects.toMatch(
				'Network error'
			)
		})

		it('should throw an error when no valid title is provided', () => {
			const fnToThrow = () => TodoServices.createTodo('')
			expect(fnToThrow).toThrow('title is required')
		})

		it('should throw error from fn when response not ok', async () => {
			fetch.mockResolvedValueOnce({ ok: false })
			const fnToThrow = () => TodoServices.createTodoOnServer('my todo')
			await expect(fnToThrow).rejects.toThrow('Cannot create todo')
		})
	})
})

import axios from 'axios'
import { v4 } from 'uuid'

export const TodoServices = {
	async getTodos() {
		try {
			const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/')
			return data
		} catch (error) {
			console.error(error)
			return []
		}
	},

	async createTodoOnServer(title: string) {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(this.createTodo(title)),
		})

		if (!response.ok) throw new Error('Cannot create todo')
		return response.json()
	},

	createTodo(title: string) {
		if (!title) {
			throw new Error('title is required')
		}
		return {
			title,
			completed: false,
			id: v4(),
		}
	},
}

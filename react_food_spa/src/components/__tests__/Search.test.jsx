import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Search } from '../Search'

describe('Search', () => {
	it('renders correctly', () => {
		render(<Search />)
		expect(screen.getByRole('searchbox')).toBeInTheDocument()
		expect(screen.getByRole('button')).toBeInTheDocument()
	})

	it('should handle input change', async () => {
		render(<Search />)

		const inputElement = screen.getByRole('searchbox')
		await userEvent.type(inputElement, 'chicken')
		expect(inputElement).toHaveValue('chicken')
	})

	it('should handle form submit', async () => {
		const cb = jest.fn()
		render(<Search cb={cb} />)

		const input = screen.getByRole('searchbox')
		const button = screen.getByRole('button')

		await userEvent.type(input, 'chicken')
		await userEvent.click(button)

		expect(cb).toHaveBeenCalledWith('chicken')
		expect(cb).toHaveBeenCalledTimes(1)
	})

	it("should handle 'Enter' key press", async () => {
		const cb = jest.fn()
		render(<Search cb={cb} />)

		const inputElement = screen.getByRole('searchbox')

		await userEvent.type(inputElement, 'chicken{enter}')

		expect(cb).toHaveBeenCalledWith('chicken')
	})
})

import { screen, render } from '@testing-library/react'
import { Footer } from '../Footer'

describe('Footer', () => {
	it('renders correctly', () => {
		render(<Footer />)
		expect(screen.getByText(/copyright text/i)).toBeInTheDocument()
		expect(screen.getByRole('link')).toBeInTheDocument()
	})
})

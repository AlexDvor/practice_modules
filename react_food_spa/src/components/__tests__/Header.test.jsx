import { screen } from '@testing-library/react'
import { renderWithRouter } from '../../utils/testing'
import { Header } from '../Header'

describe('Header', () => {
	it('renders the logo text', () => {
		renderWithRouter(<Header />)

		expect(screen.getAllByRole('link')).toHaveLength(3)
		expect(screen.getByText(/react food/i)).toBeInTheDocument()
	})

	it('renders the About link', () => {
		renderWithRouter(<Header />)

		expect(screen.getByText(/about/i)).toBeInTheDocument()
		expect(screen.getByText(/about/i)).toHaveAttribute('href', '/about')
	})
	it('renders the Contacts link', () => {
		renderWithRouter(<Header />)

		expect(screen.getByText(/contacts/i)).toBeInTheDocument()
		expect(screen.getByText(/contacts/i)).toHaveAttribute('href', '/contacts')
	})
})

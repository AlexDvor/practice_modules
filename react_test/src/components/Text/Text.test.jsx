import { render, screen } from '@testing-library/react'
import Text from './Text'

const text = 'Hello Jest'

describe('Text', () => {
	it('should render provided children', () => {
		const { getByText } = render(<Text>{text}</Text>)
		expect(getByText(text)).toBeInTheDocument()
	})

	it('should render with the correct class name', () => {
		const { getByText } = render(<Text className='testClass'>{text}</Text>)
		expect(getByText(text)).toBeInTheDocument()
		expect(getByText(text)).toHaveClass('testClass')
		expect(getByText(text)).toHaveClass('text')
	})

	it('should render with the error class name', () => {
		const { getByText } = render(<Text isError={true}>{text}</Text>)

		expect(getByText(text)).toBeInTheDocument()
		expect(getByText(text)).toHaveClass('error')
		expect(getByText(text)).toHaveClass('text')
	})

	it('should render with the success class name', () => {
		const { getByText } = render(<Text isSuccess={true}>{text}</Text>)

		expect(getByText(text)).toBeInTheDocument()
		expect(getByText(text)).toHaveClass('success')
		expect(getByText(text)).toHaveClass('text')
	})

	it('should render with the correct class name and error class name', () => {
		const { getByText } = render(
			<Text className='test' isError>
				{text}
			</Text>
		)
		expect(getByText(text)).toBeInTheDocument()
		expect(getByText(text)).toHaveClass('text')
		expect(getByText(text)).toHaveClass('test')
		expect(getByText(text)).toHaveClass('error')
	})
})

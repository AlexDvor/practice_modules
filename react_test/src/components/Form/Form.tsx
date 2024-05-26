import React, { FormEvent, ReactNode } from 'react'
import cn from 'clsx'
import style from './Form.module.css'

interface FormProps {
	onSubmit: (data: Record<string, string>) => Promise<void>
	onSuccess?: (data: Record<string, string>) => void
	onError?: (error: Error) => void
	children: ReactNode
	className?: string
}

const Form: React.FC<FormProps> = ({
	onSubmit,
	onSuccess,
	onError,
	children,
	className,
}) => {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const data: Record<string, string> = {}

		formData.forEach((value, key) => {
			data[key] = value.toString()
		})

		try {
			await onSubmit(data)
			onSuccess && onSuccess(data)
		} catch (error) {
			onError && onError(error as Error)
		}
	}

	return (
		<form
			className={cn(style.form, className)}
			onSubmit={handleSubmit}
			autoComplete='off'
		>
			{children}
		</form>
	)
}

export default Form

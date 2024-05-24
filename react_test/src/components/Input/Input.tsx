import { ChangeEvent, FC, useId } from 'react'
import cn from 'clsx'

import style from './Input.module.css'

interface InputProps {
	type?: string
	name?: string
	value?: string
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	label?: string
	containerClassName?: string
	inputClassName?: string
}

const Input: FC<InputProps> = ({
	type = 'text',
	name,
	value,
	onChange,
	placeholder,
	label,
	containerClassName,
	inputClassName,
}) => {
	const id = useId()

	return (
		<div className={cn(style.formControl, containerClassName)}>
			{label && (
				<label className={style.label} htmlFor={id} data-testid='input-label'>
					{label}
				</label>
			)}

			<input
				id={id}
				className={cn(style.input, inputClassName)}
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
		</div>
	)
}

export default Input

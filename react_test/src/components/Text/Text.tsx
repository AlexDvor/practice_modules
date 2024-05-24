import cn from 'clsx'

import style from './Text.module.css'
import { FC, ReactNode } from 'react'

interface TextProps {
	children: ReactNode
	isSuccess?: boolean
	className?: string
	isError?: boolean
}

const Text: FC<TextProps> = ({ children, className, isError, isSuccess }) => {
	return (
		<p
			className={cn(style.text, className, {
				[style.error]: isError,
				[style.success]: isSuccess,
			})}
		>
			{children}
		</p>
	)
}

export default Text

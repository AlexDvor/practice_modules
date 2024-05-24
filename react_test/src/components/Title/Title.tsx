import cn from 'clsx'

import style from './Title.module.css'
import { FC, ReactNode } from 'react'

interface TitleProps {
	level?: 1 | 2 | 3 | 4 | 5 | 6
	className?: string
	children: ReactNode
}

const Title: FC<TitleProps> = ({ level = 1, className = '', children }) => {
	const Tag = `h${level}` as keyof JSX.IntrinsicElements

	return <Tag className={cn(style.title, className)}>{children}</Tag>
}

export default Title

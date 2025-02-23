import type React from "react"
import styles from "./Card.module.css"
import cx from "classnames";

interface CardProps {
	children: React.ReactNode
	className?: string
}

const Card = ({ children, className }: CardProps) => {
	return <div className={cx(styles.card, className)}>{children}</div>
}

export default Card;


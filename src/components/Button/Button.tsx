import type React from "react";
import styles from "./Button.module.css";
import cx from "classnames";

interface ButtonProps {
	children: React.ReactNode
	className?: string
	onClick?: () => void
}

const Button = (props: ButtonProps) => {
	const { children, className, onClick } = props;
	return (
		<button
			className={cx(styles.buttton, className)}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button;
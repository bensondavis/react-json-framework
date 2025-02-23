import type React from "react"
import styles from "./TextField.module.css"
import cx from "classnames";

interface TextFieldProps {
	id?: string
	type?: "text" | "password" | "email"
	placeholder?: string
	className?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextField = ({id, placeholder, className, onChange, type = "text"}: TextFieldProps) => {
	return (
		<input
			type={type}
			id={id}
			placeholder={placeholder}
			className={cx(styles.textField, className)}
			onChange={onChange}
		/>
	)
}

export default TextField;


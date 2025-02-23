interface ComponentProps {
	[key: string]: any
	width?: string
	height?: string
	onChange?: (id: string, value: string) => void
	onSubmit?: () => void
	parentId?: string
}

export default ComponentProps;
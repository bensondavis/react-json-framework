interface ComponentProps {
	[key: string]: any
	onChange?: (id: string, value: string) => void
	onSubmit?: () => void
	parentId?: string
}

export default ComponentProps;
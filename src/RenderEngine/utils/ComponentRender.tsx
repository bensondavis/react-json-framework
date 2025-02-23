import type React from "react"
import Card from "../../components/Card/Card";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import CardComponent from "../components/CardComponent/CardComponent";

interface ComponentProps {
	[key: string]: any
	onChange?: (id: string, value: string) => void
	onSubmit?: () => void
	parentId?: string
}

const TextFieldComponent: React.FC<ComponentProps> = ({ id, title, placeholder, onChange, parentId, type }) => (
	<div className="space-y-2">
		<label htmlFor={id} className="block text-sm font-medium text-gray-700">
			{title}
		</label>
		<TextField
			id={id}
			placeholder={placeholder}
			type={type}
			className="w-full"
			onChange={(e) => onChange && onChange(`${parentId}.${id}`, e.target.value)}
		/>
	</div>
)

const ButtonComponent: React.FC<ComponentProps> = ({ title, actionUrl, position, onSubmit }) => (
	<div className={`flex ${position === "center" ? "justify-center" : ""}`}>
		<Button onClick={() => onSubmit && onSubmit()}>{title}</Button>
	</div>
)

const Stack: React.FC<ComponentProps> = ({ title, layout, content, onChange, onSubmit, parentId }) => (
	<div className={`space-y-4 ${layout === "row" ? "flex flex-row gap-4" : "flex flex-col"}`}>
		{title && <h3 className="text-lg font-semibold">{title}</h3>}
		{content.map((item: any, index: number) => renderComponent(item, index, onChange, onSubmit, parentId))}
	</div>
)

// const CardComponent: React.FC<ComponentProps> = ({ title, layout, content, onChange, onSubmit, parentId }) => (
// 	<Card className="p-6 space-y-4">
// 		{title && <h2 className="text-xl font-bold">{title}</h2>}
// 		<div className={`${layout === "row" ? "flex flex-row gap-4" : "flex flex-col space-y-4"}`}>
// 			{content.map((item: any, index: number) => renderComponent(item, index, onChange, onSubmit, parentId))}
// 		</div>
// 	</Card>
// )

export const renderComponent = (
	component: any,
	key: number | string,
	onChange?: (id: string, value: string) => void,
	onSubmit?: () => void,
	parentId?: string,
): React.ReactNode => {
	const [type] = Object.keys(component)
	const props = component[type]

	switch (type) {
		case "textField":
			return <TextFieldComponent key={key} {...props} onChange={onChange} parentId={parentId} />
		case "button":
			return <ButtonComponent key={key} {...props} onSubmit={onSubmit} />
		case "stack":
			return <Stack key={key} {...props} onChange={onChange} onSubmit={onSubmit} parentId={parentId} />
		case "card":
			return <CardComponent key={key} {...props} onChange={onChange} onSubmit={onSubmit} parentId={`card_${key}`} />
		default:
			return null
	}
}


import React, {isValidElement, JSX, useState} from "react";
import {renderComponent} from "../../RenderEngine/utils/ComponentRender";
import styles from "./DynamicUI.module.css";

interface DynamicUIProps {
	screenConfig: {
		screen: Record<string, any>[]
	} | JSX.Element;
}

const DynamicUI = ({screenConfig}: DynamicUIProps) => {
	const [formData, setFormData] = useState<{[key: string]: {[key: string]:string}}>({});

	const handleChange = (id: string, value: string)=> {
		const [parentId, fieldId] = id.split(".");
		setFormData((prevData) => ({
			...prevData,
			[parentId]: {
				...(prevData[parentId] || {}),
				[fieldId]: value,
			},
		}))
	}

	const isJsonObject = (value: any): value is Record<string, any> => {
		return (
			typeof value === "object" &&
			value !== null &&
			!Array.isArray(value)
		);
	};

	const isJSXElement = (value: any): value is JSX.Element => {
		return (isValidElement(value)); // Returns true if it's NOT a JSX element
	};

	const handleSubmit = (parentId: string) => {
		console.log({formData});
		const parentData = formData[parentId] || {};
		console.log(`Form Data for ${parentId}: `, parentData);
	}

	return (
		<div className={styles.main}>
			{!isJSXElement(screenConfig) ? screenConfig?.screen?.map((component: any, index: number) =>
				renderComponent(component, index, handleChange, () => handleSubmit(`card_${index}`), `card_${index}`),
			) : screenConfig}

		</div>
	)
}

export default DynamicUI;
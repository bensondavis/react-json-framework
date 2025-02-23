import React, {isValidElement, JSX, useState} from "react";
import {renderComponent} from "../../RenderEngine/utils/ComponentRender";
import styles from "./DynamicUI.module.css";
import cx from "classnames";

interface DynamicUIProps {
	screenConfig: {
		page: {
			content: Record<string, any>[]
		} & Record<string, any>;
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

	const isJSXElement = (value: any): value is JSX.Element => {
		return (isValidElement(value)); // Returns true if it's NOT a JSX element
	};

	const handleSubmit = (parentId: string) => {
		console.log({formData});
		const parentData = formData[parentId] || {};
		console.log(`Form Data for ${parentId}: `, parentData);
	}

	return (
		<>
			{!isJSXElement(screenConfig) ? (
				<div className={cx(styles.main, styles[`${screenConfig?.page.layout}`])}>
					{ screenConfig?.page.content?.map((component: any, index: number) =>
						renderComponent(component, index, handleChange, () => handleSubmit(`card_${index}`), `card_${index}`),
					)}

				</div>
			) : screenConfig}
		</>

	)
}

export default DynamicUI;
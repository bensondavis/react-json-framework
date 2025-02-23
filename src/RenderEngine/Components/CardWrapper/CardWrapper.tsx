import type React from "react";
import Card from "../../../components/Card/Card";
import {renderComponent} from "../../utils/ComponentRender";
import ComponentProps from "../ComponentProps";
import styles from "./CardWrapper.module.css";
import cx from "classnames";

const CardWrapper = ({title, layout = "column", content, onChange, onSubmit, parentId}: ComponentProps) => (
	<Card className={styles.card}>
		{title && <h2 className={styles.title}>{title}</h2>}
		<div className={cx({[styles["card-row"]]: layout === "row", [styles["card-col"]]: layout === "column"})}>
			{content.map((item: any, index: number) => renderComponent(item, index, onChange, onSubmit, parentId))}
		</div>
	</Card>
)

export default CardWrapper;
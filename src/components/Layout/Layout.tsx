import Tab from "../Tab/Tab";
import {ReactNode} from "react";
import styles from "./Layout.module.css";


const Layout = ({children}: {children: ReactNode}) => {
	return (
		<div className={styles["layout-container"]}>
			<section>
        <Tab />
			</section>
			<main>
				{children}
			</main>
		</div>
	)
}

export default Layout;
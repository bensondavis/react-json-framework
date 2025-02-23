import styles from "./Tab.module.css";
import Tabs from "../../data/Tabs.json"
import {useContentContext} from "../../context/ContentContext";

interface TabProps {
	title: String,
	content: String,
}

const Tab = () => {
	const {setContent} = useContentContext();
	const handleClick = (content: String) => {
		setContent(content);
	}
	return(
		<div>
			{Tabs.map((tab: TabProps, index) => (
				<button key={index} onClick={() => handleClick(tab.content)}>{tab.title}</button>
			))}
		</div>
	)
}

export default Tab;
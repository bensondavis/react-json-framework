import componentRegistry from "../../data/ComponentRegistry";

const DynamicContentLoader = (componentName: string) => {
	return componentRegistry[componentName] || (() => <div>❌ Component {`${componentName}`} not found</div>);
}

export default DynamicContentLoader;
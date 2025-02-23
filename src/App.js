import './App.css';
import Layout from "./components/Layout/Layout";
import {useContentContext} from "./context/ContentContext";
import ContentResolver from "./RenderEngine/utils/ContentResolver";
import DynamicUI from "./components/DynamicUI/DynamicUI";
import {useState, useEffect} from "react";
import DynamicContentLoader from "./RenderEngine/utils/DynamicContentLoader";

function App() {
    const {content} = useContentContext();
    const [screen, setScreen] = useState();
    useEffect(() => {
        if(content)
            setScreen(DynamicContentLoader(content));
        // import(`./pages/${content}/Content.json`).then(data => {
        //     console.log(data.default);
        //     setScreen(data.default)
        // });
        console.log(DynamicContentLoader(content));
        // ContentResolver(content);
    }, [content]);
    return (
        <div className="App">
            <Layout><DynamicUI screenConfig={screen}/></Layout>
        </div>
    );
}

export default App;
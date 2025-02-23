import React from "react";

//pages
import Home from "../pages/Home/Content.json";
import About from "../pages/About/About";

const componentRegistry: { [key: string]: React.ReactNode | {} } = {
	Home,
	About,
};

export default componentRegistry;
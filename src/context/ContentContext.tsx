import React, {createContext, useContext, useState} from "react";

interface contentProps {
    content: React.ReactNode;
    setContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

const ContentContext = createContext<contentProps | undefined>(undefined);

export const useContentContext = () => {
    const context = useContext(ContentContext);
    if (!context) {
        throw new Error("useContentContext must be used within a ContentProvider");
    }
    return context;
};

export const ContentProvider = ({ children }: { children: React.ReactNode }) => {
    const [content, setContent] = useState<React.ReactNode>(null);

    return (
        <ContentContext.Provider value={{ content, setContent }} >
            {children}
        </ContentContext.Provider>
    )
}
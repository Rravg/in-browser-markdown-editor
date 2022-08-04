import React, { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";

import Header from "./components/Header";
import Markdown from "./components/Markdown";
import Modal from "./components/Modal";
import Preview from "./components/Preview";
import SideNav from "./components/SideNav";

import { lightTheme, darkTheme } from "./styles/Themes";

import data from "./data.json";

const Container = styled.div`
    display: flex;
    height: 100%;
`;

function App() {
    const [theme, setTheme] = useState(lightTheme);
    const [source, setSource] = useState("");
    const [preview, setPreview] = useState(false);

    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);

    // loads data just for front end
    useEffect(() => {
        setSource(data[1].content);
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme(darkTheme);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Modal />
            <SideNav setTheme={setTheme} />
            <div className="App" id="App">
                <Header />
                <Container>
                    <Markdown
                        source={source}
                        setSource={setSource}
                        preview={preview}
                        setPreview={setPreview}
                        selfRef={textAreaRef}
                        targetScrollRef={previewRef}
                    />
                    <Preview
                        source={source}
                        preview={preview}
                        setPreview={setPreview}
                        selfRef={previewRef}
                        targetScrollRef={textAreaRef}
                    />
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default App;

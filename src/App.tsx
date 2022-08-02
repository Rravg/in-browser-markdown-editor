import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";

import Header from "./components/Header";
import Markdown from "./components/Markdown";
import Modal from "./components/Modal";
import Preview from "./components/Preview";
import SideNav from "./components/SideNav";

import { lightTheme, darkTheme } from "./styles/Themes";
import { GlobalStyles } from "./styles/Global";

const Container = styled.div`
    display: flex;
    height: 100%;
`;

function App() {
    const [theme, setTheme] = useState(lightTheme);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Modal />
            <SideNav setTheme={setTheme} />
            <div className="App" id="App">
                <Header />
                <Container>
                    <Markdown />
                    <Preview />
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default App;

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
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import AuthProvider, { useAuth } from "./components/AuthProvider";

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
            <AuthProvider>
                <Modal />
                <SideNav setTheme={setTheme} />
                <div className="App" id="App">
                    <Header />
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route
                            path="/"
                            element={
                                <RequireAuth>
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
                                </RequireAuth>
                            }
                        ></Route>
                    </Routes>
                </div>
            </AuthProvider>
        </ThemeProvider>
    );
}

function RequireAuth({ children }: { children: JSX.Element }): JSX.Element {
    let auth = useAuth();

    if (!auth.user) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default App;

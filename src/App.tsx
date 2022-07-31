import React from "react";
import "./App.css";

import styled, { css } from "styled-components";
import Header from "./components/Header";
import SideNav from "./components/SideNav";

function App() {
    return (
        <>
            <SideNav />
            <div className="App" id="App">
                <Header />
            </div>
        </>
    );
}

export default App;

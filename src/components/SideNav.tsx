import styled from "styled-components";
import { Button } from "./General";

import data from "../data.json";
import Document from "./Document";
import ThemeSwitch from "./ThemeSwitch";
import { Dispatch } from "react";

const StyledSideNav = styled.div`
    height: 100%;
    width: 0;
    padding: 0;

    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: var(--color-900);
    overflow-x: hidden;

    transition: 0.1s;
`;

const Container = styled.div`
    transition: opacity 0.1s;
    opacity: 0;
`;

const Title = styled.h1`
    color: var(--color-100);
    display: block;

    margin-bottom: 27px;

    @media (min-width: 1440px) {
        display: none;
    }
`;

const SubTitle = styled.p`
    color: var(--color-500);

    margin-bottom: 29px;
`;

const NewButton = styled(Button)`
    color: var(--color-100);

    margin-bottom: 24px;
`;

const SwithContainer = styled.div`
    position: absolute;
    bottom: 24px;
`;

interface SideNavProps {
    setTheme: Function;
}

export default function SideNav({ setTheme }: SideNavProps): JSX.Element {
    const handleClick = () => {
        console.log();

        data.forEach((element) => {
            console.log(element);
        });
    };

    return (
        <StyledSideNav id="sidenav">
            <Container id="side-container">
                <Title className="title">MARKDOWN</Title>
                <SubTitle className="heading-s">MY DOCUMENTS</SubTitle>
                <NewButton className="heading-m" onClick={handleClick}>
                    + New Document
                </NewButton>
                {data.map((document, index) => {
                    return (
                        <Document
                            key={index}
                            date={document.createdAt}
                            name={document.name}
                            onClick={handleClick}
                        />
                    );
                })}
                <SwithContainer style={{ position: "absolute", bottom: "24px" }}>
                    <ThemeSwitch setTheme={setTheme} />
                </SwithContainer>
            </Container>
        </StyledSideNav>
    );
}

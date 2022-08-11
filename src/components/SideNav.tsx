import styled from "styled-components";
import { Button } from "./General";

import data from "../data.json";
import Document from "./Document";
import ThemeSwitch from "./ThemeSwitch";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";

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
    height: 100%;

    display: flex;
    flex-direction: column;
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
    /* position: absolute;
    bottom: 24px; */
`;

const LogoutButton = styled.button`
    cursor: pointer;
    margin-bottom: 32px;
    width: 100%;
    padding: 8px 6px;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid var(--color-200);
    color: var(--color-200);
    outline: none;

    &:hover {
        background-color: var(--orange);
    }
`;

interface SideNavProps {
    setTheme: Function;
}

export default function SideNav({ setTheme }: SideNavProps): JSX.Element {
    let auth = useAuth();
    let navigate = useNavigate();

    const handleClick = () => {
        console.log();

        data.forEach((element) => {
            console.log(element);
        });
    };

    const handleLogout = () => {
        UserService.logout()
            .then((response) => {
                auth.logout(() => {
                    navigate("/login");
                });
            })
            .catch((e) => console.error(e));
    };

    return (
        <StyledSideNav id="sidenav">
            <Container id="side-container">
                <div style={{ flex: "1" }}>
                    <Title className="title">MARKDOWN</Title>
                    {auth.user && (
                        <>
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
                        </>
                    )}
                </div>
                <SwithContainer>
                    {auth.user && (
                        <LogoutButton className="heading-m" onClick={handleLogout}>
                            Logout
                        </LogoutButton>
                    )}
                    <ThemeSwitch setTheme={setTheme} />
                </SwithContainer>
            </Container>
        </StyledSideNav>
    );
}

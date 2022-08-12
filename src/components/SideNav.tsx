import styled from "styled-components";
import { Button } from "./General";

import Document from "./Document";
import ThemeSwitch from "./ThemeSwitch";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";
import DocumentService from "../services/DocumentService";
import { useEffect, useState } from "react";

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

type document = {
    document_name: string;
    created_at: string;
};

export default function SideNav({ setTheme }: SideNavProps): JSX.Element {
    const [data, setData] = useState<document[]>([]);

    let auth = useAuth();
    let navigate = useNavigate();

    function getDate(now: Date): string {
        let date: string = "";
        const year = now.getFullYear();
        let day = now.getDay().toString();
        if (day.length === 1) day = "0".concat(day);

        let month = now.toLocaleString("default", { month: "long" });
        month = month.charAt(0).toUpperCase() + month.slice(1);

        date = `${day} ${month} ${year}`;
        return date;
    }

    const getDocuments = async () => {
        let response = await DocumentService.GetDocuments(auth.user);
        setData((docs) => {
            return response.data.documents;
        });
    };

    useEffect(() => {
        if (auth.user) {
            getDocuments();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth.user]);

    const handleClick = () => {
        if (auth.user) {
            getDocuments();
        }
        console.log(getDate(new Date()));
        console.log(data);
    };

    const handleLogout = async () => {
        try {
            await UserService.logout();
            auth.logout(() => navigate("/login"));
        } catch (error) {
            console.error(error);
        }
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
                                        date={document.created_at}
                                        name={document.document_name}
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

import { FormEvent, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useClickAnyWhere } from "usehooks-ts";
import UserService from "../services/UserService";
import { useAuth } from "./AuthProvider";
import { Button } from "./General";

const StyledLoginPage = styled.div`
    background-color: ${(props) => props.theme.mainBackground};
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
`;

const LoginContainer = styled.div`
    background-color: ${(props) => props.theme.headerColor};
    width: 80%;
    max-width: 500px;
    padding: 24px;
    border-radius: 4px;
`;

const Title = styled.h4`
    color: ${(props) => props.theme.title};
`;

const Paragraph = styled.p`
    color: ${(props) => props.theme.body};
    margin: 16px 0px;

    display: flex;
    gap: 16px;
`;

const StyledLink = styled(Link)`
    font-weight: 700;
    text-decoration: none;

    color: var(--orange);
    &:hover {
        color: var(--orange-hover);
    }
`;

export default function LoginPage(): JSX.Element {
    return (
        <StyledLoginPage>
            <LoginContainer>
                <Title className="preview-h4">Log In</Title>
                <LoginForm />
                <Paragraph>
                    Don't have an account?
                    <StyledLink to="/signup">Sign Up</StyledLink>
                </Paragraph>
            </LoginContainer>
        </StyledLoginPage>
    );
}

const StyledInput = styled.input`
    display: block;
    width: 100%;
    border-radius: 4px;
    border: none;
    outline: none;
    padding: 12px 6px;

    caret-color: var(--orange);

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;

    &:focus {
        border: 1px solid var(--orange);
    }

    &::placeholder {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 15px;

        color: var(--color-500);
    }
`;

const LoginButton = styled(Button)`
    color: var(--color-100);
`;

const ErrorText = styled.p`
    margin-top: 4px;
    margin-bottom: 0px;
    color: red;
`;

function LoginForm(): JSX.Element {
    const [showUsernameError, setShowUsernameError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);

    useClickAnyWhere(() => {
        if (showUsernameError) {
            setShowUsernameError(false);
        }

        if (showPasswordError) {
            setShowPasswordError(false);
        }
    });

    const navigate = useNavigate();
    const auth = useAuth();

    if (auth.user) {
        return <Navigate to="/" />;
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            username: { value: string };
            password: { value: string };
        };

        const user: User = {
            username: target.username.value,
            password: target.password.value,
        };

        try {
            let response = await UserService.login(user);
            if (response.data.isAuth) {
                auth.login(user.username, () => navigate("/"));
            } else {
                // incorrect password
                setShowPasswordError(true);
            }
        } catch (error) {
            // user not found
            setShowUsernameError(true);
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} action="/login" method="post">
            <div style={{ marginBottom: "16px" }}>
                <StyledInput type="text" name="username" placeholder="Username" required />
                {showUsernameError && (
                    <ErrorText className="heading-m">Username not found</ErrorText>
                )}
            </div>
            <div style={{ marginBottom: "16px" }}>
                <StyledInput type="password" name="password" placeholder="Password" required />
                {showPasswordError && (
                    <ErrorText className="heading-m">Incorrect Password</ErrorText>
                )}
            </div>
            <LoginButton className="heading-m" type="submit">
                Log In
            </LoginButton>
        </form>
    );
}

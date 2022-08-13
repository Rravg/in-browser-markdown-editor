import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useClickAnyWhere } from "usehooks-ts";
import UserService from "../services/UserService";
import { useAuth } from "./AuthProvider";
import { Button } from "./General";

const StyledSignUpPage = styled.div`
    background-color: ${(props) => props.theme.mainBackground};
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
`;

const SignUpContainer = styled.div`
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

interface Props {
    currentDocument: string;
    setCurrentDocument: Function;
}

export default function SignUpPage({ currentDocument, setCurrentDocument }: Props): JSX.Element {
    return (
        <StyledSignUpPage>
            <SignUpContainer>
                <Title className="preview-h4">Sign Up</Title>
                <SignUpForm
                    currentDocument={currentDocument}
                    setCurrentDocument={setCurrentDocument}
                />
                <Paragraph>
                    Have an account?
                    <StyledLink to="/login">Log In</StyledLink>
                </Paragraph>
            </SignUpContainer>
        </StyledSignUpPage>
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

const SignUpButton = styled(Button)`
    color: var(--color-100);
`;

const ErrorText = styled.p`
    margin-top: 4px;
    margin-bottom: 0px;
    color: red;
`;

function SignUpForm({ currentDocument, setCurrentDocument }: Props): JSX.Element {
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

    let auth = useAuth();
    let navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            username: { value: string };
            password: { value: string };
            confirmPassword: { value: string };
        };

        if (target.password.value === target.confirmPassword.value) {
            const user: User = {
                username: target.username.value,
                password: target.password.value,
            };

            try {
                let response = await UserService.signup(user, getDate(new Date()));
                if (response.data.isAuth) {
                    auth.login(user.username, () => navigate("/"));
                    setCurrentDocument("welcome.md");
                }
            } catch (error) {
                // user already exists
                setShowUsernameError(true);
                console.error(error);
            }
        } else {
            // Passwords do not match
            setShowPasswordError(true);
        }
    };

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

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "16px" }}>
                <StyledInput type="text" name="username" placeholder="Username" required />
                {showUsernameError && (
                    <ErrorText className="heading-m">Username already exists</ErrorText>
                )}
            </div>
            <div style={{ marginBottom: "16px" }}>
                <StyledInput type="password" name="password" placeholder="Password" required />
            </div>
            <div style={{ marginBottom: "16px" }}>
                <StyledInput
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                />
                {showPasswordError && (
                    <ErrorText className="heading-m">Passwords do not match</ErrorText>
                )}
            </div>
            <SignUpButton className="heading-m" type="submit">
                Sign Up
            </SignUpButton>
        </form>
    );
}

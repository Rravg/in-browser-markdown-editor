import { Dispatch, useEffect, useState } from "react";
import styled, { css } from "styled-components";

import darkMode from "../assets/icon-dark-mode.svg";
import lightMode from "../assets/icon-light-mode.svg";

import { lightTheme, darkTheme } from "../styles/Themes";

const StyleThemeSwitch = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Container = styled.label`
    position: relative;
    display: inline-block;
    width: 48px;
    height: 24px;
`;

const Checkbox = styled.input`
    opacity: 0;
    width: 0;
    height: 0%;
`;

interface SliderProps {
    readonly isDarkMode: boolean;
}

const Slider = styled.span<SliderProps>`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-600);
    -webkit-transition: 0.4s;
    transition: 0.4s;

    border-radius: 14.5px;

    &:before {
        position: absolute;
        content: "";
        height: 12px;
        width: 12px;
        left: 6px;
        bottom: calc(50% - 6px);
        background-color: var(--color-100);
        -webkit-transition: 0.4s;
        transition: 0.4s;

        border-radius: 50%;

        ${(props) => {
            if (!props.isDarkMode) {
                return css`
                    -webkit-transform: translateX(24px);
                    -ms-transform: translateX(24px);
                    transform: translateX(24px);
                `;
            }
        }}
    }
`;

interface ThemeIconProps {
    readonly isActive: boolean;
}

const ThemeIcon = styled.img<ThemeIconProps>`
    ${(props) => {
        if (props.isActive) {
            return css`
                filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%)
                    hue-rotate(288deg) brightness(102%) contrast(102%);
            `;
        }
    }}
`;

interface ThemeSwitchProps {
    setTheme: Function;
}

export default function ThemeSwitch({ setTheme }: ThemeSwitchProps): JSX.Element {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const changeTheme = () => {
        if (isDarkMode) {
            setTheme(darkTheme);
        } else {
            setTheme(lightTheme);
        }
    };

    useEffect(() => {
        changeTheme();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDarkMode]);

    const handleClick = () => {
        setIsDarkMode((current) => !current);
    };
    return (
        <StyleThemeSwitch>
            <ThemeIcon isActive={isDarkMode} src={darkMode} alt="dark-mode" />
            <Container>
                <Checkbox onClick={handleClick} />
                <Slider isDarkMode={isDarkMode}></Slider>
            </Container>
            <ThemeIcon isActive={!isDarkMode} src={lightMode} alt="light-mode" />
        </StyleThemeSwitch>
    );
}

import { useState } from "react";
import styled from "styled-components";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";

const StyledMenuIcon = styled.button`
    background: var(--color-700);
    width: 56px;
    height: 56px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: none;
`;

interface MenuIconProps {
    onOpen: Function;
    onClose: Function;
}

export default function MenuIcon({ onOpen, onClose }: MenuIconProps): JSX.Element {
    const [icon, setIcon] = useState(menu);

    const handleClick = () => {
        setIcon((currentIcon: string) => {
            if (currentIcon === menu) {
                onOpen();
                return close;
            } else {
                onClose();
                return menu;
            }
        });
    };

    return (
        <StyledMenuIcon aria-label="Menu" onClick={handleClick}>
            <img src={icon} alt="menu" />
        </StyledMenuIcon>
    );
}

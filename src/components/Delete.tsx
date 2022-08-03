import styled from "styled-components";
import icon from "../assets/icon-delete.svg";

const StyledDelete = styled.button`
    background: transparent;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: none;

    &:hover {
        filter: brightness(0) saturate(100%) invert(44%) sepia(93%) saturate(386%)
            hue-rotate(327deg) brightness(94%) contrast(99%);
    }
`;

interface DeleteProps {
    onClick?: Function;
}

export default function Delete({ onClick }: DeleteProps): JSX.Element {
    const handleClick = () => {
        if (onClick) onClick();
    };

    return (
        <StyledDelete aria-label="Delete" onClick={handleClick}>
            <img src={icon} alt="delete" />
        </StyledDelete>
    );
}

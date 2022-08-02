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
        filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%)
            hue-rotate(288deg) brightness(102%) contrast(102%);
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

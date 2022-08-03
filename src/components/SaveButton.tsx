import styled from "styled-components";
import { Button } from "./General";
import icon from "../assets/icon-save.svg";

const StyledSaveButton = styled(Button)`
    width: 40px;
    height: 40px;

    padding: 0px;

    @media (min-width: 768px) {
        width: 152px;
        padding: 0px 16px;

        justify-content: space-between;
    }
`;

const Paragraph = styled.p`
    display: none;
    color: var(--color-100);
    margin-bottom: 0px;

    @media (min-width: 768px) {
        display: block;
    }
`;

interface SaveButtonProps {
    onClick?: Function;
}

export default function SaveButton({ onClick }: SaveButtonProps): JSX.Element {
    const handleClick = () => {
        if (onClick) onClick();
    };

    return (
        <StyledSaveButton aria-label="Save Changes" onClick={handleClick}>
            <img src={icon} alt="save" />
            <Paragraph className="heading-m">Save Changes</Paragraph>
        </StyledSaveButton>
    );
}

import styled from "styled-components";
import icon from "../assets/icon-save.svg";

const StyledSaveButton = styled.button`
    background: var(--orange);
    width: fit-content;
    height: 40px;
    padding: 0px 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 4px;

    cursor: pointer;
    border: none;

    &:hover {
        background: var(--orange-hover);
    }
`;

const StyledParagraph = styled.p`
    display: none;
    color: var(--color-100);

    @media (min-width: 250px) {
        display: block;
    }
`;
export default function SaveButton(): JSX.Element {
    return (
        <StyledSaveButton aria-label="Save">
            <img src={icon} alt="save changes" />
            <StyledParagraph className="heading-m">Save Changes</StyledParagraph>
        </StyledSaveButton>
    );
}

import styled from "styled-components";

const Button = styled.button`
    background: var(--orange);
    width: 100%;

    padding-top: 12px;
    padding-bottom: 12px;

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

export { Button };

import { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import icon from "../assets/icon-document.svg";

const StyledDocument = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`;

const Label = styled.label`
    color: var(--color-500);
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`;

const Name = styled.input`
    color: var(--color-100);
    border: none;
    outline: none;
    background: transparent;
    display: block;

    caret-color: var(--orange);

    &:focus {
        border-bottom: 1px solid var(--color-100);
    }
`;

interface DocumentProps {
    name: string;
    inputValue: string;
    setInputValue: Function;
}

export default function DocumentName({
    name,
    inputValue,
    setInputValue,
}: DocumentProps): JSX.Element {
    useEffect(() => {
        setInputValue(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        console.log(name);
        console.log(inputValue);
        setInputValue(e.currentTarget.value);
    };
    return (
        <StyledDocument>
            <img src={icon} alt="" />
            <div>
                <Label htmlFor="name" className="body-m">
                    Document Name
                </Label>
                <Name
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    name="name"
                    id="name"
                    className="heading-m"
                    placeholder="No selected document"
                />
            </div>
        </StyledDocument>
    );
}

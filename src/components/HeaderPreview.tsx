import styled from "styled-components";
import show from "../assets/icon-show-preview.svg";
import hide from "../assets/icon-hide-preview.svg";
import { useEffect, useState } from "react";

const StyledHeader = styled.header`
    height: 42px;
    background: ${(props) => props.theme.headerColor};

    padding: 0px 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    @media (min-width: 768px) {
        padding: 0px 16px;
    }
`;

const Title = styled.p`
    margin-bottom: 0px;
    color: var(--color-p);
`;

const Icon = styled.img`
    cursor: pointer;

    &:hover {
        filter: brightness(0) saturate(100%) invert(44%) sepia(93%) saturate(386%)
            hue-rotate(327deg) brightness(94%) contrast(99%);
    }
`;

interface HeaderPreviewProps {
    preview: boolean;
    setPreview: Function;
}

export default function HeaderPreview({ preview, setPreview }: HeaderPreviewProps): JSX.Element {
    const [icon, setIcon] = useState(show);

    useEffect(() => {
        if (!preview) {
            setIcon(show);
        } else {
            setIcon(hide);
        }
    }, [preview]);

    const handleClick = () => {
        setPreview((current: boolean) => !current);

        const markdown = document.getElementById("markdown");
        markdown?.classList.toggle("hide");

        const prev = document.getElementById("preview");
        prev?.classList.toggle("show");
    };

    return (
        <StyledHeader>
            <Title className="heading-s">PREVIEW</Title>
            <Icon src={icon} alt="" onClick={handleClick} />
        </StyledHeader>
    );
}

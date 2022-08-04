import { UIEvent } from "react";
import ReactMarkdown from "react-markdown";
import styled, { css } from "styled-components";
import HeaderPreview from "./HeaderPreview";

interface StyledPreviewProps {
    preview: boolean;
}

const StyledPreview = styled.div<StyledPreviewProps>`
    flex: 1;
    background: ${(props) => props.theme.mainBackground};
    transition: width 0.3s;

    padding-bottom: 20px;
    overflow-y: clip;

    ${(props) => {
        if (!props.preview) {
            return css`
                display: none;
            `;
        } else {
            return css`
                display: block;
            `;
        }
    }}

    @media (min-width: 768px) {
        display: initial;
    }
`;

interface PreviewContainerProps {
    preview: boolean;
}

const PreviewContainer = styled.div<PreviewContainerProps>`
    width: 100%;
    padding: 16px 20px;
    height: calc(100% - 98px);

    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        height: calc(100% - 114px);
        padding: 22px 24px;
    }

    @media (min-width: 1440px) {
        ${(props) => {
            if (props.preview) {
                return css`
                    width: 70%;
                    margin-left: auto;
                    margin-right: auto;
                `;
            }
        }}
    }
`;

interface PreviewProps {
    source: string;

    preview: boolean;
    setPreview: Function;

    selfRef: React.RefObject<any>;
    targetScrollRef: React.RefObject<any>;
}

export default function Preview({
    source,
    preview,
    setPreview,
    selfRef,
    targetScrollRef,
}: PreviewProps): JSX.Element {
    const handleScroll = (e: UIEvent<HTMLDivElement>) => {
        e.preventDefault();

        targetScrollRef.current.scrollTop = e.currentTarget.scrollTop;
    };

    return (
        <StyledPreview id="preview" preview={preview}>
            <HeaderPreview preview={preview} setPreview={setPreview} />
            <PreviewContainer preview={preview} onScroll={handleScroll} ref={selfRef}>
                <ReactMarkdown children={source} />
            </PreviewContainer>
        </StyledPreview>
    );
}

import { ChangeEvent, UIEvent, useRef } from "react";
import styled, { css } from "styled-components";
import HeaderMarkdown from "./HeaderMarkdown";

interface StyledMarkdownProps {
    preview: boolean;
}

const StyledMarkdown = styled.div<StyledMarkdownProps>`
    flex: 1;
    background: ${(props) => props.theme.mainBackground};
    border-right: 1px solid ${(props) => props.theme.middleLineColor};
    transition: display 0.3s;

    overflow-y: clip;

    padding-bottom: 20px;

    ${(props) => {
        if (props.preview) {
            return css`
                display: none;
            `;
        } else {
            return css`
                display: block;
            `;
        }
    }}
`;

const TextArea = styled.textarea`
    width: 100%;
    height: calc(100% - 98px);
    border: none;
    outline: none;
    background: ${(props) => props.theme.mainBackground};

    color: ${(props) => props.theme.markdownColor};
    resize: none;

    padding: 16px 16px;

    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 768px) {
        height: calc(100% - 114px);
        padding: 9px 16px;
    }
`;

interface MarkdownProps {
    source: string;
    setSource: Function;

    preview: boolean;
    setPreview: Function;

    selfRef: React.RefObject<any>;
    targetScrollRef: React.RefObject<any>;
}

export default function Markdown({
    source,
    setSource,
    preview,
    setPreview,
    selfRef,
    targetScrollRef,
}: MarkdownProps): JSX.Element {
    const MarkdownRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setSource(e.currentTarget.value);
    };

    const handleScroll = (e: UIEvent<HTMLTextAreaElement>) => {
        e.preventDefault();

        targetScrollRef.current.scrollTop = e.currentTarget.scrollTop;
    };

    return (
        <StyledMarkdown id="markdown" ref={MarkdownRef} preview={preview}>
            <HeaderMarkdown preview={preview} setPreview={setPreview} />
            <TextArea
                className="markdown"
                value={source}
                onChange={handleChange}
                onScroll={handleScroll}
                ref={selfRef}
            />
        </StyledMarkdown>
    );
}

import { ChangeEvent } from "react";
import styled from "styled-components";
import HeaderMarkdown from "./HeaderMarkdown";

const StyledMarkdown = styled.div`
    flex: 1;
    background: ${(props) => props.theme.mainBackground};
    border-right: 1px solid ${(props) => props.theme.middleLineColor};
    transition: display 0.3s;
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: ${(props) => props.theme.mainBackground};

    color: ${(props) => props.theme.markdownColor};
    resize: none;

    padding: 16px 16px;

    @media (min-width: 768px) {
        padding: 9px 16px;
    }
`;

interface MarkdownProps {
    source: string;
    setSource: Function;

    preview: boolean;
    setPreview: Function;
}

export default function Markdown({
    source,
    setSource,
    preview,
    setPreview,
}: MarkdownProps): JSX.Element {
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setSource(e.currentTarget.value);
    };

    return (
        <StyledMarkdown id="markdown">
            <HeaderMarkdown preview={preview} setPreview={setPreview} />
            <TextArea className="markdown" value={source} onChange={handleChange} />
        </StyledMarkdown>
    );
}

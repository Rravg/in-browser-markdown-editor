import ReactMarkdown from "react-markdown";
import styled, { css } from "styled-components";
import HeaderPreview from "./HeaderPreview";

const StyledPreview = styled.div`
    flex: 1;
    background: ${(props) => props.theme.mainBackground};
    transition: width 0.3s;

    display: none;

    @media (min-width: 768px) {
        display: initial;
    }
`;

interface PreviewContainerProps {
    preview: boolean;
}

const PreviewContainer = styled.div<PreviewContainerProps>`
    padding: 16px 20px;
    @media (min-width: 768px) {
        padding: 22px 24px;
    }

    @media (min-width: 1440px) {
        ${(props) => {
            if (props.preview) {
                return css`
                    width: 70%;
                    margin: auto;
                `;
            }
        }}
    }
`;

interface PreviewProps {
    source: string;

    preview: boolean;
    setPreview: Function;
}

export default function Preview({ source, preview, setPreview }: PreviewProps): JSX.Element {
    return (
        <StyledPreview id="preview">
            <HeaderPreview preview={preview} setPreview={setPreview} />
            <PreviewContainer preview={preview}>
                <ReactMarkdown children={source} />
            </PreviewContainer>
        </StyledPreview>
    );
}

import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import data from "../data.json";

const StyledPreview = styled.div`
    flex: 1;
    padding: 16px 20px;
    background: ${(props) => props.theme.mainBackground};
`;

export default function Preview(): JSX.Element {
    return (
        <StyledPreview>
            <ReactMarkdown children={data[1].content} />
        </StyledPreview>
    );
}

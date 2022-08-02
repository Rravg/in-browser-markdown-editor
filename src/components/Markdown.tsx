import styled from "styled-components";

const StyledMarkdown = styled.div`
    flex: 1;
    height: 100%;
    border-right: 1px solid ${(props) => props.theme.middleLineColor};
`;

export default function Markdown(): JSX.Element {
    return <StyledMarkdown>PREVIEW</StyledMarkdown>;
}

import styled from "styled-components";

const StyledSideNav = styled.div`
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
`;

export default function SideNav(): JSX.Element {
    return <StyledSideNav id="sidenav"></StyledSideNav>;
}

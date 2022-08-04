import styled from "styled-components";
import Delete from "./Delete";
import DocumentName from "./DocumentName";
import MenuIcon from "./MenuIcon";
import SaveButton from "./SaveButton";

const StyledHeader = styled.header`
    background: var(--color-800);
    display: flex;

    justify-content: space-between;
    align-items: center;

    padding-right: 8px;

    position: -webkit-sticky;
    position: sticky;
    top: 0;
    @media (min-width: 768px) {
        padding-right: 16px;
    }
`;

const Container = styled.div`
    display: flex;
    gap: 24px;

    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
    }
`;

const Title = styled.h1`
    color: var(--color-100);
    display: none;
    margin-bottom: 0px;

    @media (min-width: 1440px) {
        display: block;
        padding-right: 29px;
        line-height: 40px;
        border-right: 1px solid var(--color-600);
    }
`;

export default function Header(): JSX.Element {
    const openNav = () => {
        const nav: HTMLElement | null = document.getElementById("sidenav");
        const container: HTMLElement | null = document.getElementById("side-container");
        if (nav !== null && container !== null) {
            nav.style.width = "250px";
            nav.style.padding = "27px 24px 24px 24px";

            container.style.opacity = "1.0";
        }

        const app: HTMLElement | null = document.getElementById("App");
        if (app !== null) {
            app.style.transform = "translateX(250px)";
        }
    };

    const closeNav = () => {
        const nav: HTMLElement | null = document.getElementById("sidenav");
        const container: HTMLElement | null = document.getElementById("side-container");
        if (nav !== null && container !== null) {
            nav.style.width = "0";
            nav.style.padding = "0";

            container.style.opacity = "0";
        }

        const app: HTMLElement | null = document.getElementById("App");
        if (app !== null) {
            app.style.transform = "translateX(0px)";
        }
    };

    const handleSave = () => {
        console.log("save document");
    };

    const handleDelete = () => {
        const modal = document.getElementById("modal");
        if (modal !== null) {
            modal.style.display = "block";
        }
    };

    window.onclick = function (event: MouseEvent) {
        const modal = document.getElementById("modal");
        if (event.target === modal && modal !== null) {
            modal.style.display = "none";
        }
    };

    return (
        <StyledHeader>
            <Container>
                <MenuIcon onOpen={openNav} onClose={closeNav} />
                <Title className="title">MARKDOWN</Title>
                <DocumentName name="welcome.md" />
            </Container>

            <Container>
                <Delete onClick={handleDelete} />
                <SaveButton onClick={handleSave} />
            </Container>
        </StyledHeader>
    );
}

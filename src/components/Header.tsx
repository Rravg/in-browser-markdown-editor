import styled, { css } from "styled-components";
import MenuIcon from "./MenuIcon";
import SaveButton from "./SaveButton";

export default function Header(): JSX.Element {
    const openNav = () => {
        const nav: HTMLElement | null = document.getElementById("sidenav");
        if (nav !== null) {
            nav.style.width = "250px";
        }

        const app: HTMLElement | null = document.getElementById("App");
        if (app !== null) {
            app.style.marginLeft = "250px";
        }
    };

    const closeNav = () => {
        const nav: HTMLElement | null = document.getElementById("sidenav");
        if (nav !== null) {
            nav.style.width = "0px";
        }

        const app: HTMLElement | null = document.getElementById("App");
        if (app !== null) {
            app.style.marginLeft = "0px";
        }
    };

    return (
        <header>
            <MenuIcon onOpen={openNav} onClose={closeNav} />
            <SaveButton />
        </header>
    );
}

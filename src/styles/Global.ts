import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
ol {
    list-style: decimal inside;
    padding-left: 24px;
}

ul {
    list-style: disc inside;
    padding-left: 24px;
}

ul > li::marker {
    width: 3px;
    height: 3px;
    color: var(--orange);
}

blockquote {
    padding: 24px 32px 24px 20px;
    border-radius: 4px;
    background: var(--color-200);
    border-left: 4px solid var(--orange);
}

blockquote > p {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.5rem;

    color: var(--color-700);
}

pre {
    background: var(--color-200);
    border-radius: 4px;
    padding: 24px;
}

code {
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5rem;

    color: var(--color-700);
}

a:visited {
    color: var(--color-700);
}
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    body {
        font-family: 'Saira', sans-serif;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
    }

    input, button, select, textarea {
        font: inherit;
        color: inherit;
    }

    hr {
        border: none;
        height: 1px;
        background-color: ${({ theme }) => theme.border};
    }
`;

export default GlobalStyle;

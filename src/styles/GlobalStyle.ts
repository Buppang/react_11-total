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
    }
`;

export default GlobalStyle;

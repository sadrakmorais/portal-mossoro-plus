import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Roboto', sans-serif;
        list-style: none;
    }

    body, html, #root {
        height: 100%;
        overflow: hidden;
    }

    button {
        border: none;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }

    .sb-avatar__image {
        object-fit: cover !important;
    }
`;
export default GlobalStyles;

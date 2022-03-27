import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@300;400;600&display=swap');

    * {
        box-sizing: border-box;
        font-family: 'Roboto'; 
    }

    body {
        margin: 0;
        background-color: #ecf0f3;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
}
`;

export default GlobalStyle;

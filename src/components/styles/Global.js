import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --green-color: #2ecc71;
    --red-color: #c0392b;
    --dark-color: #2F303A;
    --white-color: #ffffff;

    --white-boxShadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    --dark-boxShadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.5s linear;
  }
`;

export const lightTheme = {
  body: "var(--white-color)",
  text: "var(--dark-color)",
  boxShadow: "var(--white-boxShadow)",
};

export const darkTheme = {
  body: "var(--dark-color)",
  text: "var(--white-color)",
  boxShadow: "var(--dark-boxShadow)",
};

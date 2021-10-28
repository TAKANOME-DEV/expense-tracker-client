import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Lato", sans-serif;
    transition: all 0.5s linear;
  }
`;

export const lightTheme = {
  body: "#f7f7f7",
  text: "#333",
  boxShadow:
    "5px 5px 10px rgba(0, 0, 0, 0.12), 1px 1px 5px rgba(0, 0, 0, 0.24)",
};

export const darkTheme = {
  body: "#333",
  text: "#fff",
  boxShadow:
    "5px 10px 5px rgba(0, 0, 0, 0.12), 2px 2px 20px 3px rgba(0, 0, 0, 0.24)",
};

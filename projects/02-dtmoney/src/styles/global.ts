import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #5429cc;
    --blue-light: #6933ff;
    --green: #33cc95;
    --red: #e52e4d;

    --background: #f0f2f5;
    --shape: #fff;

    --text-body: #969cb3;
    --text-title: #363f5f;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-font-smooth: antialiased;
  }

  button {
    cursor: pointer;
  }

  body,
  button,
  input,
  textarea {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

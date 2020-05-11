import { createGlobalStyle } from "styled-components";

import startsBackground from "../assets/starts-background.png";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background-color: #0B0A0D;
    background-image: url(${startsBackground});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 768px) {
      background-image: none;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  body, input, button, a {
    color: #fff;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;

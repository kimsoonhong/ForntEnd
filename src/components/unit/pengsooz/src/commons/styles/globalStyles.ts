import { css } from "@emotion/react";
export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Oboksanghoe_R, Noto Sans KR, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  @font-face {
    font-family: "Oboksanghoe_B";
    src: url("/fonts/Oboksanghoe_B.otf");
  }

  @font-face {
    font-family: "Oboksanghoe_L";
    src: url("/fonts/Oboksanghoe_L.otf");
  }

  @font-face {
    font-family: "Oboksanghoe_R";
    src: url("/fonts/Oboksanghoe_R.otf");
  }

  body {
    background-color: #fcf9ee;
  }

  button {
    display: inline-block;
    font-family: inherit;
    vertical-align: middle;
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
    background: transparent;
    border: none;
    outline: 0;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  input,
  textarea,
  button {
    padding: 0;
  }
`;

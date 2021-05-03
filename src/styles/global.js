import styled, { createGlobalStyle } from "styled-components";

export const Centered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default createGlobalStyle`
  /* BOOTSTRAP OVERRIDES */

  .modal-content {
    background-color: ${(props) => props.theme.global.bg};

    button.close {
      color: ${(props) => props.theme.global.color};
    }
  }

  .btn.btn-primary {
    background-color: ${(props) => props.theme.palette.mainBrand};
    border-color: ${(props) => props.theme.palette.mainBrand};
  }

  /* CUSTOM STYLES */

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  body {
    background-color: ${(props) => props.theme.global.bg};
    color: ${(props) => props.theme.global.color};
    transition: background 0.2s ease-out;
  }

  .text-muted {
    color: ${(props) => props.theme.global.muted} !important;
  }
`;

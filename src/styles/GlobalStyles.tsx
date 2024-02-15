import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    font-family: "Roboto", "Montserrat", sans-serif;
    max-width; 100%;
  }

  strong {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.strongText};
  }

  a {
    text-decoration: none;

    & p {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.link};
    }

    &:hover {
        p {
            color: orange;
            text-decoration: underline;
        }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    color: ${({ theme }) => theme.colors.text};
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.h1};
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.h2};
  }

  h3 {
    font-size: ${({ theme }) => theme.fonts.h3};
  }
`;
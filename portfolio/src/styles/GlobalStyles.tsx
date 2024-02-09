import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    font-family: "Roboto", "Montserrat", sans-serif;
  }

  strong {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.strongText};
  }

  a {
    & p {
        text-decoration: underline ${({ theme }) => theme.colors.link};
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
`;
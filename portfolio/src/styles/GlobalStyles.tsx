import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
  }

  strong {
    color: ${({ theme }) => theme.colors.strongText};
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
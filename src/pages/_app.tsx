import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;

    color: ${({ theme }) => theme.colors.contrastText};
  }

  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

// const theme = db.theme;

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

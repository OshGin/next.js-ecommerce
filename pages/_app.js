import { css, Global } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            background-color: #ff000063;
          }
          main {
            margin: 0 8px;
            background-color: #d28a7c;
          }
        `}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

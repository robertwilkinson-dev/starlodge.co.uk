import '../styles/globals.scss';
import { ThemeProvider } from '@mui/material';
import { muiTheme, Layout } from '../components';
import Head from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Head>
        <title>Star Lodge, Horwich</title>
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FNHH0T073Q"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FNHH0T073Q');
        `}
      </Script>

      <ThemeProvider theme={muiTheme} >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App;

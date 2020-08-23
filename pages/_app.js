import Head from 'next/head';
import '../styles/main.css'

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Head>
              <title>Zoo do Joca!</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
      </>
  );
}

export default MyApp

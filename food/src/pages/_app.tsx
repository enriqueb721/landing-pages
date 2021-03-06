import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Fragment } from 'react';

import '../styles/globals.css';


function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Traveler - Discover the World</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default App;

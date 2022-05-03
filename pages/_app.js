import React from 'react';
import { Layout } from '../components';
import { Toaster } from 'react-hot-toast';

import '../styles/styles.scss';
import { AppContext } from '../context/appContext';

function MyApp({ Component, pageProps }) {
  return (
    <AppContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />;
      </Layout>
    </AppContext>
  );
}

export default MyApp;

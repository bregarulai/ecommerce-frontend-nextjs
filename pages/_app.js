import React from 'react';
import { Layout } from '../components';

import '../styles/styles.scss';
import { AppContext } from '../context/appContext';

function MyApp({ Component, pageProps }) {
  return (
    <AppContext>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </AppContext>
  );
}

export default MyApp;

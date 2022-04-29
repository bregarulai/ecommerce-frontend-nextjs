import React from 'react';
import Head from 'next/head';

import { Navbar, Footer } from '../../components';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  const { container, mainContainer } = styles;
  return (
    <div className={container}>
      <Head>
        <title>Bregacode Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className={mainContainer}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

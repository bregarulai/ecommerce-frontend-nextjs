import React from 'react';
import Head from 'next/head';

import { client } from '../lib/client';
import { HeroBanner, Product, FooterBanner } from '../components';
import styles from '../styles/home.module.scss';

const Home = ({ products, bannerData }) => {
  const { products__heading, products__container } = styles;

  return (
    <>
      <Head>
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
      </Head>
      <HeroBanner bannerInfo={bannerData.length && bannerData[0]} />
      <div className={products__heading}>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className={products__container}>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner bannerData={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const productQuery = `*[_type == "product"]`;
  const products = await client.fetch(productQuery);

  const bannerQuery = `*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default Home;

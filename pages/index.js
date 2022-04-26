import React from 'react';

import { client } from '../lib/client';
import { HeroBanner, Product, FooterBanner } from '../components';
import styles from '../styles/home.module.scss';

const Home = ({ products, bannerData }) => {
  const { products__heading, products__container } = styles;
  return (
    <>
      <HeroBanner />
      <div className={products__heading}>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className={products__container}>
        {products?.map((product) => product.name)}
      </div>
      <FooterBanner />
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

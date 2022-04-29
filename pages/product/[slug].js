import React from 'react';

import { urlFor, client } from '../../lib/client';
import styles from '../../styles/product.module.scss';

const ProductDetails = ({ products, product }) => {
  const { image, name, details, price } = product;
  const { container, imageContainer } = styles;
  return (
    <div>
      <div className={container}>
        <div>
          <div className={imageContainer}>
            <img src={urlFor(image && image[0])} alt={name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const productsQuery = `*[_type == "product"] {
        slug {
            current
        }
    } 
    `;

  const products = await client.fetch(productsQuery);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const productDetailsQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(productDetailsQuery);

  const simmilarProductsQuery = `*[_type == "product"]`;
  const products = await client.fetch(simmilarProductsQuery);

  return {
    props: {
      product,
      products,
    },
  };
};

export default ProductDetails;

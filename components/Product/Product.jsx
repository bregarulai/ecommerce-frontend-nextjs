import React from 'react';
import Link from 'next/link';

import { urlFor } from '../../lib/client';
import styles from './product.module.scss';

const Product = ({ product }) => {
  console.log(product);
  const { name, image, price, details, slug } = product;
  const { card, imageContainer } = styles;
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className={card}>
          <img
            src={urlFor(image && image[0])}
            alt={name}
            width={250}
            height={250}
            className={imageContainer}
          />
        </div>
      </Link>
    </div>
  );
};

export default Product;

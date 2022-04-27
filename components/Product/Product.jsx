import React from 'react';
import Link from 'next/link';

import { urlFor } from '../../lib/client';
import styles from './product.module.scss';

const Product = ({ product }) => {
  const { name, image, price, slug } = product;
  const { card, imageContainer, nameText, priceText } = styles;
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
          <p className={nameText}>{name}</p>
          <p className={priceText}>${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;

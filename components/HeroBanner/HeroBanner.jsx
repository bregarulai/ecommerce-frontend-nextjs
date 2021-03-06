import React from 'react';
import Link from 'next/link';

import { urlFor } from '../../lib/client';
import styles from './heroBanner.module.scss';

const HeroBanner = ({ bannerInfo }) => {
  const { smallText, midText, buttonText, desc, image, largeText1, product } =
    bannerInfo;

  const { container, beatsSolo, imageContainer, description } = styles;
  return (
    <div className={container}>
      <div>
        <p className={beatsSolo}>{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <img src={urlFor(image)} alt='headphones' className={imageContainer} />
        <div>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
          <div className={description}>
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

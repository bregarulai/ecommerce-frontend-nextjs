import React from 'react';
import Link from 'next/link';

import styles from './heroBanner.module.scss';

const HeroBanner = () => {
  const { container, beatsSolo, image, description } = styles;
  return (
    <div className={container}>
      <div>
        <p className={beatsSolo}>SMALL TEXT</p>
        <h3>MID TEXT</h3>
        <img src='' alt='headphones' className={image} />
        <div>
          <Link href='/product/id'>
            <button type='button'>BUTTON TEXT</button>
          </Link>
          <div className={description}>
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

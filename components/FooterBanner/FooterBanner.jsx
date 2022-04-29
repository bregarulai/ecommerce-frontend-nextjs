import React from 'react';
import Link from 'next/link';

import { urlFor } from '../../lib/client';
import styles from './footerBanner.module.scss';

const FooterBanner = ({ bannerData }) => {
  const {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  } = bannerData;
  const { container, description, left, right, footerImg } = styles;
  return (
    <div className={container}>
      <div className={description}>
        <div className={left}>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className={right}>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image)} alt='footer' className={footerImg} />
      </div>
    </div>
  );
};

export default FooterBanner;

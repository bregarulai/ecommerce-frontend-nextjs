import React from 'react';

import styles from './footerBanner.module.scss';

const FooterBanner = ({ bannerData }) => {
  const { discount, largeText1, largeText2, saleTime } = bannerData;
  const { container, description, left, right } = styles;
  return (
    <div className={container}>
      <div className={description}>
        <div className={left}>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className={right}></div>
      </div>
    </div>
  );
};

export default FooterBanner;

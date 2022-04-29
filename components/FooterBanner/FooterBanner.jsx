import React from 'react';

import styles from './footerBanner.module.scss';

const FooterBanner = () => {
  const { container, description, left, right } = styles;
  return (
    <div className={container}>
      <div className={description}>
        <div className={left}></div>
        <div className={right}></div>
      </div>
    </div>
  );
};

export default FooterBanner;

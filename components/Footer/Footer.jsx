import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

import styles from './footer.module.scss';

const Footer = () => {
  const { container, icons } = styles;
  return (
    <div className={container}>
      <p>2022 Bregacode Heaphones All rights reserved</p>
      <p className={icons}>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;

import React from 'react';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';
import { Product } from '../../components';

import { urlFor, client } from '../../lib/client';
import styles from '../../styles/product.module.scss';

const ProductDetails = ({ products, product }) => {
  const { image, name, details, price } = product;
  const {
    container,
    imageContainer,
    productImage,
    corrauselContainer,
    description,
    reviews,
    priceText,
    quantity,
    quantityDesc,
    minus,
    num,
    plus,
    buttons,
    addToCartBtn,
    buyNowBtn,
    mayLikeWrapper,
    marquee,
    maryLikeContainer,
    track,
  } = styles;
  return (
    <div>
      <div className={container}>
        <div>
          <div className={imageContainer}>
            <img
              src={urlFor(image && image[0])}
              alt={name}
              className={productImage}
            />
          </div>
          {/* <div className={corrauselContainer}>
            {image?.map((item, index) => (
              <img
                key={index}
                src={urlFor(item)}
                className=''
                onMouseEnter=''
              />
            ))}
          </div> */}
        </div>
        <div className={description}>
          <h1>{name}</h1>
          <div className={reviews}>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className={priceText}>${price}</p>
          <div className={quantity}>
            <h3>Quantity:</h3>
            <p className={quantityDesc}>
              <span className={minus} onClick=''>
                <AiOutlineMinus />
              </span>
              <span className={num} onClick=''>
                0
              </span>
              <span className={plus} onClick=''>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className={buttons}>
            <button type='button' className={addToCartBtn} onClick=''>
              Add to Cart
            </button>
            <button type='button' className={buyNowBtn} onClick=''>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className={mayLikeWrapper}>
        <h2>You may also like</h2>
        <div className={marquee}>
          <div className={`${maryLikeContainer} ${track}`}>
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
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
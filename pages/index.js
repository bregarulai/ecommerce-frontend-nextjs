import { HeroBanner } from '../components';
import styles from '../styles/home.module.scss';

const Home = () => {
  const { products__heading, products__container } = styles;
  return (
    <>
      <HeroBanner />
      <div className={products__heading}>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className={products__container}>
        {['product 1', 'product 2'].map((product) => product)}
      </div>
      Footer
    </>
  );
};

export default Home;

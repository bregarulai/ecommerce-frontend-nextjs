import styles from '../styles/home.module.scss';

const Home = () => {
  return (
    <>
      Hero Banner Component
      <div className={styles.home__productsHeading}>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div>{['product 1', 'product 2'].map((product) => product)}</div>
      Footer
    </>
  );
};

export default Home;

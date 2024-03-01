import styles from './logo.module.scss';


const AnimatedLogo = () => {
    return (
      <div className={styles.logo}>
        <div className={`${styles.triangle} ${styles.blue}`}></div>
      </div>
    );
  };
  
  export default AnimatedLogo;
  
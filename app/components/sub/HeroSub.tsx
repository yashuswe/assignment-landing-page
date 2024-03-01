import React from "react"
import styles from '../carousel.module.scss';
import { HeroSubProps } from "../types";


const HeroSub: React.FC<HeroSubProps> = ({ logoSrc, description }) => {
  return (
    <div className={styles.overlay}>
      <img className={styles.logo} src={logoSrc} alt="Logo" />
    <p className={styles.horizontalLine}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className={styles.textContainer}>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default HeroSub;

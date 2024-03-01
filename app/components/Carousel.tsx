"use client"
import React, { useState, useEffect } from 'react';
import styles from './carousel.module.scss';
import { CarouselProps } from './types';
import { Header } from './Header';
import HeroSub from './sub/HeroSub';


const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className={styles.carouselContainer}>
      <Header /> 
      <div className={styles.carousel}>
        <div className={styles.slider} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img key={index} className={styles.slide} src={image} alt={`Slide ${index}`} />
          ))}
        </div>
        <HeroSub logoSrc={"./assets/Logo.svg"} description= "lorem  Lorem ipsum dolor sit amet sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet." />
      </div>
    </div>
  );
};

export default Carousel;

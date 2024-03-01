"use client"
import React, { useState } from 'react';
import styles from "./carousel.module.scss";
import Image from "next/image";

export const Header: React.FC = () => {
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        <div className={styles.header}>
            <div className={styles.navContainer}>
                <div className={styles.logoNav}>
                    <Image src={"/assets/LogoFill.svg"} width={100} height={100} alt="" />
                </div>
                <div className={styles.links}>
                    <button className={`${styles.menuButton} ${showLinks ? styles.open : ''}`} onClick={toggleLinks}>
                        <span className={styles.hamburger}></span>
                        <span className={styles.hamburger}></span>
                        <span className={styles.hamburger}></span>
                    </button>
                    <div className={showLinks ? `${styles.linksList} ${styles.active}` : styles.linksList}>
                        <a className={styles.link} href="/">Home</a>
                        <a className={styles.link} href="/">Page 1</a>
                        <a className={styles.link} href="/">Page 2</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

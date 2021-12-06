import React from "react";
import { Link } from "react-router-dom";
import styles from './landing.module.css'

export const LandingPage = () => {
    return (
        <div className={styles.firstPage}>
            <div className={styles.firstPage_btn}>
            <Link style={{textDecoration:'none'}} to={'/home'}>
                <button className={styles.startBTN}>HENRY-FOOD</button>
            </Link>
            </div>

        </div>
    )
};

export default LandingPage;
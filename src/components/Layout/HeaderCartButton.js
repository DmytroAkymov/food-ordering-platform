import React from 'react';
import CartIcon from '../Cart/CartIcon.js';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
    return (
        <button className={styles.button}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={styles.badge}>0</span>
        </button>
    );
};

export default HeaderCartButton;

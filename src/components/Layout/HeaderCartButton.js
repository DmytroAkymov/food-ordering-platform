import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon.js';
import styles from './HeaderCartButton.module.css';
import Context from '../context/Context.js';

const HeaderCartButton = () => {
    const ctx = useContext(Context);
    return (
        <button
            className={styles.button}
            onClick={() => {
                ctx.visabilityCartHandler(true);
            }}
        >
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={styles.badge}>{ctx.quantityCart}</span>
        </button>
    );
};

export default HeaderCartButton;

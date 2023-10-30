import React from 'react';
import CartItem from './CartItem';
import styles from './Cart.module.css';

import Modal from '../UI/Modal';

const Cart = () => {
    return (
        <Modal>
            <div>
                <div className={styles['cart-items']}>
                    <CartItem />
                    <div className={styles['total']}>
                        <div>Amount</div>
                        <div>$35</div>
                    </div>

                    <div className={styles.actions}>
                        <button className={styles['button--alt']}>Close</button>
                        <button className={styles['button']}>Order</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default Cart;

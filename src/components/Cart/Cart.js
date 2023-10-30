import React, { useContext } from 'react';
import CartItem from './CartItem';
import styles from './Cart.module.css';
import Context from '../context/Context';

import Modal from '../UI/Modal';

const Cart = () => {
    const ctx = useContext(Context);

    return (
        <Modal>
            <div>
                <div className={styles['cart-items']}>
                    {ctx.cartItems.map((item) => {
                        return <CartItem item={item} key={item.id} />;
                    })}

                    <div className={styles['total']}>
                        <div>Amount</div>
                        <div>{`$ ${ctx.amountCart}`}</div>
                    </div>

                    <div className={styles.actions}>
                        <button
                            className={styles['button--alt']}
                            onClick={() => {
                                ctx.visabilityCartHandler(false);
                            }}
                        >
                            Close
                        </button>
                        <button className={styles['button']}>Order</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default Cart;

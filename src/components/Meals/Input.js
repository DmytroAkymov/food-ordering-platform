import React, { useState } from 'react';
import styles from './Input.module.css';

const Input = () => {
    const [quantity, setQuantity] = useState(1);
    const quantityInputHandler = (event) => {
        setQuantity(event.target.value);
    };

    return (
        <div className={styles.input}>
            <label>Quantity</label>
            <input
                value={quantity}
                type="number"
                min="1"
                onChange={quantityInputHandler}
            ></input>
        </div>
    );
};

export default Input;

import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
    const quantityInputHandler = (event) => {
        props.setQuantityInput(event.target.value);
    };

    return (
        <div className={styles.input}>
            <label>Quantity</label>
            <input
                value={props.quantityInput}
                type="number"
                min="1"
                onChange={quantityInputHandler}
            ></input>
        </div>
    );
};

export default Input;

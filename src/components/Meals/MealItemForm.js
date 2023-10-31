import React, { useContext, useState } from 'react';
import styles from './MealItemForm.module.css';
import Input from './Input';
import Context from '../context/Context';

const MealItemForm = (props) => {
    const ctx = useContext(Context);
    const [quantityInput, setQuantityInput] = useState(1);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        ctx.addItemHandler({
            id: props.item.id,
            name: props.item.name,
            price: props.item.price,
            quantity: parseInt(quantityInput),
        });
    };

    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <Input
                id={props.item.id}
                item={props.item}
                setQuantityInput={setQuantityInput}
                quantityInput={quantityInput}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default MealItemForm;

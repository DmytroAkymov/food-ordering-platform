import React, { useContext } from 'react';
import styles from './MealItemForm.module.css';
import Input from './Input';
import Context from '../context/Context';

const MealItemForm = (props) => {
    const ctx = useContext(Context);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        ctx.addItemHandler({
            id: props.item.id,
            name: props.item.name,
            price: props.item.price,
            quontity: 1,
        });
    };

    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <Input />
            <button type="submit">Add</button>
        </form>
    );
};

export default MealItemForm;

import React from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    return (
        <div className={styles.meal}>
            <div>
                <h3>{props.item.name}</h3>
                <div className={styles.description}>
                    {props.item.description}
                </div>
                <div className={styles.price}>{props.item.price}</div>
            </div>
            <MealItemForm item={props.item} />
        </div>
    );
};

export default MealItem;

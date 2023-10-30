import classes from './CartItem.module.css';

const CartItem = (props) => {
    // const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>Roll Naomi</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>$10</span>
                    <span className={classes.amount}>x 2</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick="">−</button>
                <button onClick="">+</button>
            </div>
        </li>
    );
};

export default CartItem;

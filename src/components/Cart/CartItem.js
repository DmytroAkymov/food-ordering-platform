import classes from './CartItem.module.css';

const CartItem = (props) => {
    // const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{props.item.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{props.item.price}</span>
                    <span className={classes.amount}>
                        {`x ${props.item.quontity}`}
                    </span>
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

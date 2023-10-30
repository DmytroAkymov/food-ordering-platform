import { useContext } from 'react';
import classes from './CartItem.module.css';
import Context from '../context/Context';

const CartItem = (props) => {
    // const price = `$${props.price.toFixed(2)}`;
    const ctx = useContext(Context);

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{props.item.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{props.item.price}</span>
                    <span className={classes.amount}>
                        {`x ${props.item.quantity}`}
                    </span>
                </div>
            </div>
            <div className={classes.actions}>
                <button
                    onClick={() => {
                        ctx.minusQuantityToCartHandler(props.item.id);
                    }}
                >
                    −
                </button>
                <button
                    onClick={() => {
                        ctx.addQuantityToCartHandler(props.item.id);
                    }}
                >
                    +
                </button>
            </div>
        </li>
    );
};

export default CartItem;

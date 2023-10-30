import { createContext } from 'react';

const Context = createContext({
    cartItems: [],
    quantityCart: 0,
    visabilityCartHandler: () => {},
    addItemHandler: () => {},
    addQuantityToCartHandler: () => {},
    minusQuantityToCartHandler: () => {},
    amountCart: 0,
});

export default Context;

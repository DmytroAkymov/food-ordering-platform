import { createContext } from 'react';

const Context = createContext({
    cartItems: [],
    quontityCart: 0,
    visabilityCartHandler: () => {},
    addItemHandler: () => {},
});

export default Context;

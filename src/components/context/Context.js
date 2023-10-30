import { createContext } from 'react';

const Context = createContext({
    cartItems: [],
    visabilityCartHandler: () => {},
});

export default Context;

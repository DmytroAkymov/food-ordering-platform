import React, { useState } from 'react';

import Header from './components/Layout/Header';

import PromoText from './components/Meals/PromoText';
import MealList from './components/Meals/MealList';
import Context from './components/context/Context.js';

import Cart from './components/Cart/Cart';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [quontityCart, setQuontityCart] = useState(0);

    const addItemHandler = (item) => {
        setQuontityCart(quontityCart + item.quontity);
        const newCartItems = [...cartItems, item];
        setCartItems(newCartItems);
    };

    const [visabilityCart, setVisabilityCart] = useState(false);
    const visabilityCartHandler = (visability) => {
        setVisabilityCart(visability);
    };

    return (
        <Context.Provider
            value={{
                cartItems: cartItems,
                visabilityCartHandler: visabilityCartHandler,
                addItemHandler: addItemHandler,
                quontityCart: quontityCart,
            }}
        >
            <Header />
            <PromoText />
            <MealList />
            {visabilityCart && <Cart />}
        </Context.Provider>
    );
}

export default App;

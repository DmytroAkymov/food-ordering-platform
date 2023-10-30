import React, { useState } from 'react';

import Header from './components/Layout/Header';

import PromoText from './components/Meals/PromoText';
import MealList from './components/Meals/MealList';
import Context from './components/context/Context.js';

import Cart from './components/Cart/Cart';

function App() {
    const [cartItems, setCartItems] = useState([
        {
            id: 'm3',
            name: 'Суши с угрем',
            description: 'Угорь копченый, соус унаги, кунжут',
            price: 4.99,
            quontity: 3,
        },
        {
            id: 'm4',
            name: 'Салат "Поке с лососем"',
            description:
                'Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый',
            price: 7.99,
            quontity: 3,
        },
    ]);

    const [visabilityCart, setVisabilityCart] = useState(false);
    const visabilityCartHandler = (visability) => {
        setVisabilityCart(visability);
    };

    return (
        <Context.Provider
            value={{
                cartItems: cartItems,
                visabilityCartHandler: visabilityCartHandler,
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

import React, { useEffect, useState } from 'react';

import Header from './components/Layout/Header';

import PromoText from './components/Meals/PromoText';
import MealList from './components/Meals/MealList';
import Context from './components/context/Context.js';

import Cart from './components/Cart/Cart';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [quantityCart, setQuantityCart] = useState(0);
    const [visabilityCart, setVisabilityCart] = useState(false);
    const [amountCart, setAmountCart] = useState(0);

    useEffect(() => {
        const sumCart = cartItems.reduce((accumulator, item) => {
            const price = item.quantity * item.price;
            const result = accumulator + price;
            return result >= 0 ? result : 0;
        }, 0);

        setAmountCart(sumCart.toFixed(2));
    }, [cartItems]);

    const addQuantityToCartHandler = (id) => {
        const updatedCartItems = cartItems.map((el) => {
            if (el.id === id) {
                return {
                    ...el,
                    quantity: el.quantity + 1,
                };
            }
            return el;
        });
        setCartItems(updatedCartItems);
        setQuantityCart(quantityCart + 1);
    };

    const minusQuantityToCartHandler = (id) => {
        const updatedCartItems = cartItems.map((el) => {
            if (el.id === id) {
                const newQuantity = el.quantity - 1;
                if (newQuantity < 1) {
                    return null;
                } else {
                    return {
                        ...el,
                        quantity: newQuantity,
                    };
                }
            }
            return el;
        });

        const filteredCartItems = updatedCartItems.filter((el) => el !== null);

        setCartItems(filteredCartItems);
        setQuantityCart(quantityCart - 1);
    };

    const visabilityCartHandler = (visability) => {
        setVisabilityCart(visability);
    };

    const addItemHandler = (item) => {
        setQuantityCart(quantityCart + item.quantity);

        const isItemInCart = cartItems.some((el) => el.id === item.id);

        if (!isItemInCart) {
            const newCartItems = [...cartItems, item];
            setCartItems(newCartItems);
        } else {
            const updatedCartItems = cartItems.map((meal) => {
                if (meal.id === item.id) {
                    return {
                        ...meal,
                        quantity: meal.quantity + item.quantity,
                    };
                }
                return meal;
            });
            setCartItems(updatedCartItems);
        }
    };

    return (
        <Context.Provider
            value={{
                cartItems: cartItems,
                visabilityCartHandler: visabilityCartHandler,
                addItemHandler: addItemHandler,
                quantityCart: quantityCart,
                amountCart: amountCart,
                addQuantityToCartHandler: addQuantityToCartHandler,
                minusQuantityToCartHandler: minusQuantityToCartHandler,
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

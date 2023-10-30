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
        const amountCart = cartItems.map((el) => {
            return el.quantity * el.price;
        });
        const sumCart = amountCart.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        setAmountCart(sumCart);
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
    };

    const minusQuantityToCartHandler = (id) => {
        const updatedCartItems = cartItems.map((el) => {
            if (el.id === id) {
                return {
                    ...el,
                    quantity: el.quantity - 1,
                };
            }
            return el;
        });
        setCartItems(updatedCartItems);
    };

    const visabilityCartHandler = (visability) => {
        setVisabilityCart(visability);
    };

    const addItemHandler = (item) => {
        setQuantityCart(quantityCart + item.quantity);

        // Check if the item with the same id already exists in cartItems
        const isItemInCart = cartItems.some((el) => el.id === item.id);

        if (!isItemInCart) {
            // If the item is not in cartItems, add it to newCartItems
            const newCartItems = [...cartItems, item];
            setCartItems(newCartItems);
        } else {
            // If the item is already in cartItems, you can update the quantity or handle it as needed
            // For example, you might want to increase the quantity of the existing item in the cart.
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

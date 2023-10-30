import React from 'react';

import Header from './components/Layout/Header';

import PromoText from './components/Meals/PromoText';
import MealList from './components/Meals/MealList';
import Cart from './components/Cart/Cart';

function App() {
    return (
        <React.Fragment>
            <Header />
            <PromoText />
            <MealList />
            <Cart />
        </React.Fragment>
    );
}

export default App;

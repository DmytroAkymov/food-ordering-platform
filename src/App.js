import React from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/MealItem';
import PromoText from './components/Meals/PromoText';
import MealList from './components/Meals/MealList';

function App() {
    return (
        <React.Fragment>
            <Header />
            <PromoText />
            <MealList />
        </React.Fragment>
    );
}

export default App;

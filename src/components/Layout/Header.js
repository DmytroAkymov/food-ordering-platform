import React from 'react';
import suchiImage from '../../assets/sushi.jpg';
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>Japanese food</h1>
                <button>Cart</button>
            </header>
            <div className={styles['main-image']}>
                <img src={suchiImage} alt="suchi" />
            </div>
        </React.Fragment>
    );
};

export default Header;

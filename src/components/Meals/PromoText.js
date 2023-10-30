import styles from './PromoText.module.css';

const PromoText = () => {
    return (
        <section className={styles['promo-text']}>
            <h2>A Taste Delight</h2>
            <p>
                You will be impressed no matter what food experience you choose.
                We have a taste adventure for every appetite. Impress business
                associates by taking them to a restaurant with enough variety
                for everyone while still offering an interesting taste adventure
                instead of the usual boring cuisine.
            </p>
        </section>
    );
};

export default PromoText;

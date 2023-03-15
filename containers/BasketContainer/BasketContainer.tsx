import { productStore } from '@/store';
import styles from './BasketContainer.module.scss';
import { Button, Divider } from 'antd';
import { BasketCard } from './components';

export const BasketContainer = (): JSX.Element => {
    const basket = productStore(state => state.basket)

    return (
        <section className={styles.basketContainer}>
            <div className={styles.container}>
                <div className={styles.basketTitle}>Корзина</div>
                <div className={styles.flex}>
                    <div className={styles.basket}>
                        { basket.length > 0 ?
                            basket.map((product, index) => 
                                <BasketCard
                                    key={product.id}
                                    id={product.id}
                                    category={product.category}
                                    description={product.description}
                                    title={product.title}
                                    price={product.price}
                                    rating={product.rating}
                                    image={product.image}
                                    index={index}
                                />
                                ) : 
                            <div>Корзина пуста</div>
                        }
                    </div>
                    <div className={styles.ordering}>
                        <Button
                            className={styles.btn}
                        >
                            Перейти к оформлению
                        </Button>
                        <Divider/>
                        <div>
                            <div className={styles.title}>Ваша корзина</div>
                            <div className={styles.products}>Товары {basket.length}</div>
                            <div className={styles.price}>Общая стоимость $ {basket.reduce((accum, curVal) => accum + curVal.price, 0)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
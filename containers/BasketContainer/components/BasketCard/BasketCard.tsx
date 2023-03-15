import styles from './BasketCard.module.scss';
import { BasketCardProps } from './BasketCard.props';
import Image from 'next/image';
import { Divider, Button } from 'antd';
import { productStore } from '@/store';
import { deleteDataToLocalStorage } from '@/helpers/deleteDataToLocalStorage';

export const BasketCard = ({id, category, description, title, price, rating, image, index} : BasketCardProps) : JSX.Element => {
    const [removeProductFromBasket, addProductToFavorites ] = productStore(state => [state.removeProductFromBasket, state.addProductToFavorites ])
    
    return (
        <div>
            <div className={styles.basketCard}>
                <Image
                    src={image}
                    width={170}
                    height={170}
                    alt='productImg'
                    />
                <div className={styles.title}>
                    {title}
                    <div>
                        <Button type='text'
                            onClick={() => addProductToFavorites({ id, category, description, title, price, rating, image})}
                            >
                            В избранное
                        </Button>
                        <Divider type='vertical'/>
                        <Button type='text'
                            onClick={() => {
                                removeProductFromBasket(index)
                                deleteDataToLocalStorage(index)
                                }
                            }
                            >
                            Удалить
                        </Button>
                    </div>
                </div>
                <div className={styles.price}>$ {price}</div>
            </div>
            <Divider/>
        </div>
    )
}
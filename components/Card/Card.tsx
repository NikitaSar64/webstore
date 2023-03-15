import Image from 'next/image';
import styles from './Card.module.scss';
import { CardProps } from './Card.props';
import { Rate } from 'antd';
import Link from 'next/link';
import basketIcon from '@assets/icons/card/basket.svg';
import eyetIcon from '@assets/icons/card/eye.svg';
import favoritesIcon from '@assets/icons/card/favorites.svg';
import refreshtIcon from '@assets/icons/card/refresh.svg';
import { productStore } from '@/store';
import { pushDataToLocalStorage } from '@/helpers/pushDataToLocalStorage';

export const Card = ( {id, category, description, image, title, price, rating, children,  } : CardProps) : JSX.Element => {
    const [ addProductToBasket, addProductToFavorites ] = productStore(state => [state.addProductToBasket, state.addProductToFavorites ]);

    return (
        <div className={styles.card}>
                <div className={styles.image}>
                    <Link 
                        className={styles.link}
                        href={`/detail/${id}`}
                        >
                        {children}
                        <Image
                            src={image}
                            width={270}
                            height={288}
                            alt='productImg'
                        />
                     </Link>
                    <div className={styles.options}>
                        <div 
                            className={styles.option}
                            onClick={() => {
                                addProductToFavorites({id, category, description, image, title, price, rating})
                                pushDataToLocalStorage('favorites', {id, category, description, image, title, price, rating})
                                }
                            }
                        >
                            <Image
                                src={favoritesIcon}
                                width={24}
                                height={24}
                                alt='favoritesIcon'
                            />
                        </div>
                        <div 
                            className={styles.option}
                            onClick={() => {
                                addProductToBasket({id, category, description, image, title, price, rating})
                                pushDataToLocalStorage('basket', {id, category, description, image, title, price, rating})
                                }
                            }
                            >
                            <Image
                                src={basketIcon}
                                width={24}
                                height={24}
                                alt='baketIcon'
                            />
                        </div>
                        <div className={styles.option}>
                            <Image
                                src={refreshtIcon}
                                width={24}
                                height={24}
                                alt='refreshtIcon'
                            />
                        </div>
                        <div className={styles.option}>
                            <Image
                                src={eyetIcon}
                                width={24}
                                height={24}
                                alt='eyetIcon'
                            />
                        </div>
                    </div>
                </div>
                <Link 
                    className={styles.link}
                    href={`/detail/${id}`}
                    >
                    <div className={styles.category}>{category}</div>
                    <div className={styles.title}>{title}</div>
                </Link>
                <div className={styles.flex}>
                    <div className={styles.price}>$ {price}</div>
                    <Rate count={5} defaultValue={rating} disabled className={styles.rate}/>
                </div> 
            </div>
    )
}
import Image from 'next/image';
import styles from './Card.module.scss';
import { CardProps } from './Card.props';
import { Rate } from 'antd';
import basketIcon from '@assets/icons/card/basket.svg';
import eyetIcon from '@assets/icons/card/eye.svg';
import favoritesIcon from '@assets/icons/card/favorites.svg';
import refreshtIcon from '@assets/icons/card/refresh.svg';

export const Card = ( {image, children, category, title, price, rating} : CardProps) : JSX.Element => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                {children}
                <Image
                    src={image}
                    width={270}
                    height={288}
                    alt='productImg'
                />
                <div className={styles.options}>
                    <div className={styles.option}>
                        <Image
                            src={favoritesIcon}
                            width={24}
                            height={24}
                            alt='favoritesIcon'
                        />
                    </div>
                    <div className={styles.option}>
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
            <div className={styles.category}>{category}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.flex}>
                <div className={styles.price}>$ {price}</div>
                <Rate count={5} defaultValue={rating} disabled className={styles.rate}/>
            </div>
        </div>
    )
}
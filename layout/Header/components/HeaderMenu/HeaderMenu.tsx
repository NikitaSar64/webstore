import BasketIcon from '@assets/icons/headerMenu/basket.svg';
import AvatarIcon from '@assets/icons/headerMenu/avatar.svg';
import NotivicationIcon from '@assets/icons/headerMenu/notification.svg';
import { productStore } from '@/store';

import Image from 'next/image';
import styles from './HeaderMenu.module.scss';

export const HeaderMenu = () : JSX.Element => {
    const [basket, favorites] = productStore(state => [ state.basket, state.favorites])

    return (
        <div className={styles.wrapper}>
            <div className={styles.menuItem}>
                <Image
                    src={BasketIcon}
                    width={24}
                    height={24}
                    alt='basket'
                />
                {
                    basket.length > 0 &&
                        <div className={styles.counter}>
                            {basket.length}
                        </div>
                }
            </div>
            <div className={styles.menuItem}>
                <Image
                    src={NotivicationIcon}
                    width={24}
                    height={24}
                    alt='notivication'
                />
                {
                    favorites.length > 0 &&
                        <div className={styles.counter}>
                            {favorites.length}
                        </div>
                }
            </div>
            <Image
                src={AvatarIcon}
                width={24}
                height={24}
                alt='avatar'
            />
        </div>
    )
}
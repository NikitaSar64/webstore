import BasketIcon from '@assets/icons/headerMenu/basket.svg';
import AvatarIcon from '@assets/icons/headerMenu/avatar.svg';
import NotivicationIcon from '@assets/icons/headerMenu/notification.svg';
import { productStore } from '@/store';
import Link from 'next/link';

import Image from 'next/image';
import styles from './HeaderMenu.module.scss';
import { useEffect } from 'react';

export const HeaderMenu = ()  => {
    const [basket, favorites] = productStore(state => [ state.basket, state.favorites ])

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [basket, favorites])

    return (
        <div className={styles.wrapper}>
            <Link
                href='/basket'
                >
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
            </Link>
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
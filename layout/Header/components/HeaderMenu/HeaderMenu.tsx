import BasketIcon from '@assets/icons/headerMenu/basket.svg';
import AvatarIcon from '@assets/icons/headerMenu/avatar.svg';
import NotivicationIcon from '@assets/icons/headerMenu/notification.svg';

import Image from 'next/image';
import styles from './HeaderMenu.module.scss';

export const HeaderMenu = () : JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Image
                src={BasketIcon}
                width={24}
                height={24}
                alt='basket'
            />
            <Image
                src={AvatarIcon}
                width={24}
                height={24}
                alt='avatar'
            />
            <Image
                src={NotivicationIcon}
                width={24}
                height={24}
                alt='notivication'
            />
        </div>
    )
}
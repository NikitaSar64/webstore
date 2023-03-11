import Image from 'next/image';
import styles from './HeaderMenu.module.scss';
import BasketIcon from './basket.svg';
import AvatarIcon from './avatar.svg';
import NotivicationIcon from './notification.svg';

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
import Image from 'next/image';
import LogoIcon from './logo.svg';
import styles from './Logo.module.scss';

export const Logo = (): JSX.Element => {
    return (
        <div className={styles.logoWrapper}>
            <Image
                src={LogoIcon}
                width={32}
                height={38}
                alt='Logo'
            />
            <div className={styles.logoName}>
                Furniking
            </div>
        </div>
    )
}
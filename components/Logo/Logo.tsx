import Image from 'next/image';
import LogoIcon from '@assets/icons/logo/logo.svg';
import styles from './Logo.module.scss';
import Link from 'next/link';

export const Logo = (): JSX.Element => {
    return (
        <Link href={'/'} className={styles.link}>
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
        </Link>
    )
}
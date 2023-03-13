import Link from 'next/link';
import styles from './OfferCard.module.scss';
import Image from 'next/image';
import arrowIcon from '@assets/icons/arrow-link.svg';
import { OfferCardProps } from './OfferCard.props';
import cn from 'classnames';

export const OfferCard = ({ title, subtitle, background, className }:OfferCardProps) : JSX.Element => {
    return (
        <div className={cn(styles.offerCard , className)} style={{ backgroundImage: `url(${background})` }}>
                <div className={styles.title}>{title}</div>
                <div className={styles.subtitle}>{subtitle}</div>
                <Link href="#">
                    Read more
                    <Image
                        src={arrowIcon}
                        width={11}
                        height={9}
                        alt='link'
                        />
                </Link>
        </div>
    )
}
import { Logo } from '@/components';
import styles from './Footer.module.scss';
import facebookIcon from '@assets/icons/social/facebook.svg';
import instagrammIcon from '@assets/icons/social/instagram.svg';
import twitterIcon from '@assets/icons/social/twitter.svg';
import printersetIcon from '@assets/icons/social/pinterset.svg';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

export const Footer = (): JSX.Element => {
    return (
        <footer>
            <div className={styles.top}>
                <div className={cn(styles.container, styles.flex)}>
                    <div className={styles.section}>
                        <Logo />
                        <div className={styles.description}>
                            Funking is the a popular Ecommerce site. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </div>
                        <div className={styles.social}>
                            <Link 
                                href="#">
                                <Image
                                    src={facebookIcon}
                                    width={32}
                                    height={32}
                                    alt='facebook'/>
                            </Link>
                            <Link 
                                href="#">
                                <Image
                                    src={instagrammIcon}
                                    width={32}
                                    height={32}
                                    alt='facebook'/>
                            </Link>
                            <Link 
                                href="#">
                                <Image
                                    src={twitterIcon}
                                    width={32}
                                    height={32}
                                    alt='facebook'/>
                            </Link>
                            <Link 
                                href="#">
                                <Image
                                    src={printersetIcon}
                                    width={32}
                                    height={32}
                                    alt='facebook'/>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.title}>Help</div>
                        <div className={styles.links}>
                            <Link href='#'>Privacy Policy</Link>
                            <Link href='#'>Shipping & Delivery</Link>
                            <Link href='#'>Refund Policy</Link>
                            <Link href='#'>Track Your  Order</Link>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.title}>Store</div>
                        <div className={styles.links}>
                            <Link href='#'>Furniture</Link>
                            <Link href='#'>Tabble</Link>
                            <Link href='#'>Sofa</Link>
                            <Link href='#'>Other</Link>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.title}>Supports</div>
                        <div className={styles.links}>
                            <Link href='#'>Feedbcak</Link>
                            <Link href='#'>Contact us</Link>
                            <Link href='#'>Download app</Link>
                            <Link href='#'>Terms conditins</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.container}>
                    <div>
                    © 2021 Funking - All rights reserved.
                    </div>
                    <div>
                        <Link href='#'>Privacy</Link>
                        <Link href='#'>Security</Link>
                        <Link href='#'>Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

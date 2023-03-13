import Link from 'next/link';
import Image from 'next/image';
import menuIcon from '@assets/icons/menu/menu.svg';
import styles from './HeroContainer.module.scss';
import { Slider } from '@/components';
import cn from 'classnames';

export const HeroContainer = () : JSX.Element => {
    return (
        <section>
            <div className={styles.menu}>
                <div className={cn(styles.container, styles.flex)}>
                    <div className={styles.collections}>
                        <Image
                            src={menuIcon}
                            width={24}
                            height={24}
                            alt='menuIcon'
                        />
                        <span className={styles.title}>ALL COLLECTIONS</span>
                    </div>
                    <nav className={styles.menuNav}>
                        <Link href='#'>HOME</Link>
                        <Link href='#'>SHOP</Link>
                        <Link href='#'>BLOG</Link>
                        <Link href='#'>ABOUT</Link>
                        <Link href='#'>CONTACT US</Link>
                    </nav>
                </div>
            </div>
            <div className={cn(styles.container, styles.flex)}>
                <div className={styles.collectionsWrapper}>
                    <div>All</div>
                    <div>New Arrivals</div>
                    <div>Hot Sale</div>
                    <div>Furniture</div>
                    <div>Amrature</div>
                    <div>Tabble</div>
                    <div>Chair</div>
                    <div>Sofa</div>
                    <div>Mirrors</div>
                    <div>Stools</div>
                    <div>Benches</div>
                </div>
                <Slider
                    className={styles.slider}
                    />
            </div>
        </section>
    )
}
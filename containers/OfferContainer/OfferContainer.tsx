import { OfferCard } from '@/components';
import styles from './OfferContainer.module.scss';

export const OfferContainer = () : JSX.Element => {
    return (
        <section>
            <div className={styles.offer}>
                <OfferCard
                className='0'
                title="Modern Furniture Collections"
                subtitle="Starting from $500"
                background="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                />
                <OfferCard
                className='1'
                title="Modern Furniture Collections"
                subtitle="Starting from $500"
                background="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                />
                <OfferCard
                className='2'
                title="Modern Furniture Collections"
                subtitle="Starting from $500"
                background="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                />
            </div>
            
        </section>
    )
}
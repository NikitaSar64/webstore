import { OfferCard } from '@/components';
import styles from './OfferContainer.module.scss';
import { useQuery } from 'react-query';
import { fetchDataForOffer } from '@/api';
import { ProductModel } from '@/interface';

export const OfferContainer = () : JSX.Element => {
    const { isLoading, error, isSuccess, data } = useQuery('offerData',fetchDataForOffer<ProductModel[]>);

    return (
        <section>
            <div className={styles.offer}>
                {
                    isSuccess && data.map(offer => 
                            <OfferCard
                            key={offer.id}
                            className={styles['offer' + offer.id]}
                            title={offer.title}
                            subtitle={offer.category}
                            background={offer.image}
                            />
                    )
                }
            </div>    
        </section>
    )
}
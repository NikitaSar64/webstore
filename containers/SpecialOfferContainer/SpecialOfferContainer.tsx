import styles from './SpecialOfferContainer.module.scss';
import { SpecialOfferCard } from './components/SpecialOfferCard/SpecialOfferCard';

export const SpecialOfferContainer = () : JSX.Element => {
    return (
        <section>
            <div className={styles.container}>
                <div className={styles.title}>SPECIAL OFFER</div>
                <div className={styles.grid}>
                    <SpecialOfferCard
                        title='Living Room Furniture'
                        description="You don't have a chair. Are you ready for growth? Shop with us 40% discount!"
                        newPrice={150}
                        oldPrice={250}
                        days={10}
                        hours={15}
                        minutes={30}
                        seconds={22}
                        />
                    <SpecialOfferCard
                        title='Modern chair'
                        description="Hot chairs of the modern era are now available in our stock."
                        newPrice={75}
                        oldPrice={150}
                        days={15}
                        hours={8}
                        minutes={20}
                        seconds={12}
                        />
                </div>
            </div>
        </section>
    )
}
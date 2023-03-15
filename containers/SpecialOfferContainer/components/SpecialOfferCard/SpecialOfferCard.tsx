import { Status } from '@/components';
import styles from './SpecialOfferCard.module.scss';
import { SpecialOfferCardProps } from './SpecialOfferCard.props';
import { Button } from 'antd';

export const SpecialOfferCard = ({title, description, newPrice, oldPrice, days, hours, minutes, seconds} : SpecialOfferCardProps) : JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Status
                text='40% off'
                className={styles.status}
            />
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.priceWrapper}>
                <div className={styles.newPrice}>$ {newPrice}</div>
                <div className={styles.oldPrice}>$ {oldPrice}</div>
                <Button className={styles.btn}>SHOP NOW</Button>
            </div>
            <div className={styles.deadlineWrapper}>
                <div className={styles.deadline}><div>{days}</div>Days</div>
                <div className={styles.deadline}><div>{hours}</div>HRS</div>
                <div className={styles.deadline}><div>{minutes}</div>MIN</div>
                <div className={styles.deadline}><div>{seconds}</div>secs</div>
            </div>
        </div>
    )
}
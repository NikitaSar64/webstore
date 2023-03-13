import styles from './Advantage.module.scss';
import { AdvantageProps } from './Advantage.props';

export const Advantage = ({title, description, children} : AdvantageProps): JSX.Element => {
    return (
        <div className={styles.advantages}>
            {children}
            <div>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    )
}
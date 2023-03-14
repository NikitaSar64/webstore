import styles from './Status.module.scss';
import { StatusProps } from './Status.props';
import cn from 'classnames';

export const Status = ( { text, className }: StatusProps): JSX.Element => {
    return (
        <div className={cn(styles.status, className)}>
            {text}
        </div>
    )
}

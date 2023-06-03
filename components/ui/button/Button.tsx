import { FC } from "react";

import styles from './Button.module.scss';
import { ButtonProps } from "./Button.props";

export const Button: FC<ButtonProps> = ({text}) => {
    return (
        <button className={styles.button}>
            {text}
        </button>
    )
}
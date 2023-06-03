import { FC } from "react";
import { TitleProps } from "./Title.props";

import styles from './Title.module.scss';
import cn from "classnames";

export const Title: FC<TitleProps> = ({tag, text, className}) => {
    switch (tag){
        case "h1":
            return <h1 className={cn(styles.h1, className)}>{text}</h1>;
        case "h2":
            return <h2 className={cn(styles.h2, className)}>{text}</h2>;
        case "h3":
            return <h3 className={cn(styles.h3, className)}>{text}</h3>;
        default:
            return <></>;
    }
}
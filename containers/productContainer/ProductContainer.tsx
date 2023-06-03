import { FC } from "react";

import { Card, Title, Button } from "@/components";

import styles from './ProductContainer.module.scss';

import testImg from '@assets/test.png';
import testAuthor from '@assets/author.png';

export const ProductContainer: FC = () => {
    return (
        <section className={styles.product}>
            <div className="container-fluid">
                <Title 
                    className={styles.productTitle}
                    tag="h2"
                    text="Let’s Check Out Our Newest Release Prodcuts"/>
                <div className={styles.productWrapper}>
                    <Card
                        productImg={testImg}
                        name="Responsive Mobile APP"
                        category="Site Template"
                        price={19}
                        authorImg={testAuthor}
                        rating={3}
                    />
                </div>
                <Button
                text="All New Items"/>
            </div>
        </section>
    )
}
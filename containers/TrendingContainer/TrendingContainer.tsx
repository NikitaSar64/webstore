import { FC } from "react";

import styles from './TrendingContainer.module.scss';
import { Title } from "@/components";

export const TrandingContainer: FC = () => {
    return (
        <section>
            <div className="container-fluid">
                <Title
                    tag="h2"
                    text="This Week Trending Products"
                />
            </div>
        </section>
    )
}
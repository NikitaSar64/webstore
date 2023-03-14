import { fetchProductData } from "@/api";
import { ProductModel } from "@/interface";
import { useQuery } from "react-query";
import { Card } from "@/components";
import { Status } from "@/components";
import { transfromDataArr } from "@/helpers/transformDataArr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';

import 'swiper/swiper.css';
import styles from './TrandingContainer.module.scss';
import './TrandingSlider.scss';

export const TrandingContainer = () : JSX.Element => {
    const { isSuccess, data } = useQuery('productData',fetchProductData<ProductModel[]>);

    return (
        <section>
            <div className={styles.container}>
                <div className={styles.title}>TRENDING</div>
                <div className={styles.flex}>
                    <div>Top Products</div>
                    <div>New Arrivals</div>
                    <div>Best Sellers</div>
                </div>
                <Swiper
                    slidesPerView={1}
                    modules={[Pagination]}
                    pagination={
                        { 
                            clickable: true, 
                            bulletClass: 'tranding__bullet',
                            bulletActiveClass: 'tranding__bullet_active'
                        }}
                    className={styles.slider} 
                >
                    {
                        isSuccess && transfromDataArr(8, data).map((slide, index) =>
                            <SwiperSlide 
                                className={styles.slideGrid}
                                key={index}>
                                    {
                                        slide.map(product => 
                                            <Card
                                                key={product.id}
                                                category={product.category}
                                                title={product.title}
                                                price={product.price}
                                                rating={product.rating.rate}
                                                image={product.image}    
                                            >
                                                <Status
                                                    text="New"
                                                    className={styles.status}
                                                />
                                            </Card>
                                        )
                                    }
                            </SwiperSlide>
                            )
                    }
                </Swiper>
            </div>
        </section>
    )
}
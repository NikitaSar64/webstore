import { fetchProductData } from "@/api";
import { ProductModel } from "@/interface";
import { useQuery } from "react-query";
import { Card } from "@/components";
import { Status } from "@/components";
import { transfromDataArr } from "@/helpers/transformDataArr";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.css';
import styles from './OurProductContainer.module.scss';
import './OurProductSlider.scss';
import { SliderButtons } from "./components/SliderButtons/SliderButtons";

export const OurProductContainer = () : JSX.Element => {
    const { isSuccess, data } = useQuery('productData',fetchProductData<ProductModel[]>);

    return (
        <section>
            <div className={styles.container}>
                <div className={styles.title}>OUR PRODUCTS</div>
                <div className={styles.flex}>
                    <div>All Products</div>
                    <div>Best Sellers</div>
                    <div>New Arrivals</div>
                    <div>Todays Deals</div>
                </div>
                <Swiper
                    slidesPerView={1}
                    allowTouchMove={false}
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
                                                id={product.id}
                                                category={product.category}
                                                description={product.description}
                                                title={product.title}
                                                price={product.price}
                                                rating={product.rating.rate}
                                                image={product.image}    
                                            >
                                                <Status
                                                    text="Sale"
                                                    className={styles.status}
                                                />
                                            </Card>
                                        )
                                    }
                            </SwiperSlide>
                            )
                    }
                    <SliderButtons/>
                </Swiper>
            </div>
        </section>
    )
}
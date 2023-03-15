import { useSwiper } from "swiper/react"
import { useEffect, useState } from "react";
import { LeftOutlined, RightOutlined, ArrowRightOutlined } from '@ant-design/icons';
import styles from './SliderButtons.module.scss';


export const SliderButtons = () : JSX.Element => {
    const swiper = useSwiper();
    const [activeSlides, setActiveSlides] = useState<number>(swiper.activeIndex + 1);
    const [allSlides, setAllSlides] = useState<number>(0);

    useEffect(() => {
        setAllSlides(swiper.slides.length)
    },[swiper.slides])

    function prevSlide(){
        swiper.slidePrev()
        setActiveSlides(swiper.activeIndex + 1)
    }

    function nextSlide(){
        swiper.slideNext()
        setActiveSlides(swiper.activeIndex + 1)
    }

    return (
        <div className={styles.flex}>
            <div 
                onClick={() => nextSlide()}
                className={styles.btn}
                >
                Next page
                <ArrowRightOutlined/>
            </div>
            <div className={styles.numberSlides}>Page 
                <div>
                {activeSlides}
                </div>
                of {allSlides}
            </div>
            <div className={styles.arrowBtn}>
                <LeftOutlined onClick={() => prevSlide()}/>
                <RightOutlined onClick={() => nextSlide()}/>
            </div>
        </div>
    )
}
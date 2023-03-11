import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.scss';
import 'swiper/swiper.css';
import 'swiper/css/pagination';

export const Slider = (): JSX.Element => {
    return (
        <Swiper
            loop
            modules={[Pagination]}
            pagination={
                { 
                    clickable: true, 
                    bulletActiveClass: 'activeBullet',
                    bulletClass: 'bullet',
                }}  
            className='slider'
            slidesPerView={1}
        >
            <SwiperSlide className='slide'>Slide 1</SwiperSlide>
            <SwiperSlide className='slide'>Slide 2</SwiperSlide>
            <SwiperSlide className='slide'>Slide 3</SwiperSlide>
            <SwiperSlide className='slide'>Slide 4</SwiperSlide>
        </Swiper>
    )
}
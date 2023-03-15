import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderProps } from './Slider.props';
import './Slider.scss';
import 'swiper/swiper.css';
import 'swiper/css/pagination';

export const Slider = ( { className } : SliderProps): JSX.Element => {
    return (
        <Swiper
            loop
            grabCursor={true}
            modules={[Pagination]}
            pagination={
                { 
                    clickable: true, 
                    bulletActiveClass: 'activeBullet',
                    bulletClass: 'bullet',
                }}  
            className={className}
            slidesPerView={1}
        >
            <SwiperSlide className='slide'>Slide 1</SwiperSlide>
            <SwiperSlide className='slide'>Slide 2</SwiperSlide>
            <SwiperSlide className='slide'>Slide 3</SwiperSlide>
            <SwiperSlide className='slide'>Slide 4</SwiperSlide>
        </Swiper>
    )
}
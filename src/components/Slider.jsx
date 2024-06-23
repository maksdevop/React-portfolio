import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
function Slider({ slides }) {
    return (
        <Swiper spaceBetween={50} slidesPerView={2} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
            {slides.map((slide) => (
                <SwiperSlide key={slide.image}>
                    <img src={slide.image} alt={slide.title} />
                </SwiperSlide>
            ))}
            <SwiperSlide>Slide 1</SwiperSlide>
        </Swiper>
    );
}

export default Slider;

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import hero1 from '../images/hero1.png';
import hero2 from '../images/hero2.png';
import hero3 from '../images/hero3.png';
import hero4 from '../images/hero4.png';
import hero5 from '../images/hero5.png';

function ImageSlider() {
  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: -10,
          depth: 10,
          modifier: -35,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={hero1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero5} alt="slide_image" />
        </SwiperSlide>


        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default ImageSlider;

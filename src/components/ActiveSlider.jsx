import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "../constants";

import "swiper/swiper-bundle.css"; // Import the Swiper styles
import "./YourCustomStyles.css"; // Import your custom styles

const ActiveSlider = () => {
  return (
    <div className="my-swiper">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        centeredSlides={true}
        modules={[FreeMode, Pagination]}
        className="swiper-container"
      >
        <div className="swiper-wrapper">
          {ServiceData.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <img
                  src={item.image}
                  alt={`Service ${item.id}`}
                  className="object-cover w-full h-full rounded-lg shadow-md"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Add any additional content or overlay here */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default ActiveSlider;

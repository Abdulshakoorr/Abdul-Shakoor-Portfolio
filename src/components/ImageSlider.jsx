import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const ImageSlider = () => {
  return (
    <div className='w-full h-4/5 p-8'>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      breakpoints={{
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper mt-10"
    >
      <SwiperSlide className='rounded shadow-lg shadow-amber-300'><img src="proimages/skimg/sk01.png" alt="" /></SwiperSlide>
      <SwiperSlide className='rounded shadow-lg shadow-amber-300'><img src="proimages/skimg/sk02.png" alt="" /></SwiperSlide>
      <SwiperSlide className='rounded shadow-lg shadow-amber-300'><img src="proimages/skimg/sk03.png" alt="" /></SwiperSlide>
      <SwiperSlide className='rounded shadow-lg shadow-amber-300'><img src="proimages/skimg/sk04.png" alt="" /></SwiperSlide>
      <SwiperSlide className='rounded shadow-lg shadow-amber-300'><img src="proimages/skimg/sk05.png" alt="" /></SwiperSlide>
      <SwiperSlide className='rounded shadow-lg shadow-amber-300'><img src="proimages/skimg/sk06.png" alt="" /></SwiperSlide>
      <SwiperSlide className='rounded shadow-lg shadow-amber-300'><img src="proimages/skimg/sk07.png" alt="" /></SwiperSlide>
      <SwiperSlide className='rounded shadow-lg shadow-amber-300'><img src="proimages/skimg/sk08.png" alt="" /></SwiperSlide>
      <SwiperSlide className='rounded shadow-lg shadow-amber-300'><img src="proimages/skimg/sk09.png" alt="" /></SwiperSlide>
    </Swiper>
  </div>
  )
}

export default ImageSlider
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper';

const Slider = () => {
  return (

    // sweeper js carousal  added --
    <>
      <Swiper

        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        className='carousel'

      >

        <SwiperSlide>
          <img className='rounded  w-[100%]' src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80&fbclid=IwAR3SNL3zUmA6rnNeql4skTtdRhtk3XsLsANdjDH2wMl6Xn8u5qwdEDouuj8" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded w-[100%]' src="https://images.unsplash.com/photo-1608835149345-b4d77bc490ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded w-[100%]' src="https://images.unsplash.com/photo-1542528406-f04308dcf0a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=790&q=80" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded w-[100%]' src="https://images.unsplash.com/photo-1628294896516-344152572ee8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded w-[100%]' src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img className='rounded w-[100%]' src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img className='rounded w-[100%]' src="https://images.unsplash.com/photo-1566740932818-cacfb780ae18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img className='rounded w-[100%]' src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img className='rounded  w-[100%]' src="https://images.unsplash.com/photo-1527751171053-6ac5ec50000b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img className='rounded w-[100%]' src="https://images.unsplash.com/photo-1543392883-914cfa6f9ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img className='rounded  w-[100%]' src="https://images.unsplash.com/photo-1452967712862-0cca1839ff27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
        </SwiperSlide>




      </Swiper>

    </>
  );
};

export default Slider;
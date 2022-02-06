import React, { useRef, useState } from "react";
import Prod from '../../public/asset/Data/Product_Data.json';
import ProductCard from '../ProductCard';
import Card  from "../Cards/Card";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
    Keyboard,Scrollbar,Navigation,Pagination
  } from 'swiper';
  SwiperCore.use([Keyboard,Scrollbar,Navigation,Pagination]);

const ProductSlider = ({header}) => {
    //console.log(Prod);
  return <div className='Product_slider'>
      <div className="d-flex justify-content-end text-white p-header bg-black">
          <h3>{header}</h3>
          </div>
       <Swiper style={{backgroundColor:'#212529'}}
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper">
            {
                Prod.map((item,index)=>{
                    return(
                        <SwiperSlide item={item} key={index}>
                        <Card item={item} />
                        </SwiperSlide>
                    )
                })
            }
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
  </div>;
};

export default ProductSlider;

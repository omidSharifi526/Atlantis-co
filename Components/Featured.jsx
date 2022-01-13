
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiper_style.module.css";
import bg1 from '../public/asset/imgs/bg1.jpg';
import bg2 from '../public/asset/imgs/bg2.jpg';
import bg3 from '../public/asset/imgs/bg3.jpg';
import bg4 from '../public/asset/imgs/bg4.jpg';

import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper';

  SwiperCore.use([Autoplay,Pagination,Navigation]);

  const imgs=[bg1,bg2,bg3,bg4]

const Featured = () => {
    return (
        <>
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
      "delay": 6500,
      "disableOnInteraction": false
    }} pagination={{
      "clickable": true
    }} navigation={true} className="mySwiper">

      {
        imgs.map((img,index)=>{
          console.log(img);
          return (<> 

          <SwiperSlide><img width='100%' height='600px' src={img.src} alt="" /></SwiperSlide>
          </>)


        })
      }



      {/* <SwiperSlide>{bg1}</SwiperSlide>
      <SwiperSlide>{bg2}</SwiperSlide>
      <SwiperSlide>{bg3}</SwiperSlide>
      <SwiperSlide>{bg4}</SwiperSlide> */}
  
      </Swiper>
        </>
    )
}

export default Featured

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
  return <div className='Product_slider '>
      <div className="d-flex justify-content-end text-white p-header ">
          <h3 className="fs-6 p-2 pt-2 pb-2  rounded">{header}</h3>
          </div>
       <div className="   ">
       <Swiper  style={{width:'100%'}}
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
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
    
      </Swiper>
       </div>
  </div>;
};

export default ProductSlider;

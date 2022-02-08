

          import React, { useRef, useState } from "react";
          // Import Swiper React components
          import { Swiper, SwiperSlide } from "swiper/react";



          import SwiperCore, {
              Keyboard,Scrollbar,Navigation,Pagination
            } from 'swiper';

            SwiperCore.use([Keyboard,Scrollbar,Navigation,Pagination]);


          const GallerySlider = () => {
              return (
                  <div className="col-10 mx-auto" style={{Height:'400px'}}>
                    <h2 className=" text-head text-center text-light fs-6 fw-bold pt-5 pb-4">محصولات ویژه</h2>
                    <Swiper slidesPerView={2} centeredSlides={false} slidesPerGroupSkip={1} grabCursor={true} keyboard={{
            "enabled": true
            }} breakpoints={{
            "769": {
              "slidesPerView": 2,
              "slidesPerGroup": 1
            }
          }} 
          scrollbar={true} navigation={true} 

          className="mySwiper">
            <SwiperSlide>
            <img  src="https://digighelioon.com/wp-content/uploads/2022/01/%DB%B2%DB%B0%DB%B2%DB%B2%DB%B0%DB%B1%DB%B1%DB%B1_%DB%B2%DB%B0%DB%B3%DB%B8%DB%B1%DB%B9-removebg-preview.png" />
            <p>قلیان ویژه </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://digighelioon.com/wp-content/uploads/2021/11/%DB%B2%DB%B0%DB%B2%DB%B1%DB%B1%DB%B1%DB%B1%DB%B4_%DB%B1%DB%B6%DB%B1%DB%B5%DB%B1%DB%B8-removebg-preview.png" />
              <p>تنه قلیان </p>
              </SwiperSlide>
              <SwiperSlide>
              <img src="https://digighelioon.com/wp-content/uploads/2021/11/%DB%B2%DB%B0%DB%B2%DB%B1%DB%B1%DB%B1%DB%B1%DB%B4_%DB%B1%DB%B6%DB%B1%DB%B5%DB%B1%DB%B8-removebg-preview.png" />
              <p>تنه قلیان </p>
              </SwiperSlide>
              <SwiperSlide>
              <img src="https://digighelioon.com/wp-content/uploads/2021/11/%DB%B2%DB%B0%DB%B2%DB%B1%DB%B1%DB%B1%DB%B1%DB%B4_%DB%B1%DB%B6%DB%B1%DB%B5%DB%B1%DB%B8-removebg-preview.png" />
              <p>تنه قلیان </p>
              </SwiperSlide>
            <SwiperSlide><img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
            </SwiperSlide>
            <SwiperSlide><img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" />
            </SwiperSlide>
            <SwiperSlide><img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
            </SwiperSlide>
            <SwiperSlide><img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" />
            </SwiperSlide>
            <SwiperSlide><img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" />
            </SwiperSlide>
            </Swiper>
                  </div>
              )
          }

          export default GallerySlider

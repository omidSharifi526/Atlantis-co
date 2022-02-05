import React, { Component } from 'react';
import Image from 'next/image'
import { FaHeart } from "react-icons/fa";





const Footer = () => {
    return (
       
            <div className="row mx-auto flex-row-reverse">
                <div className="col-12 bg-dark " >
                    <div className="service-container">
                        <div className="row">
                         <div className="col-10 col-md-3 mx-auto text-center d-flex flex-column justify-content-center align-items-center">
                             <img src="https://digighelioon.com/wp-content/uploads/elementor/thumbs/2020-01-23_6-11-45-osblbgwfvng8g2tlg8wik4fprvahp9h1z5pb19pfwi.png"/>
                             <span>ضمانت اصل بودن کالا</span>
                        </div>
                        <div className="col-10 col-md-3 mx-auto text-center d-flex flex-column justify-content-center align-items-center">
                             <img src="https://digighelioon.com/wp-content/uploads/elementor/thumbs/2020-01-23_6-11-28-osblbgwg0h462av5dfrq2yumu6ctosgxhi3cujesfi.png"/>
                             <span> روز ضمانت بازگشت</span>
                        </div>
                         
                        <div className="col-10 col-md-3 mx-auto text-center d-flex flex-column justify-content-center align-items-center">
                             <img src="https://digighelioon.com/wp-content/uploads/elementor/thumbs/2020-01-23_6-10-58-osblbgwfzljgnelg23p76j3v8dt5rla9h07yt128si.png"/>
                             <span>پشتیبانی در ساعات اداری</span>
                        </div>
                        <div className="col-10 col-md-3 mx-auto text-center d-flex flex-column justify-content-center align-items-center">
                             <img src="https://digighelioon.com/wp-content/uploads/2020/01/2020-01-23_6-00-59.png"/>
                             <span>تحویل باربری</span>
                        </div>
                        </div>

                    </div>

                </div>
            <div className="footer-col col-12 col-md-6 mx-auto  text-center">
                

                <div className=' w-100 text-white footer-descript d-flex flex-column align-items-center justify-content-between  ' >
                  <strong>
                      <p>گروه تولیدی آتلانتیس</p>
                  </strong>
                  <span>
            عرضه انواع لوازم مصرفی قلیون(تنه، شیلنگ قلیون و…).
                  </span>
                  <span>
                  هفت روز هفته ، در ساعات اداری پاسخگوی شما هستیم.
                  </span>
                  <span>
                  آدرس ایمیل :atlantis@Gmail.com
                  </span>
                  <div className='mt-5  call-numbs'>
                  <span className='text-light fw-bold  ' >  تلفن های تماس :   </span>
                 <span className='text-light fw-bold text-warning d-block '>0912-987766</span>
                 <span className='text-light  d-block '>0912-987766</span>
                  </div>

                </div>



               




                
            </div>

            <div className="footer-col col-12 col-md-6 mx-auto ">
            <div className=' text-white footer-address d-flex flex-column justify-content-start align-items-center w-100 h-100'>
              
                 <span className=' fw-bold ' >   <i className="fas fa-map-marker-alt text-light "></i> آدرس : استان البرز-جاده محمد شهر </span>
               <span>بعد از چهارراه ولی عصر </span>
                <span>خیابان شهید امجدی </span>
                <div className='so-media p-md-4 d-flex flex-column justify-content-between'>
                   <p className=' d-block text-center'>مارا دنبال کنید</p>
                   <div className=' mt-2 somedia-icn d-flex justify-content-between w-75 mx-auto justify-content-md-around'>
                   <Image
                   src="/../public/asset/imgs/social-media-icn/telegram.png"
                   alt="Atlantis"
                   width={50}
                   height={50}
                   />
                    <Image
                   src="/../public/asset/imgs/social-media-icn/whatsup.png"
                   alt="Atlantis"
                   width={50}
                   height={50}
                   />
                     <Image
                   src="/../public/asset/imgs/social-media-icn/instagram.png"
                   alt="Atlantis"
                   width={50}
                   height={50}
                   />
                     <Image
                   src="/../public/asset/imgs/social-media-icn/facebook.png"
                   alt="Atlantis"
                   width={50}
                   height={50}
                   />
                   </div>
                </div>
                </div>
               
            </div>
            </div>
            
    
    )
}

export default Footer

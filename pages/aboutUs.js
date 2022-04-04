import React from 'react';
import MiddleText from '../Components/MiddleText/MiddleText';
import ExtraPage from '../Components/Extra Page/ExtraPage';

const about = () => {
    return (
        
        <div className='about-container container-fluid  pt-5'>
            <ExtraPage/>
       <div className='aboute-content  text-light'>
       <h2 className='text-center fw-bolder fs-4'>
     آتلانتیس
       </h2>
       <h4 className='fs-5 fw-bold'>
       بزرگ ترین مرکز پخش قلیان و لوازم جانبی
       </h4>
   <div className='mt-5 p-md-5'>
   <div className='row    '>
        <div className='col-6 col-md-3   img-1 mx-auto '>
            <img className='img-fluid img-1 imgs' src='https://img.grouponcdn.com/deal/2h1fm63sDUVHPNCBy5xg/Bf-2048x1229/v1/c870x524.jpg'/>

        </div>
        <div className='col-6 col-md-3    img-2 img-fluid'>
        <img className='img-fluid img-2 imgs' src='https://khalil-mamoon.com/wp-content/uploads/2020/09/Glass-exotic-hookah.jpg'/>
            </div>
            <div className='col-6 col-md-3    img-3'>
            <img className='img-fluid img-3 imgs' src='https://www.fumari.com/fumariwp/wp-content/uploads/2019/04/blog-hookah-beginners.jpg'/>
            </div>
            <div className='col-6 col-md-3   img-4'>
            <img className='img-fluid img-4 imgs' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRan5QhUnwVKKwZBSSIKsnViluZzSRGQpd3vA&usqp=CAU'/>
            </div>
       </div>
   </div>
       <div className='text-container mt-5 mb-5'>
       <h3 className='text-right pb-5'>
           فروشگاه اینترنتی آتلانتیس

       </h3>
       <span className=' fs-6 pt-5 mt-5 w-75 mb-5'>
       فروشگاه اینترنتی دیجی‌قلیون
عرضه انواع لوازم مصرفی قلیون(تنه، شیلنگ قلیون و…).
هفت روز هفته ، در ساعات اداری پاسخگوی شما هستیم.

       </span>
       </div>
       </div >


       

        </div>
    )
}

export default about

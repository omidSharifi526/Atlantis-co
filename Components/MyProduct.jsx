import React from 'react'
import Prod from '../public/asset/Data/Product_Data.json';
import ProductCard from './ProductCard';

const MyProduct = () => {
  //  console.log(Prod);
    return (
        <div className='container-fluid  '>
           <div className="product-container  w-100  " style={{minHeight:'400px'}}>
        <div className="row">
           
           
           <div className='col-12 mx-auto  text-center mt-4 mb-4'>
               <h2 className='text-light text-head text-center p-2 rounded pb-3 pt-3 w-75 mx-auto fs-4 mb-lg-4 '> <i className="fas fa-question text-light  "></i>ماکه هستیم</h2>
               <p className='mb-5 fs-6 wellcome-text text-center text-light w-75 mx-auto '>در کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را برایتان نگه داریم و همیشه در دسترس شما قرار دهیم؛ از این طریق می‌توانید متن آزمایشی و متن تستی خودتان را تایپ کرده و در طرح‌هایتان از این متن استفاده کنید... تایپ کنید، به صورت خودکار ذخی</p>
           <div className=' fw-bold p-3 mt-2  text-light mb-md-4 mt-md-4 w-100 rounded'>
           <h2 className='  fs-6 myprod-text  rounded'>محصولات ما در یک نگاه</h2>
           </div>
           
           </div>
           
           

         {
             Prod.map((item,index)=>{
                 
                 return(<>
                 <ProductCard key={index} item={item}/>
                 </>)

             })
         }


            
            
            
        </div>

           </div>
        </div>
    )
}

export default MyProduct

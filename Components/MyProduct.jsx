import React from 'react'
import Prod from '../public/asset/Data/Product_Data.json';
import ProductCard from './ProductCard';

const MyProduct = () => {
    console.log(Prod);
    return (
        <div className='container-fluid  '>
           <div className="product-container  w-100  " style={{minHeight:'400px'}}>
        <div className="row">
           
           
           <div className='col-9 mx-auto  text-center mt-4 mb-4'>
           <h2 className='fs-6 fw-bold p-3 mt-2 mb-2 text-light mb-md-4 mt-md-4'>محصولات ما در یک نگاه</h2>
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

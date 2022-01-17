import React from 'react';


const ProductCard = ({item,index}) => {
    return (
       
              <div className="items  col-4 mx-auto  " key={index} >
            
            <div className="card bg-transparent mb-md-5 mb-2 mx-auto border-0 text-center" >
             <img src={item.img} className="card-img-top w-75 h-75 " alt="..."/>
                <div className="card-body">
               <p className="card-text text-light">{item.name}</p>
               <button className='btn btn-danger fs-6'>مشاهده</button>
              </div>
             </div>
             
            </div>
            
       
    )
}

export default ProductCard

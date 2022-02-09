import React from 'react';


const contactUs = () => {
  return <div className='m-con container-fluid  text-light ' >
      <div className='row '>
      <div className='col-12 d-flex justify-content-end '>
       <h2 style={{marginTop:'100px'}}>سفارش و خرید </h2>
       
       
      </div>
      <div className='col-12 d-flex justify-content-end d-2'>
      <p>پاسخ گوی  24 ساعته</p>
      </div>

       </div>



      <div className=' row '>
         {/* <div className='ways row '> */}
           <div className='w1 mt-3 bg-primary col-10 col-md-3 mx-auto   ' style={{height:'200px'}}>
             <div className='call-icn'>
             <i class="fa-brands fa-instagram"></i>
             {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
             </div>
           </div>
           <div className='w2 mt-3 bg-danger col-10 col-md-3 mx-auto ' style={{height:'200px'}}>
           <div className='call-icn'>
               
               </div>
           </div>
           <div className='w3 mt-3 bg-success col-10 col-md-3 mx-auto' style={{height:'200px'}}>
           <div className='call-icn'>
               
               </div>
           </div>
           {/* <div className='w4 mt-3 bg-dark col-10 col-md-4 mx-auto' style={{height:'200px'}}>
           <div className='call-icn'>
               
               </div>
           </div> */}

         {/* </div> */}

       </div>

      
  </div>;
};

export default contactUs;

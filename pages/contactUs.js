import React from 'react';


const contactUs = () => {
  return <div className='  mb-4 m-con container-fluid bg-dark text-light ' >
      <div className='row '>
      <div className='col-12 d-flex justify-content-end '>
       <h2 className='p-3 rounded fs-4 ' style={{marginTop:'100px'}}>سفارش و خرید </h2>
       
       
      </div>
      <div className='col-12 d-flex justify-content-end d-2'>
      <div className='con-p'>
      <p >پاسخ گوی  24 ساعته</p>
      <p> راه های ارتباطی  </p>
      </div>
      </div>

       </div>



      <div className=' row mt-4  '>
         {/* <div className='ways row '> */}
           <div className='w1 ways-container mt-3  col-10 col-md-3 mx-auto   ' style={{height:'200px'}}>
             <div className='call-icn text-center'>
             
             <i className="fas fa-phone-alt text-white text-center fs-3 "></i>
             {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}

             </div>
           </div>



           <div className='w2 ways-container mt-3  col-10 col-md-3 mx-auto ' style={{height:'200px'}}>
           <div className='call-icn'>
           <i className="fab fa-whatsapp text-white text-center fs-2 "></i>
               </div>
           </div>


           
           <div className='w3 ways-container mt-3  col-10 col-md-3 mx-auto' style={{height:'200px'}}>
           <div className='call-icn'>
           <i className="fab fa-telegram text-white text-center fs-2 "></i>
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

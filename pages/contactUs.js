import React from 'react';


const contactUs = () => {
  return <div className='  mb-4 m-con container-fluid bg-dark text-light ' >
      <div className='row  '>
      <div className='col-12 col-md-6 d-flex justify-content-center mt-md-5'>
      <img className='contact-img rounded mt-5' src='https://archives.drugabuse.gov/sites/default/files/hookah_optimized.jpg' />
      </div>
      <div className=' head-text col-12 col-md-6  col-md-6 text-center d-flex justify-content-center align-item-center '>
       <h2 className='p-3 rounded fs-4 d-md-block  mt-md-5 '>سفارش و خرید </h2>
      </div>
      
      <div className='col-12 d-flex justify-content-end '>
      <div className='con-p text-center '>
      <p className='p-2 m-con w-100 rounded'> <i className="fas fa-headset p-2 fs-3"></i> پاسخ گوی  24 ساعته</p>
      <p className='  p-2 rounded w-100'> راه های ارتباطی  </p>
      </div>
      </div>

       </div>

      

      <div className=' m-row row mt-4  '>
         {/* <div className='ways row '> */}
           <div className='w1 ways-container mt-3  col-10 col-md-3 mx-auto   ' style={{height:'200px'}}>
             <div className='call-icn text-center'>
             
             <i className="fas fa-phone-alt text-white text-center fs-3 "></i>
             {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}

             </div>

             <div>
               <p className='text-center mt-3'>تلفن های تماس</p>
               <span className='d-block text-center mt-2'>
               09120996698
               </span>
               <span className='d-block text-center mt-2'>
               09399992292
               </span>
               <span className='text-center d-block mt-2'>
               02636701672
               </span>
           
             </div>


           </div>



           

           <div className='w2 ways-container mt-3  col-10 col-md-3 mx-auto ' style={{height:'200px'}}>
           <div className='call-icn'>
           <i className="fab fa-whatsapp text-white text-center fs-2 "></i>
               </div>

               <div>
               <p className='text-center mt-3'>واتساپ</p>
               <span className='d-block text-center mt-2'>
               09120996698
               </span>
               <span className='d-block text-center mt-2'>
               09399992292
               </span>
             </div>
           </div>


           
           <div className='w3 ways-container mt-3  col-10 col-md-3 mx-auto' style={{height:'200px'}}>
           <div className='call-icn'>
           <i className="fab fa-telegram text-white text-center fs-2 "></i>
               </div>
               <div>
          <p className='text-center mt-3'>تلگرام</p>
            <span className='text-center d-block'>
            @atlantis_hookah
            </span>
          </div>
           </div>
{/* instagram col */}
           <div className='w2 ways-container mt-3  col-10 col-md-3 mx-auto ' style={{height:'200px'}}>
           <div className='call-icn'>
           <i className="fab fa-instagram fs-2"></i>
          </div>

          <div>
          <p className='text-center mt-3'>اینستاگرام</p>
            <span className='text-center d-block'>
            @atlantis__company
            </span>
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

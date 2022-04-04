import React,{useEffect} from 'react';
import ProductSlider from '../Components/Product Slider/ProductSlider';


const gallery = () => {

  // const [useload,setLoad]=usestate(false);

  
  


  return <div className='container-fluid '>
  {/* <div className='continer mx-auto w-100 m-auto'>
  <ProductSlider header='محبوب ترین ها'/>
  <ProductSlider header='تازه ها'/>
  <ProductSlider header=' فروش ویژه'/>
  </div> */}
  
    <ProductSlider/>
    
  </div>;
};

export default gallery;

import React,{useEffect,useState} from 'react';
import ProductSlider from '../Components/Product Slider/ProductSlider';


const gallery = () => {

  const [load,setLoad]=useState(false);

  useEffect(() => {
    
    setTimeout(() => {
      setLoad(true)
    }, 2000);
  
    return () => {
      
    }
  }, [])
  


  return <div className='container-fluid '>
  {/* <div className='continer mx-auto w-100 m-auto'>
  <ProductSlider header='محبوب ترین ها'/>
  <ProductSlider header='تازه ها'/>
  <ProductSlider header=' فروش ویژه'/>



  </div> */}
  {
    load && <ProductSlider/>
    }
  </div>;
};

export default gallery;

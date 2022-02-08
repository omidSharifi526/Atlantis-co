import React from 'react';
import ProductSlider from '../Components/Product Slider/ProductSlider';

const gallery = () => {
  return <div>
  <div className='continer mx-auto w-100 m-auto'>
  <ProductSlider header='محبوب ترین ها'/>
  <ProductSlider header='تازه ها'/>
  <ProductSlider header=' فروش ویژه'/>



  </div>
  </div>;
};

export default gallery;

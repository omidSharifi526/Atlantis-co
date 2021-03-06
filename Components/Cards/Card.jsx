import React from 'react';

const Card = ({item,index}) => {
    //console.log(item);
  return <div>
      <div className="card mcard text-center bg-dark text-white" >
  <img src={item.img} className="card-img-top mb-2 w-100 shadowed " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">قلیان ویژه</h5>
    <p className="card-text p-2 ">لورم اپسون متن ساختگی</p>
    <a href="#" className="btn btn-danger">خرید</a>
  </div>
</div>
  </div>;
};

export default Card;

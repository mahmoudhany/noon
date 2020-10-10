import React from 'react';
import './Product.scss'

const Product = (props) => {
  const { name, price, image, currency } = props
  return (
    <div className='product'>
      <div className="img-wrap">
        <img className='product__img' src={`Images/${image}`} alt={name} />
      </div>
      <div className='product__description' >
        <p className='product__name'>{name}</p>
        <p className='product__price'>{price + ' ' + currency}</p>
      </div>
    </div>
  );
};

export default Product;

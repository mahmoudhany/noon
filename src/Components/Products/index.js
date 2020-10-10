import React from 'react';
import { withRouter, Link } from 'react-router-dom'
import products from '../../Assets/products.json'
import Product from '../Products/Product/Product'
import './Products.scss'

const Products = () => {
  return (
    <div className='products'>
      {
        products.map(product => {
          return (
            <Link
              key={product.id}
              to={{ pathname: `product-details/${product.id}`, query: { id: product.id } }} >
              <Product
                {...product}
              />
            </Link>
          )
        })
      }
    </div>
  );
};

export default withRouter(Products);

import React from 'react';
import { connect } from 'react-redux'
import { deleteCartItem } from '../../../Redux/Actions/Cart'
import './CartItem.scss'

const CartItem = (props) => {
  const { name, price, image, currency, quantity, index } = props
  return (
    <div className='cart-item'>
      <div className="img-wrap">
        <img className='cart-item__img' src={`Images/${image}`} alt={name} />
      </div>
      <div className='cart-item__description' >
        <h6 className='cart-item__name'>{name}</h6>
        <p className='cart-item__quantity'>Quantity: {quantity}</p>
        <p className='cart-item__price'>Price: {price}</p>
        <p className='cart-item__total-price'>Total Price: {`${(quantity * price).toFixed(2)} ${currency}`} </p>
        <button className='btn btn-danger'
          onClick={() => props.deleteItem(index)}
        >
          <i className="fa fa-trash"></i> DELETE
          </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: (index) => dispatch(deleteCartItem(index))
  }
}

export default connect(null, mapDispatchToProps)(CartItem);

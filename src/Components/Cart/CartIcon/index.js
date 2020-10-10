import React from 'react';
import './CartIcon.scss'
import { connect } from 'react-redux'
const CartIcon = (props) => {
  return (
    <div className='cart-icon'>
      <i className="fa fa-shopping-cart"></i>
      <span className='badge badge-danger'>{
        props.cartItems.reduce((total, item) => {
          return total + item.quantity
        }, 0)}
      </span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartReducer.cart
  }
}
export default connect(mapStateToProps)(CartIcon);

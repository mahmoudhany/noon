import React from 'react';
import { connect } from 'react-redux'
import { clearCart } from '../../Redux/Actions/Cart'
import CartItem from './CartItem'
import './Cart.scss'
import { withRouter } from 'react-router-dom';

const Cart = (props) => {
  const checkAuth = () => {
    props.user ? props.onClearCart() : props.history.push('/signup')
  }
  return (
    <div className='container-fluid'>
      {
        props.cartItems.length === 0 ?
          <h1>Cart is empty</h1>
          :
          <div>
            <div className='cart'>
              {
                props.cartItems.map((item, index) => {
                  return <CartItem
                    key={item.date}
                    {...item}
                    index={index}
                  />
                })
              }
            </div >
            <div className='checkout'>
              <h3>
                {
                  `Total Price: ${props.cartItems.reduce((total, item) => {
                    return total + item.quantity * item.price
                  }, 0).toFixed(2)}`
                }
              </h3>
              <button
                className="btn btn-success"
                onClick={checkAuth}
              >Procced To Checkout</button>
            </div>
          </div>
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartReducer.cart,
    user: state.auth.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onClearCart: () => dispatch(clearCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cart));

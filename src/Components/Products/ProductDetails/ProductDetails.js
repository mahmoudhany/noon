import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../../../Redux/Actions/Cart';
import products from '../../../Assets/products.json'
import './ProductDetails.scss'
import { withRouter } from 'react-router-dom';

class ProductDetails extends Component {
  state = {
    product: null,
    quantity: 1
  }
  getProductById = (id) => {
    return products.find(item => { return item.id === id })
  }
  increaseQuantity = () => {
    this.setState({ quantity: this.state.quantity < 5 ? this.state.quantity + 1 : 5 })
  }
  decreaseQuantity = () => {
    this.setState({ quantity: this.state.quantity > 1 ? this.state.quantity - 1 : 1 })
  }
  componentDidMount() {
    this.setState({ product: this.getProductById(+this.props.match.params.id) })
  }
  handleAddToCart = (id) => {
    const item = {
      ...this.state.product,
      quantity: this.state.quantity,
      date: new Date().getTime()
    }
    this.props.onAddToCart(item, id)
    this.props.history.push('/cart')
  }
  render() {
    const { id, name, price, currency, image, description } = this.getProductById(+this.props.match.params.id)
    return (
      <div className='product__details' >
        <h1 className='title'>Product Details</h1>
        <div className="container ">
          <div className="product__details__img">
            <img src={`/Images/${image}`} alt={name} />
          </div>
          <div className="product__details__description">
            <h2>{name}</h2>
            <p className='price'>{price + ' ' + currency}</p>
            <p className='description'>{description}</p>
            <div className="quantity">
              <span>Quantity: </span>
              <button className='btn btn-outline-primary' onClick={this.decreaseQuantity}>-</button>
              <button className='btn'>{this.state.quantity}</button>
              <button className='btn btn-outline-primary' onClick={this.increaseQuantity}>+</button>

            </div>
            <button
              className='btn btn-primary'
              onClick={() => this.handleAddToCart(id)}
            >Add to cart</button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: (item, id) => dispatch(addToCart(item, id))
  }
}

export default connect(null, mapDispatchToProps)(withRouter(ProductDetails));

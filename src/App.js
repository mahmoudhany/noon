import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router'
import { connect } from 'react-redux';
import './App.css';
import Home from './Components/Home/Home'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Layout from './HOC/Layout';
import Profile from './Components/Profile/Profile'
import ProductDetails from './Components/Products/ProductDetails/ProductDetails'
import Cart from './Components/Cart'

class App extends Component {
  render() {
    let routes = null
    if (this.props.user) {
      routes =
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product-details/:id" component={ProductDetails} />
          <Redirect to='/' />
        </Switch>
    } else {
      routes = <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/product-details/:id" component={ProductDetails} />
        <Redirect to='/signup' />
      </Switch>
    }
    return (
      <Layout className="App" >
        {routes}
      </Layout>
    )
  }
}
const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}
export default connect(mapStateToProps)(App);

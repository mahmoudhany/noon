import React, { Component } from 'react';
import Products from '../Products'
import './Home.scss'

// import { withRouter } from 'react-router-dom'

class Home extends Component {

  render() {
    return (
      <section className='container-fluid container__home'>
        <Products />
      </section>
    );
  }
}

export default Home;

import React from 'react';
import './Toolbar.css'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../Firebase'
import * as actions from '../../Redux/Actions/Auth'

const Toolbar = (props) => {
  const logout = () => {
    console.log(props);
    auth.signOut()
      .then(() => {
        props.onLogout()
        props.history.push('/signup')
      })
      .catch(error => console.log(error))
  }
  let links = null
  if (props.user) {
    links = (
      <ul className="navbar-nav ml-auto ">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/profile">Profile<span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item active">
          <button className='btn btn-danger my-2 my-sm-0' onClick={logout}>Logout</button>
        </li>
      </ul>
    )
  } else {
    links = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/signup">Sign Up <span className="sr-only">(current)</span></NavLink>
        </li>
      </ul>
    )
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Noon</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {links}
          </div>
        </div>
      </nav>
    </header>
  );
};
const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Toolbar));

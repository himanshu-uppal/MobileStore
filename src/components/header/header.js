import React from 'react';
import {NavLink} from 'react-router-dom';

export let Header = () =>{
    return(
        <React.Fragment>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to='/'>Mobile Store</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <NavLink exact activeClassName="current" className="nav-link" to='/'>Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink exact activeClassName="current" className="nav-link" to='/cart'>Cart</NavLink>
      </li>
     
      <li className="nav-item">
      <NavLink exact activeClassName="current" className="nav-link" to='/login'>Login</NavLink>
      </li>
      <li className="nav-item">
      <NavLink exact activeClassName="current" className="nav-link" to='/logout'>Logout</NavLink>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        </React.Fragment>
    )
}
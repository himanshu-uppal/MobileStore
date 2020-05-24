import React from 'react';
import {NavLink} from 'react-router-dom';

export let Header = (props) =>{

  let onSearch = (event) =>{

    console.log(event.target.value);
    event.preventDefault();
   props.onSearchUpdate(event.target.value);

  }
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
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={onSearch} />
    </form>
  </div>
</nav>
        </React.Fragment>
    )
}
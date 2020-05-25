import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import AuthContext from '../../context/auth-context';
export let Header = (props) =>{

  let {handleLogout} = props;
  const authContext = useContext(AuthContext) 

  console.log(authContext);

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
     
      {authContext.authenticated ?  '' : <li className="nav-item">
      <NavLink exact activeClassName="current" className="nav-link" to='/login'>Login</NavLink>
      </li>}
     {authContext.authenticated ? <li className="nav-item">
      <button exact activeClassName="current" className="nav-link" onClick={handleLogout}>Logout</button>
      </li> : ''} 
    </ul>
 
  </div>
</nav>
        </React.Fragment>
    )
}


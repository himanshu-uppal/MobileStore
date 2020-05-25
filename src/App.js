import React from 'react';
import { BrowserRouter,Route, Switch, Redirect } from "react-router-dom";
import HomeContainer from './components/home/home-container';
import {My404Component} from './components/error/404';
import MobileInfoContainer from './components/mobile-info/mobile-info-container';
import CartContainer from './components/cart/cart-container';
import { LoginComponent } from './components/login/login';
import AuthContext from './context/auth-context'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isAuthenticated:false
    }

    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleAuthentication(isAuthenticated){
    console.log('app authentication - '+ isAuthenticated)
    this.setState({
      isAuthenticated:isAuthenticated
    })

  }

  handleLogout(){

    this.setState({
      isAuthenticated:false
    })

  }
  render(){
  return (
   <React.Fragment>  
   	<AuthContext.Provider 
    value={{ 
        authenticated: this.state.isAuthenticated, 
       
    }}
>
   <BrowserRouter>   
   <Switch>   
  
                         <Route
                        exact
                        path="/product-info/:productId"
                        component={() => <MobileInfoContainer handleLogout={this.handleLogout}  />} />
                         <Route
                        exact
                        path="/cart"
                        component={() => <CartContainer handleLogout={this.handleLogout}  />} />
                    <Route exact path='/404' component={My404Component} />
                    <Route exact path='/login' component={() =><LoginComponent handleAuthentication={this.handleAuthentication} />} />
                    <Route
                        exact
                        path="/"
                        component={() => <HomeContainer handleLogout={this.handleLogout}  />} />
                    <Redirect from='*' to='/' />
                    </Switch>
                    </BrowserRouter>
                    </AuthContext.Provider> 
 

  </React.Fragment>  );
}
}

export default App;

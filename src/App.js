import React from 'react';
import { BrowserRouter,Route, Switch, Redirect } from "react-router-dom";
import HomeContainer from './components/home/home-container';
import {My404Component} from './components/error/404';
import MobileInfoContainer from './components/mobile-info/mobile-info-container';
import {CartComponent} from './components/cart/cart';
import { LoginComponent } from './components/login/login';

function App() {
  return (
   <React.Fragment>   
   <BrowserRouter>   
   <Switch>   
  
                         <Route
                        exact
                        path="/product-info/:productId"
                        component={MobileInfoContainer} />
                         <Route
                        exact
                        path="/cart"
                        component={CartComponent} />
                    <Route exact path='/404' component={My404Component} />
                    <Route exact path='/login' component={LoginComponent} />
                    <Route
                        exact
                        path="/"
                        component={HomeContainer} />
                    <Redirect from='*' to='/' />
                    </Switch>
                    </BrowserRouter>
 

  </React.Fragment>  );
}

export default App;

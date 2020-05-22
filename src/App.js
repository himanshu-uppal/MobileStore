import React from 'react';
import { BrowserRouter,Route, Switch, Redirect } from "react-router-dom";
import {HomeComponent} from './components/home/home';
import {My404Component} from './components/error/404';
import {MobileInfoComponent} from './components/mobile-info/mobile-info';
import {CartComponent} from './components/cart/cart';
import { LoginComponent } from './components/login/login';
import {Header} from './components/header/header'
var ES6Promise = require("es6-promise");
ES6Promise.polyfill();

function App() {
  return (
   <React.Fragment>   
   <BrowserRouter>
   <Header></Header>
   <Switch>   
  
                         <Route
                        exact
                        path="/product-info"
                        component={MobileInfoComponent} />
                         <Route
                        exact
                        path="/cart"
                        component={CartComponent} />
                    <Route exact path='/404' component={My404Component} />
                    <Route exact path='/login' component={LoginComponent} />
                    <Route
                        exact
                        path="/"
                        component={HomeComponent} />
                    <Redirect from='*' to='/' />
                    </Switch>
                    </BrowserRouter>
 

  </React.Fragment>  );
}

export default App;

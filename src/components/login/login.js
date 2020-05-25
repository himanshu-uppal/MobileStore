import React from 'react';
import '../../styles/login.css';
import { Redirect } from 'react-router-dom';
import {Header} from '../header/header';


export class LoginComponent extends React.Component{  

    constructor(props) {
		super(props);
		
		console.log(props);

        let username = '';
        let password = '';

        this.state = {
          isLoading:false,
          username: username,
		  password: password,
		  isAuthenticated:false,
		  errorMessage : null      
      };
    }

    
     

    handleInputChange = (event)=> {

      const target = event.target;
      const value = target.value; 
      const name = target.name;      
     
        this.setState({
          [name]: value
        });      
        
      };
      
      handleLogin = (event)=>{

		

        let user ={
          'username':this.state.username,
          'password':this.state.password
        };

		console.log(user);

	if(user.username === 'himanshu' && user.password === 'password')
	{

		this.setState({isAuthenticated : true},() => {

			this.props.handleAuthentication(true);
			return <Redirect to='/' />;
		})

	}
	else{
		this.setState({errorMessage: 'Invalid Credentials'})
	}	
		
        event.preventDefault();        
      }
      
    render(){

         if (this.state.isAuthenticated) {
			 console.log('already logged in ');
		return <Redirect to='/' />;
    }         
        return (
        <React.Fragment>
	
		<Header />
                     
              <main className="container">
            
			  {this.state.errorMessage ? <h2 > Invalid Login Credentials !</h2>: ''}
              <div className="login-form box-shadow">   
                      
              <h2>Account Login</h2>  
             
                
                <form className="loginForm">
              
                <div className="form-group">
                  
                  <input className="form-control " type="text" name="username" placeholder="Enter Username" value={this.state.username} onChange={this.handleInputChange} />
                     
                </div>
                <div className="form-group">
                  
                  <input className="form-control " type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleInputChange}/>
                 
                </div>
              
                <div className="form-group"> 
                  <input type="submit" className="form_submit_btn" onClick={this.handleLogin} value="Login" />    
                </div>    
            </form>
            </div>
          </main>
		
      </React.Fragment>
      );
    }
}


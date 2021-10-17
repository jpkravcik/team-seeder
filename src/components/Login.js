import React, {useState} from 'react';
import axios from 'axios';
import './Login.css';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from './apiConstants';
import { withRouter } from "react-router-dom";

function Login(props) {
    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            "email":state.email,
            "password":state.password,
        }
        axios.post(API_BASE_URL+'/user/login', payload)
            .then(function (response) {
                if(response.status === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful. Redirecting to home page..'
                    }))
                    localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                    redirectToHome();
                    props.showError(null)
                }
                else if(response.code === 204){
                    props.showError("Username and password do not match");
                }
                else{
                    props.showError("Username does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/');
    }
    const redirectToRegister = () => {
        props.history.push('/register'); 
        props.updateTitle('Register');
    }
    return(
        
        <div className = "loginWrapper">
                <h1>Login Page</h1>      
                
        
            <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                <form className= "formContainer">
                    <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <br />
                    <input type="email" 
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" 
                        value={state.email}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group text-left">
                    <br />
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <br />
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} 
                    />
                    </div>
                    <div className="form-check">
                    </div>
                    <button 
                        type="submit" 
                        className="defaultButton"
                        //onClick={handleSubmitClick} 
                        onClick={() =>redirectToHome()} //not in final
                    >Submit</button>
                </form>
                <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                    {state.successMessage}
                </div>
                <div className="registerMessage">
                    <span>Dont have an account? </span>
                    <span className="loginText" onClick={() => redirectToRegister()}>Register</span> 
                       
                </div>
                 
            </div>
                <p2>As for coding the login and registration pages, I was able to find reference code to have
                            a template to go off of but implementing the code itself did require myself to have an 
                    understanding of both the current written code and the code that I was merely using as a 
                    template. As I was implementing the login page, I realized some of my limitations, such 
                    as not having a database to store or pull information from. This meant I would need to 
                    modify some of my code to fit the RDP demo for the week and continue to work on 
                    it later for the final product.
                </p2>  
            
        </div>
        
    )
}

export default withRouter(Login);
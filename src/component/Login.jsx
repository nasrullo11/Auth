import './login.css'
import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { LoginAuthAction } from "../redux/actions/AuthAction";

function Login(props) {
    const { login } = props;
    
    const [errorHandler, setErrorHandler] = useState({
        hasError: false,
        message: "",
    });
    
    const [loginState, setLoginState] = useState({});

    return (
        <div className="login">
            <div>
                <div id="login-box">
                    <div class="left">
                        <h1>Sign in</h1>
                        <form onSubmit={
                            (event) => {
                                event.preventDefault();
                                login(loginState, history, setErrorHandler);
                              }
                        }>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                id="username"
                                onChange={(event) => {
                                    const username = event.target.value;
                                    setLoginState({ ...loginState, ...{ username } });
                                }}/>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                id="password"
                                onChange={(event) => {
                                    const password = event.target.value;
                                    setLoginState({ ...loginState, ...{ password } });
                                    }}
                            />                    
                            <div className="div">
                                <Link to="/signup" className="link">Sign Me Up</Link>
                                <input type="submit" name="signup_submit" value="Log In"/>
                            </div>
                        </form>
                    </div>
                    
                    <div class="right">
                        <span class="loginwith">Sign in with<br />social network</span>
                        <button class="social-signin facebook">Log in with facebook</button>
                        <button class="social-signin twitter">Log in with Twitter</button>
                        <button class="social-signin google">Log in with Google+</button>
                    </div>
                    <div class="or">OR</div>
                </div>
            </div>
        </div>
    )
    }

const mapStateToProps = (state) => {
    return {
      user: state,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      login: (loginState, history, setErrorHandler) => {
        dispatch(LoginAuthAction(loginState, history, setErrorHandler));
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);



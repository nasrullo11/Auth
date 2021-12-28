import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './form.css'
import axios from "axios"

export class Form extends Component {
    sign_up = () => {
        axios.post("https://rahmet97.pythonanywhere.com/api/sign-up", 
                {
                    first_name: document.getElementById('first_name').value,
                    last_name:document.getElementById('last_name').value,
                    username:document.getElementById('username').value,
                    email:document.getElementById('email').value, 
                    password1:document.getElementById('password1').value,
                    password2:document.getElementById('password2').value
                })
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        return (
            <div>
                <div id="login-box">
                    <div class="left">
                        <h1>Sign up</h1>
                        <input type="text" name="username" placeholder="First Name" id="first_name"/>
                        <input type="text" name="username" placeholder="Last Name" id="last_name"/>
                        <input type="text" name="username" placeholder="Username" id="username"/>
                        <input type="text" name="email" placeholder="E-mail" id="email"/>
                        <input type="password" name="password" placeholder="Password" id="password1"/>
                        <input type="password" name="password2" placeholder="Confirm password" id="password2"/>                        
                        <div className="div">
                            <input type="submit" name="signup_submit" value="Sign me up" onClick={this.sign_up}/>
                            <Link to="/login" className="link">Log In</Link>
                        </div>
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
        )
    }
}

export default Form

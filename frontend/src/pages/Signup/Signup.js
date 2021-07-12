import React from 'react';
import './Signup.css';

import logo from '../../assets/big_logo.png';

export default function Signup() {
    return (
        <div className="loginContainer">
            <div className="logoContainer"><img className="logo" src={logo} alt="logo" /></div>
            <form className="formContainer">
                <input type="text" className="box" placeholder="Username" name="username"></input>
                <input type="text" className="box" placeholder="Password" name="password"></input>
                <input type="text" className="box" placeholder="Email" name="email"></input>
                <input type="text" className="box" placeholder="Phone" name="phone"></input>
                <input type="submit" className="submit" value="Sign up!"></input>
            </form>
        </div>
    )
}

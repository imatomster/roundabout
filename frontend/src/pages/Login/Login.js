import React from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/big_logo.png';

export default function Login() {
    return (
        <div className="loginContainer">
            <div className="logoContainer"><img className="logo" src={logo} alt="logo" /></div>
            <form className="formContainer">
                <input type="text" className="box" placeholder="Username" name="username"></input>
                <input type="text" className="box" placeholder="Password" name="password"></input>
                <NavLink to="/home"><input type="submit" className="submit" value="Login!"></input></NavLink>
                <h1 className="footer">Don't have an account?</h1>
                <h1 className="footer">click <NavLink to="/signup" className="underline">here</NavLink> to sign up</h1>
            </form>
        </div>
    )
}

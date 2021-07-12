import React, {useState} from 'react';
import axios from 'axios';
import './Signup.css';

import { NavLink } from 'react-router-dom';

import logo from '../../assets/big_logo.png';

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:1337/api/user/signup', {
            username: username,
            password: password,
            email: email,
            phone: phone
          })
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    }

    return (
        <div className="loginContainer">
            <div className="logoContainer"><img className="logo" src={logo} alt="logo" /></div>
            <form onSubmit={handleSubmit} className="formContainer">
                <input type="text" className="box" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} name="username"></input>
                <input type="text" className="box" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password"></input>
                <input type="text" className="box" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email"></input>
                <input type="text" className="box" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} name="phone"></input>
                <NavLink to="/login"><input type="submit" className="submit" value="Sign up!"></input></NavLink>
            </form>
        </div>
    )
}

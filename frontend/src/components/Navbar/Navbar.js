import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar-container">
                <div className="logo"><NavLink to="/"><h1>Roundabout</h1></NavLink></div>
                <div className="rightside-navbar">
                    <div className="menu">
                    <button className="dropbtn"><h2>Menu</h2></button>
                        <div className="menu_content">
                            <div className="notif"><NavLink to="/notif"><h2>Notifications</h2></NavLink></div>
                            <div className="about"><NavLink to="/about"><h2>About</h2></NavLink></div>
                            <div className="friends"><NavLink to="/friends"><h2>Friends</h2></NavLink></div>
                        </div>
                    </div>
                <div className="login"><NavLink to="/login"><h2>Login</h2></NavLink></div>

                </div> 
        </div>
     

    )
}

export default Navbar

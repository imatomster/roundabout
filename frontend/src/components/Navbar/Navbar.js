import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/mini_logo.png';
import login from '../../assets/login_button.png';

const Navbar = () => {
    return (
        <div className="navbar-container">
                <div className="titleContainer">
                    <div className="title">
                        <NavLink to="/home" className="navlinker">
                            <img src={logo} alt="icon"/>
                            <div>Roundabout</div>
                        </NavLink>
                    </div>
                </div>

                <nav className="navContainer">
                    <ul className="navItems">
                        <li><NavLink to="/home" className="rightItems">About</NavLink></li>
                        <li><NavLink to="/home" className="rightItems">Menu</NavLink></li>
                        <li><NavLink to="/login" className="rightItems"><div className="submit"><p>Login</p></div></NavLink></li>
                    </ul>
                </nav>

                {/* <div className="rightside-navbar">
                    <div className="menu">
                    <button className="dropbtn"><h2>Menu</h2></button>
                        <div className="menu_content">
                            <div className="notif"><NavLink to="/notif"><h2>Notifications</h2></NavLink></div>
                            <div className="about"><NavLink to="/about"><h2>About</h2></NavLink></div>
                            <div className="friends"><NavLink to="/friends"><h2>Friends</h2></NavLink></div>
                        </div>
                    </div>
                    <NavLink to="/login"><img className="login" src={login} /></NavLink>
                    
                </div>  */}
        </div>
     

    )
}

export default Navbar

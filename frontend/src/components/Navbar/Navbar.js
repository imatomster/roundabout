import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar-container">
                <div className="logo"><a href="/"><h1>Roundabout</h1></a></div>
                <div className="menu">
                <button className="dropbtn">Menu</button>
                    <div className="menu_content">
                        <div className="notif"><a href="https://youtu.be/yPYZpwSpKmA"><h2>Notifications</h2></a></div>
                        <div className="about"><a href="/"><h2>About</h2></a></div>
                        <div className="friends"><a href="/"><h2>Friends</h2></a></div>
                    </div>
                </div>
                <div className="login"><a href="https://youtu.be/dQw4w9WgXcQ"><h2>Login</h2></a></div> 
                {/*<div className="notif"><a href="https://youtu.be/yPYZpwSpKmA"><h2>Notifications</h2></a></div>
                <div className="about"><a href="/"><h2>About</h2></a></div>
                <div className="friends"><a href="/"><h2>Friends</h2></a></div>
    */}

            
        </div>

    )
}

export default Navbar

import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar-container">
            <ul className="navbar">
                <li className="logo"><a href="/"><h1>Roundabout</h1></a></li>
                <li className="login"><a href="https://youtu.be/dQw4w9WgXcQ"><h2>Login</h2></a></li> 
                <li className="notif"><a href="https://youtu.be/dQw4w9WgXcQ"><h2>Notifications</h2></a></li>
                <li className="about"><a href="/"><h2>About</h2></a></li>
                <li className="friends"><a href="/"><h2>Friends</h2></a></li>
               
    
            </ul>

            
        </div>

    )
}

export default Navbar

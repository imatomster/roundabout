import React from 'react'
import './Searchbar.css'


const Searchbar = () => {
    return (
        <div>
            <form>
                <input 
                    type="text" 
                    placeholder="Search Location..."
                    id="location-container">
                </input>                
            </form>
        </div>
    )
}

export default Searchbar

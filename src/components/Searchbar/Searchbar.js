import React from 'react'
import './Searchbar.css'
import {FaSistrix} from 'react-icons/fa'


const Searchbar = () => {
    return (
        <div>
            <form className="form-container">
                <input 
                    type="text" 
                    placeholder="Search Location..."
                    id="location-container">                                                             
                </input>                                       
                <FaSistrix id="search-icon"/>                        
            </form>
            
        </div>
    )
}

export default Searchbar

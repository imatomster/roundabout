import React from 'react'
import './Searchbar.css'
import {FaSistrix, FaSyncAlt} from 'react-icons/fa'


const Searchbar = () => {
    return (
        <div>
            <form className="form-container">
                <input 
                    type="text" 
                    placeholder="Search Location..."
                    id="location-container">                                                             
                </input>                                       
                <FaSistrix 
                    id="search-icon"
                    onClick={() => console.log("clicked search")}
                />                        
                <FaSyncAlt 
                    id="refresh-icon"
                    onClick={() => console.log("refresh clicked")}/>
            </form>

            
        </div>
    )
}

export default Searchbar

import React from 'react'
import './Searchbar.css'
import {FaSistrix, FaSyncAlt} from 'react-icons/fa'
import AutoComplete from 'react-google-autocomplete'


const Searchbar = ({destination, setDestination}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <div className="form-container">
                <AutoComplete
                    id="location-container"
                    placeHolder="Enter A Location..."
                    AutoComplete="off"                        
                    onChange={(e) => {
                        setDestination(e.target.value)
                    }}
                    />                  
                <FaSistrix 
                    id="search-icon"
                    onClick={() => console.log(destination)}
                    
                />   
                <FaSyncAlt 
                    id="refresh-icon"
                    onClick={() => console.log("refresh clicked")}/>                                   
            </div>
        </div>
    )
}

export default Searchbar

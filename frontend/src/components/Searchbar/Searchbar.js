import React, {useState} from 'react'
import './Searchbar.css'
import {FaSistrix, FaSyncAlt} from 'react-icons/fa'
import Geocode from "react-geocode"
import AutoComplete from 'react-google-autocomplete'


const Searchbar = () => {

    const [destination, setDestination] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div>
            <form 
                className="form-container"
                onSubmit={handleSubmit}
            >
                <AutoComplete 
                    id="location-container"
                    placeHolder="Enter A Location..."   
                    AutoComplete="off"                                      
                    onChange={(e) => {
                        setDestination(e.target.value)
                    }}
                    value={destination}  
                    />        
                <FaSistrix 
                    id="search-icon"                    
                    onClick={() => {
                        console.log(destination)}}
                    
                />   
                <FaSyncAlt 
                    id="refresh-icon"
                    onClick={() => console.log("refresh clicked")}/>                                   
            </form>
        </div>
    )
}

export default Searchbar

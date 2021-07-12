import React, {useState} from 'react'
import './Searchbar.css'
import {FaSistrix, FaSyncAlt} from 'react-icons/fa'
import Geocode from "react-geocode"
import AutoComplete from 'react-google-autocomplete'


const Searchbar = ({currLat, currLng,setCurrLat, 
    setCurrLng, destination, setDestination, finalLocation, setFinalLocation, isOpen, setIsOpen}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    Geocode.setApiKey("AIzaSyBAk7MGBYPtxGw5RZMZjdUVudTEsDYAUNw")

    const geoCode = () => {
        Geocode.fromAddress(destination).then(
            (response) => {
                const {lat, lng} = response.results[0].geometry.location;
                setCurrLat(lat)
                setCurrLng(lng)
                console.log(currLat, currLng)
            },
            (error) => {
                console.log(error)
            }
        )
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
                    on
                    value={destination}  
                    />        
                <FaSistrix 
                    id="search-icon"                    
                    onClick={() => {
                        geoCode()
                        setFinalLocation(destination) 
                        setIsOpen(true)
                        console.log(geoCode())
                    }}
                    
                />   
                <FaSyncAlt 
                    id="refresh-icon"
                    onClick={() => console.log("refresh clicked")}/>                                   
            </form>
        </div>
    )
}

export default Searchbar

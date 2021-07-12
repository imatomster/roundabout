import React from 'react'
import "./Map.css"
import Geocode from "react-geocode"
import {Marker, InfoWindow} from "react-google-maps"
import {FaWalking} from "react-icons/fa"

const FriendMarker = () => {

    const locations = [
        {lat: 37.75, lng: -122.490001, name: "Dmytro Budym"},
        {lat: 37.73, lng:-122.4194, name: "Danila Fetisov"},
        {lat: 37.77, lng:-122.45, name: "Rafael Cenzaro"},
        {lat: 37.75, lng: -122.4, name: "Siarhei Yakushevich"}
    ]

    return (
        <div>
            {locations.map(location => (
                <Marker
                    key={location.name}
                    position={{lat: location.lat, lng: location.lng}}
                    icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png"}                    
                >
                    <InfoWindow>
                        <div>{location.name}</div>
                    </InfoWindow>
                </Marker>
            ))}
        </div>
    )
}

export default FriendMarker

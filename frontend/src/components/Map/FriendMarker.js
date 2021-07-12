import React from 'react'
import "./Map.css"
import Geocode from "react-geocode"
import {Marker, InfoWindow} from "react-google-maps"
import {FaWalking} from "react-icons/fa"

const FriendMarker = ({locations}) => {



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

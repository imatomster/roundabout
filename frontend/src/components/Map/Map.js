import React, {useState} from 'react'
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import "./Map.css"


function Map() {
  
    const [isOpen, setIsOpen] = useState(true)      
    
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>


      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 37.740460, lng: -122.496730}}
      >
        <Marker
          id="marker"
          position={{ lat: 37.740460, lng: -122.496730 }}     
          onClick={() => {
            setIsOpen(true)
          }}           
        >
          {isOpen && 
            <InfoWindow
              onCloseClick={() => {
                if (isOpen == true) {
                  setIsOpen(false)
                }
              }}>                  
              <div>
                Curdis House
              </div>
          </InfoWindow>}
        </Marker>
      </GoogleMap>
    ));
  
    return (
      <div>        
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAk7MGBYPtxGw5RZMZjdUVudTEsDYAUNw&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100vh`}} />}
          containerElement={<div style={{ 
            height: `75vh`,
            width: `100vh`            
          }} />}
          mapElement={<div style={{ height: `100%` }} />}   
      
        />
      </div>
    );
  }
  
  export default Map;
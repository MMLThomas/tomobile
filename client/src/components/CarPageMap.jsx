import React from 'react'
import {useSelector} from 'react-redux'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';

function Map() {
    const car = useSelector(state => state.car.car)
    let carCoordinates = {lat: car.coordinates[0].lat, lng: car.coordinates[0].lng}

    

    return (
        <>
            <GoogleMap 
                defaultCenter={carCoordinates}
                center={carCoordinates}
                defaultZoom={12}
            >
                <Marker position={carCoordinates}/>
            </GoogleMap>
            
        </>
        
    )
}


const MapWrapped = withScriptjs(withGoogleMap(Map));

function CarPageMap() {
    return (
        <div style={{ width: "100vw", height: "50vh" }}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCub_AIGXKp0fRdQw0YGZXO73HUAqdlGfk`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          />
      </div>
    );
}

export default CarPageMap

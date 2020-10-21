import React from 'react'
import {useSelector} from 'react-redux'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';

function Map() {
    const booking = useSelector(state => state.booking.booking)
    const cars = useSelector(state => state.cars.cars)

   

    
    
    
    return (
        <>
            <GoogleMap 
                defaultCenter={booking.coordinates}
                center={booking.coordinates}
                defaultZoom={15}
            >
                {cars.map(car => <Marker position={{lat: car.attributes.coordinates[0].lat, lng: car.attributes.coordinates[0].lng}}/> )}
            </GoogleMap>
            
        </>
        
    )
}


const MapWrapped = withScriptjs(withGoogleMap(Map));

function SearchPageMap() {
    return (
        <div style={{ width: "35vw", height: "100vh", position: 'sticky' }}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          />
      </div>
    );
}

export default SearchPageMap
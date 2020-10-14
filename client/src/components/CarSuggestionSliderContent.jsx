import React from 'react'
import CarCard from './CarCard'
import { NavLink } from 'react-router-dom'

function CarSuggestionSliderContent(props) {
    
    
    return (
        <div className="next">
            <div className='car-cards'>
                {props.suggestions.map((car) => <div key={car.id}> <NavLink to={`/cars/${car.id}`} ><CarCard car={car.attributes}/></NavLink> </div>)}
            </div>
        </div>    
    )
}

export default CarSuggestionSliderContent

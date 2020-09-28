import React from 'react'
import CarCard from './CarCard'

function CarSuggestionSliderContent(props) {
    return (
        <div className="next">
            <div className='car-cards'>
                {props.suggestions.map((car, id) => <div key={id}> <CarCard car={car}/> </div>)}
            </div>
        </div>    
    )
}

export default CarSuggestionSliderContent

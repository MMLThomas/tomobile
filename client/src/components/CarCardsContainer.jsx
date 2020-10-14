import React from 'react'
import CarCard from './CarCard'
import { NavLink } from 'react-router-dom'


function CarCardsContainer(props) {
    return (
            <ul className="cars-cards-container">
                {props.cars.map((car) => <li className="search-page-card" key={car.id}><NavLink to={`/cars/${car.id}`} ><CarCard car={car.attributes}/></NavLink></li>)}
            </ul>
    )
}

export default CarCardsContainer

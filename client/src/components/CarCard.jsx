import React from 'react'
import './CarCard.css'
import {useDispatch} from 'react-redux'
import {selectCar} from '../actions/index'
import { BsFillStarFill} from 'react-icons/bs'

function CarCard (props) {
    const dispatch = useDispatch();
        return (
            <>
            <div className="car-card-container" onClick={() => dispatch(selectCar(props.car))}>
                    <div className="car-card" >
                        <div className="car-card-image-container">
                            <img src={props.car.images ? props.car.images[0].src : props.car.profile_pic} alt="car" className="car-card-image"/>
                            <div className="price-tag">${props.car.price}/ Day</div>
                        </div>
                        <div className="car-card-info">
                            <div className="car-card-title">{props.car.make} {props.car.model} {props.car.year}</div>
                            <div className="car-card-stats"><strong>{props.car.average_rating}</strong> <BsFillStarFill className="car-rating-star"/> ({props.car.trips_total} trips) </div>
                        </div>
                    </div>  
            </div>
            </>
        )
}

export default CarCard
import React, { Component } from 'react'
import './CarCard.css'
import { BsFillStarFill} from 'react-icons/bs'
// import { NavLink } from 'react-router-dom'

export class CarCard extends Component {
    render(props) {
        return (
            <>
            <div className="car-card-container">
                {/* <NavLink link> */}
                    <div className="car-card">
                        <div className="car-card-image-container">
                            <img src={this.props.car.image} className="car-card-image"/>
                        </div>
                        <div className="car-card-info">
                            <div className="car-card-title">{this.props.car.make} {this.props.car.model} {this.props.car.year}</div>
                            <div className="car-car-stats"><strong>{this.props.car.rating}</strong> <BsFillStarFill className="car-rating-star"/> ({this.props.car.trips} trips) </div>
                        </div>
                    </div>  
                {/* </NavLink> */}
            </div>
            </>
        )
    }
}

export default CarCard

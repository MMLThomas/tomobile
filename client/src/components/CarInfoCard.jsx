import React from 'react'
import {useSelector} from 'react-redux'
import {GiGasPump} from 'react-icons/gi'
import {MdAirlineSeatReclineNormal} from 'react-icons/md'
import {SiGlassdoor} from 'react-icons/si'
import {IoIosSpeedometer} from 'react-icons/io'
import { BsFillStarFill} from 'react-icons/bs'



function CarInfoCard() {
    const car = useSelector(state => state.car.car)

    return (
        <div className="car-info-card ">
            <div className="car-name ">
                {car.year} {car.make} {car.model}
            </div>
            <div className="car-rating-container row">
                    <div className="car-rating">{car.average_rating}</div>    
                    <BsFillStarFill className="car-rating-star"/>({car.trips_total} trips)
            </div>
            <div className="car-specs">
    <div className="car-spec"><IoIosSpeedometer className="car-spec-icon"/> {car.mpg} {car.fuel === 'Gas' ? <> MPG</>:<>M/Charge</>}</div>
                <div className="car-spec"><SiGlassdoor className="car-spec-icon"/> {car.doors} Doors</div>
                <div className="car-spec"><GiGasPump className="car-spec-icon"/> {car.fuel}</div>
                <div className="car-spec"><MdAirlineSeatReclineNormal className="car-spec-icon"/> {car.seats} Seats</div>
            </div>

            <div className="host-card-container">
                <h1 className="section-title">
                    Host
                </h1>
                <div className="host-card">
                    <div className="host-image-rating-container">
                        <img src={car.host.profile_pic} alt="host pic" className='host-image'/>
                        <div className="host-rating">{car.host.average_rating} <BsFillStarFill className='host-card-rating-star'/></div>
                    </div>
                    <div className="host-card-details">
                        <div className="host-name">{car.host.name}</div>
                        <div className="host-trips">{car.host.trips_total} trips completed</div>
                    </div>
                </div>
            </div>
                <h1 className="section-title">
                    Description
                </h1>
            <div className="car-discription">
                {car.description}
            </div>

        </div>
    )
}

export default CarInfoCard

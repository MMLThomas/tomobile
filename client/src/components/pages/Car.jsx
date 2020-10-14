import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {updateBookingStartDate, updateBookingEndDate} from '../../actions/index'
import './Car.css'
import '../../App.css'
import '../LongBookingDetailsForm.sass'
import CarSuggestionSlider from '../CarSuggestionSlider'
import DatePicker from 'react-datepicker'
import CarPageMap from '../CarPageMap'
import CarInfoCard from '../CarInfoCard'
import { NavLink } from 'react-router-dom'

function Car() {
    const dispatch = useDispatch()
    const car = useSelector(state => state.car.car)
    const booking = useSelector(state => state.booking.booking)
    const [currentBookingStart, setcurrentBookingStart] = useState(booking.startDate)
    const [currentBookingEnd, setcurrentBookingEnd] = useState(booking.endDate)
    const [carSliderPosition, setcarSliderPosition] = useState(1)

    const handleStartChange = (date) => {
        dispatch(updateBookingStartDate(date))
        setcurrentBookingStart(date)
    }

    const handleEndChange = (date) => {
        dispatch(updateBookingEndDate(date))
        setcurrentBookingEnd(date)
    }

    const handleArrowClick = () => {
        carSliderPosition === (car.images.length - 1) ? setcarSliderPosition(0) : setcarSliderPosition( carSliderPosition + 1 )
    } 


    return (
        <div>
            <img src={car.images[carSliderPosition].src} alt="car" onClick={handleArrowClick}/>
            <div className="car-page-booking-content">
                <div className="content-container row">
                    <div className="car-info col">
                        <CarInfoCard/>
                    </div>
                    <div className="booking-info col">
                        <div className="car-price"><h1>${car.price}/ day</h1></div>
                        <div className="divider"></div>
                        <div className="booking-info-card">
                            <div className="trip-start booking-tag">
                                Trip start
                            </div>
                            <DatePicker
                                selected={currentBookingStart}
                                onChange={date => handleStartChange(date)}
                                selectsStart
                                startDate={currentBookingStart}
                                endDate={currentBookingEnd}
                            />
                            <div className="trip-end booking-tag">
                                Trip end 
                            </div>
                            
                            <DatePicker
                                selected={currentBookingEnd}
                                onChange={date => handleEndChange(date)}
                                selectsStart
                                startDate={currentBookingStart}
                                endDate={currentBookingEnd}
                                minDate={currentBookingStart}
                            />
                            <div className="trip-location booking-tag">
                                Pickup/Drop-off Location
                            </div>
                                <input type="text" value={car.car_locations[0].name} />
                        </div>
                        <div className="submit-booking-button">
                        <NavLink to='/confirmbooking'>
                            <button className="submit-booking">
                                Submit Booking
                            </button>
                        </NavLink>
                        </div>
                        <div className="divider"></div>
                        <div className="add-to-favorites-button"></div>
                    </div>
                </div>
            </div>
            <div className="car-location-map-container">
                <CarPageMap />
            </div>
            <h1 className="our-suggestions-heading">
                You may also like
            </h1>
            <CarSuggestionSlider />
        </div>
    )
}

export default Car

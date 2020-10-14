import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";
import './ConfirmBooking.css'
import './Car.css'
import '../../App.css'
import {getBookingDays, getBookingDates} from '../ManageBookingDays'
import { NavLink } from 'react-router-dom';
import { fetchBookings } from '../../actions';

const ConfirmBooking = () => {
    const car = useSelector(state => state.car.car)
    const booking = useSelector(state => state.booking.booking)
    const dispatch = useDispatch()
    
    const { user } = useAuth0();
    const { name, picture, email } = user;

    let dates = getBookingDates(booking)

    let totalDays = getBookingDays(booking)

    let totalCost = totalDays * car.price


    const handleSubmitClick = () => {
        let finalBooking = {
            start_time: booking.startDate, 
            end_time: booking.endDate, 
            renter_email: email, 
            car_id: car.id, 
            cost: totalCost, 
            booked_dates: dates, 
            host_id: car.host.id
        };
           
        fetch('http://localhost:3001/bookings', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                booking: finalBooking
            })
            });
            dispatch(fetchBookings());
    }

    

    return (
            <div className="confirm-booking">
                <div className="booking-confirmation-form-container">
                    <div className="booking-dates-confirmation">
                    Duration: {booking.startDate.toDateString()}-{booking.endDate.toDateString()}
                    </div>
                    <div className="booking-pickup-location-confirmation">
                        Pickup location: {car.car_locations[0].name}
                    </div>
                    <div className="booking-price-confirmation">
                        Total Cost: ${totalCost}
                    </div>
                </div>
                <NavLink to='/' className="submit-booking" onClick={handleSubmitClick}> Finalize Booking</NavLink>
            </div>
    )
}

export default ConfirmBooking

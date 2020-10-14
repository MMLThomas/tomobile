import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";
import './ConfirmBooking.css'
import './Car.css'
import '../../App.css'
import {getBookingDays, getBookingDates} from '../ManageBookingDays'
import { NavLink, useHistory } from 'react-router-dom';
import { fetchBookings } from '../../actions';
import { ThemeConsumer } from 'styled-components';

const ConfirmBooking = () => {
    const car = useSelector(state => state.car.car)
    const booking = useSelector(state => state.booking.booking)
    const dispatch = useDispatch()
    const history = useHistory()
    
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
        })
        .then(resp => {
            dispatch(fetchBookings())
        })
        .then(() => history.push('/'))
    }

    

    return (
            <div className="confirm-booking">
                <div className="booking-confirmation-form-container">
                    <div className="booking-dates-confirmation booking-item">
                    Duration: {booking.startDate.toDateString()}-{booking.endDate.toDateString()}
                    </div>
                    <div className="booking-pickup-location-confirmation booking-item">
                        Pickup location: {car.car_locations[0].name}
                    </div>
                    <div className="booking-price-confirmation booking-item">
                        Total Cost: ${totalCost}
                    </div>
                    <button style={{ textDecoration: 'none' }} onClick={handleSubmitClick} className="submit-booking booking-item"><div >  Finalize Booking</div></button>
                </div>
            </div>
    )
}

export default ConfirmBooking

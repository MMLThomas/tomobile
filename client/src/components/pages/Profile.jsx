import React from "react";
import './Profile.css'
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";
import CarCard from "../CarCard";
import { deleteExistingBooking } from "../../actions";

const Profile = () => {
  const { user } = useAuth0();
  const dispatch = useDispatch()
  const { name, picture, email } = user;
  const existingBookings = useSelector(state => state.existingBookings.existingBookings)
  const cars = useSelector(state => state.cars.cars)
  const userBookings = existingBookings.map(booking => booking.attributes.renter_email === email ? booking : null)

  const deleteBooking = (booking) => {
    fetch(`http://localhost:3001/bookings/${booking.id}`, {
              method: 'DELETE',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  booking: booking.id
              })
              });
    dispatch(deleteExistingBooking(booking))
  }
  

  
  return (
    <div className="profile-page">
      <div className="align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="host-image"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
        </div>
      </div>
      <div className="your-bookings-heading">
        Your Bookings
      </div>
      <div className="your-booking-cards-holder">
        {userBookings.map(booking => <div className='your-booking-card'><CarCard car={booking.attributes.car}/> 
        <div className="your-booking-start-end">From {booking.attributes.start_time}  Until  {booking.attributes.end_time}</div>
          <div className="your-booking-price">{booking.attributes.cost}</div>
          <button onClick={() => deleteBooking(booking)}>Delete Booking</button></div> )}
      </div>
    </div>
  );
};



export default Profile;
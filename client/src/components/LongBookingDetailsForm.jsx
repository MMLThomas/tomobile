import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateBookingInfo, sortCarsByDistance} from '../actions/index'
import './LongBookingDetailsForm.sass'
import './LongBookingDetailsForm.css'
import DatePicker from 'react-datepicker'
import {AiOutlineCar} from 'react-icons/ai'
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from "react-places-autocomplete";
import { NavLink } from 'react-router-dom'




function LongBookingDetailsForm() {
    const booking = useSelector(state => state.booking.booking)
    const [startDate, setStartDate] = useState(booking.startDate);
    const [endDate, setEndDate] = useState(booking.endDate);
    const [bookingLocation, setbookingLocation] = useState(booking.location);
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
      });
    const dispatch = useDispatch();
    
    

    const handleClick = (event) => {
        const currentBooking = {  
            startDate: startDate,
            endDate: endDate,
            location: bookingLocation,
            coordinates: coordinates 
        }
        dispatch(updateBookingInfo(currentBooking));
        dispatch(sortCarsByDistance(coordinates));
        // go to search page with variables startDate, endDate, bookingLocation
    }


    const handleSelect = async(value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setbookingLocation(value);
        setCoordinates(latLng);
    }



    return (
        <>
            <div className="long-booking-form-container">
                <div className="long-booking-form">
                    <form className="long-booking-form-inputs">
                        <PlacesAutocomplete
                            value={bookingLocation}
                            onChange={setbookingLocation}
                            onSelect={handleSelect}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps }) => {
                                return (
                                    <div className="location-input">
                                        Where to
                                        <input {...getInputProps({ placeholder: "City, Airport, Hotel" })} className="location-input-text" />

                                        <div>

                                            {suggestions.map(suggestion => {
                                                const style = {
                                                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                                }

                                                return (
                                                    <div {...getSuggestionItemProps(suggestion, { style })}>
                                                        {suggestion.description}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            }}
                        </PlacesAutocomplete>
                        <div  >
                            <p className="booking-date-input-text-start">From</p>
                            <DatePicker
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                className="date-picker-start"
                                name="start-date"
                            />
                        </div>
                        <div >
                            <p className="booking-date-input-text-end"> Until</p>
                            <DatePicker
                                selected={endDate}
                                onChange={date => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                className="date-picker-end"
                                name="end-date"
                        />   
                        </div>
                        <NavLink to="/search" >
                            <button type='submit' onClick={handleClick} className='invisable-button'><AiOutlineCar className="form-submit-icon"/></button>
                        </NavLink>
                    </form>
                </div>
            </div>

        </>
    )
}

export default LongBookingDetailsForm

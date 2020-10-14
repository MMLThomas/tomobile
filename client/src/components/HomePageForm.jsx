import React from 'react'
import {useSelector} from 'react-redux'
import './HomePageForm.css'
import '../App.css'
import formImage from './images/homepage-form-image-15.png'
import LongBookingDetailsForm from './LongBookingDetailsForm'
import {homepageFormText} from './HomePageFormText'

function HomePageForm() {
    const language = useSelector(state => state.language.language)

    
    return (
        <div className='homepage-form-container'>
            <img src={formImage} alt=''/>
            <h1 className="homepage-form-heading">
            {homepageFormText[language]["heading"]}
            </h1>
            <p className="homepage-form-heading-subtext">
            {homepageFormText[language]["subheading"]}
            </p>
            <div className="long-booking-details-form">
                <LongBookingDetailsForm />
            </div>
        </div>
    )
}

export default HomePageForm

import React from 'react'
import {useSelector} from 'react-redux'
import './Car.css'
import '../../App.css'

function Car() {
    const booking = useSelector(state => state.booking)



    return (
        
        <div>
            {console.log(booking)}
        </div>
    )
}

export default Car

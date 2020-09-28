import React from 'react'
import {BiRightArrow} from 'react-icons/bi'

function NextCarArrow(props) {
    return (
        <div onClick={props.nextCar} className='arrow-container'>
            <div> <BiRightArrow className="arrow" /> </div>
        </div>
    )
}

export default NextCarArrow
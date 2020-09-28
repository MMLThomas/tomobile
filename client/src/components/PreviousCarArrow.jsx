import React from 'react'
import { BiLeftArrow} from 'react-icons/bi'

function PreviousCarArrow(props) {
    return (
        <div onClick={props.previousCar} className='arrow-container'>
            <div > <BiLeftArrow className="arrow"/> </div>
            
        </div>
    )
}

export default PreviousCarArrow
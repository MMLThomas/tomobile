import React from 'react'
import { IoIosArrowBack} from 'react-icons/io'

function PreviousCategoryArrow(props) {
    return (
        <div onClick={props.previousCategory} className='arrow-container'>
            <div > <IoIosArrowBack className="arrow"/> </div>
            
        </div>
    )
}

export default PreviousCategoryArrow

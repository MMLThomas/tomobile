import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'

function NextCategoryArrow(props) {
    return (
        <div className='arrow-container' onClick={props.nextCategory}>
            <div > <IoIosArrowForward className="arrow"/> </div>
        </div>
    )
}

export default NextCategoryArrow

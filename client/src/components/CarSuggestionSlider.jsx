import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import './CarSuggestionSlider.css'
import CarSuggestionSliderContent from './CarSuggestionSliderContent';
import NextCarArrow from './NextCarArrow';
import PreviousCarArrow from './PreviousCarArrow';


function CarSuggestionSlider() {
    const cars = useSelector(state => state.cars.cars)
    
    const [activeIndex, advanceSlider] = useState([0, 1, 2])

    const activeCars = activeIndex.map( i => cars[i])

    const nextCar = () =>  advanceSlider(activeIndex.map( i => i === 0 ? cars.length -1 : i - 1 ));


    const previousCar = () => advanceSlider(activeIndex.map( i => i === cars.length -1 ? 0 : i + 1 ));

    
   
    return (

        <>
            
            <div className="car-slider-container">
                <div className="car-slider">
                    <PreviousCarArrow previousCar={previousCar} className='car-previous-arrow' />
                    <div className="car-cards-container">
                        <CarSuggestionSliderContent suggestions={activeCars}/>                
                    </div>
                    <NextCarArrow nextCar={nextCar} className='car-next-arrow'/>
                </div>
            </div>
                
        </>
    )
}

export default CarSuggestionSlider

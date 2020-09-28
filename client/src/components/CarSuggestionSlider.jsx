import React, {useState} from 'react'
import './CarSuggestionSlider.css'
import CarSuggestionSliderContent from './CarSuggestionSliderContent';
import NextCarArrow from './NextCarArrow';
import PreviousCarArrow from './PreviousCarArrow';


function CarSuggestionSlider() {

    const suggestions = [ 
        {image: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/T231IpdASK-ETbFFDtbx0A.730x390.jpg', make: 'Honda', model: 'Civic', year: '2000', rating: '5.0', trips:'30'}, 
        {image: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/LilciOAASA-JvGMXK9GpSg.730x390.jpg', make: 'Toyota', model: 'Civic', year: '2010', rating: '4.7', trips:'22'},
        {image: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/UkPmq-R7TmWo9oeRarzrnw.730x390.jpg', make: 'Mercedes', model: 'G-Class', year: '2020', rating: '4.3', trips:'18'}, 
        {image: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/u9uBWu4ETWW7Oc9oZubE8A.730x390.jpg', make: 'Lexus', model: 'Civic', year: '2008', rating: '5.0', trips:'5'}, 
        {image: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/ZfN9J7-JTYKtInncZkmeBQ.730x390.jpg', make: 'Ford', model: 'Civic', year: '2016', rating: '4.8', trips:'55'}
    ]
    
    const [activeIndex, advanceSlider] = useState([0, 1, 2])

    const activeCars = activeIndex.map( i => suggestions[i])

    const nextCar = () =>  advanceSlider(activeIndex.map( i => i === 0 ? suggestions.length -1 : i - 1 ));


    const previousCar = () => advanceSlider(activeIndex.map( i => i === suggestions.length -1 ? 0 : i + 1 ));


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

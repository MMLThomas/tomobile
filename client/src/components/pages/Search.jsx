import React, {useState} from 'react'
import SearchPageMap from '../SearchPageMap'
import './Search.css'
import '../../App.css'
import { useSelector, useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom'
import CarCard from '../CarCard'
import { sortCarsByPrice, sortCarsByMPG, sortCarsByRating } from '../../actions'
import CarCardsContainer from '../CarCardsContainer'
       
const Search = () => {
    const cars = useSelector(state => state.cars.cars)
    const booking = useSelector(state => state.booking.booking)
    const [loading, setloading] = useState(cars.requesting)
    const [filter, setfilter] = useState('')
    const dispatch = useDispatch()


    const handlePriceClick = () => {
        dispatch(sortCarsByPrice());
        setfilter('price')
    }
    const handleMPGClick = () => {
        dispatch(sortCarsByMPG());
        setfilter('mpg')
    }
    const handleRatingClick = () => {
        dispatch(sortCarsByRating());
        setfilter('rating')
    }

    
    return (
        <div>
            <div className="search-filters-container">
                <div className="filter-buttons-container">
                    <label className="search-page-label" > Sort By</label>
                    <button className="search-page-button" onClick={() => handlePriceClick()}> Price</button>
                    <button className="search-page-button" onClick={() => handleMPGClick()}> MPG</button>
                    <button className="search-page-button" onClick={() => handleRatingClick()}> Rating</button>
                </div>
            </div>
            <div className="searchpage-map-cards-container">
                <CarCardsContainer cars={cars} />
                <div className="searchpage-map-container">
                    {loading ? <div> ...loading </div> : <SearchPageMap className="searchpage-map"/> }
                </div>
            </div>
        </div>
    )
}

export default Search

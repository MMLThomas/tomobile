import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import '../../App.css'
import './Home.css'
import {homepageText} from './HomeText'
import HomePageForm from '../HomePageForm'
import FeaturesOne from '../FeaturesOne'
import CategoriesSlider from '../categories_slider_components/CategoriesSlider'
import CarSuggestionSlider from '../CarSuggestionSlider';
import FeaturesTwo from '../FeaturesTwo';
import ListYourCarButton from '../ListYourCarButton';
import { useEffect } from 'react';
import { fetchBookings, fetchCars } from '../../actions';

 
function Home () {
  let language = useSelector(state => state.language.language)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBookings());
    dispatch(fetchCars());
   }, [])
  
  
    return (
      <div >
          <HomePageForm />
          <FeaturesOne/>
          <CategoriesSlider />
          <div className="random-suggestion-slider">
            <h2 className='our-suggestions-heading'>{homepageText[language]["ourSuggestionsHeading"]}</h2>
            <CarSuggestionSlider />
          </div>
          <FeaturesTwo/>
          <ListYourCarButton className="home-list-car-button"/>
      </div>

    )
  }

 
export default Home;
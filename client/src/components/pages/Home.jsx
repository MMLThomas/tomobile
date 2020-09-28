import React from 'react';
import {useSelector} from 'react-redux'
import '../../App.css'
import './Home.css'
import {homepageText} from './HomeText'
import HomePageForm from '../HomePageForm'
import FeaturesOne from '../FeaturesOne'
import CategoriesSlider from '../categories_slider_components/CategoriesSlider'
import CarSuggestionSlider from '../CarSuggestionSlider';
 
function Home () {
  let language = useSelector(state => state.language.language)

  
    return (
      <div >
          <HomePageForm />
          <FeaturesOne/>
          <CategoriesSlider />
          <div className="random-suggestion-slider">
            <h2 className='our-suggestions-heading'>{homepageText[language]["ourSuggestionsHeading"]}</h2>
            <CarSuggestionSlider />
          </div>
          <FeaturesOne/>
      </div>

    )
  }

 
export default Home;
import React from 'react'
import {useSelector} from 'react-redux'
import './FeaturesOne.css'
import {featureOneText} from './FeatureOneText'
import '../App.css'
import {GiSnowflake1, GiVacuumCleaner, GiAerialSignal} from "react-icons/gi";


function FeaturesOne() {
    const language = useSelector(state => state.language.language)
    


    return (
        <div className="feature-one">
            <div className='feature-one-heading'>
                <h2 className='heading-one'>{featureOneText[language]["main heading one"]}</h2>
                <h1 className='heading-two'>{featureOneText[language]["main heading two"]}</h1>
            </div>
            <div className="feature-container">
                <div className="feature">
                    <GiVacuumCleaner className="feature-logo"/>
                    <h2 className='feature-title'>{featureOneText[language]["first heading"]}</h2>
                    <p>{featureOneText[language]["first content"]}</p>
                </div>
                <div className="feature">
                    <GiAerialSignal className="feature-logo"/>
                    <h2 className='feature-title'>{featureOneText[language]["second heading"]}</h2>
                    <p>{featureOneText[language]["second content"]}</p>
                </div>
                <div className="feature">
                    <GiSnowflake1 className="feature-logo"/>
                    <h2 className='feature-title'>{featureOneText[language]["third heading"]}</h2>
                    <div className="feature-content">
                        <p>{featureOneText[language]["third content"]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesOne

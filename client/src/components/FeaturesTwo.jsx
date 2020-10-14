import React from 'react'
import {useSelector} from 'react-redux'
import './FeaturesOne.css'
import {featureTwoText} from './FeatureTwoText'
import '../App.css'
import {GiMoneyStack, GiCancel } from "react-icons/gi";
import {BiSupport} from 'react-icons/bi'


function FeaturesTwo() {
    const language = useSelector(state => state.language.language)
    


    return (
        <div className="feature-one">
            <div className='feature-one-heading'>
                <h2 className='heading-one'>{featureTwoText[language]["main heading one"]}</h2>
                <h1 className='heading-two'>{featureTwoText[language]["main heading two"]}</h1>
            </div>
            <div className="feature-container">
                <div className="feature">
                    <GiMoneyStack className="feature-logo"/>
                    <h2 className='feature-title'>{featureTwoText[language]["first heading"]}</h2>
                    <p>{featureTwoText[language]["first content"]}</p>
                </div>
                <div className="feature">
                    <BiSupport className="feature-logo"/>
                    <h2 className='feature-title'>{featureTwoText[language]["second heading"]}</h2>
                    <p>{featureTwoText[language]["second content"]}</p>
                </div>
                <div className="feature">
                    <GiCancel className="feature-logo"/>
                    <h2 className='feature-title'>{featureTwoText[language]["third heading"]}</h2>
                    <div className="feature-content">
                        <p>{featureTwoText[language]["third content"]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesTwo

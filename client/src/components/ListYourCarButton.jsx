import React from 'react'
import { NavLink } from 'react-router-dom'
import './ListYourCarButton.css'
import { useSelector } from 'react-redux'

export default function ListYourCarButton() {
    const language = useSelector(state => state.language.language);

    let text = {
        ["arabic"]: 'أظهر سيارتك',
        ["english"]: 'List Your Car',
        ["french"]: 'Listez Votre Voiture'
    }


    return (
        <NavLink to='/'>
            <button className="list-your-car-button">{text[language]}</button>
        </NavLink>
    )
}

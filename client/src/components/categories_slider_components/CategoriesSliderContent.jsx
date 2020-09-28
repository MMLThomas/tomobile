import React, { Component } from 'react'
import CategoryCard from './CategoryCard'

export default class CategoriesSliderContent extends Component {

    

    render(props) {
        return (
            <div className='c-cards'>
                {this.props.categories.map((category, id) => < div key={id}><CategoryCard category={category} /></div> )}
            </div>
        )
    }
}

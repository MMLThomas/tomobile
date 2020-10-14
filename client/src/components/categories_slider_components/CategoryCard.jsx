import React from 'react'

function CategoryCard(props) {
    return (
        <div className='category-card'>
            <img src={props.category.image} alt="car" className='category-card-image'/>
            <div className='category-card-text'>{props.category.name}</div>
        </div>
    )
}

export default CategoryCard

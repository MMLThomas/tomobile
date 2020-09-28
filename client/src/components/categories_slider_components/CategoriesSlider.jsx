import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import './CategoriesSlider.css'
import NextCategoryArrow from './NextCategoryArrow'
import PreviousCategoryArrow from './PreviousCategoryArrow'
import '../../App.css'
import CategoriesSliderContent from './CategoriesSliderContent'
import {categoriesSliderText} from './CategoriesSliderText'



const CategoriesSlider = () => {

    const language = useSelector(state => state.language.language);

    const categories = [
        {name: 'Sport', image: 'https://www.fairwayford.com/inventoryphotos/4227/1fa6p8cf9l5132739/ip/7.jpg?height=400'}, 
        {name: 'Exotic', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-lamborghini-huracan-evo-spyder-drive-111-1564544744.jpg?crop=1xw:1xh;center,top&resize=480:*'}, 
        {name: 'Car', image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/7083/1587199027573/front-left-side-47.jpg'}, 
        {name: 'Truck', image: 'https://cnet3.cbsistatic.com/img/imRFrXMwd1kFz40QmZfMJZ4t_AE=/940x0/2020/06/25/ce229744-e459-4e69-aef4-6379af9c17e3/newall-new-f-150-012.jpg'}, 
        {name: 'Family', image: 'https://img.autobytel.com/car-reviews/autobytel/131122-10-sporty-minivans/2017-Chrysler-Pacifica-front-angle-black_400_thb.jpg'}, 
        {name: 'Electric', image: 'https://media.ed.edmunds-media.com/tesla/model-s/2019/oem/2019_tesla_model-s_sedan_performance_fq_oem_3_815.jpg'}, 
        {name: 'Fuel saver', image: 'https://images.hgmsites.net/lrg/2020-toyota-yaris_100696783_l.jpg'}
    ];
    
    
    const [activeIndex, advanceSlider] = useState([0, 1, 2, 3, 4, 5])
    
    const activeCategories = activeIndex.map( i => categories[i])

    const nextCategory = () =>  advanceSlider(activeIndex.map( i => i === 0 ? categories.length -1 : i - 1 ));


    const previousCategory = () => advanceSlider(activeIndex.map( i => i === categories.length -1 ? 0 : i + 1 ));

    return (

        <>
            <div className="slider-container">
                <h2 className='category-slider-heading'>{categoriesSliderText[language]["header"]}</h2>
                    <div className="slider">
                        <PreviousCategoryArrow previousCategory={previousCategory} className='c-previous-arrow' />
                        <div className="c-cards-container">
                            <CategoriesSliderContent categories={activeCategories}/>
                        </div>
                        <NextCategoryArrow nextCategory={nextCategory} className='c-next-arrow'/>

                    </div>
            </div>
            
        </>
    )
}

export default CategoriesSlider

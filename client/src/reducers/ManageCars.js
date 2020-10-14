import {tangier} from '../car_data'


function carsReducer( state = {cars: tangier}, action){
    
    switch (action.type) {

        case 'START_ADDING_CARS_REQUEST':
            return {
              ...state,
              cars: [...state.cars],
              requesting: true
            }
       
        case 'ADD_CARS':
          
          return  {
            ...state,
            cars: action.cars.data,
            requesting: false
          }
        
        case 'SORT_CARS_BY_DISTANCE':
          const distanceFromBooking = (car) => {
            let coords = car.attributes.coordinates[0]
            let a = action.booking.lat - coords.lat
            let b = action.booking.lng - coords.lng
            let distance = Math.abs(a) + Math.abs(b)
            return distance
          }

          let sortedCars = state.cars.sort( (a, b) => distanceFromBooking(a) - distanceFromBooking(b))
          sortedCars = sortedCars.slice(1,50)

          return {
            cars: sortedCars
          }

        case 'SORT_CARS_BY_PRICE':
          let sortedCarsByPrice = state.cars.sort( (a, b) => a.attributes.price - b.attributes.price) 
                
          return {
            cars: sortedCarsByPrice
          }

        case 'SORT_CARS_BY_MPG':
          let sortedCarsByMPG = state.cars.sort( (a, b) =>  b.attributes.mpg - a.attributes.mpg)
          
          return {
            cars: sortedCarsByMPG
          }

        case 'SORT_CARS_BY_RATING':
          let sortedCarsByRating = state.cars.sort( (a, b) =>  b.attributes.average_rating - a.attributes.average_rating)  

          return {
            cars: sortedCarsByRating 
          }
          
        
    
        default:
            return state;
        };
    }

export default carsReducer
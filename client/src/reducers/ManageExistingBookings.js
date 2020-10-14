function existingBookingsReducer( state = {existingBookings: []}, action){
    
    switch (action.type) {
      
        case 'START_ADDING_EXISTING_BOOKINGS_REQUEST':
            return {
                ...state,
                existingBookings: [...state.existingBookings],
                requesting: true
            }
            
        case 'ADD_EXISISTING_BOOKINGS':
            
            return  {
                ...state,
                existingBookings: action.bookings.data,
                requesting: false
            }

        case 'DELETE_EXISISTING_BOOKINGS':
            
            return  {
                existingBookings: state.existingBookings.filter(booking => booking.id !== action.booking.id)
            }

                
        default:
            return state;
            };
        }


export default existingBookingsReducer
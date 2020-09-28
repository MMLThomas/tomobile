function bookingReducer( state = {booking: null}, action){
    
    switch (action.type) {
      case "UPDATE_BOOKING":
        return  {
            ...state,
            booking: action.booking
        };

      default:
        return state;
        };
    }

    

export default bookingReducer



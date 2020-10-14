
const bookingDefault = {
  coordinates: {lat: 35.7595, lng: -5.8340},
  endDate: new Date() ,
  location: null,
  startDate:new Date() 
}


function bookingReducer( state = {booking: bookingDefault }, action){
    
    switch (action.type) {
      case "UPDATE_BOOKING":
        return  {booking: action.booking};

      case 'UPDATE_BOOKING__START_DATE':
        return {booking: {...state, startDate: action.startDate}}

      case 'UPDATE_BOOKING__END_DATE':
        return {booking: {...state, endDate: action.endDate}}

      case 'SUBMIT_BOOKING':
        return 

      default:
        return state;
        };
    }

    

export default bookingReducer



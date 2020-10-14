export const changeLanguage = language => {
    return {
        type: 'CHANGE_LANGUAGE',
        language
    };
};

export const updateBookingInfo = booking => {
    return {
        type: "UPDATE_BOOKING",
        booking
    };
};

export const updateBookingLocation = booking => {
    return {
        type: 'UPDATE_BOOKING_LOCATION',
        booking
    };
};

export const updateBookingStartDate = booking => {
    return {
        type: 'UPDATE_BOOKING__START_DATE',
        booking
    };
};

export const updateBookingEndDate = booking => {
    return {
        type: 'UPDATE_BOOKING__END_DATE',
        booking
    };
};



export const selectCar = car => {
    return {
        type: 'SELECT_CAR',
        car
    };
};

export const updateCars = cars => {
    return {
        type: 'UPDATE_CARS',
        cars
    };
};

export const sortCarsByDistance = booking => {
    return {
    type: 'SORT_CARS_BY_DISTANCE',
    booking
    }
}

export const sortCarsByPrice = () => {
    return {
    type: 'SORT_CARS_BY_PRICE'
    }
}

export const sortCarsByMPG = () => {
    return {
    type: 'SORT_CARS_BY_MPG'
    }
}

export const sortCarsByRating = () => {
    return {
    type: 'SORT_CARS_BY_RATING'
    }
}

export function fetchCars() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_CARS_REQUEST' });
      fetch('http://localhost:3001/cars')
        .then(response => response.json())
        .then(cars => dispatch({ type: 'ADD_CARS', cars }));
    };
};


export function fetchBookings() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_EXISTING_BOOKINGS_REQUEST' });
      fetch('http://localhost:3001/bookings')
        .then(response => response.json())
        .then(bookings => {   
           dispatch({ type: 'ADD_EXISISTING_BOOKINGS', bookings })
        });
    };
};

export const deleteExistingBooking = booking => {
    return{
        type: 'DELETE_EXISISTING_BOOKINGS',
        booking
    }
}





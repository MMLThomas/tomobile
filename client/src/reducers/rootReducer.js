import { combineReducers } from "redux";
import languageReducer from "./ManageSiteLanguage";
import bookingReducer from "./ManageBooking"
import selectedCarReducer from "./ManageSelectedCar"
import carsReducer from "./ManageCars"
import existingBookingsReducer from "./ManageExistingBookings";


const rootReducer = combineReducers({
    language: languageReducer,
    booking: bookingReducer,
    car: selectedCarReducer,
    cars: carsReducer,
    existingBookings: existingBookingsReducer
});

export default rootReducer;
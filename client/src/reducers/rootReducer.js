import { combineReducers } from "redux";
import languageReducer from "./ManageSiteLanguage";
import bookingReducer from "./ManageBookingReducer"


const rootReducer = combineReducers({
    language: languageReducer,
    booking: bookingReducer
});

export default rootReducer;
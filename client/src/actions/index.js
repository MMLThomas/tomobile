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

export const updateBookingDates = booking => {
    return {
        type: 'UPDATE_BOOKING_DATES',
        booking
    };
};


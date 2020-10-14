const calander = {0:31, 1:28, 2: 31, 3:30, 4:31, 5:30,
    6:31, 7:31, 8:30, 9:31, 10:30, 11:31}

export function getBookingDays(booking) {
    // let bookedDaysCount;
    // if(booking.startDate.getFullYear() === booking.endDate.getFullYear()){
    //     if(booking.startDate.getMonth() === booking.endDate.getMonth()){
    //         bookedDaysCount = booking.endDate.getDate() - booking.startDate.getDate();
    //     }
    //     else{
    //         bookedDaysCount += calander[booking.startDate.getDate()] - booking.startDate.getDate()
    //         bookedDaysCount += booking.endDate.getDate()
    //         for(let i = booking.startDate.getMonth() +1; i < booking.endDate.getMonth(); i++ ){
    //             bookedDaysCount += calander[i]
    //         }
    //     }
    // }
    // else{
    //     bookedDaysCount += calander[booking.startDate.getDate()] - booking.startDate.getDate()
    //     bookedDaysCount += booking.endDate.getDate()
    //     for(let i = booking.startDate.getMonth() +1; i < 12; i++ ){
    //         bookedDaysCount += calander[i]
    //     }
    //     for(let i = 0; i < booking.endDate.getMonth(); i++ ){
    //         bookedDaysCount += calander[i]
    //     }
    // }
    let days = Math.round(((booking.endDate - booking.startDate)/86400000))
    return days
}

export function getBookingDates(booking){
    let day = booking.startDate.getDate();
    let month = booking.startDate.getMonth();
    let year = booking.startDate.getFullYear();
    let days = getBookingDays(booking);
    let bookedDates = [];
    for(let i=0; i < days; i++){
        let date = new Date(year, month, day)
        bookedDates.push(date)
        day += 1
    }
    return bookedDates
}


 

function selectedCarReducer( state = {id: null, car: {coordinates: [{lng: -5.827801646679124, lat: 35.76657300348322}], 'car_locations':[{'name': 'Tangier'}], 'trips_total': 90, 'average_rating': 4.1, 'description': 'Great all around utility car.  Great economical option and fantastic gas saver. Bike rack and child booster seat available upon request.', 'price': 134, 'host': {'name': 'Mike', 'profile_pic': 'https://d1zgdcrdir5wgt.cloudfront.net/media/driver/DirJTHr-RfaQH6qrYm69Wg.160x160.jpg', 'average_rating': 4.6, 'trips_total': 332}, 'make': 'Ford', 'model': 'Fusion', 'year': '2019', 'images': [{src:'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/1JL9nJjYSWWwqTo58gv1SA.730x390.jpg'}, {src:'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/1JL9nJjYSWWwqTo58gv1SA.2880x1400.jpg'}], 'seats': '5', 'fuel': 'Gas', 'doors': '4', 'mpg': '28'}
}, action){
    
    switch (action.type) {
      
      case "SELECT_CAR":
        return  {car: action.car};

      default:
        return state;
        };
    }

export default selectedCarReducer
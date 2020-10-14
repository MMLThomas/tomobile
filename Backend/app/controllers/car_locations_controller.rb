class CarLocationsController < ApplicationController

    def index
        car_locations = CarLocation.all
        render json: car_locations
    end

    def show
        car = Car.find_by(id: params[:id])
        render json: car_location
    end
    
end

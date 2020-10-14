class CarsController < ApplicationController

    def index
        cars = Car.all
        render json: CarSerializer.new(cars)
    end

    def show
        car = Car.find_by(id: params[:id])
        render json: CarSerializer.new(car)
    end

    



end

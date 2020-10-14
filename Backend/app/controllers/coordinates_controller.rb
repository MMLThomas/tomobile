class CoordinatesController < ApplicationController

    def index 
        coordinates = Coordinate.all

        render json: coordinates
    end
end

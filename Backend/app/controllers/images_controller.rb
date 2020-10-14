class ImagesController < ApplicationController

    def index
        images = Image.all
        render json: images
    end

    def show
        image = Image.find_by(id: params[:id])
        render json: image
    end

end

class HostsController < ApplicationController

    def index
        hosts = Host.all
        render json: hosts
    end

    def show
        host = Host.find_by(id: params[:id])
        render json: host
    end
end

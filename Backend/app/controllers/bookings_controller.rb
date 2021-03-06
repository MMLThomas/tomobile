class BookingsController < ApplicationController
    def index
        bookings = Booking.all
        render json: BookingSerializer.new(bookings)
    end

    def show
        booking = Booking.find_by(id: params[:id])
        render json: BookingSerializer.new(booking)
    end

    def create
        booking = Booking.create(booking_params)
        render json: BookingSerializer.new(booking)
    end 

    def destroy
        booking = Booking.find_by(id: params[:id])
        booking.destroy
    end

    private
    def booking_params
        params.require(:booking).permit(:start_time, :end_time, :car_id, :renter_email, :cost, :host_id)
    end
    
end

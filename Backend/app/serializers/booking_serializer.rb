class BookingSerializer 
  include FastJsonapi::ObjectSerializer
  attributes :car_id, :renter_email, :start_time, :end_time, :host, :booked_dates, :car, :cost
  
  def children
    ActiveModel::SerializableResource.new(object.children,  each_serializer: ChildrenSerializer)
  end
    
end

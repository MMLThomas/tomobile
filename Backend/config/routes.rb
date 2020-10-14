Rails.application.routes.draw do
  resources :booked_dates
  resources :profile_pics
  resources :images
  resources :coordinates
  resources :trips
  resources :car_ratings
  resources :host_locations
  resources :host_contacts
  resources :features
  resources :contacts
  resources :ratings
  resources :car_locations
  resources :car_features
  resources :favorites
  resources :host_comments
  resources :categories
  resources :car_reviews
  resources :cars
  resources :bookings
  resources :renters
  resources :hosts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_14_005157) do

  create_table "booked_dates", force: :cascade do |t|
    t.date "date"
    t.integer "booking_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["booking_id"], name: "index_booked_dates_on_booking_id"
  end

  create_table "bookings", force: :cascade do |t|
    t.date "start_time"
    t.date "end_time"
    t.string "cost"
    t.integer "car_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "renter_email"
    t.integer "host_id"
    t.index ["car_id"], name: "index_bookings_on_car_id"
  end

  create_table "car_categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "car_features", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "car_locations", force: :cascade do |t|
    t.string "name"
    t.integer "car_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["car_id"], name: "index_car_locations_on_car_id"
  end

  create_table "car_ratings", force: :cascade do |t|
    t.float "score"
    t.integer "car_id"
    t.integer "trip_id"
    t.integer "renter_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["car_id"], name: "index_car_ratings_on_car_id"
    t.index ["renter_id"], name: "index_car_ratings_on_renter_id"
    t.index ["trip_id"], name: "index_car_ratings_on_trip_id"
  end

  create_table "car_reviews", force: :cascade do |t|
    t.text "content"
    t.date "date"
    t.integer "renter_id"
    t.integer "car_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["car_id"], name: "index_car_reviews_on_car_id"
    t.index ["renter_id"], name: "index_car_reviews_on_renter_id"
  end

  create_table "cars", force: :cascade do |t|
    t.string "make"
    t.string "model"
    t.string "doors"
    t.string "seats"
    t.string "fuel"
    t.string "description"
    t.string "profile_pic"
    t.integer "mpg"
    t.integer "year"
    t.integer "price"
    t.integer "trips_total"
    t.integer "host_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.float "average_rating"
    t.index ["host_id"], name: "index_cars_on_host_id"
  end

  create_table "coordinates", force: :cascade do |t|
    t.float "lng"
    t.float "lat"
    t.integer "car_location_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["car_location_id"], name: "index_coordinates_on_car_location_id"
  end

  create_table "favorite_cars", force: :cascade do |t|
    t.integer "renter_id"
    t.integer "car_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["car_id"], name: "index_favorite_cars_on_car_id"
    t.index ["renter_id"], name: "index_favorite_cars_on_renter_id"
  end

  create_table "host_comments", force: :cascade do |t|
    t.text "content"
    t.date "date"
    t.integer "host_id"
    t.integer "renter_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["host_id"], name: "index_host_comments_on_host_id"
    t.index ["renter_id"], name: "index_host_comments_on_renter_id"
  end

  create_table "host_contacts", force: :cascade do |t|
    t.string "address1"
    t.string "address2"
    t.string "city"
    t.string "state"
    t.string "country"
    t.integer "zip"
    t.integer "phone_number"
    t.integer "host_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["host_id"], name: "index_host_contacts_on_host_id"
  end

  create_table "host_locations", force: :cascade do |t|
    t.integer "host_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["host_id"], name: "index_host_locations_on_host_id"
  end

  create_table "host_ratings", force: :cascade do |t|
    t.float "score"
    t.integer "host_id"
    t.integer "renter_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["host_id"], name: "index_host_ratings_on_host_id"
    t.index ["renter_id"], name: "index_host_ratings_on_renter_id"
  end

  create_table "hosts", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "username"
    t.integer "trips_total"
    t.string "profile_pic"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.float "average_rating"
  end

  create_table "images", force: :cascade do |t|
    t.string "src"
    t.integer "car_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["car_id"], name: "index_images_on_car_id"
  end

  create_table "renter_contacts", force: :cascade do |t|
    t.string "address1"
    t.string "address2"
    t.string "city"
    t.string "state"
    t.string "country"
    t.integer "zip"
    t.integer "phone_number"
    t.integer "renter_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["renter_id"], name: "index_renter_contacts_on_renter_id"
  end

  create_table "renters", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "username"
    t.string "profile_pic"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "trips", force: :cascade do |t|
    t.integer "renter_id", null: false
    t.integer "car_id", null: false
    t.date "start_date"
    t.date "end_date"
    t.integer "host_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["car_id"], name: "index_trips_on_car_id"
    t.index ["host_id"], name: "index_trips_on_host_id"
    t.index ["renter_id"], name: "index_trips_on_renter_id"
  end

  add_foreign_key "coordinates", "car_locations"
  add_foreign_key "images", "cars"
  add_foreign_key "trips", "cars"
  add_foreign_key "trips", "hosts"
  add_foreign_key "trips", "renters"
end

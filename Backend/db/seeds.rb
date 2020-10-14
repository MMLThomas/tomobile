# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Car.find(121).car_locations.last.coordinates.create({'lng': -5.826203988043799, 'lat': 35.78949788048571})
Car.find(125).car_locations.last.coordinates.create({'lng': -5.818956130999689, 'lat': 35.78567720203826})
Car.find(162).car_locations.last.coordinates.create({'lng': -6.824881513137152, 'lat': 34.02628236465878})
Car.find(184).car_locations.last.coordinates.create({'lng': -6.843670123985515, 'lat': 34.02150004776042})
Car.find(185).car_locations.last.coordinates.create({'lng': -6.84480336180481, 'lat': 34.02090421295715})
Car.find(229).car_locations.last.coordinates.create({'lng': -6.866027852259802, 'lat': 33.962430688422195})
Car.find(243).car_locations.last.coordinates.create({'lng': -6.832865819669949, 'lat': 33.94797970403766})
Car.find(251).car_locations.last.coordinates.create({'lng': -6.8560533228125795, 'lat': 34.00850228782704})
Car.find(271).car_locations.last.coordinates.create({'lng': -6.895489343952279, 'lat': 33.946189275242965})
Car.find(273).car_locations.last.coordinates.create({'lng': -6.862790616215191, 'lat': 33.9561193593724})
Car.find(280).car_locations.last.coordinates.create({'lng': -6.888559553894837, 'lat': 33.943129644545415})
Car.find(290).car_locations.last.coordinates.create({'lng': -6.88160165694524, 'lat': 33.95635071231876})
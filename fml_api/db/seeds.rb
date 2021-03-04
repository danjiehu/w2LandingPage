# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# name = Faker::TvShows::GameOfThrones.character

# comment = Faker::TvShows::GameOfThrones.quote #=> "Never forget who you are. The rest of the world won't. Wear it like an armor and it can never be used against you."
Story.destroy_all

stories = [
  { name:Faker::TvShows::GameOfThrones.character, text: Faker::TvShows::GameOfThrones.quote },
  { name:Faker::TvShows::GameOfThrones.character, text: Faker::TvShows::GameOfThrones.quote },
  { name:Faker::TvShows::GameOfThrones.character, text: Faker::TvShows::GameOfThrones.quote },
  { name:Faker::TvShows::GameOfThrones.character, text: Faker::TvShows::GameOfThrones.quote }
]
Story.create(stories)

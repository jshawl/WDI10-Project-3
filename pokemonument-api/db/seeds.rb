#encoding: utf-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

Monument.delete_all

CSV.foreach('db/monuments.csv', headers: true) do |row|
  Monument.create(
    {
      site: row['site'],
      address: row['address'],
      zip: row['zip'],
      description: row['description'],
      photo_url: row['photo_url']
    }
  )
end

Character.delete_all

CSV.foreach('db/characters.csv', headers: true) do |row|
  Character.create(
    {
      name: row['name'],
      kdex: row['kdex'],
      ndex: row['ndex']
    }
  )
end

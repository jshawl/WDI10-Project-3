json.array!(@characters) do |character|
  json.extract! character, :id, :name, :kdex, :ndex
  json.url character_url(character, format: :json)
end

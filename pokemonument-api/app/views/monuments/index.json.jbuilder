json.array!(@monuments) do |monument|
  json.extract! monument, :id, :site, :address, :zip, :description, :photo_url
  json.url monument_url(monument, format: :json)
end

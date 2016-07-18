json.array!(@monuments) do |monument|
  json.extract! monument, :id, :[site, :site_id, :address, :zip, :description, :photo_url
  json.url monument_url(monument, format: :json)
end

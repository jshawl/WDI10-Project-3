json.array!(@encounters) do |encounter|
  json.extract! encounter, :id, :site, :site_id, :comments
  json.url encounter_url(encounter, format: :json)
end

json.array!(@encounters) do |encounter|
  json.extract! encounter, :id, :user, :character_id, :monument_id, :date, :comment
  json.url encounter_url(encounter, format: :json)
end

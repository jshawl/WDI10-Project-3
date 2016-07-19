class CharactersController < ApplicationController
before_action :set_profile, only: [:show, :update, :destroy]


  # GET Profiles
  def index
    @characters = Character.all
    render json: @character
  end


  # GET /Profiles/1
  def show
    render json: @character
  end

  # POST /profiles
  def create
    @character = Character.create(profile_params)
    render json: @character, status: :ok
  end

  # PATCH/PUT /profiles/1
  def update
    @character = Character.find(params[:id])
    @character.update!(profile_params)
    render json: @character, status: :ok
  end

  #DELETE /profiles/1
  def destroy
    @character.destroy
  end

  private
  def set_profile
    @character = Character.find(params[:id])
  end

  def profile_params
    params.require(:profile).permit(:name, :gender, :age, :location, :work, :school, :description, :profile_pic_url)
  end

end

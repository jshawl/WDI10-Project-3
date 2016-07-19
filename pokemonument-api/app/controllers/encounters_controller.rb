class EncountersController < ApplicationController
  before_action :set_encounter, only: [:show, :edit, :update, :destroy]

  # GET /encounters
  # GET /encounters.json
  def index
    @encounters = Encounter.all
    render json: @encounters
  end

  # GET /encounters/1
  # GET /encounters/1.json
  def show
    render json: @encounter
  end

  # GET /encounters/new
  def new
    @encounter = Encounter.new
    render json: @encounter
  end

  # # GET /encounters/1/edit
  def edit
    render json: @encounter
  end

  # POST /encounters
  # POST /encounters.json
  def create
    @encounter = Encounter.new(encounter_params)

        if @encounter.save
          render json: @encounter, status: :created, location: @encounter
        else
          render json: @encounter.errors, status: :unprocessable_entity
        end
  end

  # PATCH/PUT /encounters/1
  # PATCH/PUT /encounters/1.json
  def update
    if @encounter.update(bleet_params)
         render json: @encounter
       else
         render json: @encounter.errors, status: :unprocessable_entity
       end
  end

  # DELETE /encounters/1
  # DELETE /encounters/1.json
  def destroy
    @encounter.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_encounter
      @encounter = Encounter.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def encounter_params
      params.require(:encounter).permit(:site, :site_id, :comments)
    end
end

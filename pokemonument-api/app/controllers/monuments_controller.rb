class MonumentsController < ApplicationController
  before_action :set_monument, only: [:show, :edit, :update, :destroy]

  # GET /monuments
  # GET /monuments.json
  def index
    @monuments = Monument.all
    render json: @monuments
  end

  # GET /monuments/1
  # GET /monuments/1.json
  def show
    render json: @monument
  end

  # # GET /monuments/new
  def new
    @monument = Monument.new
    render json: @monument
  end

  # GET /monuments/1/edit
  def edit
    render json: @monument
  end

  # POST /monuments
  # POST /monuments.json
  def create
    @monument = Monument.new(monument_params)
    @monument.save
      render json: @monument, status: :created, location: @monument
    else
      render json: @monument.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /monuments/1
  # PATCH/PUT /monuments/1.json
  def update
    if @monument.update(monument_params)
          render json: @monument
        else
          render json: @monument.errors, status: :unprocessable_entity
      end
  end

  # DELETE /monuments/1
  # DELETE /monuments/1.json
  def destroy
    @monument.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_monument
      @monument = Monument.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def monument_params
      params.require(:monument).permit(:site, :site_id, :address, :zip, :description, :photo_url)
    end
end

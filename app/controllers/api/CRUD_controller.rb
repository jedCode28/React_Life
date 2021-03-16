
####
# This is a controller for TOP level CRUD actions that ** Has-many ** 
# Replace every "change" with project-specific variables
####

class Api::CrudController < ApplicationController

  def index
    render json: CHANGE.all
  end
  
  def show 
    change = Change.find(params[:id])
    render json: {key: value, subkey: key.subinfo} ## like @food.restaurants
  end

  def create
    change = Change.new(CHANGE_params)
    if change.save
      render json: change
    else 
      render json: {errors: change.errors}, status:422
    end 
  end 

  def update 
    change = Change.find(params[:id])
    if change.update(CHANGE_params)
      render json: change
    else
      render json: {errors: change.errors }, status:422
  end 

  def destroy
    change = Change.find(params[:id]).destroy
    render json: change
  end 

  private

  def CHANGE_params
    params.require(:CHANGE).permit(:CHANGE)
  end 

end 

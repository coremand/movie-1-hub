class MoviesController < ApplicationController
  def index
    response = RestClient.get("api.themoviedb.org/3/trending/all/day?api_key=d40ad83c620d294a2c44293f91313a35&page=4")
    result = JSON.parse(response)
    render json: result
  end

  def search
    response = RestClient.get("https://api.themoviedb.org/3/search/movie?api_key=d40ad83c620d294a2c44293f91313a35&query=#{params[:name]}")
    result = JSON.parse(response)
    render json: result
  end
end

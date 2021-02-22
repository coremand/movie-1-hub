class MoviesController < ApplicationController
  def index
    response = RestClient.get("api.themoviedb.org/3/trending/all/day?api_key=ca357c71903c409f2ce08d61e75700a6&page=1")
    result = JSON.parse(response)
    render json: result
  end
end

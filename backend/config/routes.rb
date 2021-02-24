Rails.application.routes.draw do
  resources :movies, only: :index
  resources :users, only: [:index, :create]
  post '/login', to: 'authentication#login'
  get '/search', to: 'movies#search'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

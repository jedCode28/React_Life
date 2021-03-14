Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    # add routes here
    # remeber to add api/ when creating controller 
    # rails g controller api/controller name
    get '/static/test_api', to: 'static#test_api'
  end
end

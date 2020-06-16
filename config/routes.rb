Rails.application.routes.draw do
  root 'home#index'
  get '/newhome', to: "home#new_home"
end

Rails.application.routes.draw do
  get 'buscar', to: 'search#index', as: :search
  root 'home#index'
  get '/whatsapp', to: 'redirect#show', social: :whatsapp
  get '/instagram', to: 'redirect#show', social: :instagram
  get '/facebook', to: 'redirect#show', social: :facebook
  get '/newhome', to: "home#new_home"
end

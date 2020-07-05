Rails.application.routes.draw do
  root 'home#index'
  get 'buscar', to: 'search#index', as: :search
  get '/whatsapp', to: 'redirect#show', social: :whatsapp
  get '/instagram', to: 'redirect#show', social: :instagram
  get '/facebook', to: 'redirect#show', social: :facebook
end

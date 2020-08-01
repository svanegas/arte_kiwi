Rails.application.routes.draw do
  root 'home#index'
  get '/productos/:category/:slug', to: 'products#show', as: :product
  get '/buscar', to: 'search#index', as: :search
  get '/whatsapp', to: 'redirect#show', social: :whatsapp
  get '/instagram', to: 'redirect#show', social: :instagram
  get '/facebook', to: 'redirect#show', social: :facebook
  get '/youtube', to: 'redirect#show', social: :youtube
end

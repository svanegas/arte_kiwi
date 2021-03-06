Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  get '/productos/:category/:slug', to: 'products#show', as: :product
  get '/buscar', to: 'search#index', as: :search
  get '/whatsapp', to: 'redirect#show', social: :whatsapp
  get '/instagram', to: 'redirect#show', social: :instagram
  get '/facebook', to: 'redirect#show', social: :facebook
  get '/youtube', to: 'redirect#show', social: :youtube

  namespace :api do
    namespace :v1 do
      resources :products, only: [:index]
    end
  end

  namespace :admin do
    resources :products
  end
end

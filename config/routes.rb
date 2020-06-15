Rails.application.routes.draw do
  root 'home#index'
  get '/whatsapp', to: 'redirect#whatsapp'
end

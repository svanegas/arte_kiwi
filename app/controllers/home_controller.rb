class HomeController < ApplicationController
  layout "home", only: [:new_home]
  layout "application", only: [:index]

  def index
  end

  def new_home
  end
end

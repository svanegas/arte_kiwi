class HomeController < ApplicationController
  layout "home", only: :new_home

  def index
  end

  def new_home
  end
end

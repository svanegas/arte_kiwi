module Api
  class BaseController < ActionController::Base
    protect_from_forgery with: :exception

    def set_default_format
      request.format = :json
    end
  end
end

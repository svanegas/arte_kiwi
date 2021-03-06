class RedirectController < ApplicationController

  def show
    case params[:social]
    when :whatsapp
      redirect_to 'https://wa.me/573175987665'
    when :instagram
      redirect_to 'https://www.instagram.com/arte_kiwi/'
    when :facebook
      redirect_to 'https://www.facebook.com/artekiwioficial'
    when :youtube
      redirect_to 'https://www.youtube.com/channel/UCUGSRMEQAu8wGFk1MV1AYOA'
    else
      redirect_to root_path
    end
  end
end

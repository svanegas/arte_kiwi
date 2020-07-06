class HomeController < ApplicationController
  layout "home", only: [:index]

  def index
    @banners = [
      {
        title: "Marcadores",
        image: "https://arte-kiwi.s3-us-west-2.amazonaws.com/hardcoded-images/marcadores_banner.jpeg",
        id: "marcadores-banner",
        link: "/buscar?categoria=marcadores"
      },
      {
        title: "Productos Lettering y Timoteo",
        image: "https://arte-kiwi.s3-us-west-2.amazonaws.com/hardcoded-images/timoteo_lettering.jpeg",
        id: "lettering-timoteo-banner",
        link: "/buscar?categoria=kits"
      },
      {
        title: "Cajas de Regalo",
        image: "https://arte-kiwi.s3-us-west-2.amazonaws.com/hardcoded-images/cajas_regalos_banner.jpeg",
        id: "cajas-regalo-banner",
        link: "https://api.whatsapp.com/send?phone=573175987665&text=¡Hola! deseo información sobre las cajas de regalo, muchas gracias. 😊"
      },
      {
        title: "Cartillas",
        image: "https://arte-kiwi.s3-us-west-2.amazonaws.com/hardcoded-images/cartilla_talleres_banner.jpeg",
        id: "talleres-banner",
        link: "/buscar?categoria=cartillas"
      },
    ]
  end
end

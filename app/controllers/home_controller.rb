class HomeController < ApplicationController
  layout "home", only: [:new_home]
  layout "application", only: [:index]

  def index
  end

  def new_home
    @banners = [
      {
        title: "Marcadores",
        image: "/img/banner_1.png",
        id: "marcadores-banner"
      },
      {
        title: "Productos Lettering y Timoteo",
        image: "/img/banner_2.png",
        id: "lettering-timoteo-banner"
      },
      {
        title: "Cajas de Regalo",
        image: "/img/banner_3.png",
        id: "cajas-regalo-banner"
      },
      {
        title: "Talleres",
        image: "/img/banner_1.png",
        id: "talleres-banner"
      },
    ]

    @sections = [
      {
        title: "Marcadores",
        banner_id: "marcadores-banner",
        products: [
          {
            name: "Window-ink 15mm vinilo",
            image: "/img/sample.png",
            id: "marcadores-card",
            price: "$#{rand(1..120)},#{rand(100..999)} COP",
            whatsapp_message: "Marcadores de vinilo",
            section: "Marcadores"
          },
          {
            name: "Window-ink 5.5mm vinilo",
            image: "/img/sample.png",
            id: "marcadores-card",
            price: "$#{rand(1..120)},#{rand(100..999)} COP",
            whatsapp_message: "Marcadores de vinilo",
            section: "Marcadores"
          },
          {
            name: "Eterna neón",
            image: "/img/sample.png",
            id: "marcadores-card",
            price: "$#{rand(1..120)},#{rand(100..999)} COP",
            whatsapp_message: "Marcadores de vinilo",
            section: "Marcadores"
          },
          {
            name: "Chalk marker de vinilo",
            image: "/img/sample.png",
            id: "marcadores-card",
            price: "$#{rand(1..120)},#{rand(100..999)} COP",
            whatsapp_message: "Marcadores de vinilo",
            section: "Marcadores"
          },
          {
            name: "Marker",
            image: "/img/sample.png",
            id: "marcadores-card",
            price: "$#{rand(1..120)},#{rand(100..999)} COP",
            whatsapp_message: "Marcadores de vinilo",
            section: "Marcadores"
          },
          {
            name: "Marcador gráfico Doricolor",
            image: "/img/sample.png",
            id: "marcadores-card",
            price: "$#{rand(1..120)},#{rand(100..999)} COP",
            whatsapp_message: "Marcadores de vinilo",
            section: "Marcadores"
          },
          {
            name: "Marcador pegante 15mm",
            image: "/img/sample.png",
            id: "marcadores-card",
            price: "$#{rand(1..120)},#{rand(100..999)} COP",
            whatsapp_message: "Marcadores de vinilo",
            section: "Marcadores"
          },
          {
            name: "Marcador pegante 5 mm",
            image: "/img/sample.png",
            id: "marcadores-card",
            price: "$#{rand(1..120)},#{rand(100..999)} COP",
            whatsapp_message: "Marcadores de vinilo",
            section: "Marcadores"
          },
          {
            name: "Acrylic marker",
            image: "/img/sample.png",
            id: "marcadores-card",
            price: "$#{rand(1..120)},#{rand(100..999)} COP",
            whatsapp_message: "Marcadores de vinilo",
            section: "Marcadores"
          },
          {
            name: "Eterna metal doble trazo",
            image: "/img/sample.png",
            id: "marcadores-card",
            price: "$#{rand(1..120)},#{rand(100..999)} COP",
            whatsapp_message: "Marcadores de vinilo",
            section: "Marcadores"
          },
        ]
      },
      {
        title: "Productos Lettering y Timoteo",
        banner_id: "lettering-timoteo-banner",
        products: [
          {
            name: "Cartilla de letra Timoteo 39 páginas",
            image: "/img/sample.png",
            id: "lettering-card",
            price: "$#{rand(1..120)},#{rand(100..999)} COP",
            whatsapp_message: "Lettering de vinilo",
            section: "Lettering"
          },
          {
            name: "Cartilla de dibujos Timoteo 25 páginas",
            image: "/img/sample.png",
            id: "lettering-card",
            price: "$#{rand(1..120)},#{rand(100..999)} COP",
            whatsapp_message: "Lettering de vinilo",
            section: "Lettering"
          },
          {
            name: "Cartilla de lettering 38 páginas",
            image: "/img/sample.png",
            id: "lettering-card",
            price: "$#{rand(1..120)},#{rand(100..999)} COP",
            whatsapp_message: "Lettering de vinilo",
            section: "Lettering"
          },
          {
            name: "Bitácora de lettering \"My lettering book\" 50 hojas",
            image: "/img/sample.png",
            id: "lettering-card",
            price: "$#{rand(1..120)},#{rand(100..999)} COP",
            whatsapp_message: "Lettering de vinilo",
            section: "Lettering"
          },
        ]
      },
      {
        title: "Cajas de Regalo",
        banner_id: "cajas-regalo-banner",
        products: [
          {
            name: "Regalo 1",
            image: "/img/sample.png",
            id: "regalo-card",
            price: "$#{rand(1..120)},#{rand(100..999)} COP",
            whatsapp_message: "Regalo de vinilo",
            section: "Cajas Regalo"
          }
        ]
      },
      {
        title: "Talleres",
        banner_id: "talleres-banner",
        products: [
          {
            name: "Taller 1",
            image: "/img/sample.png",
            id: "talleres-card",
            price: "$#{rand(1..120)},#{rand(100..999)} COP",
            whatsapp_message: "Talleres de vinilo",
            section: "Talleres"
          }
        ]
      }
    ]
  end
end

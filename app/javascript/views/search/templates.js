import { formatPrice } from '../../utils/utils.js';

const markersCardTemplate = function markersCardTemplate(product) {
  return `
    <div class='col-12 col-md-6 col-lg-4 card my-1 kiwi-bg-white border-0'>
      <div class='row m-2 m-md-3 no-gutters'>
        <div class='col-6 card-height'>
          <img data-src='${product.imageUrl}' src='/img/web-thumbnail.jpg' align='left' alt='${product.name}', class='lazyload card-img' />
        </div>
        <div class='col-6 card-height'>
          <div class='pl-3 pr-2 d-flex flex-column height-100'>
            <div class='font-family-chewy font-size-lg font-size-lt-md-xl pt-1'><span>${product.name}</span></div>
            <div class='mb-3 mt-auto font-family-handlee font-size-sm'><span>Cantidad: x${product.quantity}</span></div>
            <div class='mb-2 mt-auto font-family-fredoka-one font-size-md'><span>${formatPrice(product.price)}</span></div>
            <div class=''>
              <a target='_blank' href='https://api.whatsapp.com/send?phone=+573175987665&text=${product.whatsappMessage}' class='d-flex align-items-center justify-content-center kiwi-btn kiwi-btn--sm kiwi-btn--red font-family-fredoka-one color-white card-btn'>
                <i class='fab fa-whatsapp font-size-xl mr-3'></i>
                <span>COMPRAR</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
}

const virtualBookCardTemplate = function virtualBookCardTemplate(product) {
  return `
    <div class='col-12 col-md-6 col-lg-4 card my-1 kiwi-bg-white border-0'>
      <div class='row m-2 m-md-3 no-gutters'>
        <div class='col-6 card-height'>
          <img data-src='${product.imageUrl}' src='/img/web-thumbnail.jpg' align='left' alt='${product.name}', class='lazyload card-img' />
        </div>
        <div class='col-6 card-height'>
          <div class='pl-3 pr-2 d-flex flex-column height-100'>
            <div class='font-family-chewy font-size-lg font-size-lt-md-xl pt-1'><span>${product.name}</span></div>
            <div class='mb-2 mt-auto font-family-handlee font-size-sm'><span>Físico: ${formatPrice(product.physical_price)}</span></div>
            <div class='mb-2 mt-auto font-family-handlee font-size-sm'><span>Virtual: ${formatPrice(product.digital_price)}</span></div>
            <div class=''>
              <a target='_blank' href='https://api.whatsapp.com/send?phone=+573175987665&text=${product.whatsappMessage}' class='d-flex align-items-center justify-content-center kiwi-btn kiwi-btn--sm kiwi-btn--red font-family-fredoka-one color-white card-btn'>
                <i class='fab fa-whatsapp font-size-xl mr-3'></i>
                <span>COMPRAR</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
}

const binnacleCardTemplate = function binnacleCardTemplate(product) {
  return `
    <div class='col-12 col-md-6 col-lg-4 card my-1 kiwi-bg-white border-0'>
      <div class='row m-2 m-md-3 no-gutters'>
        <div class='col-6 card-height'>
          <img data-src='${product.imageUrl}' src='/img/web-thumbnail.jpg' align='left' alt='${product.name}', class='lazyload card-img' />
        </div>
        <div class='col-6 card-height'>
          <div class='pl-3 pr-2 d-flex flex-column height-100'>
            <div class='font-family-chewy font-size-lg font-size-lt-md-xl pt-1'><span>${product.name}</span></div>
            <div class='mb-2 mt-auto font-family-fredoka-one font-size-md'><span>${formatPrice(product.price)}</span></div>
            <div class=''>
              <a target='_blank' href='https://api.whatsapp.com/send?phone=+573175987665&text=${product.whatsappMessage}' class='d-flex align-items-center justify-content-center kiwi-btn kiwi-btn--sm kiwi-btn--red font-family-fredoka-one color-white card-btn'>
                <i class='fab fa-whatsapp font-size-xl mr-3'></i>
                <span>COMPRAR</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
}

const bookCardTemplate = function bookCardTemplate(product) {
  return `
    <div class='col-12 col-md-6 col-lg-4 card my-1 kiwi-bg-white border-0'>
      <div class='row m-2 m-md-3 no-gutters'>
        <div class='col-6 card-height'>
          <img data-src='${product.imageUrl}' src='/img/web-thumbnail.jpg' align='left' alt='${product.name}', class='lazyload card-img' />
        </div>
        <div class='col-6 card-height'>
          <div class='pl-3 pr-2 d-flex flex-column height-100'>
            <div class='font-family-chewy font-size-lg font-size-lt-md-xl pt-1'><span>${product.name}</span></div>
            <div class='mb-2 mt-auto font-family-fredoka-one font-size-md'><span>${formatPrice(product.price)}</span></div>
            <div class=''>
              <a target='_blank' href='https://api.whatsapp.com/send?phone=+573175987665&text=${product.whatsappMessage}' class='d-flex align-items-center justify-content-center kiwi-btn kiwi-btn--sm kiwi-btn--red font-family-fredoka-one color-white card-btn'>
                <i class='fab fa-whatsapp font-size-xl mr-3'></i>
                <span>COMPRAR</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
}

const organizersCardTemplate = function organizersCardTemplate(product) {
  return `
    <div class='col-12 col-md-6 col-lg-4 card my-1 kiwi-bg-white border-0'>
      <div class='row m-2 m-md-3 no-gutters'>
        <div class='col-6 card-height'>
          <img data-src='${product.imageUrl}' src='/img/web-thumbnail.jpg' align='left' alt='${product.name}', class='lazyload card-img' />
        </div>
        <div class='col-6 card-height'>
          <div class='pl-3 pr-2 d-flex flex-column height-100'>
            <div class='font-family-chewy font-size-lg font-size-lt-md-xl pt-1'><span>${product.name}</span></div>
            <div class='mb-3 mt-auto font-family-handlee font-size-sm'><span>Tamaño: ${product.size}</span></div>
            <div class='mb-2 mt-auto font-family-fredoka-one font-size-md'><span>${formatPrice(product.price)}</span></div>
            <div class=''>
              <a target='_blank' href='https://api.whatsapp.com/send?phone=+573175987665&text=${product.whatsappMessage}' class='d-flex align-items-center justify-content-center kiwi-btn kiwi-btn--sm kiwi-btn--red font-family-fredoka-one color-white card-btn'>
                <i class='fab fa-whatsapp font-size-xl mr-3'></i>
                <span>COMPRAR</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
}

export default {
  markersCardTemplate,
  virtualBookCardTemplate,
  binnacleCardTemplate,
  bookCardTemplate,
  organizersCardTemplate
}


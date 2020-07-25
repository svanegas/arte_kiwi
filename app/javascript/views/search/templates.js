import { formatPrice } from '../../utils/utils.js';

const markersCardTemplate = function markersCardTemplate(product) {
  return `
    <div class='col-12 col-md-6 col-lg-4 card my-1 kiwi-bg-white border-0'>
      <div class='row m-2 m-md-3 no-gutters'>
        <div class='col-6 card-height'>
          <img data-src='${product.imageUrl}' src='/img/web-thumbnail.jpg' align='left' alt='${product.name}' class='lazyload card-img' />
        </div>
        <div class='col-6 card-height'>
          <div class='pl-3 pr-2 d-flex flex-column height-100'>
            <div class='font-family-chewy font-size-lg font-size-lt-md-xl pt-1'><span>${product.name}</span></div>
            <div class='mb-2 mt-auto'>
              <div class='mb-2 font-family-handlee font-size-sm'>
                <span class=''>Cantidad: x${product.quantity}</span>
              </div>
              <div class='font-family-work-sans font-size-md'>
                <span class=''>${formatPrice(product.price)}</span>
              </div>
            </div>
          </div>
        </div>
        <div class='col-12 pt-2'>
          <a id="${product.id}" target='_blank' href='https://api.whatsapp.com/send?phone=573175987665&text=${product.whatsappMessage}' class='d-flex align-items-center justify-content-center kiwi-btn kiwi-btn--sm kiwi-btn--red font-family-work-sans color-white card-btn'>
            <i class='fab fa-whatsapp font-size-xl mr-3'></i>
            <span>COMPRAR</span>
          </a>
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
          <img data-src='${product.imageUrl}' src='/img/web-thumbnail.jpg' align='left' alt='${product.name}' class='lazyload card-img' />
        </div>
        <div class='col-6 card-height'>
          <div class='pl-3 pr-2 d-flex flex-column height-100'>
            <div class='font-family-chewy font-size-lg font-size-lt-md-xl pt-1'><span>${product.name}</span></div>
            <div class='mb-2 mt-auto'>
              <div class='mt-2 font-family-work-sans font-size-md font-size-lt-sm-lg'>
                <span>Físico:</span>
              </div>
              <div class='font-family-work-sans font-size-md font-size-lt-sm-lg'>
                <span>${formatPrice(product.physical_price)}</span>
              </div>
              <div class='font-family-work-sans font-size-md font-size-lt-sm-lg'>
                <span>Virtual:</span>
              </div>
              <div class='font-family-work-sans font-size-md font-size-lt-sm-lg'>
                <span>${formatPrice(product.digital_price)}</span>
              </div>
            </div>
          </div>
        </div>
        <div class='col-12 pt-2'>
          <a id="${product.id}" target='_blank' href='https://api.whatsapp.com/send?phone=573175987665&text=${product.whatsappMessage}' class='d-flex align-items-center justify-content-center kiwi-btn kiwi-btn--sm kiwi-btn--red font-family-work-sans color-white card-btn'>
            <i class='fab fa-whatsapp font-size-xl mr-3'></i>
            <span>COMPRAR</span>
          </a>
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
          <img data-src='${product.imageUrl}' src='/img/web-thumbnail.jpg' align='left' alt='${product.name}' class='lazyload card-img' />
        </div>
        <div class='col-6 card-height'>
          <div class='pl-3 pr-2 d-flex flex-column height-100'>
            <div class='font-family-chewy font-size-lg font-size-lt-md-xl pt-1'><span>${product.name}</span></div>
            <div class='mb-2 mt-auto'>
              <div class='font-family-work-sans font-size-md'>
                <span class=''>${formatPrice(product.price)}</span>
              </div>
            </div>
          </div>
        </div>
        <div class='col-12 pt-2'>
          <a id="${product.id}" target='_blank' href='https://api.whatsapp.com/send?phone=573175987665&text=${product.whatsappMessage}' class='d-flex align-items-center justify-content-center kiwi-btn kiwi-btn--sm kiwi-btn--red font-family-work-sans color-white card-btn'>
            <i class='fab fa-whatsapp font-size-xl mr-3'></i>
            <span>COMPRAR</span>
          </a>
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
          <img data-src='${product.imageUrl}' src='/img/web-thumbnail.jpg' align='left' alt='${product.name}' class='lazyload card-img' />
        </div>
        <div class='col-6 card-height'>
          <div class='pl-3 pr-2 d-flex flex-column height-100'>
            <div class='font-family-chewy font-size-lg font-size-lt-md-xl pt-1'><span>${product.name}</span></div>
            <div class='mb-2 mt-auto'>
              <div class='font-family-work-sans font-size-md'>
                <span class=''>${formatPrice(product.price)}</span>
              </div>
            </div>
          </div>
        </div>
        <div class='col-12 pt-2'>
          <a id="${product.id}" target='_blank' href='https://api.whatsapp.com/send?phone=573175987665&text=${product.whatsappMessage}' class='d-flex align-items-center justify-content-center kiwi-btn kiwi-btn--sm kiwi-btn--red font-family-work-sans color-white card-btn'>
            <i class='fab fa-whatsapp font-size-xl mr-3'></i>
            <span>COMPRAR</span>
          </a>
        </div>
      </div>
    </div>
    `
}

const kitCardTemplate = function kitCardTemplate(product) {
  return `
    <div class='col-12 col-md-6 col-lg-4 card my-1 kiwi-bg-white border-0'>
      <div class='row m-2 m-md-3 no-gutters'>
        <div class='col-6 card-height'>
          <img data-src='${product.imageUrl}' src='/img/web-thumbnail.jpg' align='left' alt='${product.name}' class='lazyload card-img' />
        </div>
        <div class='col-6 card-height'>
          <div class='pl-3 pr-2 d-flex flex-column height-100'>
            <div class='font-family-chewy font-size-lg font-size-lt-md-xl pt-1'><span>${product.name}</span></div>
            <div class='mb-2 mt-auto'>
              <div class='font-family-work-sans font-size-md'>
                <span class=''>${formatPrice(product.price)}</span>
              </div>
            </div>
          </div>
        </div>
        <div class='col-12 pt-2'>
          <a id="${product.id}" target='_blank' href='https://api.whatsapp.com/send?phone=573175987665&text=${product.whatsappMessage}' class='d-flex align-items-center justify-content-center kiwi-btn kiwi-btn--sm kiwi-btn--red font-family-work-sans color-white card-btn'>
            <i class='fab fa-whatsapp font-size-xl mr-3'></i>
            <span>COMPRAR</span>
          </a>
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
          <img data-src='${product.imageUrl}' src='/img/web-thumbnail.jpg' align='left' alt='${product.name}' class='lazyload card-img' />
        </div>
        <div class='col-6 card-height'>
          <div class='pl-3 pr-2 d-flex flex-column height-100'>
            <div class='font-family-chewy font-size-lg font-size-lt-md-xl pt-1'><span>${product.name}</span></div>
            <div class='mb-2 mt-auto'>
              <div class='mb-2 font-family-handlee font-size-sm'>
                <span class=''>Tamaño: ${product.size}</span>
              </div>
              <div class='font-family-work-sans font-size-md'>
                <span class=''>${formatPrice(product.price)}</span>
              </div>
            </div>
          </div>
        </div>
        <div class='col-12 pt-2'>
          <a id="${product.id}" target='_blank' href='https://api.whatsapp.com/send?phone=573175987665&text=${product.whatsappMessage}' class='d-flex align-items-center justify-content-center kiwi-btn kiwi-btn--sm kiwi-btn--red font-family-work-sans color-white card-btn'>
            <i class='fab fa-whatsapp font-size-xl mr-3'></i>
            <span>COMPRAR</span>
          </a>
        </div>
      </div>
    </div>
    `
}

export default {
  markersCardTemplate,
  virtualBookCardTemplate,
  binnacleCardTemplate,
  kitCardTemplate,
  bookCardTemplate,
  organizersCardTemplate
}


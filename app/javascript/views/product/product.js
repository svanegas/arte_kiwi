import 'lazysizes';
import productsJson from '../search/products.json';
import { formatPrice } from '../../utils/utils.js';

// Constants
const raw_products = productsJson.raw_products;

// Variables
let urlSections, category, slug;

document.addEventListener('DOMContentLoaded', function() {
  init();
  const product = findProduct(slug);
  setImage(product.imageUrl, product.name);
  setName(product.name);
  setPrice(product.price);
  setDescription(product.description);
  setPurchaseShopping(product.id, product.whatsappMessage);
});

function init() {
  urlSections = document.getElementById('urlSections');
  category = urlSections.dataset.category;
  slug = urlSections.dataset.slug;
}

function findProduct(slug) {
  return raw_products.filter(product => product.slug == slug)[0];
}

function setImage(imageUrl, name) {
  let imageContainer = document.getElementById('imageContainer');
  const imgLabel = `<img data-src='${imageUrl}' src='/img/web-thumbnail.jpg' align='left' alt='${name}' class='lazyload img-fit' />`;
  imageContainer.insertAdjacentHTML('beforeend', imgLabel);
}

function setName(name) {
  let nameContainer = document.getElementById('nameContainer');
  const spanLabel = `<span class='font-family-chewy font-size-lg font-size-lt-md-xl pt-1'>${name}</span>`;
  nameContainer.insertAdjacentHTML('beforeend', spanLabel);
}

function setPrice(price) {
  let priceContainer = document.getElementById('priceContainer');
  const spanLabel = `<span class='font-family-work-sans font-size-md pt-3'>${formatPrice(price)}</span>`;
  priceContainer.insertAdjacentHTML('beforeend', spanLabel);
}

function setDescription(description) {
  if (description == undefined) description = "";
  let descriptionContainer = document.getElementById('descriptionContainer');
  const spanLabel = `<span>${description}</span>`;
  descriptionContainer.insertAdjacentHTML('beforeend', spanLabel);
}

function setPurchaseShopping(id, whatsappMessage) {
  let purchaseContainer = document.getElementById('purchaseContainer');
  const anchorLabel = `
    <a id="${id}" target='_blank' href='https://api.whatsapp.com/send?phone=573175987665&text=${whatsappMessage}' class='d-flex align-items-center justify-content-center kiwi-btn kiwi-btn--sm kiwi-btn--red font-family-work-sans color-white card-btn'>
      <i class='fab fa-whatsapp font-size-xl mr-3'></i>
      <span>COMPRAR</span>
    </a>
  `;
  purchaseContainer.insertAdjacentHTML('beforeend', anchorLabel);
}

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

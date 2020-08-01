import 'lazysizes';
import productsJson from '../search/products.json';
import { formatPrice } from '../../utils/utils.js';

// Constants
const raw_products = productsJson.raw_products;

// Variables
let urlSections, label, slug;

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
  label = urlSections.dataset.label;
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
  console.log(description);
  if (description == undefined) description = "";
  let descriptionContainer = document.getElementById('descriptionContainer');
  description.forEach((item, i) => {
    descriptionContainer.insertAdjacentHTML('beforeend', `<li>${item}</li>`);
  });
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

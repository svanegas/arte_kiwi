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
  setPrice(product);
});

function init() {
  urlSections = document.getElementById('urlSections');
  label = urlSections.dataset.label;
  slug = urlSections.dataset.slug;
}

function findProduct(slug) {
  return raw_products.filter(product => product.slug == slug)[0];
}

function setPrice(product) {
  if (product.physical_price) {
    let pricePhysicalContainer = document.getElementById('pricePhysicalContainer');
    let spanLabelTitle = `<span class='font-family-work-sans font-size-md pt-3'>Precio físico</span><br>`;
    pricePhysicalContainer.insertAdjacentHTML('beforeend', spanLabelTitle);
    let spanLabelPrice = `<span class='font-family-work-sans font-size-md pt-3'>${formatPrice(product.physical_price)}</span>`;
    pricePhysicalContainer.insertAdjacentHTML('beforeend', spanLabelPrice);

    let priceContainer = document.getElementById('priceContainer');
    spanLabelTitle = `<span class='font-family-work-sans font-size-md pt-3'>Precio virtual</span><br>`;
    priceContainer.insertAdjacentHTML('beforeend', spanLabelTitle);
    spanLabelPrice = `<span class='font-family-work-sans font-size-md pt-3'>${formatPrice(product.price)}</span>`;
    priceContainer.insertAdjacentHTML('beforeend', spanLabelPrice);
  } else {
    let priceContainer = document.getElementById('priceContainer');
    const spanLabel = `<span class='font-family-work-sans font-size-md pt-3'>${formatPrice(product.price)}</span>`;
    priceContainer.insertAdjacentHTML('beforeend', spanLabel);
  }
}

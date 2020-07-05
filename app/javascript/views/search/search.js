import 'lazysizes';
import productsJson from './products.json';
import templates from './templates.js';

const raw_products = productsJson.raw_products;
let cacheProducts;
let cardsContainer;
let selectCategory;
let sortPrice;

document.addEventListener('DOMContentLoaded', function() {
  init();
  const category = getParams(window.location.href).categoria;
  initCards(category);
  selectListener();
  sortListener();
  initCategorySelector(category);
});

function init() {
  cacheProducts = raw_products;
  cardsContainer = document.getElementById('cards-container');
  selectCategory = document.getElementById('selectCategory');
  sortPrice = document.getElementById('sortPrice');
}

const categoryMapper = {
  marcadores: 'markers',
  cartillas: 'books',
  kits: 'kits',
}

function initCategorySelector(category) {
  if (category == "" || category == undefined) {
    selectCategory.value = "all";
    return;
  }
  selectCategory.value = categoryMapper[category];
}

function selectTemplate(category) {
  switch (category) {
    case 'marker':
      return templates.markersCardTemplate;
    case 'virtual-book':
      return templates.virtualBookCardTemplate;
    case 'book':
      return templates.bookCardTemplate;
    case 'binnacle':
      return templates.binnacleCardTemplate;
    case 'organizer':
      return templates.organizersCardTemplate;
    case 'kit':
      return templates.kitCardTemplate;
    default:
      return templates.markersCardTemplate;
  }
}

function initCards(category) {
  if (category == undefined) {
    fillCards(raw_products);
    return;
  }

  let productsFiltered = filterProducts(categoryMapper[category], raw_products);
  fillCards(productsFiltered);
}

function fillCards(products) {
  products.forEach(function(product) {
    let template = selectTemplate(product.template)
    cardsContainer.insertAdjacentHTML('beforeend', template(product));
  });
}

function filterProducts(filter, products) {
  return products.filter(product => product.category.includes(filter));
}

function sortProducts(expensiveSort, products) {
  // expensive to cheapest
  if (expensiveSort) {
    products.sort(function (a, b) {
      if (a.price < b.price) {
        return 1;
      }
      if (a.price > b.price) {
        return -1;
      }
      return 0;
    });

    return products;
  }

  products.sort(function (a, b) {
    if (a.price > b.price) {
      return 1;
    }
    if (a.price < b.price) {
      return -1;
    }
    return 0;
  });

  return products;
}

function selectListener() {
  selectCategory.onchange = (event) => {
      let categorySelected = event.target.value;
      let productsFiltered = []
      if (categorySelected == 'all') {
        productsFiltered = raw_products;
      } else {
        productsFiltered = filterProducts(categorySelected, raw_products)
      }
      cardsContainer.innerHTML = '';
      fillCards(productsFiltered);
      cacheProducts = productsFiltered;
  }
}

function sortListener() {
  sortPrice.onchange = (event) => {
      let sortSelected = event.target.value;
      const expensiveSort = sortSelected == 'expensive' ? true : false
      const productsFiltered = sortProducts(expensiveSort, cacheProducts)
      cardsContainer.innerHTML = '';
      fillCards(productsFiltered);
      cacheProducts = productsFiltered;
  }
}

function getParams(url) {
  let params = {};
  let parser = document.createElement('a');
  parser.href = url;
  let query = parser.search.substring(1);
  let vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=');
    params[pair[0]] = decodeURIComponent(pair[1]);
  }
  return params;
};



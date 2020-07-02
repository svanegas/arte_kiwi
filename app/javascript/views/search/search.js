import productsJson from './products.json';

const raw_products = productsJson.raw_products;
let cacheProducts;
let cardsContainer;
let selectCategory;
let sortPrice;
let priceFormatter;

document.addEventListener('DOMContentLoaded', function() {
  init();
  const category = getParams(window.location.href).categoria;
  initCards(category);
  selectListener();
  sortListener();
});

function init() {
  cacheProducts = raw_products;
  cardsContainer = document.getElementById('cards-container');
  selectCategory = document.getElementById('selectCategory');
  sortPrice = document.getElementById('sortPrice');
  priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });
}

const categoryMapper = {
  marcadores: 'markers',
  lettering: 'lettering'
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
    cardsContainer.insertAdjacentHTML('beforeend', cardTemplate(product));
  });
}

function filterProducts(filter, products) {
  return products.filter(product => product.category == filter);
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
      if (categorySelected == 'default') {
        return;
      }
      const productsFiltered = filterProducts(categorySelected, raw_products)
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

function cardTemplate(product) {
  return `
    <div class='col-12 col-md-6 col-lg-4 card my-1 kiwi-bg-white border-0'>
      <div class='row m-2 m-md-3 no-gutters'>
        <div class='col-6 card-height'>
          <img src='${product.imageUrl}' align='left' alt='${product.name}', class='card-img' />
        </div>
        <div class='col-6 card-height'>
          <div class='pl-3 pr-2 d-flex flex-column height-100'>
            <div class='font-family-chewy font-size-lg font-size-lt-md-xl pt-1'><span>${product.name}</span></div>
            <div class='mb-3 mt-auto font-family-handlee font-size-sm'><span>Cantidad: x${product.quantity}</span></div>
            <div class='mb-2 mt-auto font-family-fredoka-one font-size-md'><span>${priceFormatter.format(product.price)}</span></div>
            <div class=''>
              <a target='_blank' href='https://api.whatsapp.com/send?phone=+573175987665&text=${product.whatsappMessage}' class='d-flex align-items-center justify-content-center kiwi-btn kiwi-btn--sm kiwi-btn--whatsapp font-family-fredoka-one color-white card-btn'>
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




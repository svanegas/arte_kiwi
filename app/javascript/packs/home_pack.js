import 'normalize.css';
import './../views/home/home.scss';
// import "@fortawesome/fontawesome-free/js/all";

import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { searchBox, hits, menu } from 'instantsearch.js/es/widgets';

const searchClient = algoliasearch('', '');

const search = instantsearch({
  indexName: 'products',
  searchClient,
  hitsPerPage: 1,
});

search.addWidgets([
  // searchBox({
  //   container: "#searchbox"
  // }),
  hits({
    container: "#hits",
    cssClasses: {
      list: ['row no-gutters'],
      item: ['col-12 col-md-6 col-lg-4 card']
    },
    templates: {
      item: `
        <div class="card">
          <div class="row m-2 m-md-3 no-gutters box-shadow-raised">
            <div class="col-6 mt-2 mb-3 card-height">
              <img src="{{image}}" align="left" alt="{{name}}", class="card-img" />
            </div>
            <div class="col-6 mt-2 mb-3 card-height">
              <div class="pl-3 pr-2 d-flex flex-column height-100">
                <div class="font-weight-6 font-size-lg font-size-lt-md-xl pt-1"><span>{{name}}</span></div>
                <div class="mb-3 mt-auto font-family-helvetica font-size-lg"><span>$ {{price}} COPx</span></div>
                <div class="">
                  <a target="_blank" href="https://api.whatsapp.com/send?phone=+573175987665&text={{whatsapp_message}}" class="d-flex align-items-center justify-content-center kiwi-btn kiwi-btn--sm kiwi-btn--whatsapp font-family-helvetica color-white card-btn">
                    <i class="fab fa-whatsapp font-size-xl mr-3"></i>
                    <span>COMPRAR</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
    },
  }),
  menu({
    container: '#menu',
    attribute: 'section',
  }),
]);

search.start();
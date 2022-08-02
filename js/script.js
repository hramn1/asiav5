import chooseLang from './choose-lang.js';
import Loader from './components/loader.js';
import ItcAccordion from './components/accordeon.js';
import Status from './components/status.js';
chooseLang();
const loading = new Loader();
const accord = new ItcAccordion('.choose-method__list');
const accordInner = new ItcAccordion('.pay-method-list');
const status = new Status('payment-status--success');
document.querySelector('.payment-form form').addEventListener('submit', function (){
  loading.render();
  setTimeout(function (){
    status.render();
  },2000)
})

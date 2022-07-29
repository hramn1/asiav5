export default class Loader {
  constructor() {
  }
  getTemplate(){
    return (
      `<section class="loader">
            <img src="/img/loader.svg" alt="">
        </section>
            <section class="bottom-payment">
      <p class="bottom-payment__secure">SECURE</p>
      <p class="bottom-payment__ssl">SSL ENCRYPTION</p>
    </section>
`
    )
  }
  render(){
    document.querySelector('.wrapper').innerHTML = "";
    document.querySelector('.wrapper').insertAdjacentHTML('beforeend', this.getTemplate());
  }
}

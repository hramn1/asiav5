export default class Status {
  constructor(el) {
    this.el = el;
  }
  getTemplate(){
    const elemTarget = (this.el === 'payment-status--success')? "succesful" : "declined"
    return (
      `    <section class="payment-status ${this.el}">
      <h1 class="payment-status__title">PAYMENT ${elemTarget}</h1>
      <h2 class="payment-status__inner-title">PAYMENT INFO</h2>
      <div class="payment-info">
          <p class="payment-info__label">Merchant</p>
          <p class="payment-info__text">FOREXPUB</p>
          <p class="payment-info__label">Amount</p>
          <p class="payment-info__text">50.00 MYR</p>
      </div>
      <section class="status-info">
        <div class="status-info__item">
          <p>PAYMENT ID</p>
          <p>3298746397826</p>
        </div>
        <div class="status-info__item">
          <p>PAYMENT DESCRIPTION</p>
          <p>PAYMENT MALAYSIA</p>
        </div>
        <div class="status-info__item">
          <p>DATE</p>
          <p>20.07.2022 16:20</p>
        </div>
      </section>
      <a href="#" class="btn-merchant">BACK TO MERCHANT</a>
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

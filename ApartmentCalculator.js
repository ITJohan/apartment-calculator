import './components/SalaryContainer.mjs';

class ApartmentCalculator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML += `
      <salary-container></salary-container>
    `;
  }
}

customElements.define('apartment-calculator', ApartmentCalculator);

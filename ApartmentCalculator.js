import './components/TableContainer.mjs';

class ApartmentCalculator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML += `
      <table-container></table-container>
      <table-container></table-container>
      <table-container></table-container>
    `;
  }
}

customElements.define('apartment-calculator', ApartmentCalculator);

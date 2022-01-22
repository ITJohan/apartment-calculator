import './components/SalaryModule.mjs';
import './components/LoanModule.mjs';

class ApartmentCalculator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML += `
      <salary-module></salary-module>
      <loan-module></loan-module>
    `;
  }
}

customElements.define('apartment-calculator', ApartmentCalculator);

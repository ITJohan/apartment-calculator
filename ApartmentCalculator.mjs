import './components/SalaryModule.mjs';
import './components/LoanModule.mjs';
import './components/RentModule.mjs';
import './components/YearModule.mjs';

class ApartmentCalculator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML += `
      <style>@import './ApartmentCalculator.css';</style>
      <header>
        <h1>Apartment Loan Calculator</h1>
        <nav>
          <salary-module></salary-module>
          <loan-module></loan-module>
          <rent-module></rent-module>   
        </nav>
      </header>
      <main>
        <year-module></year-module>
      </main>
    `;

    this.setupMutationObserver('salary-module');
    this.setupMutationObserver('loan-module');
    this.setupMutationObserver('rent-module');
  }

  setupMutationObserver(id) {
    const module = this.shadowRoot.querySelector(id);
    const yearModule = this.shadowRoot.querySelector('year-module');

    const mutationObserver = new MutationObserver((mutations, observer) => {
      for (const mutation of mutations) {
        const value = module.getAttribute(mutation.attributeName);
        yearModule.setAttribute(mutation.attributeName, value);
      }
    });

    mutationObserver.observe(module, { attributes: true });
  }
}

customElements.define('apartment-calculator', ApartmentCalculator);

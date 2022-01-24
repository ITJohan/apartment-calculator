import './components/SalaryModule.mjs';
import './components/LoanModule.mjs';
import './components/RentModule.mjs';
import './components/YearModule.mjs';

class ApartmentCalculator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const yearModules = [];
    for (let i = 0; i < 25; i++) {
      yearModules.push(`<year-module year="${i}"></year-module>`);
    }

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
        ${yearModules.join('')}
      </main>
    `;

    this.setupMutationObserver('salary-module');
    this.setupMutationObserver('loan-module');
    this.setupMutationObserver('rent-module');
  }

  setupMutationObserver(id) {
    const module = this.shadowRoot.querySelector(id);
    const yearModules = this.shadowRoot.querySelectorAll('year-module');

    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        const value = module.getAttribute(mutation.attributeName);
        yearModules.forEach((yearModule) => {
          yearModule.setAttribute(mutation.attributeName, value);
        });
      }
    });

    mutationObserver.observe(module, { attributes: true });
  }
}

customElements.define('apartment-calculator', ApartmentCalculator);

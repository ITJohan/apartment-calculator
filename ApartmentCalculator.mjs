import SalaryModule from './components/SalaryModule.mjs';
import LoanModule from './components/LoanModule.mjs';
import RentModule from './components/RentModule.mjs';
import YearModule from './components/YearModule.mjs';

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
        <year-module></year-module>
      </main>
    `;

    const salaryModule = this.shadowRoot.querySelector('salary-module');
    const mutationObserver = new MutationObserver((mutations, observer) => {
      for (const mutation of mutations) {
        console.log(SalaryModule.observedAttributes);
      }
    });
    mutationObserver.observe(salaryModule, { attributes: true });
  }
}

customElements.define('apartment-calculator', ApartmentCalculator);

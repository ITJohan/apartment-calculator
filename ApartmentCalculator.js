import './components/SalaryModule.mjs';
import './components/LoanModule.mjs';
import './components/RentModule.mjs';
import './components/YearModule.mjs';

class ApartmentCalculator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML += `
      <style>@import '../ApartmentCalculator.css';</style>
      <header>
        <h1>Apartment Loan Calculator</h1>
        <salary-module></salary-module>
        <loan-module></loan-module>
        <rent-module></rent-module>
      </header>
      <main>
        <year-module></year-module>
        <year-module></year-module>
      </main>
    `;
  }
}

customElements.define('apartment-calculator', ApartmentCalculator);

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
          <rent-module></rent-module>   
          <loan-module></loan-module>
          <salary-module></salary-module>
        </nav>
      </header>
      <main>
        <year-module></year-module>
        <year-module></year-module>
      </main>
    `;
  }
}

customElements.define('apartment-calculator', ApartmentCalculator);

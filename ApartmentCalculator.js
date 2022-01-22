import './components/SalaryModule.mjs';
import './components/LoanModule.mjs';
import './components/RentModule.mjs';

class ApartmentCalculator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML += `
      <style>@import '../ApartmentCalculator.css';</style>
      <header>
        <salary-module></salary-module>
        <loan-module></loan-module>
        <rent-module></rent-module>
      </header>
      <main>
        YearModule
      </main>
    `;
  }
}

customElements.define('apartment-calculator', ApartmentCalculator);

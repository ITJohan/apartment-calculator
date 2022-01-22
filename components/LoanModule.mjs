class LoanModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        @import '../ApartmentCalculator.css';
      
        section {
          background-color: lightgray;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
          padding: 8px;
        }

        caption {
          font-size: 1.5rem;
          text-align: left;
        }

        th, td {
          padding: 4px;
          text-align: right;
        }

        input {
          background-color: transparent;
          border: none;
          border-bottom: 1px solid black;
          width: 80px;
        }
      </style>
      <section>
        <table>
          <caption>Loan</caption>
          <tbody>
            <tr>
              <th>Loan</th>
              <td><input id="loan" type="number" min="0">kr</td>
            </tr>
            <tr>
              <th>Apartment costs</th>
              <td><input id="apartment-costs" type="number" min="0">kr</td>
            </tr>
            <tr>
              <th>Interest</th>
              <td><input id="interest" type="number" min="0" step="0.1">%</td>
            </tr>
            <tr>
              <th>Interest subsidies</th>
              <td><input id="interest-subsidies" type="number" min="0" step="0.1">%</td>
            </tr>
          </tbody>
        </table>
      </section>
    `;

    const setEventListener = (id) => {
      const inputElement = this.shadowRoot.getElementById(id);
      inputElement.addEventListener('input', (e) => {
        window.sessionStorage.setItem(id, e.target.value);
      });
    };

    setEventListener('loan');
    setEventListener('apartment-costs');
    setEventListener('interest');
    setEventListener('interest-subsidies');
  }
}

customElements.define('loan-module', LoanModule);

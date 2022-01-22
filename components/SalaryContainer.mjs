class SalaryContainer extends HTMLElement {
  static get observedAttributes() {
    return ['expanded'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML += `
      <style>
        @import '../ApartmentCalculator.css';
      
        section {
          background-color: lightgray;
          border-radius: 4px;
          padding: 8px;
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
          <thead>
            <tr>
              <th></th>
              <th>Person one</th>
              <th>Person two</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Salary</th>
              <td>
                <input id="person-one-salary" type="number" min="0">kr
              </td>
              <td>
                <input id="person-two-salary" type="number" min="0">kr
              </td>
            </tr>
            <tr>
              <th>Bonus</th>
              <td><input id="person-one-bonus" type="number" min="0">kr</td>
              <td><input id="person-two-bonus" type="number" min="0">kr</td>
            </tr>
            <tr>
              <th>Yearly increase</th>
              <td><input id="person-one-increase" type="number" min="0" step="0.1">%</td>
              <td><input id="person-two-increase" type="number" min="0" step="0.1">%</td>
            </tr>
            <tr>
              <th>Tax</th>
              <td><input id="person-one-tax" type="number" min="0" step="0.1">%</td>
              <td><input id="person-two-tax" type="number" min="0" step="0.1">%</td>
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

    setEventListener('person-one-salary');
    setEventListener('person-two-salary');
    setEventListener('person-one-bonus');
    setEventListener('person-two-bonus');
    setEventListener('person-one-increase');
    setEventListener('person-two-increase');
    setEventListener('person-one-tax');
    setEventListener('person-two-tax');
  }
}

customElements.define('salary-container', SalaryContainer);

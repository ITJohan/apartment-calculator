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
              <th>Johan</th>
              <th>Astrid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Salary</th>
              <td>
                <input id="salary" type="number"> kr
              </td>
              <td>667 000 kr</td>
            </tr>
            <tr>
              <th>Bonus</th>
              <td>60 000 kr</td>
              <td></td>
            </tr>
            <tr>
              <th>Yearly increase</th>
              <td>5,9%</td>
              <td>5,8%</td>
            </tr>
            <tr>
              <th>Tax</th>
              <td>34%</td>
              <td>34%</td>
            </tr>
          </tbody>
        </table>
      </section>
    `;

    const salaryInput = this.shadowRoot.getElementById('salary');
    salaryInput.addEventListener('input', (e) => {
      console.log(e.target.value);
    });
  }
}

customElements.define('salary-container', SalaryContainer);

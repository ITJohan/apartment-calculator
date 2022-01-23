class SalaryModule extends HTMLElement {
  static get observedAttributes() {
    return [
      'person-one-salary',
      'person-two-salary',
      'person-one-bonus',
      'person-two-bonus',
      'person-one-increase',
      'person-two-increase',
      'person-one-tax',
      'person-two-tax',
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>@import './ApartmentCalculator.css';</style>
      <section>
        <table>
          <caption>Salary</caption>
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
                <input id="${SalaryModule.observedAttributes[0]}" type="number" min="0">kr
              </td>
              <td>
                <input id="${SalaryModule.observedAttributes[1]}" type="number" min="0">kr
              </td>
            </tr>
            <tr>
              <th>Bonus</th>
              <td>
                <input id="${SalaryModule.observedAttributes[2]}" type="number" min="0">kr
              </td>
              <td>
                <input id="${SalaryModule.observedAttributes[3]}" type="number" min="0">kr
              </td>
            </tr>
            <tr>
              <th>Yearly increase</th>
              <td>
                <input id="${SalaryModule.observedAttributes[4]}" type="number" min="0" step="0.1">%
              </td>
              <td>
                <input id="${SalaryModule.observedAttributes[5]}" type="number" min="0" step="0.1">%
              </td>
            </tr>
            <tr>
              <th>Tax</th>
              <td>
                <input id="${SalaryModule.observedAttributes[6]}" type="number" min="0" step="0.1">%
              </td>
              <td>
                <input id="${SalaryModule.observedAttributes[7]}" type="number" min="0" step="0.1">%
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    `;

    for (const attribute of SalaryModule.observedAttributes) {
      const inputElement = this.shadowRoot.getElementById(attribute);

      const value = this.getAttribute(attribute);
      if (!!value) {
        inputElement.value = value;
      }

      inputElement.addEventListener('input', (e) => {
        this.setAttribute(attribute, e.target.value);
      });
    }
  }
}

customElements.define('salary-module', SalaryModule);

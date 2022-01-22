class SalaryModule extends HTMLElement {
  #ids = [
    'person-one-salary',
    'person-two-salary',
    'person-one-bonus',
    'person-two-bonus',
    'person-one-increase',
    'person-two-increase',
    'person-one-tax',
    'person-two-tax',
  ];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>@import '../ApartmentCalculator.css';</style>
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
                <input id="${this.#ids[0]}" type="number" min="0">kr
              </td>
              <td>
                <input id="${this.#ids[1]}" type="number" min="0">kr
              </td>
            </tr>
            <tr>
              <th>Bonus</th>
              <td>
                <input id="${this.#ids[2]}" type="number" min="0">kr
              </td>
              <td>
                <input id="${this.#ids[3]}" type="number" min="0">kr
              </td>
            </tr>
            <tr>
              <th>Yearly increase</th>
              <td>
                <input id="${this.#ids[4]}" type="number" min="0" step="0.1">%
              </td>
              <td>
                <input id="${this.#ids[5]}" type="number" min="0" step="0.1">%
              </td>
            </tr>
            <tr>
              <th>Tax</th>
              <td>
                <input id="${this.#ids[6]}" type="number" min="0" step="0.1">%
              </td>
              <td>
                <input id="${this.#ids[7]}" type="number" min="0" step="0.1">%
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    `;

    for (const id of this.#ids) {
      const inputElement = this.shadowRoot.getElementById(id);
      const savedValue = window.localStorage.getItem(id);
      if (!!savedValue) {
        inputElement.value = savedValue;
      }
      inputElement.addEventListener('input', (e) => {
        window.localStorage.setItem(id, e.target.value);
      });
    }
  }
}

customElements.define('salary-module', SalaryModule);

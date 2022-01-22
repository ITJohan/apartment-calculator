class LoanModule extends HTMLElement {
  #ids = ['loan', 'apartment-costs', 'interest', 'interest-subsidies'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>@import '../ApartmentCalculator.css';</style>
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

customElements.define('loan-module', LoanModule);

export default class LoanModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['loan', 'apartment-costs', 'interest', 'interest-subsidies'];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>@import './ApartmentCalculator.css';</style>
      <section>
        <table>
          <caption>Loan</caption>
          <tbody>
            <tr>
              <th>Loan</th>
              <td>
                <input id="${LoanModule.observedAttributes[0]}" type="number" min="0">kr
              </td>
            </tr>
            <tr>
              <th>Apartment costs</th>
              <td>
                <input id="${LoanModule.observedAttributes[1]}" type="number" min="0">kr
              </td>
            </tr>
            <tr>
              <th>Interest</th>
              <td>
                <input id="${LoanModule.observedAttributes[2]}" type="number" min="0" step="0.1">%
              </td>
            </tr>
            <tr>
              <th>Interest subsidies</th>
              <td>
                <input id="${LoanModule.observedAttributes[3]}" type="number" min="0" step="0.1">%
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    `;

    for (const attribute of LoanModule.observedAttributes) {
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

customElements.define('loan-module', LoanModule);

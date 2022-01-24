export default class RentModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['rent', 'rent-increase'];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>@import './ApartmentCalculator.css';</style>
      <section>
        <table>
          <caption>Rent</caption>
          <tbody>
            <tr>
              <th>Rent</th>
              <td>
                <input id="${RentModule.observedAttributes[0]}" type="number" min="0">kr
              </td>
            </tr>
            <tr>
              <th>Rent increase</th>
              <td>
                <input id="${RentModule.observedAttributes[1]}" type="number" min="0" step="0.1">%
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    `;

    for (const attribute of RentModule.observedAttributes) {
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

customElements.define('rent-module', RentModule);

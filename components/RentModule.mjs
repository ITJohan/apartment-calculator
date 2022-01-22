class RentModule extends HTMLElement {
  #ids = ['rent', 'rent-increase'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>@import '../ApartmentCalculator.css';</style>
      <section>
        <table>
          <caption>Rent</caption>
          <tbody>
            <tr>
              <th>Rent</th>
              <td>
                <input id="${this.#ids[0]}" type="number" min="0">kr
              </td>
            </tr>
            <tr>
              <th>Rent increase</th>
              <td>
                <input id="${this.#ids[1]}" type="number" min="0" step="0.1">%
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

customElements.define('rent-module', RentModule);

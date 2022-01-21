class TableContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML += `
      <style>
        @import '../ApartmentCalculator.css';
        
        section {
          background-color: lightgray;
          border-radius: 8px;
          padding: 16px;
        }
      </style>
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo, quis ipsum reiciendis porro non ducimus exercitationem! Nam, illo quos!
      </section>
    `;
  }
}

customElements.define('table-container', TableContainer);

export default class YearModule extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

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
      'loan',
      'apartment-costs',
      'interest',
      'interest-subsidies',
      'rent',
      'rent-increase',
      'year',
    ];
  }

  attributeChangedCallback(name, _, newValue) {
    switch (name) {
      case YearModule.observedAttributes[0]: {
        // Person one salary
        const elements = this.shadowRoot.querySelectorAll(`.${name}`);
        const totalElement = this.shadowRoot.getElementById(`${name}-total`);

        totalElement.innerText = `${newValue * 12} kr`;

        for (const element of elements) {
          element.innerText = `${newValue} kr`;
        }

        break;
      }
      case YearModule.observedAttributes[1]:
        // Person two salary
        break;
      case YearModule.observedAttributes[2]:
        // Person one bonus
        break;
      case YearModule.observedAttributes[3]:
        // Person two bonus
        break;
      case YearModule.observedAttributes[4]:
        // Person one increase
        break;
      case YearModule.observedAttributes[5]:
        // Person two increase
        break;
      case YearModule.observedAttributes[6]:
        // Person one tax
        break;
      case YearModule.observedAttributes[7]:
        // Person two tax
        break;
      case YearModule.observedAttributes[8]:
        // Loan
        break;
      case YearModule.observedAttributes[9]: {
        // Apartment costs
        const elements = this.shadowRoot.querySelectorAll(`.${name}`);
        const totalElement = this.shadowRoot.getElementById(`${name}-total`);

        totalElement.innerText = `${newValue * 12} kr`;

        for (const element of elements) {
          element.innerText = `${newValue} kr`;
        }

        break;
      }
      case YearModule.observedAttributes[10]:
        // Interest
        break;
      case YearModule.observedAttributes[11]:
        // Interest subsidies
        break;
      case YearModule.observedAttributes[12]:
        // Rent
        break;
      case YearModule.observedAttributes[13]:
        // Rent increase
        break;
      default:
        return;
    }
  }

  connectedCallback() {
    this.render();
  }

  generateMonthRow(month) {
    return `
    <tr>
      <td>${month}</td>
      <td class="${YearModule.observedAttributes[0]}">0 kr</td>
      <td class="${YearModule.observedAttributes[1]}">0 kr</td>
      <td class="${YearModule.observedAttributes[2]}">0 kr</td>
      <td class="separator"></td>
      <td class="${YearModule.observedAttributes[3]}">0 kr</td>
      <td class="${YearModule.observedAttributes[4]}">0 kr</td>
      <td class="${YearModule.observedAttributes[5]}">0 kr</td>
      <td class="${YearModule.observedAttributes[6]}">0 kr</td>
      <td class="${YearModule.observedAttributes[7]}">0 kr</td>
      <td class="${YearModule.observedAttributes[8]}">0 kr</td>
      <td class="${YearModule.observedAttributes[9]}">0 kr</td>
      <td class="${YearModule.observedAttributes[10]}">0 kr</td>
      <td class="separator"></td>
      <td class="${YearModule.observedAttributes[11]}">0 kr</td>
    </tr>
    `;
  }

  render() {
    const year = +this.getAttribute(YearModule.observedAttributes[14]) + 1;

    this.shadowRoot.innerHTML = `
      <style>
        @import './ApartmentCalculator.css';

        tr {
          height: 32px;
        }
        
        tr:nth-child(2n) {
          background-color: rgb(240, 240, 240);
        }

        th,
        td {
          text-align: left;
        }

        .header {
          align-items: center;
          display: flex;
          justify-content: space-between;
        }

        .hide {
          display: none;
        }

        .separator {
          width: 40px;
        }

        #expand-button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.5rem;
        }
      </style>
      <section>
        <table>
          <caption>
            <div class="header">
              <h4>Year ${year}</h4>
              <button id="expand-button">➕</button>
            </div>
          </caption>
          <thead>
            <tr>
              <th>Month</th>
              <th>Person one salary</th>
              <th>Person two salary</th>
              <th>Total salary</th>
              <th class="separator"></th>
              <th>Loan</th>
              <th>Interest</th>
              <th>Total loan</th>
              <th>Loan remaining</th>
              <th>Apartment costs</th>
              <th>Subsidies</th>
              <th>Total cost</th>
              <th>Money in the sink</th>
              <th class="separator"></th>
              <th>Rent</th>
            </tr>
          </thead>
          <tbody class="hide">
            ${this.generateMonthRow('Jan')}
            ${this.generateMonthRow('Feb')}
            ${this.generateMonthRow('Mar')}
            ${this.generateMonthRow('Apr')}
            ${this.generateMonthRow('May')}
            ${this.generateMonthRow('Jun')}
            ${this.generateMonthRow('Jul')}
            ${this.generateMonthRow('Aug')}
            ${this.generateMonthRow('Sep')}
            ${this.generateMonthRow('Oct')}
            ${this.generateMonthRow('Nov')}
            ${this.generateMonthRow('Dec')}
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <th id="${YearModule.observedAttributes[0]}-total">0 kr</th>
              <th id="${YearModule.observedAttributes[1]}-total">0 kr</th>
              <th id="${YearModule.observedAttributes[2]}-total">0 kr</th>
              <th class="separator"></th>
              <th id="${YearModule.observedAttributes[3]}-total">0 kr</th>
              <th id="${YearModule.observedAttributes[4]}-total">0 kr</th>
              <th id="${YearModule.observedAttributes[5]}-total">0 kr</th>
              <th id="${YearModule.observedAttributes[6]}-total">0 kr</th>
              <th id="${YearModule.observedAttributes[7]}-total">0 kr</th>
              <th id="${YearModule.observedAttributes[8]}-total">0 kr</th>
              <th id="${YearModule.observedAttributes[9]}-total">0 kr</th>
              <th id="${YearModule.observedAttributes[10]}-total">0 kr</th>
              <th class="separator"></th>
              <th id="${YearModule.observedAttributes[11]}-total">0 kr</th>
            </tr>
          </tfoot>
        </table>
      </section>
    `;

    const expandButton = this.shadowRoot.getElementById('expand-button');
    expandButton.addEventListener('click', () => {
      const tBody = this.shadowRoot.querySelector('tbody');
      tBody.classList.toggle('hide');
      expandButton.textContent =
        expandButton.textContent === '➕' ? '➖' : '➕';
    });
  }
}

customElements.define('year-module', YearModule);

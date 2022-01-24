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
    ];
  }

  attributeChangedCallback(name, _, newValue) {
    switch (name) {
      case YearModule.observedAttributes[0]:
        break;
      case YearModule.observedAttributes[1]:
        break;
      case YearModule.observedAttributes[2]:
        break;
      case YearModule.observedAttributes[3]:
        break;
      case YearModule.observedAttributes[4]:
        break;
      case YearModule.observedAttributes[5]:
        break;
      case YearModule.observedAttributes[6]:
        break;
      case YearModule.observedAttributes[7]:
        break;
      case YearModule.observedAttributes[8]:
        break;
      case YearModule.observedAttributes[9]:
        const elements = this.shadowRoot.querySelectorAll(`.${name}`);
        const totalElement = this.shadowRoot.getElementById(`${name}-total`);

        totalElement.innerText = `${newValue * 12} kr`;

        for (const element of elements) {
          element.innerText = `${newValue} kr`;
        }

        break;
      case YearModule.observedAttributes[10]:
        break;
      case YearModule.observedAttributes[11]:
        break;
      case YearModule.observedAttributes[12]:
        break;
      case YearModule.observedAttributes[13]:
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
      <td>0 kr</td>
      <td>0 kr</td>
      <td>0 kr</td>
      <td class="separator"></td>
      <td>0 kr</td>
      <td>0 kr</td>
      <td>0 kr</td>
      <td>0 kr</td>
      <td class="${YearModule.observedAttributes[9]}">0 kr</td>
      <td>0 kr</td>
      <td>0 kr</td>
      <td>0 kr</td>
      <td class="separator"></td>
      <td>0 kr</td>
    </tr>
    `;
  }

  render() {
    console.log('rendering year module');

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
              <h4>Year 1</h4>
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
              <th>0 kr</th>
              <th>0 kr</th>
              <th>0 kr</th>
              <th class="separator"></th>
              <th>0 kr</th>
              <th>0 kr</th>
              <th>0 kr</th>
              <th>0 kr</th>
              <th id="${YearModule.observedAttributes[9]}-total">0 kr</th>
              <th>0 kr</th>
              <th>0 kr</th>
              <th>0 kr</th>
              <th class="separator"></th>
              <th>0 kr</th>
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

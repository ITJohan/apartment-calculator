export default class YearModule extends HTMLElement {
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

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const generateMonthRow = (month) => {
      return `
      <tr>
        <td>${month}</td>
        <td>100 000 kr</td>
        <td>100 000 kr</td>
        <td>200 000 kr</td>
        <td class="separator"></td>
        <td>10123</td>
        <td>15235123</td>
        <td>234222</td>
        <td>2364236</td>
        <td id=${YearModule.observedAttributes[9]}>${this.getAttribute(
        YearModule.observedAttributes[9]
      )}</td>
        <td>3454357</td>
        <td>243573457</td>
        <td>23456234</td>
        <td class="separator"></td>
        <td>11800</td>
      </tr>
      `;
    };

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
            ${generateMonthRow('Jan')}
            ${generateMonthRow('Feb')}
            ${generateMonthRow('Mar')}
            ${generateMonthRow('Apr')}
            ${generateMonthRow('May')}
            ${generateMonthRow('Jun')}
            ${generateMonthRow('Jul')}
            ${generateMonthRow('Aug')}
            ${generateMonthRow('Sep')}
            ${generateMonthRow('Oct')}
            ${generateMonthRow('Nov')}
            ${generateMonthRow('Dec')}
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <td>1000000</td>
              <td>23200000</td>
              <td>21023459</td>
              <td class="separator"></td>
              <td>284383246</td>
              <td>28468346</td>
              <td>12398373</td>
              <td>8273456945</td>
              <td id="${YearModule.observedAttributes[9]}-total"></td>
              <td>29875234</td>
              <td>92837412345</td>
              <td>2304598</td>
              <td class="separator"></td>
              <td>90283476</td>
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

  attributeChangedCallback(name, _, newValue) {
    const element = this.shadowRoot.getElementById(name);
    const elementTotal = this.shadowRoot.getElementById(`${name}-total`);
    element.innerText = newValue;
    elementTotal.innerText = newValue * 12;
  }
}

customElements.define('year-module', YearModule);

class YearModule extends HTMLElement {
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
        <td></td>
        <td>10123</td>
        <td>15235123</td>
        <td>234222</td>
        <td>2364236</td>
        <td>12345123</td>
        <td>3454357</td>
        <td>243573457</td>
        <td>23456234</td>
        <td></td>
        <td>11800</td>
      </tr>
      `;
    };

    this.shadowRoot.innerHTML = `
      <style>@import '../ApartmentCalculator.css';</style>
      <section>
        <table>
          <caption>Year 1</caption>
          <thead>
            <tr>
              <th>Month</th>
              <th>Person one salary</th>
              <th>Person two salary</th>
              <th>Total salary</th>
              <th></th>
              <th>Loan</th>
              <th>Interest</th>
              <th>Total loan</th>
              <th>Loan remaining</th>
              <th>Apartment costs</th>
              <th>Subsidies</th>
              <th>Total cost</th>
              <th>Money in the sink</th>
              <th></th>
              <th>Rent</th>
            </tr>
          </thead>
          <tbody>
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
          <tfooter>
            <tr>
              <th>Total</th>
              <td>1000000</td>
              <td>23200000</td>
              <td>21023459</td>
              <td></td>
              <td>284383246</td>
              <td>28468346</td>
              <td>12398373</td>
              <td>8273456945</td>
              <td>07248356</td>
              <td>29875234</td>
              <td>9283745</td>
              <td>2304598</td>
              <td></td>
              <td>90283476</td>
            </tr>
          </tfooter>
        </table>
      </section>
    `;
  }
}

customElements.define('year-module', YearModule);

import { html, LitElement } from "lit";

export class TableComponent extends LitElement {
    static get properties() {
        return {
            list: {
                type: Array,
            }
        };
    }

    constructor() {
        super();
        this.list = [];
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
        <table class="highlight">
        <thead>
          <tr>
              <th>ID</th>
              <th>Marca</th>
              <th>Color</th>
          </tr>
        </thead>
        <tbody>
        ${this.list.map(
            (car, index) => html`<tr>
              <td>${index + 1}</td>
              <td>${car.nombre}</td>
              <td>${car.color}</td>
            </tr>`
        )}
        </tbody>
      </table>
        `;
    }
}

export default customElements.define("table-component", TableComponent);
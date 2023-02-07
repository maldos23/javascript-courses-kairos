import { LitElement, html } from "lit";
import "./components/form-component";
import "./components/table-component";

const URL_SERVER = "http://localhost:3000/api";

export class MyComponent extends LitElement {
  static get properties() {
    return {
      label: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.label = "No hay texto";
    this.counter = 0;
    this.cars = [];
  }

  createRenderRoot() {
    return this;
  }

  incrementCounter() {
    this.counter = this.counter + 1;
    this.requestUpdate();
  }

  setAllCars(cars = []) {
    this.cars = cars;
  }

  getAllCars() {
    fetch(`${URL_SERVER}/cars`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setAllCars(data.cars || []);
        this.requestUpdate();
      })
      .catch((err) => console.log("Error en API:", err));
  }

  connectedCallback() {
    this.getAllCars();
    super.connectedCallback();
  }

  render() {
    return html`
      <div class="container center">
        <h4 class="indigo-text text-lighten-2">${this.label}</h4>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-content">
              <span class="card-title">Agregar nuevos modelos</span>
              <form-component url=${URL_SERVER} .oncreatecar=${() => this.getAllCars()} />
            </div>
          </div>
        </div>
        <div class="col s12 m6">
            <table-component .list=${this.cars} />
        </div>
      </div>
    `;
  }


  /*
  render() {
      return html`
      <h1>Hola ${this.label}</h1>
      <h3>Valor del contador: ${this.counter}</h3>
      <button @click="${this.incrementCounter}">Presionar</button>
      `
  }
  */
}
//Utilizar constructores si se implementa funcionalidad
//Utilizar propiedades si se modifica solo el html
export default customElements.define("my-component", MyComponent);

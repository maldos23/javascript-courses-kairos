import { LitElement, html } from "lit";

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



  render() {
    return html`<h1>${this.label}</h1>
      <div>
        ${this.cars.map(
          (car, index) => html`<div>
            <label>${index + 1}</label>
            <h5>Marca: ${car.nombre}</h5>
            <p>${car.color}</p>
          </div>`
        )}
      </div> `;
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

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
    this.label = "No hay nada";
    this.counter = 0;
    this.movies = [];
  }

  incrementCounter() {
    this.counter = this.counter + 1;
    this.requestUpdate();
  }

  setAllMovies(movies = []) {
    this.movies = movies;
  }

  getAllMovies() {
    fetch(`${URL_SERVER}/movies`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setAllMovies(data.movies || []);
        this.requestUpdate();
      })
      .catch((err) => console.log("Error en API:", err));
  }

  performUpdate() {
    this.getAllMovies();
    super.performUpdate();
  }

  render() {
    return html`<h1>${this.label}</h1>
      <div>
        ${this.movies.map(
          (movie, index) => html`<div>
            <label>${index + 1}</label>
            <h5>Titulo: ${movie.name}</h5>
            <p>${movie.description}</p>
          </div>`
        )}
      </div> `;
  }
}

export default customElements.define("my-component", MyComponent);

import { LitElement, html } from "lit";
import "./components/movies-form";
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
      .then(res => res.json())
      .then(data => {
        this.setAllMovies(data.movies || []);
        this.requestUpdate();
      })
      .catch(err => console.log("Error en API:", err));
  }

  connectedCallback() {
    this.getAllMovies();
    super.connectedCallback();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="flex justify-center">
        <h1 class="text-2xl font-bold text-gray-900">${this.label}</h1>
      </div>

      <div class="md:container md:mx-auto m-4 flex justify-center">
        <div class="border-separate m-1 shadow-md p-4 rounded">
          <div class="flex justify-center">
            <h1 class="text-sm font-bold text-gray-900">
              Agregar nuevas peliculas
            </h1>
          </div>
          <movies-form url=${URL_SERVER} .oncreatemovie=${() => this.getAllMovies()} />
        </div>
        <table class="table-auto border-separate shadow-md p-4 m-1 rounded">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            ${this.movies.map(
              (movie, index) => html`<tr>
                <td class="border border-slate-600">${index + 1}</td>
                <td class="border border-slate-600">${movie.name}</td>
                <td class="border border-slate-600">${movie.description}</td>
              </tr>`
            )}
          </tbody>
        </table>
      </div>
    `;
  }
}

export default customElements.define("my-component", MyComponent);

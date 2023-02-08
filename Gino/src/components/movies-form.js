import { html, LitElement } from "lit";
import "./st-button";

export class MoviesForm extends LitElement {
  static get properties() {
    return {
      url: {
        type: String,
      },
      oncreatemovie: {
        type: Function,
      },
    };
  }

  constructor() {
    super();
    this.name = null;
    this.description = null;
    //this.url = null;
    this.oncreatemovie = () => {};
  }

  createRenderRoot() {
    return this;
  }

  _changeForm(e) {
    this[e.target.name] = e.target.value;
  }

  sendNewMovie() {
    const { name, description } = this;

    fetch(`${this.url}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.oncreatemovie();
      });
  }

  render() {
    return html`<div>
      <input
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        name="name"
        @input=${this._changeForm}
        type="text"
        placeholder="Ingresa pelicula"
      />
      <input
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        name="description"
        @input=${this._changeForm}
        type="textarea"
        placeholder="Descripcion"
      />
      <st-button
        @click=${this.sendNewMovie}
        type="button"
        label="Agregar pelicula"
      />
    </div>`;
  }
}

export default customElements.define("movies-form", MoviesForm);

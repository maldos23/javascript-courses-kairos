import { html, LitElement } from "lit";

export class STButton extends LitElement {
  static get properties() {
    return {
      label: {
        type: String,
      },
      type: {
        type: String,
      },
    };
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`<button
      type="${this.typeButton}"
      class="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      ${this.label}
    </button>`;
  }
}

export default customElements.define("st-button", STButton);

import { html, LitElement } from "lit";

export class ButtonComponent extends LitElement {
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
    return html`
    <button class="btn waves-effect waves-light" type="${this.type}">${this.label} 
    </button>`;
  }
}

export default customElements.define("button-component", ButtonComponent);
import { html, LitElement } from "lit";
import "./button-component";

export class FormComponent extends LitElement {
    static get properties() {
        return {
            url: {
                type: String,
            },
            oncreatecar: {
                type: Function,
            },
        };
    }

    constructor() {
        super();
        this.nombre = null;
        this.color = null;
        this.oncreatecar = () => { };
    }

    createRenderRoot() {
        return this;
    }

    _changeForm(e) {
        this[e.target.name] = e.target.value;
    }

    sendNewCar() {
        const { nombre, color } = this;

        if(nombre == null || color == null){
            M.toast({html: 'Ingresa Marca y Color', classes: 'rounded indigo lighten-2'})
            return false;
        }

        fetch(`${this.url}/cars`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre,
                color,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                this.oncreatecar();
                document.getElementById("input_marca").value = "";
                document.getElementById("input_color").value = "";
                this.nombre = null;
                this.color = null;
                M.toast({html: 'Se ha agregado el nuevo automovil', classes: 'rounded indigo lighten-2'})
            });
    }

    render() {
        return html`
        <div class="input-field col s6">
            <input id="input_marca" type="text" name="nombre" @input=${this._changeForm}>
            <label for="input_marca">Marca</label>
        </div>
        <div class="input-field col s6">
            <input id="input_color" type="text" name="color" @input=${this._changeForm}>
            <label for="input_color">Color</label>
        </div>
        <button-component
            @click=${this.sendNewCar}
            type="button"
            label="Agregar"
        />
    `;
    }
}

export default customElements.define("form-component", FormComponent);
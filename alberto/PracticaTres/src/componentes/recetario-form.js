import { LitElement, html } from "lit";
import "./re-button";

export class RecetarioForm extends LitElement{

static get properties(){
    return{
        url: {type: String},
        oncreatereceta: {type: Function,},
    };
}


constructor(){
    super();
    this.descripcion = null;
    this.precio = null;
    this.topico = null;
    this.sabor = null;
    this.oncreatereceta = () => {};
}

/**
 * createRenderRoot
 * @returns {object}
 * @description Devuelve el pripio componente 
 * como raiz   
 */
createRenderRoot(){
    return this;
}



_changeForm(e){
    this[e.target.name] = e.target.value;
}


/**
 *sendNewReceta
 * @description funcion que reliza el 
 * POST
 */

sendNewReceta (){
    const { descripcion, topico, sabor, precio } = this;

    fetch(`${this.url}`,{
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({descripcion, topico, sabor, precio}),    
    }).then((res) => res.json())
      .then((data)=> {this.oncreatereceta()});
}

/**
 * render
 * @returns {html}
 * @description Metodo que renderiza,
 * se actualiza automaticamente
 */

render(){
    return html `<div> 
        <input
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
            name="descripcion" 
            @input=${this._changeForm}
            type="text";
            placeholder="Ingrsa Postre"
        />
        <input
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            name="topico" 
            @input=${this._changeForm}
            type="text";
            placeholder="Topico"
        />
        <input
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        name="sabor" 
        @input=${this._changeForm}
        type="text";
        placeholder="Sabor"
        />
        <input
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        name="precio" 
        @input=${this._changeForm}
        type="text";
        placeholder="Precio"
        />


        <re-button
            @click=${this.sendNewReceta}
            type="button"
            label="Agregar Postre"
        />
    </div>`;
}

}

export default customElements.define("recetario-form",RecetarioForm)
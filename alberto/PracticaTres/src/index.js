import { LitElement, html } from "lit";
import "./componentes/recetario-form";

const URL_SERVER = "http://localhost:4000/api/v1/recetario";


export class MiReceta extends LitElement{


static get properties(){
    return{
        label: { type: String },       
    };
}


constructor(){
    super();
    this.label = "Recetario";
    this.lstRecetas = [];
    this.cont = 0;
    
};
/**
 * incrementaCont
 * @description incrementa el contador
 * para generar la tabla
 */
incrementaCont(){
    this.cont = this.cont + 1;
    this.requestUpdate();
}

/**
 * setAllRecetas
 * @param {object} recetario 
 * @description asigna valores
 */
setAllRecetas (recetario = []){
    this.lstRecetas = recetario;
};


/**
 * getAllRecetario
 * @description obtiene respuesta del 
 * GET
 */
getAllRecetario(){
    fetch(`${URL_SERVER}`, {
        method: "GET",
      })
    .then((res)=> res.json())
    .then((data) => { 
        this.setAllRecetas( data || [] ); 
        this.requestUpdate();
    })
    .catch((err) => console.log("Error en API:", err));
};

/**
 * connectedCallback()
 * @description se activa cada ves 
 * que se agrega un elemento
 */
connectedCallback(){
    this.getAllRecetario();
    super.connectedCallback();
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

/**
 * render
 * @returns {html}
 * @description Metodo que renderiza,
 * se actualiza automaticamente
 */
render(){
    return html `
        <div class="flex justify-center">
            <h1 class="text-2xl font-bold text-gray-900">${this.label}</h1>
        </div>

        <div class="md:container md:mx-auto m-4 flex justify-center">
        <div class="border-separate m-1 shadow-md p-4 rounded">
          <div class="flex justify-center">
            <h1 class="text-sm font-bold text-gray-900">
              Agregar Postre
            </h1>
          </div>
          <recetario-form url=${URL_SERVER} .oncreatereceta=${() => this.getAllRecetario()} />
        </div>
        <table class="table-auto border-separate shadow-md p-4 m-1 rounded">
          <thead>
            <tr>
              <th>Id</th>
              <th>Postre</th>
              <th>Topico</th>
              <th>Sabor</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            ${this.lstRecetas.map(
              (lstReceta, index) => html`<tr>
                <td class="border border-slate-600">${index + 1}</td>
                <td class="border border-slate-600">${lstReceta.descripcion}</td>
                <td class="border border-slate-600">${lstReceta.topico}</td>
                <td class="border border-slate-600">${lstReceta.sabor}</td>
                <td class="border border-slate-600">${lstReceta.precio}</td>
              </tr>`
            )}
          </tbody>
        </table>
      </div>
    `};    
}

export default customElements.define('mi-receta',MiReceta);
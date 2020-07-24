import {html, render} from 'https://unpkg.com/lit-html@1.2.1/lit-html.js'
class SystemEnvDisplay extends HTMLElement {

    connectedCallback(){
        this.innerHTML = "no content";
        window.addEventListener("systemEnvEvent", e=> this.onDataArrived(e))

    }
    onDataArrived(e){
        console.log(e);
        this.innerHTML = `
           <code> ${JSON.stringify(e.detail)}</code>
        `;
    }
}
customElements.define("env-display", SystemEnvDisplay);
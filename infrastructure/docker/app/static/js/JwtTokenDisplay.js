import {html, render} from 'https://unpkg.com/lit-html@1.2.1/lit-html.js'
class JwtTokenDisplay extends HTMLElement {

    connectedCallback(){
        this.innerHTML = "no Token available";
        window.addEventListener("authenticationcomplete", e=> this.onDataArrived(e))

    }
    onDataArrived(e){
        console.log(e);
        const template = html`
           <code> ${JSON.stringify(e.detail)}</code>
        `;
        render(template, this);

    }
}
customElements.define("jwt-token", JwtTokenDisplay);
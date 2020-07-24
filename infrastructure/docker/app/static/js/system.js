import {html, render} from 'https://unpkg.com/lit-html@1.2.1/lit-html.js'
import {fetchData} from './SystemService.js'
import './systemEnvDisplay.js'
console.log("CustomElement is loading now");
class SystemEnv extends HTMLElement{

    constructor(){
        super();
    }
    // define hmtl attribute for backend access , better in html for reverse proxy
    get backendUrl(){
        return this.getAttribute('url')
    }

    connectedCallback(){
        console.log("registering button callback");
        const template = html`
        <h2>System Env</h3>
        <button @click=${_=>this.initiateFetch()}>Fetch</button><br/>
        <env-display></env-display>
        `;
        render(template, this);
        console.log("button callback, registered, adding Event Listener");
        window.addEventListener('systemEnvEvent',e=> this.onSystemEnvArrived(e) );
    }

    onSystemEnvArrived({detail}){
        console.log("event caught");
        console.log('loaded ',detail)
    }
    initiateFetch(){
        console.log("fetch started");
        fetchData(this.backendUrl);
    }
}
customElements.define("system-env", SystemEnv);
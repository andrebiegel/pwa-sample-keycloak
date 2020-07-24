const fetchData = async backendUrl =>{
    console.log("fetch starting");
    const response = await fetch(backendUrl,{ headers: { 'Authorization': ' Bearer ' + this.state.keycloak.token }} );
    console.log("fetching from" + backendUrl);
    const payload = await response.json();
    const event = new CustomEvent('systemEnvEvent',{
        detail :payload,
        bubbles: true
    } )
    window.dispatchEvent(event);
}
export {fetchData}
import 'http://localhost:8080/auth/js/keycloak.js'
import './js/JwtTokenDisplay.js'
const auhenticationState = { keycloak: null, authenticated: false, backendData: null }
const login = _ => {
    const keycloak = new Keycloak("keycloak.json");
 
    keycloak.init({ onLoad: 'login-required' }).success(authenticated => {
      this.setAuhenticationState({ keycloak: keycloak, authenticated: authenticated });
      const event = new CustomEvent('authenticationcomplete',{
        detail :payload,
        bubbles: true
      } );
        window.dispatchEvent(event);

    }).error(err => {
      alert(err);
    });
}
//login();

const decodeJWT = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.stringify(JSON.parse(window.atob(base64)), null, 4);
  }
export {decodeJWT, auhenticationState}
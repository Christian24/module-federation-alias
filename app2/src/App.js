import {LitElement, html} from 'lit';


class App extends LitElement {
  render() {
    return html`<h1>App2</h1>`
  }
}
window.customElements.define('my-app2', App);

import {html, render} from 'lit';

render(html`<p>App1</p><button @click="${() => {
    import("app2/App")
}}">Load App2</button><my-app2></my-app2>`, document.getElementById("root")); 



class Hello extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = "<div><h1>Hello World</h1><p>Web Components Manuais</p></div>"
    }
}

customElements.define('WebManual', Hello)
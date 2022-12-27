class DinamicTitle extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});

        // Element base
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo")
        //styled comp

        const style = document.createElement("style")
        style.textContent = `
        h1{
            color: red;
        }
        `

        //shadow send
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('dinamic-titles', DinamicTitle)
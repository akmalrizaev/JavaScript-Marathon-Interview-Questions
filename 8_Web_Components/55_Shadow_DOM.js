// Shadow DOM is a way to provide encapsulation to the web component
// or in other words - shadow DOM is a way to provide seperate hidden DOM
// to web components i.e, web component's own DOM

// Shadow DOM is its own scope for a web component in the DOM

// this.attachShadow({mode: 'open'}); - attaches the component to the DOM
// When we have to add elements of the web component to the shadow DOM
// we are going to use the shadowRoot()

class ProductCard extends HTMLElement {
  constructor() {
    super();
    const h1 = document.createElement('h1');
    h1.innerHTML = `
        <style>
            h1{
                color : red;
            }
        </style>
        Product Component
        `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(h1);
  }
}

window.customElements.define('product-card', ProductCard);

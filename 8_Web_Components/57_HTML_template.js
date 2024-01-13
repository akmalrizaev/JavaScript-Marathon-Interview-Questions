// A <template> tag allows you to define the HTML template - (Template means
// there is a design - which we can use by making a copy or clone of it)

// <template> tag contains the HTML which is not rendered on the page load
// but is displayed only through Javascript

// Instead of fixed template in the HTML section, we can create a template
// at runtime using Javascript with the help of document.createElement()

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

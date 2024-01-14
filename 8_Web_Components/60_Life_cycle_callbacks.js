// The constructor() method gets called automamatically when the component is initialized

// There are other methods getting called automatically
// on different phases of a web component if we give them

// When the component is initialized - the constructor() is invoked

// Component gets attached to the document's DOM and at that time
// the connectedCallback() is invoked

// When the custom element is disconnected from the document's DOM -
// disconnectedCallback() is invoked

// During the existence of component - if an attribute is added, removed or
// even value changed then attributeChangedCallback() is invoked

// When the component is moved on a new page/document then
// adoptedCallback() is invoked which is very rarely used

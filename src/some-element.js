import './styles.css';

export class SomeElement extends HTMLElement {
  static get observedAttributes() {
    return ['prop1'];
  }

  get prop1() { return this.getAttribute('prop1'); }
  set prop1(value) { return this.setAttribute('prop1', value); }

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }
  connectedCallback() {}
  disconnectedCallback() {}
  render() {
    this.shadowRoot.innerHTML = `Hello Arizona - ${this.prop1}`;
  }
}

let someText = 'Some Text';

window.customElements.define('some-element', SomeElement);
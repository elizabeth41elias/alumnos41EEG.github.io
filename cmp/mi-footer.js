class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
       Emanuel Cortez Lopez
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);

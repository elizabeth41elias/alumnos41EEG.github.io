class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
      `<p>
        &copy; 2021
       Elizabeth Elias
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);

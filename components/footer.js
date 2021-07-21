// Information on creating headers and other page components that repeat across pages from the tutiorial at https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/


class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footer">
                <h2>Footer</h2>
            </div> 
        </footer>
        `;
    }
}

customElements.define('footer-component', Footer);
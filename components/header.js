// Information on creating headers and other page components that repeat across pages from the tutiorial at https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/


class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav class="navbar">
                <a href="index.html">Esa Schenck</a>
                <a href="about.html">About Me</a>
                <a href="#">Research</a>
                <a href="#">Projects</a>
            </nav>
        </header>
        `;
    }
}

customElements.define('header-component', Header);
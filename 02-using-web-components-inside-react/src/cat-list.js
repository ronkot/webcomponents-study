import { LitElement, html, css } from 'lit-element'

class CatList extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      cats: { type: Array }
    }
  }

  constructor() {
    super()
    this.title = ''
    this.cats = []
  }

  handleClick(cat) {
    const toggleEvent = new CustomEvent('cat-list-select-cat', {
      detail: cat
    })
    this.dispatchEvent(toggleEvent)
  }

  render() {
    return html`
      <h2>${this.title}</h2>
      ${this.cats.map(
        cat => html`
          <div @click=${() => this.handleClick(cat)} class="cat">
            <img src="${cat.url}" />
            <p>${cat.name}</p>
          </div>
        `
      )}
    `
  }

  static get styles() {
    return css`
      .cat {
        display: flex;
        flex-direction: column;
      }

      img {
        width: 100%;
        height: auto;
      }
    `
  }
}

customElements.define('cat-list', CatList)

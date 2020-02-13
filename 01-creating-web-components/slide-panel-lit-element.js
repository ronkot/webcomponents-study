import { LitElement, html, css } from 'lit-element'

class SlidePanelLitElement extends LitElement {
  static get properties() {
    return { open: { type: Boolean, reflect: true } }
  }

  constructor() {
    super()
    this.open = false
  }

  togglePanel() {
    const toggleEvent = new CustomEvent('slide-panel-toggle', {
      detail: { currentValue: this.open, nextValue: !this.open }
    })
    this.dispatchEvent(toggleEvent)
  }

  render() {
    return html`
      <link rel="stylesheet" type="text/css" href="styles.css" />
      <div class="header" @click=${this.togglePanel}>
        <slot name="title"></slot>
        <span class="arrow">^</span>
      </div>
      ${this.open
        ? html`
            <div class="content">
              <slot></slot>
            </div>
          `
        : undefined}
    `
  }

  static get styles() {
    return css`
      .header {
        display: flex;
        align-items: center;
        cursor: pointer;
        background: var(--slide-panel-header-color, #eee);
      }
      .arrow {
        margin-left: auto;
        margin-right: 20px;
      }
      :host(:not([open])) .arrow {
        transform: rotate(180deg);
      }
    `
  }
}

customElements.define('slide-panel-lit-element', SlidePanelLitElement)

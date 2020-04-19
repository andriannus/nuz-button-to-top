import 'regenerator-runtime';
import { css, html, LitElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

import { buttonStyles, iconStyles } from '@/style';
import { DISTANCE, ICON_CODE, THEME } from '@/shared/constants/button.const';

class ButtonToTop extends LitElement {
  constructor() {
    super();
    this.distance = DISTANCE;
    this['icon-code'] = ICON_CODE;
    this.theme = THEME.primary;
  }

  static get properties() {
    return {
      distance: { type: Number },
      'icon-code': { type: String },
      theme: { type: String },
    };
  }

  static get styles() {
    return [buttonStyles, iconStyles];
  }

  connectedCallback() {
    super.connectedCallback();

    window.onscroll = () => {
      const { body, documentElement } = document;
      const button = this.shadowRoot.getElementById('BtnBackToTop');

      if (
        body.scrollTop > this.distance ||
        documentElement.scrollTop > this.distance
      ) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    };
  }

  getButtonClass() {
    const themeList = Object.values(THEME);

    const selectedTheme = themeList.find((theme) => theme === this.theme);
    const buttonClassName = selectedTheme
      ? `Button--${selectedTheme}`
      : `Button--${THEME.primary}`;

    return { [buttonClassName]: true };
  }

  backToTop() {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
        return;
      }

      window.scrollBy(0, scrollStep);
    }, 15);
  }

  render() {
    const hexIconCode = String.fromCharCode(this['icon-code']);

    return html`
      <button
        class="Button ${classMap(this.getButtonClass())}"
        id="BtnBackToTop"
        type="button"
        @click=${() => this.backToTop()}
      >
        <span class="Icon">${hexIconCode}</span>
      </button>
    `;
  }
}

customElements.define('nuz-button-to-top', ButtonToTop);

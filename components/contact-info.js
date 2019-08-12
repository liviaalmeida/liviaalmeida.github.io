class ContactInfo extends HTMLElement {

	constructor() {

		super();

		this._icon = undefined;

		this._info = this.getAttribute('info');
		this._href = this.getAttribute('href');
		this._iconSize = this.getAttribute('size');
		this._iconUrl = this.getAttribute('url');

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
			<style></style>
			<div class="contact-info">
				<a href="${this._href}" target="_blank" class="contact-info">
					<animated-icon size="${this._iconSize}" url="${this._iconUrl}"></animated-icon>
				</a>
				<a href="${this._href}" target="_blank" class="contact-info">
					<div>${this._info}</div>
				</a>
			</div>
		`;

	}

	connectedCallback() {

		this._style = this.shadowRoot.querySelector('style');
		this._icon = this.shadowRoot.querySelector('animated-icon');

		this._renderStyle();

	}

	_renderStyle() {

		if (this._style) this._style.innerText = `
			.contact-info {
				display: inline-flex;
				flex-direction: column;
				align-items: center;
			}

			a, a:visited {
				text-decoration: none;
				font-family: 'NeutonBold';
				font-size: 20px;
				color: rgb(60,0,70);
			}
			`;

	}

}

customElements.define('contact-info', ContactInfo);
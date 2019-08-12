class TitleIcon extends HTMLElement {

	constructor() {

		super();

		this._icon = undefined;
		this._h3 = undefined;
		this._line = undefined;

		this._title = this.getAttribute('title');
		this._iconSize = this.getAttribute('size');
		this._iconUrl = this.getAttribute('url');
		this._lineWidth = this.getAttribute('width');

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
			<style></style>
			<div class="title-icon">
				<animated-icon size="${this._iconSize}" url="${this._iconUrl}"></animated-icon>
				<div>
					<h3>${this._title}</h3>
					<hr>
				</div>
			</div>
		`;

	}

	connectedCallback() {

		this._style = this.shadowRoot.querySelector('style');
		this._icon = this.shadowRoot.querySelector('animated-icon');
		this._h3 = this.shadowRoot.querySelector('h3');
		this._line = this.shadowRoot.querySelector('hr');

		this._renderStyle();

	}

	_renderStyle() {

		if (this._style) this._style.innerText = `
			.title-icon {
				display: flex;
				align-items: flex-end;
			}

			animated-icon {
				margin-right: 10px;
			}

			h3 {
				font-family: 'BebasNeueRegular';
				color: rgb(60,0,70);
				font-size: 26px;
				margin: 0;
			}

			hr {
				width: ${this._lineWidth}px;
				height: 3px;
				background-color: rgb(60,0,70);
				animation: 0.8s ease-out 0s 1 growHr;
				transform-origin: 0;
			}

			@-webkit-keyframes growHr {
				0% {
					width: 0;
				}
			}
			@keyframes growHr {
				0% {
					width: 0;
				}
			}
			`;

	}

}

customElements.define('title-icon', TitleIcon);
class AnimatedIcon extends HTMLElement {

	constructor() {

		super();

		this._bar = undefined;
		this._style = undefined;

		this._url = this.getAttribute('url');
		this._size = Number(this.getAttribute('size'));

		this._iconSize = 0.5 * this._size;
		this._iconSizeHover = 0.6 * this._size;

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
			<style></style>
			<div class="an-icon"></div>
		`;

	}

	static get observedAttributes() { return ['url', 'size']; }

	connectedCallback() {

		this._bar = this.shadowRoot.querySelector('.an-icon');
		this._style = this.shadowRoot.querySelector('style');

		this._renderStyle();

	}

	attributeChangedCallback(name, oldVal, newVal) {

		switch (name) {
			case 'size':
				this._size = Number(newVal);
				this._iconSize = 0.5 * this._size;
				this._iconSizeHover = 0.6 * this._size;
				break;
			case 'url':
				this._url = newVal;
				break;
			default:
				return;
		}

		this._renderStyle();

	}

	_renderStyle() {

		if (this._style) this._style.innerText = `
			.an-icon {
				opacity: 0.5;
				width: ${this._size}px;
				height: ${this._size}px;
				background: rgb(60,0,70) url('${this._url}') center no-repeat;
				background-size: ${this._iconSize}px ${this._iconSize}px;
				border-radius: 50%;
				transition: opacity 0.3s, background-size 0.3s;
				animation: 0.8s ease-out 0s 1 onIconLoad;
				display: inline-block;
			}

			.an-icon:hover {
				opacity: 1;
				background-size: ${this._iconSizeHover}px ${this._iconSizeHover}px;
			}

			@-webkit-keyframes onIconLoad {
				0% {
						opacity: 1;
						background-size: ${this._iconSizeHover}px ${this._iconSizeHover}px;
				}
			}

			@keyframes onIconLoad {
				0% {
						opacity: 1;
						background-size: ${this._iconSizeHover}px ${this._iconSizeHover}px;
				}
			}
		`;

	}

}

customElements.define('animated-icon', AnimatedIcon);
class ProgressBar extends HTMLElement {

	constructor() {

		super();

		this._bar = undefined;
		this._style = undefined;

		this._barWidth = Number(this.getAttribute('width'));
		this._progress = (this._barWidth/100) * Number(this.getAttribute('progress'));
		this._label = this.getAttribute('label');

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
			<style></style>
			<div class="progress-bar">
				<label>${this._label}</label>
				<div class="bar">
					<div class="progress"></div>
				</div>
			</div>
		`;

	}

	static get observedAttributes() { return ['width', 'progress']; }

	connectedCallback() {

		this._bar = this.shadowRoot.querySelector('.bar');
		this._style = this.shadowRoot.querySelector('style');

		this._renderStyle();

	}

	disconnectedCallback() {

	}

	attributeChangedCallback(name, oldVal, newVal) {

		switch (name) {
			case 'width':
				this._barWidth = Number(newVal);
			case 'progress':
				this._progress = (this._barWidth/100) * Number(this.getAttribute('progress'));
				break;
			default:
				return;
		}

		this._renderStyle();

	};

	_renderStyle() {

		if (this._style) this._style.innerText = `
			.progress-bar {
				display: flex;
				align-items: center;
			}

			label {
				font-family: 'OpenSansRegular';
				color: rgb(60,0,70);
				margin-right: 5px;
			}

			.bar {
				width: ${this._barWidth}px;
				height: 10px;
				background-color: rgba(60,0,70,0.4);
				border-radius: 5px;
			}

			.progress {
				width: ${this._progress}px;
				height: 10px;
				background-color: rgba(60,0,70,0.6);
				border-radius: 5px;
				animation: 0.8s ease-out 0s 1 onBarLoad;
			}

			.bar:hover .progress {
				animation: grow ease-in-out 3s infinite;
				transform-origin: 0;
			}

			@-webkit-keyframes grow {
				0% {
					-webkit-transform: scaleX(1);
				}
				50% {
					-webkit-transform: scaleX(0);
				}
				100% {
					-webkit-transform: scaleX(1);
				}
			}
			@keyframes grow {
				0% {
					transform: scaleX(1);
				}
				50% {
					transform: scaleX(0);
				}
				100% {
					transform: scaleX(1);
				}
			}

			@-webkit-keyframes onBarLoad {
				0% {
					width: 0;
				}
			}

			@keyframes onBarLoad {
				0% {
					width: 0;
				}
			}`;

	}

}

customElements.define('progress-bar', ProgressBar);
class TMoment extends HTMLElement {

	constructor() {

		super();

		this._li = undefined;

		this._title = this.getAttribute('title');
    this._duration = this.getAttribute('duration') || undefined;

	}

	connectedCallback() {

		var li = document.createElement('li');
		li.className = 't-moment';
		
		li.innerHTML = `
			<h5>${this._title}</h5>
		`;
		if (this._duration) li.innerHTML += `
			<h6>${this._duration}</h6>
		`;

		var div = document.createElement('div');
		div.className = 't-content';

		while (this.firstChild) {
			div.appendChild(this.firstChild.cloneNode(true));
			this.removeChild(this.firstChild);
		}

		li.appendChild(div);

		this.appendChild(li);
		this._li = this.querySelector('li.t-moment');

	}

}

class TimeLine extends HTMLElement {

	constructor() {

		super();

		this._style = undefined;
		this._timeline = undefined;

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
			<style></style>
			<ol class="time-line">
			</ol>
		`;

	}

	connectedCallback() {

		this._style = this.shadowRoot.querySelector('style');
		this._timeline = this.shadowRoot.querySelector('.time-line');

		var tMoments = this.querySelectorAll('t-moment');

		tMoments.forEach(el => {

			this._timeline.appendChild(el._li);

		});

		this._renderStyle();

	}

	_renderStyle() {

		if (this._style) this._style.innerText = `
			.time-line {
				list-style: none;
				padding: 0 0 0 19px;
				margin: 0 0 0 25px;
				border-left: 3px solid rgb(60,0,70);
				z-index: 0;
			}

			.t-moment {
				position: relative;
				padding-top: 5px;
			}

			.t-moment:not(:last-child) {
				margin-bottom: 20px;
			}

			.t-moment:after {
				position: absolute;
				display: block;
				background: rgb(222,213,225);
				border-radius: 50%;
				height: 13px;
				width: 13px;
				border: 3px solid rgb(60,0,70);
				content: '';
				top: 5px;
				left: -30px;
				z-index: 2;
				transition: background 0.5s ease-in;
				animation: 0.8s ease-out 0s 1 growBall;
			}

			.t-moment:hover:after {
				background: rgb(99,51,107);
			}

			@-webkit-keyframes growBall {
				0% {
					transform: scale(0);
				}
			}
			@keyframes growBall {
				0% {
					transform: scale(0);
				}
			}

			.t-moment h5, .t-moment h6 {
				display: inline-block;
				margin: 0;
			}

			.t-moment h5 {
				font-family: 'BebasNeueRegular';
				font-size: 20px;
			}

			.t-moment h6 {
				font-size: 10px;
			}

			.t-moment h6, .t-content {
				font-family: 'OpenSansRegular';
			}

			.t-content {
				font-size: 14px;
				text-align: justify;
			}

		`;

	}

}

customElements.define('t-moment', TMoment);

customElements.define('time-line', TimeLine);
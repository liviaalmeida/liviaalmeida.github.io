class STab extends HTMLElement {

	constructor() {

		super();

		this._div = undefined;

		this._title = this.getAttribute('title');

	}

	connectedCallback() {

		var div = document.createElement('div');
		div.className = 'tab-content';

		while (this.firstChild) {
			div.appendChild(this.firstChild.cloneNode(true));
			this.removeChild(this.firstChild);
		}

		this.appendChild(div);
		this._div = this.querySelector('div.tab-content');

	}

}

class SelectionTab extends HTMLElement {
	constructor() {

	super();

	this._style = undefined;
	this._selectionTab = undefined;
	this._selection = undefined;
	this._tabs = undefined;

	this._name = this.getAttribute('name');

	this.attachShadow({ mode: 'open' });
	this.shadowRoot.innerHTML = `
		<style></style>
		<div class="selection-tab">
			<div class="selection"></div>
			<div class="tabs"></div>
		</div>
	`;

	}

	connectedCallback() {

		this._style = this.shadowRoot.querySelector('style');
		this._selectionTab = this.shadowRoot.querySelector('.selection-tab');
		this._selection = this.shadowRoot.querySelector('.selection');
		this._tabs = this.shadowRoot.querySelector('.tabs');

		var sTabs = this.querySelectorAll('s-tab');

		sTabs.forEach((el, index) => {
			
			this._selection.innerHTML += `
				<label>
					<input type="radio" name="${this._name}" value="content-${index}"/>
					<div>${el._title}</div>
				</label>
			`;

			var tabContent = el.querySelector('.tab-content');
			this._tabs.appendChild(tabContent);
			this._tabs.lastChild.id = 'content-' + index;

		});

		var radios = this._selection.querySelectorAll('input');

		radios.forEach(el => {

			el.addEventListener('change', ev => {
				var value = ev.target.value;
				this.shadowRoot.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
				this.shadowRoot.getElementById(value).style.display = 'inherit';
			});

		});

		radios[0].checked = true;
		this.shadowRoot.querySelector('#content-0').style.display = 'inherit';

		while (this.firstChild) {
			this.removeChild(this.firstChild);
		}

		this._renderStyle();

	}

	_renderStyle() {

		if (this._style) this._style.innerText = `
			.selection-tab {
				display: flex;
				height: 100%;
			}

			.selection {
				position: fixed;
				width: 130px;
				height: 100%;
				display: flex;
				flex-direction: column;
				color: rgb(60,0,70);
				background-color: rgba(60,0,70, 0.6);
				font-family: 'BebasNeueRegular';
				justify-content: center;
			}

			.selection label div {
				padding-right: 15px;
				margin-left: 10px;
				margin-bottom: 40px;
				cursor: pointer;
				font-size: 20px;
				border-right: 3px solid transparent;
			}

			.selection label div:hover {
				font-weight: 900;
			}

			.selection input[type=radio]:checked ~ div {
				font-weight: 900;
				border-right: 3px solid rgb(60,0,70);
			}

			.selection input[type=radio] {
				display: none;
			}

			.tabs {
				margin: 15px 35px 15px 145px;
				width: 100%;
			}

			.tabs .tab-content {
				display: none;
				height: 100%;
				color: rgb(60,0,70);
			}

			.tabs .tab-content p {
				font-family: 'OpenSansRegular';
			}
			`;

	}

}

customElements.define('s-tab', STab);

customElements.define('selection-tab', SelectionTab);
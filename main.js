'use strict';

var data;
var dataReady = false;

fetch('https://raw.githubusercontent.com/liviaalmeida/liviaalmeida.github.io/master/data.json')
	.then(response => response.json())
	.then(text => {
		data = text;
		dataReady = true;
	});

function getValue(selector) {
	var el = document.querySelector(selector);
	return Number(el.value);
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function sample(arr, size) {
	if (size > arr.l) {
		return undefined;
	}
	var indexSet = new Set();
	while (indexSet.size < size) {
		indexSet.add(randomInteger(0, arr.length-1));
	}
	var sampl = [];
	for (var index of indexSet) {
		sampl.push(arr[index]);
	}
	return sampl;
}

function csvString(intents, examples) {
	var text = 'sep=\t';
	for (var index = 0; index < intents.length; index++) {
		for (var example of examples[index]) {
			text += '\n' + intents[index] + '\t' + example;
		}
	}
	return text;
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function generate() {
	var numIntents = getValue('#num-intents');
	var minExamples = getValue('#min-examples');
	var maxExamples = getValue('#max-examples');

	if (dataReady) {
		var intents = sample(data.species, numIntents);
		var examples = [];
		for (var intent of intents) {
			var numExem = randomInteger(minExamples, maxExamples);
			var intentExamples = [];
			while (numExem--) {
				var numWords = randomInteger(5, 15);
				var phrase = sample(data.words, numWords).join(' ');
				intentExamples.push(phrase);
			}
			examples.push(intentExamples);
		}

		var csvStr = csvString(intents, examples);
		download('blip-mock.csv', csvStr);
	}
	else {
		throw 'Data not ready';
	}
}
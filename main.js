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

function generate() {
	var numIntents = getValue('#num-intents');
	var minExamples = getValue('#min-examples');
	var maxExamples = getValue('#max-examples');

	if (dataReady) {
		var intents = sample(data.species, numIntents);
	}
}
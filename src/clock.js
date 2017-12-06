"use strict";
const Clock = function(hour, minute){
	var hr = hour || 0;
	var min = minute || 0;

	function toString(){
		function parseTimeDigit(digit){
			if (digit){
				if(digit < 10){
					return "0" + digit;
				} else {
					return digit;
				}
			} else {
				return "00";
			}
		};
		return [parseTimeDigit(hr), ":", parseTimeDigit(min)].join("");
	}

	function plus(plusMin) {
		min = min + plusMin;
		hr += Math.floor(min / 60);
		min %= 60;

		// return this;
		// getting away using this totally, although its not efficient creating the whole thing again
		return {
			hr: hr,
			min: min,
			toString: toString,
			plus: plus
		};
	}

	return {
		hr: hr,
		min: min,
		toString: toString,
		plus: plus
	};


};

module.exports = Clock;
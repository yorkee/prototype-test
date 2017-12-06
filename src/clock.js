"use strict";
const Clock = function(hr, min){
	this.hr = hr || 0;
	this.min = min || 0;
};

Clock.prototype.toString = function(){
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
	return [parseTimeDigit(this.hr), ":", parseTimeDigit(this.min)].join("");
}

Clock.prototype.plus = function(plusMin) {
	this.min = this.min + plusMin;
	this.hr += Math.floor(this.min / 60);
	this.min %= 60;
	return this;
}

module.exports = Clock;
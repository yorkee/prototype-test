'use strict';

var assert = require('assert');

describe('test using prototype', function(){
	let at, Clock;
	before(function(){
		//TODO:  break it out into clock.js
		Clock = function(hr, min){
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
			}
			return parseTimeDigit(this.hr) + ":"+ parseTimeDigit(this.min);
		}

		Clock.prototype.plus = function(plusMin) {
			this.min = this.min + plusMin;
			let hrToAdd = Math.floor(this.min / 60);
			this.min = this.min % 60;
			this.hr += hrToAdd;
			return this;
		}

		at = function(hr, min){
			return new Clock(hr, min);
		}
	});

	it ('at test single digit', function(){		
		assert.equal(at(8).toString(), "08:00");
	})

	it ('at test double digit', function(){
		assert.equal(at(11).toString(), "11:00");		
	})

	it ('plus test', function(){
		assert.equal(at(10).plus(58).plus(3).toString(), "11:01");
	});
})
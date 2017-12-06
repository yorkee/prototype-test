'use strict';

var assert = require('assert');
var Clock = require('../src/clock-this');


//TODO:  it should be able to run using the same set of testcase
describe('test using prototype', function(){
	let at;
	before(function(){
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
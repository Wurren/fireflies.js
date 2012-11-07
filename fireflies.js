
/*

Fireflies 1.0 - a jQuery Plugin

Author: Warren Haskins
URL : github.com/wurren
Twitter : @warrenhaskins

Dedicated to Nathan Fillion, for obvious reasons

*/

(function($){

	// Define the Default settings for Fireflies.
	
	var basic = {
		flies : ['&bull;','.',],
		bugs  : 100,
		color : '#000',
		speed : 1500,
		size : 12
	}

	$.fireflies = function(settings) {
		
		// Mix in any new Settings with the Default Settings like a pimp

		$.fireflies.settings = $.extend({}, basic, settings);

		// loop that list and give birth to some fireflies

		for (i = 0; i < $.fireflies.settings.bugs; i++) $.fireflies.fly($.fireflies.create($.fireflies.settings.flies[$.fireflies.random(($.fireflies.settings.flies).length)]));
		
		// Return this for chaining

		return this;

	}


	$.fireflies.create = function(fly) {

		// Create a bug and add it to the page.
			
		var fireflies = $('<span class="bug" />').html(fly).hide().appendTo("body");

		// Object literal of css rules. For Source readability more than anything else. CSS postions are random;

		var css = {
			'position':'absolute',
			'z-index': '-1',
			'top' : $.fireflies.random(($(window).height()-50)),
			'left' :  $.fireflies.random(($(window).width()-50)),
			'color' : $.fireflies.settings.color,
			'font-size' : $.fireflies.settings.size + "px"
		}

		// Return the fly and add its css

		return fireflies.css(css).show();

	}

	$.fireflies.fly = function(fly) {

	 	// make em fly. Animate each bug to a new positon, the on callback do it all again.

		$(fly).animate({
			top: $.fireflies.random(($(window).height()-50)),	//offsets
			left: $.fireflies.random(($(window).width()-50)),
			"opacity" : $.fireflies.random(10)
		}, (($.fireflies.random(10) + 5) * $.fireflies.settings.speed),function(){  $.fireflies.fly(fly) } );

	};

	// just a function for random numbers

	$.fireflies.random = function(max) {
		return Math.ceil(Math.random() * max) - 1;
	}

})(jQuery)
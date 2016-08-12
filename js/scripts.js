$(document).ready(function(){
	var initial = $('.initial'),
	  	webDev = $('.web-dev'),
			webWork = $('.web-work'),
			mobileDev = $('.mobile-dev'),
			softwareDev = $('.software-dev'),
			choices = document.getElementsByClassName('choices'),
			i;

	$('p').on('click', function(){
		$('.intro').fadeOut(900);
		setTimeout(function(){
			$('#wrapper').fadeIn(1000);
		}, 950);
	});

		var initialSelection = function initialSelection(evt) {
    	var target = evt.currentTarget; 
    	if (target.id === 'web') {
    		mobileDev.removeClass('show');
    		softwareDev.removeClass('show');
    		initial.slideUp(800);
    	 	initial.find('h1').slideUp(800);
    		setTimeout(function(){
    			webDev.slideDown();
    			webDev.find('h1').slideDown();	
    		}, 1000)
    	} else if (target.id=== 'mobile') {
    		webDev.removeClass('show');
    		softwareDev.removeClass('show');
    		initial.slideUp(800);
    		initial.find('h1').slideUp(800);
    		setTimeout(function(){
    			mobileDev.slideDown();
    			mobileDev.find('h1').slideDown();
    		},1000)
    		mobileDev.addClass('show');
    	} else if (target.id === 'software') {
    		webDev.removeClass('show');
    		mobileDev.removeClass('show');
    		initial.slideUp(800);
    		initial.find('h1').slideUp(800);
    		setTimeout(function(){
    			webDev.slideDown();
    			webDev.find('h1').slideDown();
    		},1000)
    	};
		};

		var webDevSelection = function webDevSelection(evt) {
			var target = evt.currentTarget;
			if (target.id === 'looks') {
				alert("You should take CSS/Design!");
			} else if (target.id === 'works') {
				webDev.slideUp(800);
				webDev.find('h1').slideUp(800);
				setTimeout(function(){
					webWork.slideDown();
					webWork.find('h1').slideDown();
				},1000);
			};
		};

		var webWorkSelection = function webWorkSelection(evt) {
			var target = evt.currentTarget;
			if (target.id === 'yes') {
				alert("You should take Ruby/Rails!");
			} else if (target.id === 'no') {
				alert("You should take PHP/Drupal!");
			};
		};

		var mobileDevSelection = function mobileDevSelection(evt) {
			var target = evt.currentTarget;
			if (target.id === 'windows') {
				alert("You should think about taking C#/.NET!");
			} else if (target.id === 'android') {
				alert("You should think about taking Java/Droid!");
			};
		};

		var softwareDevSelection = function softwareDevSelection(evt) {
			var target = evt.currentTarget;
			if (target.id === 'window') {
				alert("You should think about taking C#/.NET!");
			} else if (target.id === 'cross-platform') {
				alert("You should think about taking Java/Droid!");
			};
		};




		for (i = 0; i < choices.length; i++) {
    	choices[i].addEventListener('click', initialSelection, false);
    };
		for (i = 0; i < choices.length; i++) {
    	choices[i].addEventListener('click', webDevSelection, false);
    };	
    for (i = 0; i < choices.length; i++) {
    	choices[i].addEventListener('click', webWorkSelection, false);
    };
		for (i = 0; i < choices.length; i++) {
    	choices[i].addEventListener('click', mobileDevSelection, false);
    };	
		for (i = 0; i < choices.length; i++) {
    	choices[i].addEventListener('click', softwareDevSelection, false);
    };
});



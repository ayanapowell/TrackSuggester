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

// What type of developer do you want to be?
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
  			softwareDev.slideDown();
  			softwareDev.find('h1').slideDown();
  		},1000)
  	};
	};

// You picked WEB, are you interested in how things look? Or work?
	var webDevSelection = function webDevSelection(evt) {
		var target = evt.currentTarget;
		if (target.id === 'looks') {
			webDev.slideUp();
			webDev.find('h1').slideUp();
			setTimeout(function(){
				result();
			}, 700)
		} else if (target.id === 'works') {
			webDev.slideUp(800);
			webDev.find('h1').slideUp(800);
			setTimeout(function(){
				webWork.slideDown();
				webWork.find('h1').slideDown();
			},1000);
		};
	};

// You picked how things work. Does interactive webpages interest you?
	var webWorkSelection = function webWorkSelection(evt) {
		var target = evt.currentTarget;
		if (target.id === 'yes') {
			webWork.slideUp();
			webWork.find('h1').slideUp();
			setTimeout(function(){
				result();
			}, 700)
		} else if (target.id === 'no') {
			webDev.slideUp();
			webDev.find('h1').slideUp();
			setTimeout(function(){
				result();
			}, 700)
		};
	};

// You picked MOBILE. What platform? 
	var mobileDevSelection = function mobileDevSelection(evt) {
		var target = evt.currentTarget;
		if (target.id === 'windows') {
			mobileDev.slideUp();
			mobileDev.find('h1').slideUp();
			setTimeout(function(){
				mobileDev.removeClass('show');
			}, 400);
			setTimeout(function(){
				result();
			}, 700)
		} else if (target.id === 'android') {
			mobileDev.slideUp();
			mobileDev.find('h1').slideUp();
			setTimeout(function(){
				mobileDev.removeClass('show');
			}, 400);
			setTimeout(function(){
				result();
			}, 700)
		};
	};

// You picked SOFTWARE. What platform? 
	var softwareDevSelection = function softwareDevSelection(evt) {
		var target = evt.currentTarget;
		if (target.id === 'window') {
			softwareDev.slideUp();
			softwareDev.find('h1').slideUp();
			setTimeout(function(){
				result();
				$('body').show($('.conclude'));
			},700)
		} else if (target.id === 'cross-platform') {
			softwareDev.slideUp();
			softwareDev.find('h1').slideUp();
			setTimeout(function(){
				result();
			},700)	
		};
	};

// Event listeners for
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

  function result() {
  	$('body').fadeOut(3000).addClass('body_new');
  }
});



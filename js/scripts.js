$(document).ready(function(){
	var webDev = $('.web-dev'),
		webWork = $('.web-work'),
		mobileDev = $('.mobile-dev'),
		softwareDev = $('.software-dev'),
		choices = document.getElementsByClassName('choices'),
		i;




		var initialSelection = function initialSelection(evt) {
            console.log('choices');
            console.log(evt.currentTarget);



    	var target = evt.target; 
    	if (target.id === 'web') {
    		webDev.addClass('show');
    	} else if (target.id=== 'mobiels') {
    		mobileDev.addClass('show');
    	} else if (target.id === 'software') {
    		softwareDev.addClass('show');
    	};
		};

		for (i = 0; i < choices.length; i++) {
    		choices[i].addEventListener('click', initialSelection, false);
    };

		 /* 

	 
	function initialSelection() {
		choices.addEventListener('click', function(evt) {
			var target = evt.target;
			if (target.id === 'web') {
		    webDev.addClass("show");
		  } else if (target.id === 'mobile') {
		    mobileDev.addClass("show");
		  } else if (target.id === 'software'){
		    softwareDev.addClass("show");
		  }
		    }, false);
		};
		initialSelection();	
	
	
		 function webDevSelection() {
			var choices = document.getElementById('choices');
			choices.addEventListener('click', function(evt) {
				var target = evt.target;
				if (target.id === 'looks') {
					alert("You should take CSS/Design!");
				} else if (target.id === 'works') {
					webWork.addClass('show');
					$('html, body').animate({
						scrollTop: webWork.offset().top 
					}, 1000)
				} 
			}, false);
		};
		webDevSelection();*/

		
});



$(document).ready(function(){
var webDev = $('.web-dev'),
		webWork = $('.web-work'),
		mobileDev = $('.mobile-dev'),
		softwareDev = $('.software-dev'),
    choices = document.getElementById('choices');
	 
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
		webDevSelection();

		
});



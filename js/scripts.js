$(document).ready(function(){
var webDev = $('.web-dev'),
		webWork = $('.web-work'),
		mobileDev = $('.mobile-dev'),
		desktopDev = $('.desktop-dev');

		
	 
	function findSelection() {
		document.getElementById('choices').addEventListener('click', function(evt) {
    		var target = evt.target;
			if (target.id === 'web') {
		        webWork.addClass("show");
		        $('html, body').animate({
					scrollTop: $('#about_fade').offset().top
				}, 1000)
		    } else if (target.id === 'mobile') {
		    	mobileDev.addClass("show");
		    } else {
		        desktopDev.addClass("show");
		    }
		}, false);
		};
		findSelection();	

});



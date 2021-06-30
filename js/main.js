$(function () {

	$(window).scroll(function() {

		$('.rock').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+550) {
				$(this).addClass("fadeIn");
			}
		});

		$('.watches').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+550) {
				$(this).addClass("fadeIn");
			}
		});

	});

});


var btn = document.getElementById('show');
var nav = document.getElementById('nav');

btn.addEventListener('click', function() {
	nav.classList.toggle('active');
});
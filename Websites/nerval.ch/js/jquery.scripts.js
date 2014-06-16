
$(document).ready(function(){




	/*================================================
	LOADING
	=================================================*/
	$(window).load(function(){
		$('#overlay').fadeOut();
	});




	/*================================================
	NAVIGATION
	=================================================*/
	$("#navButton").click(function() {
		var classBouton = $("#navButton").attr("class");

		if (classBouton === 'nav1'){
			$(this).addClass('nav2').removeClass('nav1');
			$('nav').animate({right : 0}, 300);
			$('.move').animate({right : 250}, 300);
			$('#navButton img').animate({right : 270}, 300);
		} else {
			$(this).addClass('nav1').removeClass('nav2');
			$('nav').animate({right : -250}, 300);
			$('.move').animate({right : 0}, 300);
			$('#navButton img').animate({right : 20}, 300);
		}
	});

	/* VIDEO */
	$("#navButtonVideo").click(function() {
		var classBouton = $("#navButtonVideo").attr("class");

		if (classBouton === 'nav1'){
			$(this).addClass('nav2').removeClass('nav1');
			$('nav').animate({right : 0}, 300);
			$('.move').animate({right : 250}, 300);
			$('#navButtonVideo').animate({right : 270}, 300);
		} else {
			$(this).addClass('nav1').removeClass('nav2');
			$('nav').animate({right : -250}, 300);
			$('.move').animate({right : 0}, 300);
			$('#navButtonVideo').animate({right : 20}, 300);
		}
	});




});

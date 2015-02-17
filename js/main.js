var startedNavigation = false;

function initNavigation() {

	if (startedNavigation) { return } else { startedNavigation = true };

	$('.welcome').fadeOut(200, function() {
		$('#navigation').animate({
			height: '60px'
			}, 500, function() {
			// Animation complete.
			})});

	$('#footer').fadeOut(200);

	$('#navigation nav').css({ bottom: 'auto', top: '7px' });
}

function jumpTo(className) {
	initNavigation();
	$('html, body').animate({ scrollTop: $(className).offset().top - 60 }, 250);
}

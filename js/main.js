var startedNavigation = false;

function initNavigation() {

	if (startedNavigation) { return } else { startedNavigation = true };

	$('#navigation .logo.hidden').show();
	$('#navigation .teapot').show();

	$('.welcome').fadeOut(400, function() {
		$('#navigation').animate({
			height: '65px'
			}, 600, function() {
			})});

	$('#footer').fadeOut(200);
	$('#navigation nav').css({ bottom: 'auto', top: '7px' });
}

function jumpTo(id) {
	initNavigation();
	$('html, body').animate({ scrollTop: $(id).offset().top - 60 }, 250);
}

function init() {

	$.get('img/menu/CONTENTS').success(function(content) {
		content.split('\n').forEach(function (line) {
			if (line.length > 0) {
				$('#menu .pics').append('<img class="pic framed" src="img/menu/' + line + '"/>\n');
			}
		});
	});

	$.get('img/pics/CONTENTS').success(function (content) {
		content.split('\n').forEach(function (line) {
			if (line.length > 0) {
				$('#fotos .pics').append('<img class="pic framed" src="img/pics/' + line + '"/>\n');
			}
		});
	});

	$(window).scroll(updateActiveSection);
}

function updateActiveSection() {
	if (!startedNavigation) { return };

	current = $(window).scrollTop();

	[$('#menu'), $('#contacte'), $('#fotos')].forEach( function(eachSection) {
		if (current >= eachSection.offset().top - 150 && current < eachSection.offset().top + eachSection.height()) {
			$('.button').removeClass('selected');
			$('.button.' + eachSection.selector.substring(1)).addClass('selected');
		}
	})
}

init();

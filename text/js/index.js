(function() {
	//播放速度
	//var video = document.getElementById('v1');
	//video.playbackRate = 0.5;  

	$('.banner').height($(window).height());
	$('.banner-video').height($(window).height());
	var fir_pos = $('.banner-header-nav li.active a').offset();
	var fir_width = $('.banner-header-nav li.active').width();
	$('.banner-header-suspension').css('left', fir_pos.left + 1);
	$('.banner-header-suspension').css('width', fir_width);

	$('.banner-header-nav li a').on('mouseover', function() {
		var pos = $(this).offset();
		var width = $(this).width();
		$('.banner-header-suspension').css('width', width + 2);
		$('.banner-header-suspension').css('left', pos.left);
	});
	$('.banner-header-nav li a').on('mouseout', function() {
		var $active = $('.banner-header-nav li.active a');
		$('.banner-header-suspension').css('width', $active.width() + 2);
		$('.banner-header-suspension').css('left', fir_pos.left);

	});

	window.onload = function() {
		var pos = $('.banner-header').offset();

		$(window).scroll(function() {
			if ($(this).scrollTop() > 70) {
				$('.banner-header').addClass('banner-header-scroll');
				$('.banner-header').css('top', $(this).scrollTop() - pos.top);
				$('.banner-header-logg-img').attr('src','img/dog2.png');
			} else {
				$('.banner-header').removeClass('banner-header-scroll');
				$('.banner-header').css('top', 0);
				$('.banner-header-logg-img').attr('src','img/dog.png');
			}

		});
	}

})();

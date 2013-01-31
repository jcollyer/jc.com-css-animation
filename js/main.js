$(document).ready(function(){
	



	//switch button
	$('#push > span').click(function(){
		if ($('#push').hasClass('active')){
			$('#push').removeClass('active');
			$('body').removeClass('dark');
			$('.top').css("background-color","white").css("background-image", "url(img/top.png)");
			$('.logo').css("background-image", "url(img/logo.png)");
			$('.title').css("border-bottom", "1px solid #cccccc");
			$('.navigation').css("border-top", "2px solid #333333");
			$('.port_dark').css("display","none");
			$('.port_light').css("display","block");
			
			$('.info').removeClass('info_grad');
			$('.footer').css("background-image", "url(img/top.png)");
			$('.switch').removeClass('switch-light');
			$('.switch').addClass('switch-dark');

			$('.aaa').delay(500).fadeOut();
			$('.aa').delay(500).fadeIn();

			$('.bbb').delay(300).fadeOut();
			$('.bb').delay(300).fadeIn();

			$('.ccc').fadeOut();
			$('.cc').fadeIn();

			$('.eee').fadeOut();
			$('.ee').fadeIn();

			$('.fff').delay(300).fadeOut();
			$('.ff').delay(300).fadeIn();

			$('.ggg').delay(500).fadeOut();
			$('.gg').delay(500).fadeIn();

			$('.hhh').fadeOut();
			$('.hh').fadeIn();

			$('.ddd').delay(300).fadeOut();
			$('.dd').delay(300).fadeIn();

		}else{
			$('#push').addClass('active');
			$('body').addClass('dark');
			$('.title').css("border-bottom", "1px solid #222222");
			$('.top').css("background-color","#444444").css("background-image", "url(img/top-white.png)");
			$('.logo').css("background-image", "url(img/logo-white.png)");
			$('.navigation').css("border-top", "2px solid #ffffff");

			$('.port_dark').css("display","block");
			$('.port_light').css("display","none");
			
			$('.info').addClass('info_grad');
			$('.footer').css("background-image", "url(img/top-white.png)");
			$('.switch').removeClass('switch-dark');
			$('.switch').addClass('switch-light');

			$('.aa').fadeOut();
			$('.aaa').fadeIn();

			$('.bb').delay(300).fadeOut();
			$('.bbb').delay(300).fadeIn();

			$('.cc').delay(500).fadeOut();
			$('.ccc').delay(500).fadeIn();

			$('.ee').delay(500).fadeOut();
			$('.eee').delay(500).fadeIn();

			$('.ff').delay(300).fadeOut();
			$('.fff').delay(300).fadeIn();

			$('.gg').fadeOut();
			$('.ggg').fadeIn();

			$('.hh').delay(300).fadeOut();
			$('.hhh').delay(300).fadeIn();

			$('.dd').fadeOut();
			$('.ddd').fadeIn();
		}
			
	});

	$('.navigation a').click(function(){
		console.log('hi');
		if ($('body').hasClass('dark')){
			console.log('ho');
			$('.navigation a').removeClass('light_text');
			$(this).addClass('light_text');
		}else{
			$('.navigation a').removeClass('dark_text');
			$(this).addClass('dark_text');
		}
	});


	
});//end doc ready

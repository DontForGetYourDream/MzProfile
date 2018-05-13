//* Nav Scroll Effect *//
$(window).on('scroll', function(){
	if ($(window).width()>768){
		if ($(window).scrollTop()){
			$('nav').addClass('black');
		}
		else {
			$('nav').removeClass('black');
		}
	}
});
//* Nav M-Menu Control *//
$(document).ready(function(){
	$(".ti-menu img").click(function(){
		$("nav ul").toggleClass("active1")
	})
});
//* Menu Click rotat *//
$(document).ready(function(){
	var value = 0
		$(".ti-menu img").rotate({
		  bind:
		  {
		    click: function(){
		      value +=180;
		      $(this).rotate({ animateTo:value})
		    }
		  }
		})
});
//* Scroll Active *//
$(document).ready(function () {
	 if ($(window).width()>768){
            //Smooth scrolling when click to nav
            $('#top-nav > ul > li > a').click(function (e) {
                e.preventDefault();
                var curLink = $(this);
                var scrollPoint = $(curLink.attr('href')).position().top;
                $('body,html').animate({
                    scrollTop: scrollPoint
                }, 500);
            })
            $(window).scroll(function () {
                onScrollHandle();
            });
            function onScrollHandle() {
                //Navbar shrink when scroll down
                $(".navbar-default").toggleClass("navbar-shrink", $(this).scrollTop() > 50);
                //Get current scroll position
                var currentScrollPos = $(document).scrollTop();
                //Iterate through all node
                $('#top-nav > ul > li > a').each(function () {
                    var curLink = $(this);
                    var refElem = $(curLink.attr('href'));
                    //Compare the value of current position and the every section position in each scroll
                    if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
                        //Remove class active in all nav
                        $('#top-nav > ul > li').removeClass("active00");
                        //Add class active
                        curLink.parent().addClass("active00");
                    }
                    else {
                        curLink.parent().removeClass("active00");
                    }
                });
            }
 }});
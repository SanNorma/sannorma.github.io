$(document).ready(function() {
	$(".portfolio_item").each(function(i) {
		$(this).find('a').attr("href", "#work_"+i);
		$(this).find('.port_descr').attr("id", "work_"+i);
	});

	$("input, select, textarea").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();

	$("#portfolio_grid").mixItUp();

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	}
	heightDetect();

	$(window).resize(function() {
		heightDetect();
	});

	$(".port_item_cont a").addClass("popup_content");
	$(".col-md-3").addClass("col-sm-6 col-xs-6");

	$(document).ready(function() {
		$('.popup').magnificPopup({type:'image'});
		// $('.popup_content').magnificPopup({type:'image'});
		$('.popup_content').magnificPopup({type:'inline', midClick: true});
	});


	$("#portfolio li").click(function() {
		$("#portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".section_header").animated("fadeInUp","fadeOutDown");
	$(".animated_slideL").animated("slideInLeft", "fadeOutDown");
	$(".animated_slideR").animated("slideInRight","fadeOutDown");
	$(".animation_person").animated("flipInX", "fadeOutDown");

	$(".left .resume_item").animated("fadeInLeft","fadeOutDown");
	$(".right .resume_item").animated("fadeInRight","fadeOutDown");
});

$(".toggle_mnu").click(function() {
	$("#sandwich").toggleClass("active");
	$(".top_text").toggleClass("opacify");
	$(".top_mnu").fadeToggle(250, "");
	$(".top_mnu li a").toggleClass("fadeInUp animated");
});

$(".top_mnu li").click(function(){
	$(".top_mnu").fadeToggle(250, "");
	$(".top_text").toggleClass("opacify");
	$(".top_mnu li a").toggleClass("fadeInUp animated");
	$("#sandwich").toggleClass("active");
})

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(300).fadeOut("normal"); 
});

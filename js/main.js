$(function(){
	var inithei=$(window).height();
	var dochei=$(document).height();
	$("#mask").css({height:dochei})
	
	$(".j-close").on("click",function(){
		$(this).parents(".pop-packet").fadeOut();
		$("#mask").fadeOut();
	})
})


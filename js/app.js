$(document).ready(function(){

	$("#dark").click(function(){

		$("body").toggleClass("darkmode");
		$(".blacks").toggleClass("black");

	});

	// Start Lib Section
	$(window).scroll(function(){
		let scrolltop = $(this).scrollTop();
		// console.log(scrolltop);
		

		if(scrolltop >= 300){
			$(".lib-ani1").addClass("lib-lefts");
			$(".lib-ani2").addClass("lib-centers");
			$(".lib-ani3").addClass("lib-rights");
		}else{
			$(".lib-ani1").removeClass("lib-lefts");
			$(".lib-ani2").removeClass("lib-centers");
			$(".lib-ani3").removeClass("lib-rights");
		}

		if(scrolltop >= 200){
			$("#backtotop").css("display","block");
		}else{
			$("#backtotop").css("display","none");
		}
	});
	// End Lib Section

	// Start Autoyear
	$("#autoyear").text(new Date().getUTCFullYear());
	// End Autoyear

});
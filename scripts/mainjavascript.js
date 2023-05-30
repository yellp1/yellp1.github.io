$(function(){
	$("#navigation div a").on("click", function(){
		$("#navigation div a").removeClass("selected")
		$(this).addClass("selected")
		return true;
	})
})
$(function(){
	$("#navigation div a").click(function(){
		$("#navigation div a").removeClass("selected")
		$(this).addClass("selected")
		return true;
	})
})
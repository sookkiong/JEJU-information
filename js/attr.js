$(document).ready(function(){

AOS.init();
//gnb 메뉴 작동
$(".gnb>li").on("mouseover",function(){
	$(".submenu").stop().slideDown(300);
	
});
$(".gnb>li").on("mouseout",function(){
	$(".submenu").stop().slideUp(300);
});

//map 링크 클릭 시 위로 올라감 방지
$('.map a').click(function(e)
{
	//e.preventDefault();   
});

// map 구역 별로 띄우기
$(".mapinfo").css("display","none");
$("#mapinfo1").css("display","block");

$(".map a").on("click",function(){
	event.preventDefault();
	var active = $(this).attr("href");
	$(".mapinfo").hide();
	$(active).fadeIn(500);

	$(".map").removeClass("mapon");
	$(this).parent().addClass("mapon");

});




});
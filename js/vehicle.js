$(document).ready(function(){

AOS.init();

// gnb 메뉴 작동
$(".gnb>li").on("mouseover",function(){
    $(".submenu").stop().slideDown(300);
    
});
$(".gnb>li").on("mouseout",function(){
    $(".submenu").stop().slideUp(300);
});

// 이동수단 메뉴 동작
$(".dtn").css("display","none");
$("#dtn1").css("display","block");

$(".dtn_sub li").on("click",function(){
    event.preventDefault();
    var active=$(this).find("a").attr("href");
    $(".dtn").hide();
    $(active).fadeIn();
});


// 목적지 카테고리 동작
$(".contents").css("display","none");
$("#bus_contents").css("display","block");

$(".tabs li").on("click",function(){
    event.preventDefault();
    var active=$(this).find("a").attr("href");
    $(".contents").hide();
    $(active).fadeIn();

    $(".tabs li").removeClass("tabon");
    $(this).addClass("tabon");
});

var num=0;
$("#dtn_title").on("click",function(){
    if(num%2==0){
        $(".dtn_sub").show();
        $(this).addClass("up");
    }else{
        $(".dtn_sub").hide();
        $(this).removeClass("up");
    }

    num++;

});

// 카테고리 텍스트 변경
$(".dtn_sub li a").on("click",function(){
	$(".dtn_sub").hide();
	$("#dtn_title").removeClass("up");
	num--;

	var x = $(this).text();
	$("#dtn_title").text(x);
});



    







}); 
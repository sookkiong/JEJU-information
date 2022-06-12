$(document).ready(function(){

AOS.init();

//gnb 메뉴 작동
$(".gnb>li").on("mouseover",function(){
    $(".submenu").stop().slideDown(300);
    
});
$(".gnb>li").on("mouseout",function(){
    $(".submenu").stop().slideUp(300);
});

// 탭 동작
$(".contents").css("display","none");
$("#family_contents").css("display","block");

$(".tabs li").on("click",function(){
    event.preventDefault();
    var active=$(this).find("a").attr("href");
    $(".contents").hide();
    $(active).fadeIn();

    $(".tabs li").removeClass("tabon");
    $(this).addClass("tabon");
});

// popup 동작
$("#f_content1").on("click",function(){
    event.preventDefault();
    $("#popup_list_family").css("display","block");
});
$("#f_content2").on("click",function(){
    event.preventDefault();
    $("#popup_list_family").css("display","block");
});
$("#f_content3").on("click",function(){
    event.preventDefault();
    $("#popup_list_family").css("display","block");
});

$("#fr_content1").on("click",function(){
    event.preventDefault();
    $("#popup_list_friend").css("display","block");
});
$("#fr_content2").on("click",function(){
    event.preventDefault();
    $("#popup_list_friend").css("display","block");
});
$("#fr_content3").on("click",function(){
    event.preventDefault();
    $("#popup_list_friend").css("display","block");
});

$("#cd_content1").on("click",function(){
    event.preventDefault();
    $("#popup_list_child").css("display","block");
});
$("#cd_content2").on("click",function(){
    event.preventDefault();
    $("#popup_list_child").css("display","block");
});
$("#cd_content3").on("click",function(){
    event.preventDefault();
    $("#popup_list_child").css("display","block");
});

$(".popup_close").on("click",function(){
    $("#popup_list_family").css("display","none");
    $("#popup_list_friend").css("display","none");
    $("#popup_list_child").css("display","none");
});



});
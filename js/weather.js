$(document).ready(function(){

// gnb 메뉴 작동
$(".gnb>li").on("mouseover",function(){
    $(".submenu").stop().slideDown(300);
    
});
$(".gnb>li").on("mouseout",function(){
    $(".submenu").stop().slideUp(300);
});







});
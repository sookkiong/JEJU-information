$(document).ready(function(){

AOS.init();

// go top
$(".gotop").on("click",function(){
    $("html,body").animate({scrollTop:0});
    page = 0;
});

// 원페이지 스크롤 동작
window.addEventListener("wheel",function(e){ // 기본 scroll 이벤트 제거
    e.preventDefault();
},{passive : false});

var $html = $("html");
var page = 1;
var lastPage = $("section").length; //페이지 수
$html.animate({scrollTop:0},100); //페이지가 로드되면 첫 페이지가 시작됨

$(window).on("wheel", function(e){ // 마우스 휠을 굴리면 발생하는 이벤트
    if($html.is(":animated")) return;

    if(e.originalEvent.deltaY > 0){ //마우스 휠을 아래쪽으로 굴리는 경우
        if(page == lastPage) return;
        page++;
        $(".pagenav li").removeClass("navon");
        $(".pagenav li").eq(page-1).addClass("navon");

    } else if(e.originalEvent.deltaY < 0){ // 마우스 휠을 위로 굴린 경우
        if(page==1) return;
        page--;
        $(".pagenav li").removeClass("navon");
        $(".pagenav li").eq(page-1).addClass("navon");
    }
    var posTop = (page-1) * $(window).height(); // 이동할 페이지의 번호에 스크롤할 위치를 계산한다.
    
    $html.animate({scrollTop : posTop}); // 계산한 위치로 페이지 이동

});















});
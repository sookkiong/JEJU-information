$(document).ready(function(){

AOS.init();

$.ajax({
    url: "http://suple.cafe24app.com/api/article", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소
    method: "GET",   // HTTP 요청 메소드(GET, POST 등)
    dataType: "json" // 서버에서 보내줄 데이터의 타입
})
// HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
.done(function(json) {
    console.log(json);
		$('#arti_title1').append(json[0].title);
		$('#arti_maintext1').append(json[0].content);
		$('#date1').append(json[0].article_date);

		$('#arti_title2').append(json[1].title);
		$('#arti_maintext2').append(json[1].content);
		$('#date2').append(json[1].article_date);

		$('#arti_title3').append(json[2].title);
		$('#arti_maintext3').append(json[2].content);
		$('#date3').append(json[2].article_date);

		$('#arti_title4').append(json[3].title);
		$('#arti_maintext4').append(json[3].content);
		$('#date4').append(json[3].article_date);

		$('#arti_title5').append(json[4].title);
		$('#arti_maintext5').append(json[4].content);
		$('#date5').append(json[4].article_date);

})
// HTTP 요청이 실패하면 오류와 상태에 관한 정보가 fail() 메소드로 전달됨.
.fail(function(xhr, status, errorThrown) {
    $("#text").html("오류가 발생했다.<br>")
    .append("오류명: " + errorThrown + "<br>")
    .append("상태: " + status);
})
// 
.always(function(xhr, status) {
    $("#text").html("요청이 완료되었습니다!");
});


//gnb 메뉴 작동
$(".gnb>li").on("mouseover",function(){
	$(".submenu").stop().slideDown(300);
	
});
$(".gnb>li").on("mouseout",function(){
	$(".submenu").stop().slideUp(300);
});







});
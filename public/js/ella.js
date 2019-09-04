
$(".topbar > .menu > li").mouseover(function () {
	$(this).children(".submenu").stop().slideDown();
});
$(".topbar > .menu > li").mouseleave(function () {
	$(this).children(".submenu").stop().slideUp();
});

var now = 0;
var next = now+1;
var imgs = 2
var depth = 10;
var interval;

start();

function start(){
	$(".slides > img").css({"left":"-100%"});
	$(".slides > img").eq(now).css({"left":0});
	interval = setInterval(slide, 3000);
};

function slide() { 
	$(".slides > img").eq(next).css("z-index", depth++).stop().animate({"left":0},500,
	function(){
		$(this).siblings().css({"left": "-100%"});
		next==imgs? next=0: next++;
	});
 }


 $(".showmore > a").click(function () {
	$(".more").eq(0).stop().css({"display":"block", "opacity":1})
});


//  $(".feature .packpic2 > img").mouseover(function () {
// 	$(this).eq(0).stop().animate(css({"width":"110%"}),500)
// });
//  $(".feature .packpic2 > img").mouseleave(function () {
// 	$(this).eq(0).stop().animate(css({"width":"100%"}),1000)
// });


// $(document).ready(function () {
	
// });


$(".pic img").click(function(){
	var src = $(this).attr("src");
	$(".lg-pic img").css("opacity", 0.7);
	$(".lg-pic img").attr("src", src);
	$(".lg-pic img").stop().animate({"opacity": 1}, 500);
});
/* trigger를 이용하여 eq에서 지정한 순번에 있는 그림으로 큰그림을 나오게 하는 조치 */
// $(".pic img").eq(4).trigger("click");
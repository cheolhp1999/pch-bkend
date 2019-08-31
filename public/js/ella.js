
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



// $(document).ready(function () {
	
// });



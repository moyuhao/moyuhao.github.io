window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
			return window.setTimeout(callback, 1000 / 60);
		};
})();

var can1,
	can2,
	ctx1,
	ctx2,

	canw,
	canh,
	bgpic=new Image(),
	lasttime,
	deltatime;



document.body.onload=game;
function game() {
	init();
	lasttime=Date.now();
	deltatime=0;
	gameloop();
}

function init() {
	can1=document.getElementById('canvas1');
	ctx1=can1.getContext('2d');
	can2=document.getElementById('canvas2');
	ctx2=can2.getContext('2d');
	bgpic.src='picture/fishsrc/background.jpg';
	ane=new aneObj();
	ane.init();
	canw=can1.width;
	canh=can1.height;
}

function gameloop() {
	window.requestAnimFrame(gameloop);
	var now=Date.now();
	deltatime=now-lasttime;
	lasttime=now;

	drawbg();
	ane.draw();
}
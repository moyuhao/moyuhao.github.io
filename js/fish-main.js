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
	ane,
	fruit,
	mom,
	baby,
	mx,
	my,
	anetime,
	score,

	babyTail=[],
	momTail=[],

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
	anetime=0;
	canw=can1.width;
	canh=can1.height;
	mx=canw/2;
	my=canh/2;
	can1.addEventListener('mousemove',onMouseMove,false);

	bgpic.src='picture/fishsrc/background.jpg';
	mom=new momObj();
	mom.init();
	ane=new aneObj();
	ane.init();
	fruit=new fruitObj();
	fruit.init();
	baby=new babyObj();
	baby.init();
	score=new scoreObj();
	score.init();
	for (var i = 0; i < 2; i++) {
		
	}

}

function gameloop() {
	window.requestAnimFrame(gameloop);
	var now=Date.now();
	deltatime=now-lasttime;
	lasttime=now;
	anetime+=deltatime/4000*Math.PI;
	if (deltatime>40) {
		deltatime=40;
	}

	drawbg();
	ane.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0,0,canw,canh);
	mom.draw();
	baby.draw();
	score.draw();
	momFruit();

}

function onMouseMove(e) {
	if (e.offSetX||e.layerX) {
		mx=e.offSetX==undefined?e.layerX:e.offSetX;
		my=e.offSetY==undefined?e.layerY:e.offSetY;
	}
}
var can1=document.getElementById('can1'),
	ctx1=can1.getContext('2d'),
	canW=can1.width,
	canH=can1.height,
	btn1=document.getElementById('btn1'),
	scr=document.getElementById('scr'),
	touu=document.getElementById('up'),
	toul=document.getElementById('left'),
	tour=document.getElementById('right'),
	toud=document.getElementById('down'),
	timer,
	test1=new Image(),
	xk,
	yk,
	score,
	snake;

document.body.onload=game;
function game(){
	init();
}

function init() {
	canin();
	snake=new snaObj();
	snake.init();
	snake.draw();
	xk=1;
	yk=0;
	score=0;
	fruit=new fruitObj();
	fruit.init();
	fruit.draw();

	test1.src='picture/fishsrc/fruit.png';
}

btn1.onclick=function () {
	init();
	clearInterval(timer);
	timer=setInterval(gameloop,160);
	btn1.disabled=true;
}

function gameloop() {
	var nextx=snake.x[snake.x.length-1]+xk*10,
		nexty=snake.y[snake.y.length-1]+yk*10,
		res=gamejudge(nextx,nexty);
	switch (res){
		case 1:
		initdraw(snake.x[0],snake.y[0],'#fff');
		snake.x.shift();
		snake.x.push(nextx);
		snake.y.shift();
		snake.y.push(nexty);
		break;
		case 2:
		clearInterval(timer);
		alert('game over');
		btn1.disabled=false;
		break;
		case 3:
		score++;
		snake.num++;
		snake.x.push(nextx);
		snake.y.push(nexty);
		initdraw(fruit.x,fruit.y,'#000');
		ranfruit();
		break;
	}
	snake.draw();
	fruit.draw();
	scr.innerHTML=score;
}

function gamejudge(nextx,nexty) {
	var res=1;
	if (nextx>290||nextx<0||nexty>140||nexty<0) {
		res=2;
	} else if (bite(nextx,nexty)) {
		res=2;
	} else if (nextx==fruit.x&&nexty==fruit.y) {
		res=3;
	}
	return res;
}

function bite(nextx,nexty) {
	var res1=0;
	for (var i = snake.x.length - 1; i >= 0; i--) {
		if (snake.x[i]==nextx&&snake.y[i]==nexty){
			res1=1;
			break;
		}
	}
	if (res1>0) {
		return true;
	} else {
		return false;
	}
}

function ranfruit() {
	fruit.x=Math.floor(Math.random()*30)*10;
	fruit.y=Math.floor(Math.random()*15)*10;
	var res2=0;
	for (var i = snake.x.length - 1; i >= 0; i--) {
		if (snake.x[i]==fruit.x&&snake.y[i]==fruit.y) {
			res2=1;
			break;
		}
	}
	if (res2!=0) {
		ranfruit();
	}
}

function initdraw(x,y,c) {
	ctx1.save();
	ctx1.lineWidth=10;
	ctx1.strokeStyle=c;
	ctx1.beginPath();
	ctx1.moveTo(x,y+5);
	ctx1.lineTo(x+10,y+5);
	ctx1.stroke();
	ctx1.restore();
}

document.onkeydown=function () {
	var key=event.keyCode;
	switch (key){
		case 37:
		if (xk!=1&&yk!=0) {
			xk=-1;
			yk=0;
		}
		break;
		case 38:
		if (xk!=0&&yk!=1) {
			xk=0;
			yk=-1;
		}
		break;
		case 39:
		if (xk!=-1&&yk!=0) {
			xk=1;
			yk=0;
		}
		break;
		case 40:
		if (xk!=0&&yk!=-1) {
			xk=0;
			yk=1;
		}
		break;
	}
}

function canin() {
	ctx1.save();
	ctx1.lineWidth=1000;
	ctx1.strokeStyle='#fff';
	ctx1.beginPath();
	ctx1.moveTo(0,0);
	ctx1.lineTo(600,0);
	ctx1.stroke();
	ctx1.restore();
}

touu.onmousedown=function () {
	tou(38);
}
tour.onmousedown=function () {
	tou(39);
}
toud.onmousedown=function () {
	tou(40);
}
toul.onmousedown=function () {
	tou(37);
}


function tou(key) {
	switch (key){
		case 37:
		if (xk!=1&&yk!=0) {
			xk=-1;
			yk=0;
		}
		break;
		case 38:
		if (xk!=0&&yk!=1) {
			xk=0;
			yk=-1;
		}
		break;
		case 39:
		if (xk!=-1&&yk!=0) {
			xk=1;
			yk=0;
		}
		break;
		case 40:
		if (xk!=0&&yk!=-1) {
			xk=0;
			yk=1;
		}
		break;
	}
}
